@echo off
cd /d C:\segundomodulo

echo Status do Git:
git status
pause

echo Adicionando arquivos...
git add .

echo Criando commit...
git commit -m "minhas alterações"

echo Enviando para o GitHub...
git push

echo Operação concluída!
pause
