FROM python:3.13-slim

WORKDIR /backend

# Install system dependencies if needed (optional)
RUN apt-get update && apt-get install -y build-essential && rm -rf /var/lib/apt/lists/*

# Copy only requirements first for cache efficiency
COPY backend/pyproject.toml backend/uv.lock ./

# Install uv
RUN pip install --no-cache-dir uv

# Install Python dependencies
RUN uv pip install --system --no-cache-dir .

# Copy backend code
COPY backend ./backend

EXPOSE 8000

CMD ["uvicorn", "app.api:app", "--host", "0.0.0.0", "--port", "8000"]
