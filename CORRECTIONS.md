# Version corrigée du projet 1.4.1

Cette archive contient le code source corrigé. Le numéro 1.4.1 est conservé ; aucune publication GitHub ni mise à jour automatique n'a été déclenchée.

## Corrections

- Portée des fonctions du tray rétablie, gestion de fermeture unifiée et respect du réglage « Minimize to tray ». Sans tray, fermer l'application principale revient au launcher. Une panne de création du tray ne masque plus la fenêtre.
- Activation/désactivation du tray appliquée immédiatement.
- Options chargées avant leur utilisation, sans sauvegarder le formulaire vide au démarrage.
- Historique restauré avant d'autoriser un tirage et conservé lors des nouveaux tirages.
- Thème, volume, webhook et historique utilisent la même source de réglages ; import unique des anciennes options locales.
- Réinitialisation propagée à l'interface ; le marqueur de migration empêche la réimportation d'anciennes préférences après un reset.
- Volume appliqué à tous les effets sonores, y compris au clic sur le logo.
- Changement de mode bloqué pendant le tirage ; catégorie du tirage capturée avant l'animation.
- Sélection « Aucun » conservée et nombre de résultats normalisé en entier.
- Suppression du double gestionnaire d'effacement de l'historique : annuler la confirmation conserve les données.
- Thème du launcher synchronisé avec les réglages partagés.
- Structure HTML des options et déclaration CSS de l'animation corrigées.
- Fichier package-lock.json régénéré avec les dépendances manquantes.

## Utilisation

Après extraction, ouvrir un terminal dans le dossier contenant package.json :

```powershell
npm ci
npm test
npm run dev
```

Pour générer un installateur local sans publier sur GitHub :

```powershell
npm run dist -- --publish never
```

## Vérifications

16 tests de régression avec simulations d'Electron, du DOM et du stockage ; un tirage animé complet est exécuté. Syntaxe des cinq scripts JavaScript vérifiée. Validation du lockfile par `npm ci --dry-run --ignore-scripts` réussie.

L'application Electron n'a pas été lancée visuellement et aucun installateur Windows n'a été compilé. Aucun message Discord envoyé et aucune mise à jour publiée. Les données déjà écrasées par l'ancienne version ne peuvent pas être récupérées par ces corrections.
