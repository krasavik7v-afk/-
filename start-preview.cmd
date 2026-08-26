@echo off
cd /d "%~dp0"
set NPM_CONFIG_OFFLINE=false
set NPM_CONFIG_PROXY=
set NPM_CONFIG_HTTPS_PROXY=
set HTTP_PROXY=
set HTTPS_PROXY=
npm.cmd run dev -- --host 127.0.0.1 --port 5173
