# MMI2 Starter

> Une base de travail pour lancer son prochain projet front.
> Réalisé pour les cours de WEB3.

## Tooling

Ce projet propose une implémentation des librairies vues en cours magistral.
Il utilise les packages suivantes:

- ViteJS
- SASS
- Stylelint
- EsLint

## Prerequis

- Installer nodeJS sur sa machine
- Avoir **vscode**
- Ajouter le plugin [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) à **vscode**
- Ajouter le plugin [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) à **vscode**
- Ajouter le plugin [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) à **vscode**
- Ajouter le plugin [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) à **vscode**

Ces éléments sont ensuite configurés par le fichier de config local `.vscode/settings.json`

## Installation

- Dans le terminal lancer la commande `git clone https://github.com/notjb/mmi-starter.git <NOM DU PROJET>`
- Ouvrir le dossier dans **vscode**: `cd <NOM DU PROJET> && code .`
- Supprimer le dosier git: `rm -rf .git`
- Lancer la commande `npm install`
- **Optionnel :** Mettre à jour `name` dans le fichier `package.json`
- **optionnel :** Initialiser git avec la commadne `git init`

## Utilisation

### Lancer le serveur de dev

- Dans **vscode**, ouvrir la fenêtre de terminal (Terminal > Nouveau terminal)
- Lancer la commande `npm run dev`

### Validation du scss

Le scss est automatiquement corrigé suivant certaines règles.
Cepdendant, il peut arriver qu'un fix automatique ne soit pas possbile. À ce moment, une erreur server affichera les erreurs en terminal et en front, il faudra les corriger.

Se référer à la documentation stylelint pour obtenir des exemples de résolution : https://stylelint.io/user-guide/rules/list/

### Comment stocker mes assets

Pour ajouter du css/scss :

- Ajouter les fichiers dans le dossier css
- Faire les imports nécessaires dans `src/app.scss`

Pour ajouter des images :

- Utiliser les dossiers `public/img` et `public/svg`
- Pour les appeler dans `index.html`, procéder comme suit: `<img src="/img/nom-du-fichier.jpg">`.

## Générer le site pour la production

- Dans **vscode**, si ce n'est pas déjà fait, ouvrir la fenêtre de terminal (Terminal > Nouveau terminal)
- Lancer la commande `npm run build`
- Lancer `npm run preview` pour prévisualiser le site en local
- Le dossier `/dist` comporte le site prêt à être mis en ligne 🎉
