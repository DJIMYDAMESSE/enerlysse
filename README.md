# Site web ENERLYSSE

Site vitrine statique (HTML / CSS / JavaScript, sans dépendance ni CMS).
Il suffit de déposer le contenu du dossier chez n'importe quel hébergeur (OVH, o2switch, Netlify, Hostinger…).

## Arborescence

```
index.html               Accueil (qui sommes-nous, vidéo, démarche, atouts, aides, zone, contact)
pompes-a-chaleur.html    Expertise : pompes à chaleur air-eau
climatisation.html       Expertise : climatisation (murale, cassette, gainable)
destratification.html    Expertise : déstratification de l'air
cee-aides.html           Expertise : CEE & aides financières
qualipac.html            Onglet QualiPAC (certification RGE)
realisations.html        Réalisations avec filtres
contact.html             Coordonnées, formulaire, plan
mentions-legales.html    Mentions légales et RGPD
assets/css/style.css     Styles (couleurs de la plaquette en haut du fichier)
assets/js/main.js        Menu mobile, sous-menu, vidéo, filtres, formulaire
assets/img/              Logo SVG, favicon, photos
assets/video/            Vidéo de présentation à déposer
```

## Notes manuscrites → ce qui a été fait

| Demande | Réalisé |
|---|---|
| Supprimer « Estimer mon projet » | Absent du menu et des boutons |
| Supprimer « Prendre RDV » | Absent ; remplacé par « Nous contacter » et le téléphone |
| Ajouter QualiPAC (onglet repris d'ES Chauffage) | Onglet `qualipac.html` + badge sur l'accueil et les pages aides |
| Intégrer l'onglet climatisation (ES Chauffage) | `climatisation.html` : murale, cassette, gainable |
| Supprimer l'onglet « Adar Solutions » | Absent |
| Supprimer le blog | Absent |
| Supprimer l'onglet « Devis » | Absent (la demande passe par la page Contact) |
| Vidéo Adar à personnaliser Enerlysse | Bloc vidéo sur l'accueil, prêt à recevoir la vidéo Enerlysse |
| Expertises pompe à chaleur + climatisation (ES Chauffage) | Pages dédiées, textes rédigés pour Enerlysse |

## À compléter avant la mise en ligne

1. **Vidéo** : déposer `assets/video/enerlysse-presentation.mp4` (ou remplacer le bloc par un iframe YouTube dans `index.html`).
2. **QualiPAC** : numéro et date de validité dans `qualipac.html` ; remplacer le badge générique par le logo officiel fourni par Qualit'EnR. N'affichez la mention que si la qualification est active.
3. **Mentions légales** : SIRET, forme juridique, hébergeur, assurance décennale (champs entre crochets).
4. **Formulaire** : créer un formulaire gratuit sur formspree.io et remplacer `VOTRE_ID` dans `contact.html`. Sans cela, le formulaire ouvre la messagerie du visiteur.
5. **Photos** : les images actuelles sont extraites de la plaquette (basse résolution). Remplacez-les par des photos HD de vos chantiers en gardant les mêmes noms de fichiers.
6. **Réalisations** : remplacer les exemples par vos vrais chantiers (photo, titre, lieu).
7. **Horaires** du téléphone sur la page Contact.

## Modifier les couleurs

Tout est en haut de `assets/css/style.css` :
`--navy` (bleu marine), `--green` (vert feuille), `--blue`, etc.
