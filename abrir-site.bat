@echo off
REM Abre o FluentDaily em http://localhost:8770
REM (o microfone do speaking so funciona bem em localhost, nao em file://)
cd /d "%~dp0"
start "" http://localhost:8770
python tools\server.py 8770
