# Démarrage direct

Le randomizer s’ouvre directement sur app.html. Le dernier onglet, les sélections, les réglages et l’historique utilisent les mêmes sauvegardes.
Le logo ne renvoie plus à un menu. Le menu de notification propose Ouvrir OSRS Randomizer et Quitter.
Avec Minimize to tray activé, fermer masque l’application. Sans cette option, fermer quitte l’application sous Windows.
Les anciens fichiers du launcher ne sont plus distribués dans cette archive ni dans la configuration de compilation.
20 tests de régression réussis ; ouverture directe vérifiée dans Electron. Aucun installateur compilé.

Lancement : npm ci puis npm run dev. Tests : npm test.
