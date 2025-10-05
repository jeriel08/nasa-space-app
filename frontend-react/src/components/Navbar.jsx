import logo from "../assets/logo text.png";

export default function Navbar() {
  return (
    <nav class="text-white sticky bg-black top-0 z-50 px-8">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="index.html" class="flex items-center space-x-2">
            <img src={logo} alt="L.I.F.T Logo" class="w-25 object-contain" />
          </a>

          {/* Desktop Menu */}
          <div class="hidden md:flex space-x-1">
            <a
              href="/"
              class="px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center"
            >
              Home
            </a>
            <a
              href="#"
              class="px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center"
            >
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
