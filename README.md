<p align="center">
  <img src="https://raw.githubusercontent.com/MarcanQc/OSRS-Randomizer-Logo/main/logo.png" width="220" alt="OSRS Randomizer Logo" />
</p>

# OSRS Randomizer

🇬🇧 **English** | 🇫🇷 **Français**

---

## 🇬🇧 Overview

A clean and simple desktop randomizer for **Old School RuneScape** activities.

- 🎲 Random boss / raid / activity selection  
- 🚀 Opens directly into the randomizer  
- 🌙 Light & Dark themes  
- 🔊 Sound effects and smooth animations  
- 🖥️ Windows desktop app  
- 📦 Offline – no account required  

## 🇫🇷 Aperçu

Une application desktop simple et élégante pour randomiser des activités d’**Old School RuneScape**.

- 🎲 Sélection aléatoire de boss / raids / activités  
- 🚀 Ouverture directe du randomizer  
- 🌙 Thème clair et sombre  
- 🔊 Effets sonores et animations fluides  
- 🖥️ Application Windows  
- 📦 Hors ligne – aucun compte requis  

---

## ⚠️ Disclaimer / Avertissement

Old School RuneScape and OSRS are trademarks of **Jagex Ltd**.  
This project is **not affiliated with, endorsed, sponsored, or approved by Jagex**.

## Version 1.5.0

- Anti-répétition sur les trois derniers tirages de chaque catégorie, avec adaptation aux petites sélections.
- Volumes indépendants pour clics, tirage et résultat, plus volume général.
- Interface classique, sélection plus lisible et images non déplaçables.
- Le bouton X ferme complètement l’application.

### Développement et distribution

`npm ci`, puis `npm test` et `npm run dev`. Pour créer l’installateur Windows : `npm run dist -- --win --publish never`.

Les mises à jour utilisent le dépôt GitHub configuré dans package.json. Elles nécessitent une publication GitHub Release avec les fichiers générés (installateur, blockmap et latest.yml). La construction locale ne publie rien.
