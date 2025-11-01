@echo off
setlocal enabledelayedexpansion

:: ============================
:: Sync/Commit/Push automátic@o
:: ============================

:: 1) Pré-checagens
where git >nul 2>&1
if errorlevel 1 (
  echo [ERRO] Git nao encontrado no PATH. Instale o Git ou abra o Git Bash/CMD com Git.
  exit /b 1
)

git rev-parse --is-inside-work-tree >nul 2>&1
if errorlevel 1 (
  echo [ERRO] Este diretorio nao parece ser um repositorio Git.
  exit /b 1
)

:: 2) Config (opcional) para evitar acentos "esquisitos"
git config i18n.commitEncoding utf-8 >nul 2>&1
git config core.quotepath false >nul 2>&1

:: 3) Descobrir branch atual
for /f "delims=" %%b in ('git rev-parse --abbrev-ref HEAD') do set BRANCH=%%b
echo [INFO] Branch atual: %BRANCH%

:: 4) Mensagem de commit (parametros viram a mensagem)
set MSG=%*
if "%MSG%"=="" (
  set MSG=Auto-commit %DATE% %TIME%
)

:: 5) Guardar alteracoes locais antes de atualizar o branch
echo [PASSO] Salvando alteracoes locais no stash...
git stash push -u -m "auto-stash %DATE% %TIME%" >nul 2>&1

:: 6) Atualizar branch remoto (fast-forward quando possivel)
echo [PASSO] Atualizando %BRANCH% com rebase...
git fetch --all --prune
if errorlevel 1 goto :err

git pull --rebase origin %BRANCH%
if errorlevel 1 goto :err

:: 7) Reaplicar alteracoes do stash
echo [PASSO] Reaplicando alteracoes (stash pop)...
git stash pop
if errorlevel 1 (
  echo.
  echo [ATENCAO] Houve conflitos ao reaplicar o stash.
  echo           Resolva os conflitos indicados pelo Git, depois:
  echo             ^> git add <arquivos>
  echo             ^> git rebase --continue   (se o conflito vier do rebase)
  echo           ou ^> git commit             (se vier apenas do stash)
  echo           e entao rode este .BAT novamente.
  exit /b 1
)

:: 8) Adicionar tudo (novos, alterados e deletados)
echo [PASSO] Adicionando alteracoes...
git add -A
if errorlevel 1 goto :err

:: 9) Verificar se ha algo para commitar
git diff --cached --quiet
if %errorlevel%==0 (
  echo [INFO] Nao ha alteracoes para commit. Conferindo se ha algo para enviar...
) else (
  echo [PASSO] Fazendo commit: "%MSG%"
  git commit -m "%MSG%"
  if errorlevel 1 goto :err
)

:: 10) Enviar para o remoto (configura upstream se preciso)
echo [PASSO] Enviando para origin/%BRANCH%...
git rev-parse --symbolic-full-name --abbrev-ref @{u} >nul 2>&1
if errorlevel 1 (
  git push -u origin %BRANCH%
) else (
  git push origin %BRANCH%
)
if errorlevel 1 goto :err

echo.
echo ✅ [SUCESSO] Sincronizacao concluida no branch %BRANCH%.
exit /b 0

:err
echo.
echo ❌ [ERRO] Ocorreu um problema. Veja as mensagens acima.
exit /b 1
