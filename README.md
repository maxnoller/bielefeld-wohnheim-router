# Bielefeld Wohnheim Router Setup
In den Wohnheimen in Bielefeld gibts nur komisches internet und da wir alle keine große Firma sind können wir uns keine teuren Cisco router kaufen, daher hier ein guide wie man mit minimalen Terminal Kentnissen einen billigen Router (am besten TP-Link damit hab ichs am meisten getestet) mit OpenWRT flashen kann.

Falls es Fragen oder Probleme gibt erstellt ein Issue dann werde ich antworten.

**ICH ÜBERNEHME KEINE VERANTWORTUNG FÜR IRGENDWAS, WAS PASSIERT WENN JEMAND DAS MIT DIESEM GUIDE VERSUCHT**

## Hardware
Theoretisch geht das mit jedem Router der OpenWRT laufen lassen kann. Am besten ein modernerer Router. Ich hab das bisher nur mit TP-Link Routern vorallem dem Archer C50 und Archer C60 getestet.

## OpenWRT Firmware
Es gibt da so eine Tolle website: https://firmware-selector.openwrt.org/  
Da das Router Modell eingeben und dann sicherstellen das die folgenden Packages mit installiert werden:
- Luci
- (??WPAD irgendwas??)

### Installation
Einfach den Router Namen mit dem wort OpenWRT dahinter googeln, es gibt zu fast jedem Kompatiblen Router eine OpenWRT Wiki Seite auf der eine Installationsanleitung steht.

### Firmware Besonderheiten:
Archer C50 v6: Der Router ist noch nicht offiziel unterstützt aber hier hat ein netter Forum Nutzer eine Firmware erstellt: https://www.dropbox.com/sh/hwhqt6vsoh96m4m/AAAYx8MgKsOdeA9GTSkyZ-YTa?dl=0

# Konfiguration
Für QOL empfehle ich drei Dinge:
## 1. Config File für wpa_supplicant
Beispiel Config File ist im git, da bitte die Benutzerdaten eintragen. Danach mit SCP hochladen zu /etc/config/ hochladen.
## 2. Service file
Auch im Git vorhanden. Hochladen unter /etc/init.d/.
## 3. Always Online Script
Die netten Menschen vom BITS hassen uns und disconnecten uns alle x Stunden (Alles spaß die haben unser Internet nach Jahren endlich auf nicht-gottlose level geupgraded wir sind homies).  
Deswegen brauchen wir leider ein Script was immer wieder checkt ob wir noch Online sind. Das Script bitte unter //TODO LOCATION hochladen.  
Danach brauchen wir noch einen Cronjob der das Script alle 2-3 Min laufen lässt  
