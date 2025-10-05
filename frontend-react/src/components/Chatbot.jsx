import { useState, useRef, useEffect } from "react";

const Chatbot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your space research assistant for L.I.F.T. I can help you explore topics like microgravity effects, radiation studies, plant biology in space, and recent space research findings. What would you like to know?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      // Replace with your Python backend endpoint
      const response = await fetch("http://localhost:8000/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: inputMessage }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response from AI");
      }

      const data = await response.json();

      const aiMessage = {
        id: messages.length + 2,
        text: data.response,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage = {
        id: messages.length + 2,
        text: "Sorry, I'm having trouble connecting to the AI service. Please try again later.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "What is microgravity?",
    "Tell me about recent space research",
    "How does radiation affect astronauts?",
    "What is plant biology in space?",
  ];

  if (!isOpen) return null;

  return (
    <div
      className="fixed top-0 right-0 w-96 h-full z-30 bg-gray-900 border-l border-blue-500/30 flex flex-col shadow-2xl"
      style={{ height: "calc(100vh - 80px)", top: "80px" }}
    >
      {/* Header - Connected to the toggle button */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 flex justify-between items-center border-b border-blue-500/30">
        <div>
          <h3 className="text-white font-bold text-lg">
            Space Research Assistant
          </h3>
          {/* <p className="text-blue-100 text-sm">Powered by Gemini AI</p> */}
        </div>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-200 transition-colors p-2 rounded-lg hover:bg-white/10"
        >
          {" "}
        </button>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-900">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.isUser ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                message.isUser
                  ? "bg-blue-600 text-white rounded-br-none"
                  : "bg-gray-800 text-white rounded-bl-none border border-gray-700"
              }`}
            >
              <p className="text-sm leading-relaxed">{message.text}</p>
              <p className="text-xs opacity-70 mt-2 text-right">
                {message.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-800 text-white rounded-2xl rounded-bl-none px-4 py-3 border border-gray-700">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Quick Questions */}
        {messages.length === 1 && !isLoading && (
          <div className="space-y-2 mt-4">
            <p className="text-xs text-gray-400 text-center">Try asking:</p>
            <div className="grid grid-cols-1 gap-2">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => setInputMessage(question)}
                  className="text-left text-sm bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-xl px-3 py-2 transition-colors border border-gray-700"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-700 p-4 bg-gray-900">
        <div className="flex space-x-3">
          <div className="flex-1 relative">
            <textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about space, research..."
              className="w-full bg-gray-800 text-white rounded-xl px-4 py-3 pr-12 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm placeholder-gray-400 border border-gray-700"
              rows="1"
              style={{ minHeight: "50px", maxHeight: "120px" }}
            />
          </div>
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isLoading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-xl px-4 py-3 transition-colors flex items-center justify-center min-w-[50px]"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-2 text-center">
          Ask me anything about space research and discoveries
        </p>
      </div>
    </div>
  );
};

export default Chatbot;
