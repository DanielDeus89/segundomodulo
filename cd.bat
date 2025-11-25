@echo off


echo ============================
echo Status do Git:
echo ============================
git status
echo.

timeout /t 5 >nul

echo Adicionando arquivos...
git add .

echo Criando commit...
git commit -m "minhas alterações"

echo Enviando para o GitHub...
git push

echo.
echo Operação concluída!
pause
