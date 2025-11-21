@echo off
echo Starting Sea Waves Website System...
echo.

echo Step 1: Setting up backend server...
cd backend
start "Backend Server" cmd /k "node server.js"
timeout /t 3 /nobreak > nul

echo Step 2: Setting up frontend...
cd ..
start "Frontend Server" cmd /k "npm start"

echo.
echo Both servers are starting...
echo Backend: http://localhost:5000
echo Frontend: http://localhost:3001
echo.
echo Make sure you have set EMAIL_PASS environment variable!
echo Check EMAIL_SETUP_INSTRUCTIONS.md for details.
echo.
pause
