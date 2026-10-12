# Clics et glissement

Les cartes restent en place après un clic : seule leur sélection est mise à jour. Les filtres Sélectionnés / Non sélectionnés continuent de retirer les cartes qui ne correspondent plus, avec transfert du focus clavier.
Les images ne sont plus déplaçables. Les éléments visuels à l’intérieur d’une carte laissent celle-ci recevoir les clics. Le déplacement visuel du bouton pendant l’appui est supprimé.

Validation : 23 tests de régression et 9 vérifications dans un vrai DOM Electron isolé (dont 30 clics répétés sur une image, identité des éléments conservée, dragstart annulé, clic sur le nom, filtres et focus).
