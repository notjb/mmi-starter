# MMI2 Starter

> Une base de travail pour lancer son prochain projet front.
Réalisé pour les cours de WEB3.

## Tooling
Ce projet propose une implémentation des librairies vues en cours magistral. 
Il utilise les packages suivantes:

- ViteJS
- SASS
- Stylelint
- EsLint (@todo à documenter)

## Prerequis
- Installer node sur sa machine
- Avoir **vscode**
- Ajouter le plugin [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) à **vscode**
- Ajouter le plugin [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) à **vscode**
- Dans les préférences de **vscode** (json), ajouter les lignes suivantes : 
```json
  "less.validate": false,
  "scss.validate": false,
  "css.validate": false,
  "stylelint.validate": [
    "css",
    "scss"
  ],
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
```
- 


## Installation

- `git clone url`
- Renomer le dossier celon vos besoins
- Ouvrir le dossier dans **vscode**
- Mettre à jour `name` dans le fichier `package.json`
- Lancer la commande `npm install`

## Utilisation

### Lancer le serveur de dev
- Dans **vscode**, ouvrir la fenêtre de terminal (Terminal > Nouveau terminal)
- Lancer la commande `npm run dev`

### Validation du scss

Le scss est automatiquement corrigé suivant certaines règles.
Cepdendant, il peut arriver que fix automatique ne soit pas possbile. À ce moment, une erreur server afficher des erreurs en terminal et en front, il faudra les corriger.

Se référer à la documentation stylelint pour obtenir des exemples de résolution : https://stylelint.io/user-guide/rules/list/

### Comment stocker mes assets

Pour ajouter du css/scss : 
- Ajouter les fichiers dans le dossier css
- Faire les imports nécessaires dans `src/app.scss`

Pour ajouter des images : 
- Utiliser les dossiers `public/img` et `public/svg`
- Pour les appeler dans `index.html`, procéder comme suit:  `<img src="/img/nom-du-fichier.jpg">`.

## Générer le site pour la production

- Dans **vscode**, si ce n'est pas déjà fait, ouvrir la fenêtre de terminal (Terminal > Nouveau terminal)
- Lancer la commande `npm run build`
- Le dossier `/dist` comporte le site prêt à être mis en ligne 🎉
