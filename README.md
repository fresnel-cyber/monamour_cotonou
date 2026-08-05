# Mon Amour — Cotonou

Site vitrine one-page pour le restaurant/café/pâtisserie **Mon Amour** (Camp Guezo, Cotonou). Astro + Tailwind CSS v4, pensé mobile-first pour de bonnes performances sur connexion moyenne.

## Démarrer

```bash
npm install
npm run dev
```

Le site est disponible sur `http://localhost:4321`.

## Modifier le contenu

Tous les textes, coordonnées, horaires et métadonnées SEO sont centralisés dans [src/content.ts](src/content.ts). Aucun composant n'a besoin d'être modifié pour changer un texte, un horaire ou un numéro.

Deux valeurs sont marquées `TODO` dans `content.ts` et doivent être confirmées avant mise en ligne :

- `business.priceRange` — gamme de prix (actuellement `€€` à titre indicatif).
- Coordonnées GPS : non incluses dans le JSON-LD (aucune donnée fournie) — à ajouter dans `Layout.astro` (`geo: { '@type': 'GeoCoordinates', latitude, longitude }`) une fois connues.

## Photos

La plupart des photos sont maintenant de vraies photos du restaurant (recadrées et exportées en `.webp` depuis les visuels fournis), stockées dans `public/assets/photos/` avec des noms descriptifs (`hero-terrasse-cafe-cotonou.webp`, `about-diner-ambiance-bougie.webp`, `galerie-arche-roses-entree.webp`, etc.).

Il reste **un seul placeholder SVG** à remplacer avant mise en ligne :

- `menu-burger-signature.svg` → aucune photo de burger n'était disponible dans les visuels fournis. Le libellé « Photo à remplacer » s'affiche clairement à sa place tant qu'aucune vraie photo n'est ajoutée.

**Pour remplacer une photo (y compris le burger) :**

1. Exporter la vraie photo en `.webp` (idéalement aussi une variante `.avif` pour les navigateurs compatibles) — outils recommandés : [Squoosh](https://squoosh.app) ou `sharp-cli`.
2. Déposer le fichier dans `public/assets/photos/` en gardant un nom descriptif.
3. Mettre à jour le champ `src` correspondant dans `src/content.ts`, ainsi que `width`/`height` (dimensions réelles du fichier) pour éviter tout décalage de mise en page (CLS).
4. Vérifier/adapter le texte `alt` en français pour qu'il décrive fidèlement l'image (déjà rédigé, à ajuster si besoin).

Les balises `<img>` utilisent déjà `loading="lazy"` (sauf la photo hero, chargée en priorité), `decoding="async"` et des dimensions explicites — donc aucune régression de performance une fois les vraies photos en place, à condition de garder des fichiers optimisés (< 200 Ko par image idéalement).

**Dossier `source-photos/`** (racine du projet, hors `public/`) : contient les photos brutes fournies par le restaurant (collages Instagram avec textes marketing inclus). Les visuels utilisés sur le site en ont été recadrés/extraits et optimisés en `.webp` dans `public/assets/photos/`. Ce dossier n'est pas déployé (il est hors `public/`) — il reste disponible si vous voulez recadrer d'autres visuels plus tard (ex. mojito, thé, glaces au café, entrées, autres plats visibles dans `amour20.jpg`, `amour21.jpg`, `amour23.jpg`). `amour24.jpg` contient des photos de clients identifiables (demande en mariage, anniversaire) — à ne pas publier sans leur consentement explicite.

## SEO

- Meta title/description/OG/Twitter générés depuis `content.ts` (`seo`) dans `src/layouts/Layout.astro`.
- JSON-LD `CafeOrCoffeeShop` avec adresse, téléphone, horaires (`openingHoursSpecification`) et priceRange.
- `sitemap.xml` généré automatiquement par `@astrojs/sitemap` au build (`dist/sitemap-index.xml`).
- `public/robots.txt` référence le sitemap.
- Hiérarchie de titres : un seul `<h1>` (hero), `<h2>` par section, `<h3>` pour les items de menu.

⚠️ **Avant déploiement**, mettre à jour l'URL réelle du site (actuellement `https://monamour-cotonou.vercel.app` en placeholder) à trois endroits :

- `site.url` dans `src/content.ts`
- `site` dans `astro.config.mjs`
- `Sitemap:` dans `public/robots.txt`

## Déploiement (Vercel)

```bash
npm run build
```

Puis connecter le dépôt Git à Vercel (framework détecté automatiquement : Astro) ou déployer avec la CLI :

```bash
npx vercel
```

## Vérifier les performances

```bash
npm run build
npm run preview
```

Lancer un audit Lighthouse (mode mobile) sur l'URL de preview. Les optimisations déjà en place : polices auto-hébergées (pas de requête Google Fonts), CSS minimal (Tailwind v4, purge automatique), images en lazy-loading avec dimensions explicites, animations en CSS/`IntersectionObserver` natif (pas de librairie JS lourde), pas de JavaScript de framework côté client (Astro = zéro JS par défaut hors le petit script de reveal).
