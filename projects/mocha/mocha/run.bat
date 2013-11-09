@ECHO OFF

IF EXIST ".\node_modules" (
 npm run-script test
) ELSE (
 ECHO "file "mocha" does not exist, please run the command: npm install"
)