@echo off
echo Sea Waves Website Deployment Helper
echo ===================================
echo.

echo Step 1: Preparing for deployment...
echo.

echo Creating .env file for production...
echo REACT_APP_API_URL=https://your-backend-url.railway.app > .env
echo.

echo Step 2: Building the frontend...
call npm run build
echo.

echo Step 3: Deployment options:
echo.
echo 1. Vercel (Frontend) + Railway (Backend)
echo    - Frontend: https://vercel.com
echo    - Backend: https://railway.app
echo.
echo 2. Render (Both)
echo    - All-in-one: https://render.com
echo.
echo 3. Netlify (Frontend) + Railway (Backend)
echo    - Frontend: https://netlify.com
echo    - Backend: https://railway.app
echo.

echo Next steps:
echo 1. Push your code to GitHub
echo 2. Connect to your chosen hosting platform
echo 3. Set environment variables
echo 4. Deploy!
echo.

echo Check DEPLOYMENT_GUIDE.md for detailed instructions.
echo.
pause
