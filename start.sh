#!/bin/bash

# Function to kill processes on exit
cleanup() {
    echo "Stopping servers..."
    kill $(jobs -p) 2>/dev/null
    exit
}

trap cleanup SIGINT SIGTERM

echo "🚀 Setting up the Portfolio Project..."

# Setup Server
echo "📦 Installing Server Dependencies..."
cd server
npm install
if [ $? -ne 0 ]; then
    echo "❌ Server installation failed."
    exit 1
fi

# Setup Client
echo "📦 Installing Client Dependencies..."
cd ../client
npm install
if [ $? -ne 0 ]; then
    echo "❌ Client installation failed."
    exit 1
fi

echo "✅ Dependencies Installed!"

# Start Server
echo "🚀 Starting Backend Server..."
cd ../server
npm run dev &
SERVER_PID=$!

# Start Client
echo "🚀 Starting Frontend Client..."
cd ../client
npm run dev &
CLIENT_PID=$!

echo "🎉 Application is running!"
echo "👉 Frontend: http://localhost:5173"
echo "👉 Backend: http://localhost:5000"

wait $SERVER_PID $CLIENT_PID
