# Essai visuel — Grimoire OSRS

Nouvelle présentation de la page principale, conservant le launcher et les fonctionnalités existantes.

- Panneau de tirage à gauche, qui reste visible au défilement sur ordinateur.
- Résultat illustré en grand, état d'accueil et bouton de tirage mis en avant.
- Historique compact dans la colonne de gauche, avec pagination.
- Catalogue de cartes avec images plus grandes, cases de sélection et badges sur les quatre nouveaux boss.
- Recherche par nom et filtres : tous, sélectionnés, non sélectionnés, nouveaux boss.
- Compteur de sélection ; filtrer l'affichage ne change pas les activités incluses dans le tirage.
- « Tout inclure » et « Aucun » agissent sur toute la catégorie, y compris les cartes masquées par un filtre.
- Cartes utilisables au clavier (Tab, Entrée ou Espace), focus visible, animations limitées si la réduction des mouvements est activée.
- Couleurs brun sombre et or discret, avec variante sombre anthracite dans les réglages.
- Mise en page adaptée aux petites fenêtres ; taille initiale de la fenêtre principale : 1320 × 940.

## Validation

20 tests de régression réussis, dont recherche, filtres combinés, préservation des sélections et tirage animé. Rendu inspecté dans l'application Electron en fenêtre et en plein écran.

## Lancer

Dans le dossier du projet : `npm ci`, puis `npm run dev`. Tests : `npm test`.
Installateur local : `npm run dist -- --publish never` (compilation non vérifiée dans cet essai).

La précédente archive `OSRS-Randomizer-v1.4.1-nouveaux-boss.zip` conserve l'ancien visuel pour comparaison ou retour en arrière.
