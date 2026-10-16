# Spécifications du projet CinéBox

## 1. Présentation du projet

CinéBox est une application web front-end destinée à faciliter la découverte de films. Elle propose une interface simple permettant de parcourir une sélection de films, de rechercher un titre et de consulter les informations associées.

## 2. Objectifs

- Créer une interface moderne et agréable.
- Permettre une navigation simple entre les films.
- Mettre en pratique HTML, CSS et JavaScript.
- Adapter l'affichage aux différentes tailles d'écran.

## 3. Technologies

- HTML5
- CSS3
- JavaScript natif
- GitHub Pages pour l'hébergement

## 4. Fonctionnalités principales

### 4.1. Galerie de films

Le site affiche plusieurs films sous forme de cartes contenant notamment leur affiche, leur titre et des informations complémentaires.

### 4.2. Recherche

L'utilisateur peut saisir le titre d'un film dans un champ de recherche. La galerie se met à jour pour afficher les résultats correspondants.

### 4.3. Filtrage par genre

L'utilisateur peut sélectionner un genre pour limiter les films affichés aux catégories correspondantes.

### 4.4. Détails d'un film

Lorsqu'un utilisateur sélectionne un film, une fenêtre modale affiche des informations supplémentaires, comme son titre, son année, son genre et son résumé.

### 4.5. Gestion des résultats vides

Lorsqu'aucun film ne correspond à la recherche ou au filtre choisi, un message informe l'utilisateur.

### 4.6. Design responsive

L'interface doit rester lisible et fonctionnelle sur ordinateur, tablette et téléphone.

## 5. Contraintes techniques

- Utiliser HTML5 pour la structure.
- Utiliser CSS3 pour le style et l'adaptation aux écrans.
- Utiliser JavaScript natif pour les interactions.
- Ne pas nécessiter de framework JavaScript.
- Héberger le site sur GitHub Pages.
- Conserver les fichiers principaux à la racine du dépôt.

## 6. Organisation des fichiers

- `index.html` : structure de la page.
- `style.css` : styles et mise en page.
- `script.js` : données des films et interactions.
- `README.md` : présentation et instructions du projet.
- `spec.md` : spécifications fonctionnelles et techniques.

## 7. Critères de validation

Le projet est considéré comme fonctionnel lorsque :

- La page d'accueil s'affiche correctement.
- Les cartes de films sont visibles.
- La recherche filtre les films.
- Les filtres par genre fonctionnent.
- La fenêtre des détails s'ouvre et se ferme correctement.
- Un message apparaît lorsque la recherche ne retourne aucun résultat.
- L'interface s'adapte aux différentes tailles d'écran.
- Le site est accessible depuis son URL GitHub Pages.

## 8. Évolutions possibles

- Intégrer une API spécialisée dans les films.
- Ajouter une fonctionnalité de favoris.
- Ajouter un système de notation.
- Améliorer les options de tri et de filtrage.