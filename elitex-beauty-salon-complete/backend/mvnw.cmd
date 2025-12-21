@REM ----------------------------------------------------------------------------
@REM Maven Start Up Batch script
@REM
@REM Required ENV vars:
@REM JAVA_HOME - location of a JRE/JDK
@REM
@REM Optional ENV vars
@REM MAVEN_OPTS - parameters passed to the Java VM when running Maven
@REM MAVEN_SKIP_RC - flag to disable loading of mavenrc files
@REM ----------------------------------------------------------------------------

@echo off

setlocal

@REM set %MAVEN_HOME% to equivalent of $M2_HOME
if "%MAVEN_HOME%" == "" (for %%i in (mvn.cmd) do set "MAVEN_HOME=%%~dp$PATH:i\..")

@REM Extract file name without path and .cmd extension
set cmd_name=%~n0

if "%cmd_name%"=="mvnw" goto initArgs
if "%cmd_name%"=="mvnw.cmd" goto initArgs
goto initArgs

:initArgs
@REM Calling this script from wrapper as first argument may pass the rootdir as
@REM the first and only argument to this script.
if "%1"=="" goto endInit

@setlocal

cd /d "%1"
exit /b %errorlevel%

:endInit

@REM Runs Maven wrapper jar
"%JAVA_HOME%\bin\java.exe" %MAVEN_OPTS% -classpath "%~dp0\.mvn\wrapper\maven-wrapper.jar" "-Dmaven.multiModuleProjectDirectory=%CD%" org.apache.maven.wrapper.MavenWrapperMain %*

endlocal & exit /b %errorlevel%
