# 777 Knowledge Stream — Site statique (Next.js)

**⚠️ Important (propriété intellectuelle & conformité)**
Le fichier FCOM 777 que vous avez partagé indique qu'il s'agit d'un document **propriétaire Boeing** et **soumis aux réglementations d'exportation (EAR)**. 
Ne republiez pas de contenu protégé sans droit ou autorisation explicite. Utilisez ce site pour publier **vos propres textes originaux** (par ex. synthèses, notes personnelles, explications générales) et des **médias libres de droits**.

## Fonctionnement
- Déposez vos brouillons dans `content/drafts/` au format Markdown (`.md` ou `.mdx`).
- Toutes les **5 heures**, un workflow GitHub Actions :
  1) Déplace **un** brouillon vers `content/posts/` en ajoutant la date,
  2) Construit le site et le **déploie sur GitHub Pages**.

## Démarrage rapide sur Mac
```bash
# 1) Installer Node LTS (>=18) si besoin
# 2) Installer les deps
npm ci

# 3) Lancer en local
npm run dev
# puis ouvrez http://localhost:3000
```

## Déploiement GitHub Pages
1. Poussez ce dossier dans un nouveau dépôt GitHub.
2. Dans **Settings → Pages**, choisissez **Build and deployment: GitHub Actions**.
3. Assurez-vous que dans **Settings → Actions → General → Workflow permissions**, 
   `Read and write permissions` est activé.
4. Le workflow `.github/workflows/schedule-and-deploy.yml` est déjà prêt.

## Ajouter un brouillon
Créez un fichier `content/drafts/mon-sujet.md` avec une en-tête *front‑matter* :
```md
---
title: "Titre court"
excerpt: "Résumé en 1-2 phrases."
coverImage: "/media/couverture.jpg"  # (optionnel)
---

Votre texte **original** ici. Vous pouvez intégrer une image :

![Une légende](/media/photo1.jpg)

… ou une vidéo YouTube via un simple embed HTML :

<div class="video-container">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" 
    title="YouTube video" frameborder="0" allow="accelerometer; autoplay; 
    clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
  </iframe>
</div>
```

> Le workflow publie un **brouillon à la fois** toutes les 5 heures, en respectant l'ordre alphabétique des fichiers.

## Couleurs & style
- Violet/Bleu avec gradient, *glassmorphism*, typographie Inter.
- Composants simples et responsive.

## Licences médias
- Préférez des images **libres de droits** (Unsplash, Pexels, Wikimedia Commons) et citez vos sources.
- Pour les vidéos, utilisez vos propres vidéos ou **embeds** YouTube/Vimeo.

---
