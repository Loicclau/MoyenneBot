
# README - Projet Bot JavaScript pour "Mon Bureau Numérique"

Ce projet GitHub contient un bot JavaScript qui automatise la récupération de la moyenne sur le site "Mon Bureau Numérique" et la stocke dans un fichier texte. Ce guide rapide explique comment utiliser et configurer ce bot.
## Installation et Configuration préalable

1. Assurez-vous d'avoir Node.js installé sur votre système. Vous devez installer la librairie JavaScript Puppeteer. Pour ce faire, utilisez la commande npm suivante :
```bash
npm i puppeteer
```

2. Clonez ce référentiel sur votre machine locale en utilisant la commande suivante :

```bash
git clone https://github.com/Loicclau/MoyenneBot.git
```
3. Accédez au répertoire du projet :

```bash
cd MoyenneBot
```
4. Ouvrez le fichier bot.js dans un éditeur de texte.

# Configuration du bot

Pour que le bot puisse se connecter sur votre compte Mon Bureau Numérique, vous devez fournir votre identifiant et votre mot de passe. Suivez ces étapes pour configurer le bot :

1. Ouvrez le fichier bot.js dans un éditeur de texte.

2. Localisez les lignes suivantes dans le fichier bot.js (Normalement les lignes 19 et 20) :

```javascript
await page.type('#username','yourIdentifier');
await page.type('#password','yourPasswords');  
```
3. Remplacez 'yourIdentifier' par votre identifiant Mon Bureau Numérique et 'yourPasswords' par votre mot de passe.

4. Trouver la ligne suivante dans le fichier bot.js et ajouter le Nom de votre etablisement entre les apostrophes:
```javascript
   }, 'Nom de votre etablisement');
```

6. Enregistrez les modifications dans le fichier bot.js.

# Exécution du bot

-Pour exécuter le bot, vous pouvez utiliser le script batch préconfiguré. Il vous suffit de lancer le script "Moyenne.bat" présent dans le projet en double-cliquant dessus.

Le bot se connectera à "Mon Bureau Numérique", récupérera votre moyenne générale, et la stockera dans le fichier texte nommé Ma-moyenne.txt. 

Ce projet est fait pour les étudiants qui souhaitent suivre régulièrement leur moyenne sans avoir à se connecter manuellement à chaque fois.


### Auteur : Loïcclau
