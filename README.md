# Agathe Polet — Ostéopathe D.O.

Site vitrine d'Agathe Polet, ostéopathe D.O. à Bruxelles. Le site présente son parcours et son approche, explique les différents motifs de consultation et permet de prendre rendez-vous en ligne.

Site public : [osteopathe-bruxelles.com](https://www.osteopathe-bruxelles.com/)

## Objectif du site

Le site accompagne les visiteurs avant leur rendez-vous en leur permettant de :

- découvrir Agathe Polet, sa formation et son expérience ;
- comprendre l'approche ostéopathique et le déroulement d'une consultation ;
- identifier le type de consultation adapté à leur situation ;
- choisir entre les cabinets d'Etterbeek et de Forest ;
- accéder directement à la prise de rendez-vous en ligne.

Le ton et l'interface sont volontairement sobres, chaleureux et éditoriaux, avec une attention portée à la lisibilité sur mobile comme sur ordinateur.

## Pages publiques

| Page | URL | Contenu |
| --- | --- | --- |
| Accueil | `/` | Présentation, expertise, consultations, approche et accès aux cabinets |
| À propos | `/about` | Parcours, diplôme, expérience à l'Hôpital Erasme, enseignement à l'ULB et formations continues |
| Ostéopathie | `/osteopathie` | Principes de l'ostéopathie, déroulement d'une séance et exemples de motifs de consultation |
| Consultations | `/consultations` | Consultations pour adultes, grossesse, post-partum, bébés et enfants |
| Cabinets | `/cabinets` | Adresses, jours de consultation et informations pratiques |
| Mentions légales | `/mentions-legales` | Informations légales du site |
| Politique de confidentialité | `/politique-de-confidentialite` | Informations relatives aux données personnelles et aux cookies |

## Consultations

Le site présente quatre types de prise en charge :

- adultes ;
- grossesse ;
- post-partum ;
- bébés et enfants.

Les exemples de motifs abordés incluent notamment les douleurs de la colonne vertébrale, les douleurs nerveuses, les migraines, les douleurs abdominales, les troubles de l'ATM, les torticolis du nourrisson, les reflux et les difficultés d'allaitement.

Chaque consultation est présentée comme un temps d'échange, d'examen clinique et d'accompagnement adapté à la personne, à son âge et à sa situation.

## Cabinets

Les consultations ont lieu sur rendez-vous dans deux cabinets bruxellois :

- **Etterbeek** — Avenue des Nerviens 111, 1040 Etterbeek, le vendredi ;
- **Forest** — Avenue Everard 7, 1190 Forest, au Centre « Naître et Devenir », les lundi, mercredi et jeudi.

Tous les boutons de rendez-vous renvoient vers la page Doctoranytime d'Agathe Polet : [prendre rendez-vous](https://www.doctoranytime.be/d/osteopathe/polet-agathe).

## Organisation technique

- **Framework** : Remix avec Vite et React/TypeScript ;
- **Styles** : Tailwind CSS, avec une palette sauge, beige et écrue ;
- **Composants partagés** : navigation, pied de page, en-tête, sections de présentation et appels à l'action dans `app/component/` ;
- **Pages** : routes Remix dans `app/routes/` ;
- **Référencement** : métadonnées par page, balises Open Graph, sitemap, robots.txt et données structurées Schema.org ;
- **Images** : ressources statiques dans `public/`.

## Commandes utiles

```bash
npm run dev       # lancer le site en développement
npm run typecheck # vérifier les types TypeScript
npm run lint      # lancer ESLint
npm run build     # générer la version de production
npm start         # servir la version compilée
```

## Points à maintenir

- Garder les informations des deux cabinets et les jours de consultation synchronisés avec la prise de rendez-vous.
- Vérifier les métadonnées SEO lorsqu'une page ou son contenu principal évolue.
- Compléter et valider les informations des pages « Mentions légales » et « Politique de confidentialité » avant la mise en production définitive.
