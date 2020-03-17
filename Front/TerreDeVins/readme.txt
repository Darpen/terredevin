Pour se connecter à l'appli TDV sur son smartphone :

- installer l'application expo sur son smartphone.
- vérifier que votre version de PHP est bien 7.4
- installer ngrok en global "npm ngrok install -g"
- depuis le dossier /Back lancer "php bin/console server:run"
- lancer depuis le terminal "ngrok http localhost:8000" cela doit générer une url du type http://cbscvbsbcvjsbbdc.io
- copier cette url est la coller dans le fichier config.js à la place de celle enregistrée dans la variable APILink
- depuis le dossier /Front/Terredevins lancer "npm start"
- cela doit ouvrir une fenêtre dans votre navigateur, attendez que le tunnel soit "ready"
- depuis l'appli expo de votre téléphone, scannez le QR code en bas à gauche en vous assurant d'avoir sélectionné "Tunnel" et non "LAN" juste au dessus.
- attendez que l'appli charge sur votre smartphone