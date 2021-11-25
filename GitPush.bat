@echo off
set /p comentario="Digite o comentario: "
set sim=s
set nao=n
echo git add .
echo git commit -m "'%comentario%'"
echo git push

set /p resposta="Deseja executar os comandos acima? Sim= s Nao= n : "
if %resposta%==%sim% (
echo Executando comando git add .
git add .
echo .
echo .
echo .
echo Executando comando git commit -m "'%comentario%'" 
git commit -m "'%comentario%'"
echo .
echo .
echo .
echo Executando comando git push
echo .
echo .
echo .
git push
echo .
echo .
echo .
echo Comandos concluidos)
pause
if %resposta%!='s'(echo Tchau)
pause