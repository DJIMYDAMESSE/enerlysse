# Site web ENERLYSSE

Site vitrine statique (HTML / CSS / JavaScript, sans dépendance ni CMS).
Il suffit de déposer le contenu du dossier chez n'importe quel hébergeur (OVH, o2switch, Netlify, Hostinger…).

## Arborescence

```
index.html               Accueil (qui sommes-nous, vidéo, démarche, atouts, aides, zone, contact)
pompes-a-chaleur.html    Expertise : pompes à chaleur air-eau
climatisation.html       Expertise : climatisation (murale, cassette, gainable)
photovoltaique.html      Expertise : photovoltaïque, autoconsommation, batterie
destratification.html    Expertise : déstratification de l'air
cee-aides.html           Expertise : CEE & aides financières
qualipac.html            Onglet QualiPAC (partenaire AD CLIM ET CHAUFFAGE, QPAC/74283)
qualipv.html             Onglet QualiPV (partenaire POLY'TECH, QPV/56852)
realisations.html        Réalisations avec filtres
contact.html             Coordonnées, formulaire, plan
mentions-legales.html    Mentions légales et RGPD
assets/css/style.css     Styles (couleurs de la plaquette en haut du fichier)
assets/js/main.js        Menu mobile, sous-menu, vidéo, filtres, formulaire
assets/img/              Logo SVG, favicon, photos, logos RGE QualiPAC et QualiPV
assets/video/            Vidéo de présentation à déposer
```

## Notes manuscrites → ce qui a été fait

| Demande | Réalisé |
|---|---|
| Supprimer « Estimer mon projet » | Absent du menu et des boutons |
| Supprimer « Prendre RDV » | Absent ; remplacé par « Nous contacter » et le téléphone |
| Ajouter QualiPAC et QualiPV | Onglets `qualipac.html` et `qualipv.html` (partenaires certifiés), logos RGE en haut à gauche |
| Onglet Photovoltaïque (production, autoconsommation, batterie) | `photovoltaique.html` |
| Adresse | 26 rue Bosquet, 75007 Paris |
| Intégrer l'onglet climatisation (ES Chauffage) | `climatisation.html` : murale, cassette, gainable |
| Supprimer l'onglet « Adar Solutions » | Absent |
| Supprimer le blog | Absent |
| Supprimer l'onglet « Devis » | Absent (la demande passe par la page Contact) |
| Vidéo Adar à personnaliser Enerlysse | Bloc vidéo sur l'accueil, prêt à recevoir la vidéo Enerlysse |
| Expertises pompe à chaleur + climatisation (ES Chauffage) | Pages dédiées, textes rédigés pour Enerlysse |

## À compléter avant la mise en ligne

1. **Vidéo** : déposer `assets/video/enerlysse-presentation.mp4` (ou remplacer le bloc par un iframe YouTube dans `index.html`).
2. **Certificats RGE des partenaires** : chaque année, mettre à jour les dates de validité dans `qualipac.html` et `qualipv.html` (certificats de 12 mois). Retirer un logo si le partenaire n'est plus certifié ou si le partenariat s'arrête.
3. **Mentions légales** : SIRET, forme juridique, assurance (champs entre crochets). Hébergeur : GitHub Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, États-Unis.
4. **Formulaire** : créer un formulaire gratuit sur formspree.io et remplacer `VOTRE_ID` dans `contact.html`. Sans cela, le formulaire ouvre la messagerie du visiteur.
5. **Déstratification** : les cartes « Pour quels bâtiments ? » utilisent des icônes (immeuble, clé, maison) dessinées directement dans `destratification.html`.
6. **Climatisation (cassette, gainable)** : les photos sont chargées depuis es-chauffage.fr (`clim-cassette.jpg`, `clim-gainable3_resultat_1.jpg`). Pour ne plus dépendre de ce site, enregistrez-les dans `assets/img/` sous `climatisation-cassette.jpg` et `climatisation-gainable.jpg`, puis remettez ces chemins dans `climatisation.html`. Si le site est indisponible, le dessin `.svg` s'affiche.
7. **Photos** : les images actuelles sont extraites de la plaquette (basse résolution). Remplacez-les par des photos HD de vos chantiers en gardant les mêmes noms de fichiers.
8. **Réalisations** : remplacer les exemples par vos vrais chantiers (photo, titre, lieu).
7. **Horaires** du téléphone sur la page Contact.

## Modifier les couleurs

Tout est en haut de `assets/css/style.css` :
`--navy` (bleu marine), `--green` (vert feuille), `--blue`, etc.

## Mise en ligne (GitHub Pages)

Site : https://djimydamesse.github.io/enerlysse/

Après chaque modification, dans le terminal de VS Code :

```
git add .
git commit -m "Description de la modification"
git push
```
