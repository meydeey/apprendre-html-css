// ============================================
// APPRENDRE HTML & CSS — LE LABO IA
// Interactive Learning Platform
// ============================================

const SECTIONS = [
  {
    id: "welcome",
    title: "Bienvenue",
    category: "intro",
    description:
      "Bienvenue dans ton aventure ! Ici, tu vas apprendre HTML et CSS en pratiquant directement. HTML structure le contenu (titres, textes, images) et CSS le rend beau (couleurs, tailles, animations).",
    isWelcome: true,
  },
  {
    id: "balises-base",
    title: "Balises de base",
    category: "html",
    description:
      "Les balises HTML sont comme des conteneurs. Elles s'ouvrent avec <code>&lt;balise&gt;</code> et se ferment avec <code>&lt;/balise&gt;</code>. Tout le contenu d'une page web est construit avec ces balises.",
    tips: [
      "<code>&lt;h1&gt;</code> a <code>&lt;h6&gt;</code> : les titres, du plus grand au plus petit",
      "<code>&lt;p&gt;</code> : un paragraphe de texte",
      "<code>&lt;br&gt;</code> : un saut de ligne (pas besoin de fermer)",
      "<code>&lt;hr&gt;</code> : une ligne horizontale de separation",
    ],
    html: `<h1>Mon premier titre</h1>\n<h2>Un sous-titre</h2>\n<h3>Encore plus petit</h3>\n\n<p>Ceci est un paragraphe. Tu peux ecrire autant de texte que tu veux ici.</p>\n\n<p>Un deuxieme paragraphe.<br>Avec un saut de ligne au milieu.</p>\n\n<hr>\n\n<p>Et du contenu apres la ligne horizontale.</p>`,
    css: `/* Essaie de changer les couleurs ! */\nh1 {\n  color: #2563EB;\n}\n\nh2 {\n  color: #7C3AED;\n}\n\np {\n  color: #333;\n  font-size: 16px;\n}\n\nhr {\n  border: 1px solid #E5E7EB;\n  margin: 20px 0;\n}`,
  },
  {
    id: "texte-formatage",
    title: "Texte & Formatage",
    category: "html",
    description:
      "HTML offre plein de balises pour mettre en forme ton texte : gras, italique, surligné, citations... Chaque balise a un sens sémantique (elle dit au navigateur CE QUE c'est, pas juste à quoi ça ressemble).",
    tips: [
      "<code>&lt;strong&gt;</code> : texte important (gras)",
      "<code>&lt;em&gt;</code> : texte accentue (italique)",
      "<code>&lt;mark&gt;</code> : texte surligne",
      "<code>&lt;small&gt;</code> : texte plus petit",
      "<code>&lt;blockquote&gt;</code> : une citation",
      "<code>&lt;code&gt;</code> : du code informatique",
    ],
    html: `<h2>Le formatage du texte</h2>\n\n<p>Ce mot est <strong>tres important</strong> et celui-ci est <em>accentue</em>.</p>\n\n<p>Tu peux <mark>surligner du texte</mark> pour le mettre en evidence.</p>\n\n<p><small>Ce texte est plus petit que la normale.</small></p>\n\n<blockquote>\n  "La simplicite est la sophistication supreme."\n  — Leonard de Vinci\n</blockquote>\n\n<p>Pour afficher du code : <code>console.log("Hello!")</code></p>`,
    css: `h2 {\n  color: #1A1A2E;\n  margin-bottom: 16px;\n}\n\nstrong {\n  color: #2563EB;\n}\n\nem {\n  color: #7C3AED;\n}\n\nmark {\n  background: #FEF08A;\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n\nblockquote {\n  border-left: 4px solid #2563EB;\n  padding: 12px 20px;\n  margin: 16px 0;\n  background: #F8F9FA;\n  font-style: italic;\n  color: #495057;\n}\n\ncode {\n  background: #1E1E2E;\n  color: #CDD6F4;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-family: monospace;\n}`,
  },
  {
    id: "listes",
    title: "Listes",
    category: "html",
    description:
      "Les listes permettent d'organiser l'information. Il y a deux types : les listes non ordonnées (puces) avec <code>&lt;ul&gt;</code> et les listes ordonnées (numéros) avec <code>&lt;ol&gt;</code>. Chaque élément est dans un <code>&lt;li&gt;</code>.",
    tips: [
      "<code>&lt;ul&gt;</code> : liste a puces (unordered list)",
      "<code>&lt;ol&gt;</code> : liste numerotee (ordered list)",
      "<code>&lt;li&gt;</code> : un element de liste (list item)",
      "Tu peux imbriquer des listes les unes dans les autres",
    ],
    html: `<h2>Ma liste de courses</h2>\n<ul>\n  <li>Pommes</li>\n  <li>Pain</li>\n  <li>Fromage</li>\n  <li>Chocolat</li>\n</ul>\n\n<h2>Comment faire un site web</h2>\n<ol>\n  <li>Apprendre HTML</li>\n  <li>Apprendre CSS</li>\n  <li>Pratiquer beaucoup</li>\n  <li>Creer ton premier site</li>\n</ol>\n\n<h2>Liste imbriquee</h2>\n<ul>\n  <li>Fruits\n    <ul>\n      <li>Pomme</li>\n      <li>Banane</li>\n    </ul>\n  </li>\n  <li>Legumes\n    <ul>\n      <li>Carotte</li>\n      <li>Tomate</li>\n    </ul>\n  </li>\n</ul>`,
    css: `h2 {\n  color: #1A1A2E;\n  margin: 20px 0 10px;\n}\n\nul, ol {\n  padding-left: 24px;\n  margin-bottom: 16px;\n}\n\nli {\n  margin-bottom: 6px;\n  color: #333;\n  line-height: 1.6;\n}\n\n/* Essaie de changer le style des puces */\nul {\n  list-style-type: disc;\n  /* Essaie: circle, square, none */\n}`,
  },
  {
    id: "liens-images",
    title: "Liens & Images",
    category: "html",
    description:
      "Les liens (<code>&lt;a&gt;</code>) permettent de naviguer entre les pages. Les images (<code>&lt;img&gt;</code>) affichent des visuels. Ces deux balises utilisent des attributs pour fonctionner.",
    tips: [
      '<code>&lt;a href="url"&gt;</code> : cree un lien cliquable',
      '<code>target="_blank"</code> : ouvre dans un nouvel onglet',
      '<code>&lt;img src="url" alt="description"&gt;</code> : affiche une image',
      "<code>alt</code> est important pour l'accessibilite (lecteurs d'ecran)",
    ],
    html: `<h2>Les liens</h2>\n<p>Visite <a href="https://developer.mozilla.org" target="_blank">MDN Web Docs</a> pour apprendre plus.</p>\n\n<p>Un <a href="#">lien interne</a> vers la meme page.</p>\n\n<h2>Les images</h2>\n<img src="https://picsum.photos/400/200" alt="Une image aleatoire">\n\n<p>Image plus petite :</p>\n<img src="https://picsum.photos/150/150" alt="Image carree">`,
    css: `h2 {\n  color: #1A1A2E;\n  margin: 16px 0 10px;\n}\n\na {\n  color: #2563EB;\n  text-decoration: none;\n  font-weight: 600;\n}\n\na:hover {\n  text-decoration: underline;\n  color: #7C3AED;\n}\n\nimg {\n  max-width: 100%;\n  border-radius: 8px;\n  margin: 10px 0;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n}\n\np {\n  margin: 8px 0;\n  color: #333;\n}`,
  },
  {
    id: "tableaux",
    title: "Tableaux",
    category: "html",
    description:
      "Les tableaux organisent les données en lignes et colonnes. On utilise <code>&lt;table&gt;</code> pour le tableau, <code>&lt;tr&gt;</code> pour les lignes, <code>&lt;th&gt;</code> pour les en-têtes et <code>&lt;td&gt;</code> pour les cellules.",
    tips: [
      "<code>&lt;table&gt;</code> : le conteneur du tableau",
      "<code>&lt;thead&gt;</code> : le groupe d'en-tete",
      "<code>&lt;tbody&gt;</code> : le corps du tableau",
      "<code>&lt;tr&gt;</code> : une ligne (table row)",
      "<code>&lt;th&gt;</code> : une cellule d'en-tete (table header)",
      "<code>&lt;td&gt;</code> : une cellule de donnees (table data)",
    ],
    html: `<h2>Tableau des scores</h2>\n<table>\n  <thead>\n    <tr>\n      <th>Nom</th>\n      <th>Score</th>\n      <th>Niveau</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Alice</td>\n      <td>95</td>\n      <td>Expert</td>\n    </tr>\n    <tr>\n      <td>Bob</td>\n      <td>82</td>\n      <td>Avance</td>\n    </tr>\n    <tr>\n      <td>Charlie</td>\n      <td>67</td>\n      <td>Intermediaire</td>\n    </tr>\n    <tr>\n      <td>Diana</td>\n      <td>45</td>\n      <td>Debutant</td>\n    </tr>\n  </tbody>\n</table>`,
    css: `h2 {\n  color: #1A1A2E;\n  margin-bottom: 16px;\n}\n\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.1);\n}\n\nth {\n  background: #2563EB;\n  color: white;\n  padding: 12px 16px;\n  text-align: left;\n  font-weight: 600;\n}\n\ntd {\n  padding: 12px 16px;\n  border-bottom: 1px solid #E5E7EB;\n  color: #333;\n}\n\ntr:nth-child(even) {\n  background: #F8F9FA;\n}\n\ntr:hover {\n  background: #DBEAFE;\n}`,
  },
  {
    id: "formulaires",
    title: "Formulaires",
    category: "html",
    description:
      "Les formulaires permettent aux utilisateurs d'entrer des données. Il existe plein de types d'input : texte, email, mot de passe, cases à cocher, etc. Le <code>&lt;label&gt;</code> décrit chaque champ.",
    tips: [
      "<code>&lt;form&gt;</code> : conteneur du formulaire",
      '<code>&lt;input type="text"&gt;</code> : champ texte',
      '<code>&lt;input type="email"&gt;</code> : champ email (avec validation)',
      "<code>&lt;textarea&gt;</code> : zone de texte multi-lignes",
      "<code>&lt;select&gt;</code> + <code>&lt;option&gt;</code> : menu deroulant",
      "<code>&lt;button&gt;</code> : bouton cliquable",
    ],
    html: `<h2>Formulaire d'inscription</h2>\n<form>\n  <label for="nom">Nom complet</label>\n  <input type="text" id="nom" placeholder="Jean Dupont">\n\n  <label for="email">Email</label>\n  <input type="email" id="email" placeholder="jean@email.com">\n\n  <label for="mdp">Mot de passe</label>\n  <input type="password" id="mdp" placeholder="••••••••">\n\n  <label for="pays">Pays</label>\n  <select id="pays">\n    <option value="">Choisir...</option>\n    <option value="fr">France</option>\n    <option value="be">Belgique</option>\n    <option value="ch">Suisse</option>\n    <option value="ca">Canada</option>\n  </select>\n\n  <label for="bio">Bio</label>\n  <textarea id="bio" rows="3" placeholder="Parle-nous de toi..."></textarea>\n\n  <div class="checkbox-group">\n    <input type="checkbox" id="terms">\n    <label for="terms">J'accepte les conditions</label>\n  </div>\n\n  <button type="submit">S'inscrire</button>\n</form>`,
    css: `h2 {\n  color: #1A1A2E;\n  margin-bottom: 20px;\n}\n\nform {\n  max-width: 400px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\nlabel {\n  font-weight: 600;\n  font-size: 14px;\n  color: #333;\n  margin-top: 8px;\n}\n\ninput, select, textarea {\n  padding: 10px 14px;\n  border: 2px solid #E5E7EB;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  transition: border-color 0.2s;\n}\n\ninput:focus, select:focus, textarea:focus {\n  outline: none;\n  border-color: #2563EB;\n}\n\n.checkbox-group {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 12px;\n}\n\n.checkbox-group label {\n  margin-top: 0;\n  font-weight: 400;\n}\n\nbutton {\n  margin-top: 16px;\n  padding: 12px;\n  background: #2563EB;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background: #1D4ED8;\n}`,
  },
  {
    id: "css-bases",
    title: "CSS : Les bases",
    category: "css",
    description:
      "CSS (Cascading Style Sheets) controle l'apparence de ta page. Tu sélectionnes un élément HTML, puis tu lui appliques des propriétés. La syntaxe : <code>selecteur { propriete: valeur; }</code>",
    tips: [
      "<code>color</code> : couleur du texte",
      "<code>background</code> ou <code>background-color</code> : couleur de fond",
      "<code>font-size</code> : taille du texte (px, em, rem)",
      "<code>font-family</code> : police de caracteres",
      "<code>text-align</code> : alignement (left, center, right)",
      "<code>font-weight</code> : epaisseur (400=normal, 700=gras)",
    ],
    html: `<h1>Joue avec le CSS !</h1>\n\n<p class="intro">Change les proprietes CSS a droite et regarde ce qui se passe ici. C'est le meilleur moyen d'apprendre !</p>\n\n<p class="highlight">Ce paragraphe a une classe "highlight" pour le cibler specifiquement.</p>\n\n<p>Un paragraphe normal sans classe.</p>\n\n<div class="box">Je suis une boite avec la classe "box"</div>`,
    css: `/* Selecteur par balise */\nh1 {\n  color: #2563EB;\n  font-size: 32px;\n  text-align: center;\n  font-family: Arial, sans-serif;\n}\n\n/* Selecteur par classe (avec le .) */\n.intro {\n  color: #495057;\n  font-size: 18px;\n  line-height: 1.8;\n  text-align: center;\n}\n\n.highlight {\n  background-color: #FEF08A;\n  color: #92400E;\n  padding: 12px;\n  font-weight: 600;\n  border-radius: 8px;\n}\n\np {\n  margin: 12px 0;\n}\n\n.box {\n  background: linear-gradient(135deg, #2563EB, #7C3AED);\n  color: white;\n  padding: 20px;\n  text-align: center;\n  border-radius: 12px;\n  font-weight: 700;\n  margin-top: 16px;\n}`,
  },
  {
    id: "box-model",
    title: "Box Model",
    category: "css",
    description:
      "Chaque élément HTML est une boite rectangulaire. Le Box Model définit : le contenu, le padding (espace intérieur), la border (bordure) et la margin (espace extérieur). Comprendre ça, c'est comprendre 80% du layout CSS.",
    tips: [
      "<code>padding</code> : espace entre le contenu et la bordure",
      "<code>border</code> : la bordure autour de l'element",
      "<code>margin</code> : espace entre l'element et les autres",
      "<code>width</code> / <code>height</code> : dimensions de l'element",
      "<code>box-sizing: border-box</code> : inclut padding et border dans la width",
    ],
    html: `<h2>Le Box Model</h2>\n\n<div class="box-demo">\n  <div class="margin-label">margin</div>\n  <div class="border-zone">\n    <div class="border-label">border</div>\n    <div class="padding-zone">\n      <div class="padding-label">padding</div>\n      <div class="content-zone">\n        Contenu\n      </div>\n    </div>\n  </div>\n</div>\n\n<h3>Exemples pratiques</h3>\n<div class="card">Carte avec padding</div>\n<div class="card spaced">Carte avec margin</div>\n<div class="card bordered">Carte avec border</div>`,
    css: `h2, h3 {\n  color: #1A1A2E;\n  margin-bottom: 16px;\n}\n\n/* Visualisation du Box Model */\n.box-demo {\n  background: #FEE2E2;\n  padding: 20px;\n  text-align: center;\n  border-radius: 8px;\n  margin-bottom: 24px;\n}\n\n.border-zone {\n  background: #FEF08A;\n  padding: 20px;\n  border-radius: 6px;\n}\n\n.padding-zone {\n  background: #D1FAE5;\n  padding: 20px;\n  border-radius: 4px;\n}\n\n.content-zone {\n  background: #DBEAFE;\n  padding: 20px;\n  border-radius: 4px;\n  font-weight: 700;\n  color: #2563EB;\n}\n\n.margin-label, .border-label, .padding-label {\n  font-size: 12px;\n  font-weight: 600;\n  margin-bottom: 8px;\n  opacity: 0.7;\n}\n\n/* Exemples pratiques */\n.card {\n  background: white;\n  padding: 20px;\n  border-radius: 8px;\n  margin-bottom: 12px;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.1);\n}\n\n.card.spaced {\n  margin: 30px 0;\n}\n\n.card.bordered {\n  border: 3px solid #2563EB;\n}`,
  },
  {
    id: "flexbox",
    title: "Flexbox",
    category: "css",
    description:
      "Flexbox est LE système pour aligner et distribuer des éléments dans une seule direction (ligne ou colonne). C'est l'outil #1 du développeur web pour faire des layouts. Tu mets <code>display: flex</code> sur le parent et ça change tout.",
    tips: [
      "<code>display: flex</code> : active flexbox sur le conteneur",
      "<code>justify-content</code> : aligne sur l'axe principal (horizontal)",
      "<code>align-items</code> : aligne sur l'axe secondaire (vertical)",
      "<code>flex-direction</code> : row (ligne) ou column (colonne)",
      "<code>gap</code> : espace entre les elements",
      "<code>flex-wrap</code> : retour a la ligne si pas assez de place",
    ],
    html: `<h2>Flexbox en action</h2>\n\n<h3>justify-content</h3>\n<div class="flex-demo jc-center">\n  <div class="box">1</div>\n  <div class="box">2</div>\n  <div class="box">3</div>\n</div>\n\n<h3>align-items</h3>\n<div class="flex-demo ai-center tall">\n  <div class="box small">A</div>\n  <div class="box medium">B</div>\n  <div class="box large">C</div>\n</div>\n\n<h3>flex-wrap + gap</h3>\n<div class="flex-demo wrap">\n  <div class="box">1</div>\n  <div class="box">2</div>\n  <div class="box">3</div>\n  <div class="box">4</div>\n  <div class="box">5</div>\n  <div class="box">6</div>\n</div>\n\n<h3>Navbar avec Flexbox</h3>\n<nav class="navbar">\n  <div class="logo">MonSite</div>\n  <div class="nav-links">\n    <a href="#">Accueil</a>\n    <a href="#">Blog</a>\n    <a href="#">Contact</a>\n  </div>\n</nav>`,
    css: `h2 { color: #1A1A2E; margin-bottom: 16px; }\nh3 { color: #495057; margin: 16px 0 8px; font-size: 14px; }\n\n.flex-demo {\n  display: flex;\n  background: #F1F3F5;\n  padding: 16px;\n  border-radius: 8px;\n  margin-bottom: 8px;\n  gap: 10px;\n}\n\n.jc-center {\n  justify-content: center;\n  /* Essaie: flex-start, flex-end,\n     space-between, space-around,\n     space-evenly */\n}\n\n.ai-center {\n  align-items: center;\n  /* Essaie: flex-start, flex-end,\n     stretch, baseline */\n}\n\n.tall { min-height: 120px; }\n\n.wrap {\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\n.box {\n  background: #2563EB;\n  color: white;\n  padding: 16px 24px;\n  border-radius: 8px;\n  font-weight: 700;\n  text-align: center;\n}\n\n.box.small { padding: 8px 16px; }\n.box.medium { padding: 24px; }\n.box.large { padding: 40px; }\n\n/* Navbar */\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #1A1A2E;\n  padding: 12px 24px;\n  border-radius: 8px;\n  margin-top: 16px;\n}\n\n.logo {\n  color: white;\n  font-weight: 800;\n  font-size: 18px;\n}\n\n.nav-links {\n  display: flex;\n  gap: 20px;\n}\n\n.nav-links a {\n  color: #CDD6F4;\n  text-decoration: none;\n  font-weight: 500;\n}\n\n.nav-links a:hover {\n  color: white;\n}`,
  },
  {
    id: "css-grid",
    title: "CSS Grid",
    category: "css",
    description:
      "CSS Grid gère les layouts en 2 dimensions (lignes ET colonnes en même temps). Parfait pour les mises en page complexes comme les galeries, les dashboards ou les layouts de page entière.",
    tips: [
      "<code>display: grid</code> : active grid sur le conteneur",
      "<code>grid-template-columns</code> : definit les colonnes",
      "<code>grid-template-rows</code> : definit les lignes",
      "<code>gap</code> : espace entre les cellules",
      "<code>fr</code> : unite fraction (partage l'espace disponible)",
      "<code>span</code> : permet a un element de prendre plusieurs cellules",
    ],
    html: `<h2>CSS Grid en action</h2>\n\n<h3>Grille simple 3 colonnes</h3>\n<div class="grid-demo">\n  <div class="cell">1</div>\n  <div class="cell">2</div>\n  <div class="cell">3</div>\n  <div class="cell">4</div>\n  <div class="cell">5</div>\n  <div class="cell">6</div>\n</div>\n\n<h3>Avec span (fusion de cellules)</h3>\n<div class="grid-span">\n  <div class="cell wide">Large (2 colonnes)</div>\n  <div class="cell">Normal</div>\n  <div class="cell tall">Haut (2 lignes)</div>\n  <div class="cell">Normal</div>\n  <div class="cell">Normal</div>\n</div>\n\n<h3>Layout de page</h3>\n<div class="page-layout">\n  <header class="pg-header">Header</header>\n  <nav class="pg-sidebar">Sidebar</nav>\n  <main class="pg-main">Contenu principal</main>\n  <footer class="pg-footer">Footer</footer>\n</div>`,
    css: `h2 { color: #1A1A2E; margin-bottom: 16px; }\nh3 { color: #495057; margin: 16px 0 8px; font-size: 14px; }\n\n.grid-demo {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  margin-bottom: 8px;\n}\n\n.cell {\n  background: #2563EB;\n  color: white;\n  padding: 20px;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.grid-span {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  margin-bottom: 8px;\n}\n\n.cell.wide {\n  grid-column: span 2;\n  background: #7C3AED;\n}\n\n.cell.tall {\n  grid-row: span 2;\n  background: #10B981;\n}\n\n/* Layout de page avec grid-template-areas */\n.page-layout {\n  display: grid;\n  grid-template-areas:\n    "header header"\n    "sidebar main"\n    "footer footer";\n  grid-template-columns: 200px 1fr;\n  grid-template-rows: 50px 1fr 40px;\n  gap: 8px;\n  min-height: 250px;\n}\n\n.pg-header {\n  grid-area: header;\n  background: #1A1A2E;\n  color: white;\n  display: flex; align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  font-weight: 700;\n}\n\n.pg-sidebar {\n  grid-area: sidebar;\n  background: #DBEAFE;\n  color: #2563EB;\n  display: flex; align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  font-weight: 600;\n}\n\n.pg-main {\n  grid-area: main;\n  background: #F1F3F5;\n  display: flex; align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  color: #333;\n}\n\n.pg-footer {\n  grid-area: footer;\n  background: #1A1A2E;\n  color: white;\n  display: flex; align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  font-size: 14px;\n}`,
  },
  {
    id: "positionnement",
    title: "Positionnement",
    category: "css",
    description:
      "La propriété <code>position</code> controle comment un élément se place dans la page. Par défaut c'est <code>static</code> (flux normal). Les autres valeurs permettent de placer les éléments précisément où tu veux.",
    tips: [
      "<code>static</code> : position par defaut, suit le flux normal",
      "<code>relative</code> : decale par rapport a sa position normale",
      "<code>absolute</code> : positionne par rapport au parent positionne",
      "<code>fixed</code> : reste fixe meme quand on scroll",
      "<code>sticky</code> : devient fixe apres un certain scroll",
      "<code>z-index</code> : gere l'empilement (quel element est devant)",
    ],
    html: `<h2>Positionnement CSS</h2>\n\n<div class="demo-container">\n  <div class="static-box">Static (defaut)</div>\n  <div class="relative-box">Relative (decale)</div>\n  <div class="static-box">Static</div>\n</div>\n\n<h3>Position absolute</h3>\n<div class="parent-box">\n  <div class="absolute-box top-right">Absolute top-right</div>\n  <div class="absolute-box bottom-left">Absolute bottom-left</div>\n  <p>Je suis le parent avec position: relative. Les enfants "absolute" se positionnent par rapport a moi.</p>\n</div>\n\n<h3>Z-index (empilement)</h3>\n<div class="stack-container">\n  <div class="stack-box" style="background:#2563EB; z-index:1;">z-index: 1</div>\n  <div class="stack-box" style="background:#7C3AED; z-index:2; left:40px; top:20px;">z-index: 2</div>\n  <div class="stack-box" style="background:#10B981; z-index:3; left:80px; top:40px;">z-index: 3</div>\n</div>`,
    css: `h2, h3 { color: #1A1A2E; margin: 16px 0 8px; }\n\n.demo-container {\n  background: #F1F3F5;\n  padding: 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n}\n\n.static-box {\n  background: #DBEAFE;\n  padding: 12px;\n  border-radius: 6px;\n  margin: 8px 0;\n  color: #2563EB;\n  font-weight: 600;\n}\n\n.relative-box {\n  position: relative;\n  top: 10px;\n  left: 30px;\n  background: #7C3AED;\n  color: white;\n  padding: 12px;\n  border-radius: 6px;\n  margin: 8px 0;\n  font-weight: 600;\n}\n\n/* Absolute */\n.parent-box {\n  position: relative;\n  background: #F1F3F5;\n  padding: 40px 16px;\n  border-radius: 8px;\n  min-height: 150px;\n  margin-bottom: 16px;\n}\n\n.parent-box p {\n  text-align: center;\n  color: #666;\n  font-size: 13px;\n}\n\n.absolute-box {\n  position: absolute;\n  background: #2563EB;\n  color: white;\n  padding: 8px 12px;\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.top-right { top: 8px; right: 8px; }\n.bottom-left { bottom: 8px; left: 8px; }\n\n/* Z-index */\n.stack-container {\n  position: relative;\n  height: 120px;\n}\n\n.stack-box {\n  position: absolute;\n  width: 140px;\n  padding: 16px;\n  color: white;\n  border-radius: 8px;\n  font-weight: 700;\n  font-size: 13px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.2);\n}`,
  },
  {
    id: "transitions-animations",
    title: "Transitions & Animations",
    category: "css",
    description:
      "Les transitions font un changement fluide entre deux états (ex: hover). Les animations avec <code>@keyframes</code> permettent des mouvements complexes en boucle. C'est ce qui rend les sites vivants !",
    tips: [
      "<code>transition</code> : anime le passage d'une valeur a une autre",
      "<code>transition: propriete duree timing</code>",
      "<code>@keyframes nom { from { } to { } }</code> : definit une animation",
      "<code>animation: nom duree timing iteration</code> : applique l'animation",
      "Timing : ease, linear, ease-in, ease-out, ease-in-out",
    ],
    html: `<h2>Transitions</h2>\n<div class="hover-demo">\n  <div class="hover-box">Survole-moi !</div>\n  <div class="hover-box grow">Je grandis</div>\n  <div class="hover-box rotate">Je tourne</div>\n  <div class="hover-box color">Je change de couleur</div>\n</div>\n\n<h2>Animations</h2>\n<div class="anim-demo">\n  <div class="bounce-box">Bounce</div>\n  <div class="pulse-box">Pulse</div>\n  <div class="slide-box">Slide</div>\n  <div class="spin-box">Spin</div>\n</div>`,
    css: `h2 { color: #1A1A2E; margin: 16px 0 12px; }\n\n/* TRANSITIONS */\n.hover-demo {\n  display: flex; gap: 12px; flex-wrap: wrap;\n  margin-bottom: 24px;\n}\n\n.hover-box {\n  background: #2563EB;\n  color: white;\n  padding: 16px 24px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n.hover-box:hover {\n  background: #1D4ED8;\n  transform: translateY(-4px);\n  box-shadow: 0 8px 20px rgba(37,99,235,0.3);\n}\n\n.hover-box.grow:hover {\n  transform: scale(1.2);\n}\n\n.hover-box.rotate:hover {\n  transform: rotate(10deg);\n}\n\n.hover-box.color:hover {\n  background: #7C3AED;\n}\n\n/* ANIMATIONS */\n.anim-demo {\n  display: flex; gap: 12px; flex-wrap: wrap;\n}\n\n@keyframes bounce {\n  0%, 100% { transform: translateY(0); }\n  50% { transform: translateY(-20px); }\n}\n\n@keyframes pulse {\n  0%, 100% { transform: scale(1); opacity: 1; }\n  50% { transform: scale(1.1); opacity: 0.8; }\n}\n\n@keyframes slide {\n  0% { transform: translateX(-20px); opacity: 0; }\n  50% { transform: translateX(20px); opacity: 1; }\n  100% { transform: translateX(-20px); opacity: 0; }\n}\n\n@keyframes spin {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}\n\n.bounce-box {\n  background: #10B981; color: white;\n  padding: 16px 24px; border-radius: 8px;\n  font-weight: 600;\n  animation: bounce 1s ease infinite;\n}\n\n.pulse-box {\n  background: #7C3AED; color: white;\n  padding: 16px 24px; border-radius: 8px;\n  font-weight: 600;\n  animation: pulse 2s ease infinite;\n}\n\n.slide-box {\n  background: #F59E0B; color: white;\n  padding: 16px 24px; border-radius: 8px;\n  font-weight: 600;\n  animation: slide 3s ease infinite;\n}\n\n.spin-box {\n  background: #EF4444; color: white;\n  padding: 16px 24px; border-radius: 50%;\n  font-weight: 600; width: 60px; height: 60px;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 12px;\n  animation: spin 2s linear infinite;\n}`,
  },
  {
    id: "pseudo-classes",
    title: "Pseudo-classes & Pseudo-elements",
    category: "css",
    description:
      "Les pseudo-classes ciblent un état spécial d'un élément (<code>:hover</code>, <code>:focus</code>). Les pseudo-éléments créent des éléments virtuels (<code>::before</code>, <code>::after</code>). C'est du CSS avancé mais très utile !",
    tips: [
      "<code>:hover</code> : quand la souris survole",
      "<code>:focus</code> : quand l'element est selectionne",
      "<code>:nth-child(n)</code> : cible le n-ieme enfant",
      "<code>:first-child</code> / <code>:last-child</code>",
      "<code>::before</code> / <code>::after</code> : insere du contenu avant/apres",
      "<code>::placeholder</code> : style le placeholder d'un input",
    ],
    html: `<h2>Pseudo-classes</h2>\n\n<h3>:nth-child</h3>\n<ul class="colored-list">\n  <li>Element 1</li>\n  <li>Element 2</li>\n  <li>Element 3</li>\n  <li>Element 4</li>\n  <li>Element 5</li>\n  <li>Element 6</li>\n</ul>\n\n<h3>:hover et :focus</h3>\n<input type="text" class="fancy-input" placeholder="Clique ici...">\n<button class="fancy-btn">Survole-moi</button>\n\n<h3>::before et ::after</h3>\n<p class="quote">La pratique rend parfait</p>\n<span class="badge">Nouveau</span>\n<span class="badge pro">Pro</span>`,
    css: `h2 { color: #1A1A2E; margin-bottom: 12px; }\nh3 { color: #495057; margin: 16px 0 8px; font-size: 14px; }\n\n/* :nth-child */\n.colored-list {\n  list-style: none;\n  padding: 0;\n}\n\n.colored-list li {\n  padding: 10px 16px;\n  margin-bottom: 4px;\n  border-radius: 6px;\n  font-weight: 500;\n}\n\n.colored-list li:nth-child(odd) {\n  background: #DBEAFE;\n  color: #2563EB;\n}\n\n.colored-list li:nth-child(even) {\n  background: #EDE9FE;\n  color: #7C3AED;\n}\n\n.colored-list li:first-child {\n  font-weight: 700;\n  font-size: 1.1em;\n}\n\n.colored-list li:last-child {\n  border: 2px dashed #10B981;\n}\n\n/* :hover et :focus */\n.fancy-input {\n  padding: 10px 16px;\n  border: 2px solid #E5E7EB;\n  border-radius: 8px;\n  font-size: 14px;\n  transition: all 0.3s;\n  margin-right: 8px;\n  font-family: inherit;\n}\n\n.fancy-input:focus {\n  outline: none;\n  border-color: #2563EB;\n  box-shadow: 0 0 0 3px rgba(37,99,235,0.2);\n}\n\n.fancy-input::placeholder {\n  color: #ADB5BD;\n  font-style: italic;\n}\n\n.fancy-btn {\n  padding: 10px 20px;\n  background: #2563EB;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-family: inherit;\n}\n\n.fancy-btn:hover {\n  background: #7C3AED;\n  transform: scale(1.05);\n}\n\n/* ::before et ::after */\n.quote {\n  font-style: italic;\n  color: #495057;\n  margin: 16px 0;\n  font-size: 18px;\n}\n\n.quote::before { content: "\\201C "; font-size: 24px; color: #2563EB; }\n.quote::after { content: " \\201D"; font-size: 24px; color: #2563EB; }\n\n.badge {\n  display: inline-block;\n  padding: 4px 12px;\n  background: #DBEAFE;\n  color: #2563EB;\n  border-radius: 100px;\n  font-weight: 600;\n  font-size: 13px;\n  margin-right: 8px;\n}\n\n.badge::before {\n  content: "\\2022 ";\n}\n\n.badge.pro {\n  background: #EDE9FE;\n  color: #7C3AED;\n}\n\n.badge.pro::after {\n  content: " \\2605";\n}`,
  },
  {
    id: "composants",
    title: "Composants",
    category: "css",
    description:
      "Maintenant que tu connais les bases, voici des composants réels que tu retrouves sur tous les sites web : cartes, boutons, navbar, hero section, footer. Modifie-les pour les personnaliser !",
    tips: [
      "Les composants combinent tout ce que tu as appris",
      "Modifie les couleurs, tailles et espacements pour les personnaliser",
      "Essaie de recreer des composants que tu vois sur tes sites preferes",
    ],
    html: `<!-- NAVBAR -->\n<nav class="navbar">\n  <div class="nav-logo">MonSite</div>\n  <div class="nav-menu">\n    <a href="#">Accueil</a>\n    <a href="#">Services</a>\n    <a href="#">Contact</a>\n    <a href="#" class="nav-cta">Commencer</a>\n  </div>\n</nav>\n\n<!-- HERO SECTION -->\n<section class="hero">\n  <h1>Bienvenue sur MonSite</h1>\n  <p>La meilleure plateforme pour apprendre le web</p>\n  <button class="hero-btn">Decouvrir</button>\n</section>\n\n<!-- CARDS -->\n<div class="cards-grid">\n  <div class="card">\n    <div class="card-icon">&#9997;</div>\n    <h3>Design</h3>\n    <p>Creez de belles interfaces</p>\n  </div>\n  <div class="card">\n    <div class="card-icon">&#9889;</div>\n    <h3>Performance</h3>\n    <p>Sites rapides et optimises</p>\n  </div>\n  <div class="card">\n    <div class="card-icon">&#9881;</div>\n    <h3>Fiable</h3>\n    <p>Code solide et teste</p>\n  </div>\n</div>\n\n<!-- FOOTER -->\n<footer class="footer">\n  <p>&copy; 2026 MonSite — Fait avec amour</p>\n</footer>`,
    css: `/* NAVBAR */\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  background: white;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.1);\n  border-radius: 8px;\n}\n\n.nav-logo {\n  font-weight: 800;\n  font-size: 20px;\n  color: #2563EB;\n}\n\n.nav-menu {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n\n.nav-menu a {\n  color: #333;\n  text-decoration: none;\n  font-weight: 500;\n  font-size: 14px;\n  transition: color 0.2s;\n}\n\n.nav-menu a:hover { color: #2563EB; }\n\n.nav-cta {\n  background: #2563EB !important;\n  color: white !important;\n  padding: 8px 16px;\n  border-radius: 6px;\n}\n\n/* HERO */\n.hero {\n  text-align: center;\n  padding: 60px 20px;\n  background: linear-gradient(135deg, #DBEAFE, #EDE9FE);\n  border-radius: 12px;\n  margin: 16px 0;\n}\n\n.hero h1 {\n  font-size: 32px;\n  font-weight: 800;\n  color: #1A1A2E;\n  margin-bottom: 8px;\n}\n\n.hero p {\n  color: #495057;\n  font-size: 16px;\n  margin-bottom: 24px;\n}\n\n.hero-btn {\n  padding: 12px 32px;\n  background: #2563EB;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.hero-btn:hover {\n  background: #1D4ED8;\n  transform: translateY(-2px);\n}\n\n/* CARDS */\n.cards-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  margin: 16px 0;\n}\n\n.card {\n  background: white;\n  border: 1px solid #E5E7EB;\n  border-radius: 12px;\n  padding: 24px;\n  text-align: center;\n  transition: all 0.2s;\n}\n\n.card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 20px rgba(0,0,0,0.08);\n}\n\n.card-icon { font-size: 32px; margin-bottom: 12px; }\n.card h3 { font-size: 16px; margin-bottom: 6px; color: #1A1A2E; }\n.card p { font-size: 13px; color: #868E96; }\n\n/* FOOTER */\n.footer {\n  text-align: center;\n  padding: 20px;\n  background: #1A1A2E;\n  color: #868E96;\n  border-radius: 8px;\n  font-size: 14px;\n}`,
  },
];

// ============================================
// State
// ============================================
let currentSectionIndex = 0;
let completedSections = new Set();

function loadProgress() {
  try {
    const saved = localStorage.getItem("labo-ia-progress");
    if (saved) {
      completedSections = new Set(JSON.parse(saved));
    }
  } catch (e) {
    completedSections = new Set();
  }
}

function saveProgress() {
  localStorage.setItem(
    "labo-ia-progress",
    JSON.stringify([...completedSections]),
  );
}

// ============================================
// Rendering
// ============================================
function renderSidebar() {
  const nav = document.getElementById("sidebar-nav");
  let html = "";
  let currentCategory = "";

  SECTIONS.forEach((section, index) => {
    if (section.category !== currentCategory) {
      currentCategory = section.category;
      const categoryLabels = {
        intro: "Introduction",
        html: "HTML",
        css: "CSS",
      };
      html += `<li class="sidebar-section-title">${categoryLabels[currentCategory]}</li>`;
    }

    const isActive = index === currentSectionIndex;
    const isCompleted = completedSections.has(section.id);
    const classes = [
      "sidebar-item",
      isActive ? "active" : "",
      isCompleted ? "completed" : "",
    ]
      .filter(Boolean)
      .join(" ");

    html += `
      <li class="${classes}" data-index="${index}" onclick="navigateTo(${index})">
        <span class="sidebar-check">${isCompleted ? "✓" : ""}</span>
        <span class="sidebar-item-number">${index === 0 ? "" : index}</span>
        <span class="sidebar-item-text">${section.title}</span>
      </li>
    `;
  });

  nav.innerHTML = html;
}

function renderSection() {
  const container = document.getElementById("sections-container");
  const section = SECTIONS[currentSectionIndex];

  if (section.isWelcome) {
    container.innerHTML = renderWelcome();
  } else {
    container.innerHTML = renderLesson(section);
    initEditor(section);
  }

  updateProgress();
  renderSidebar();
}

function renderWelcome() {
  const completed = completedSections.size;
  const total = SECTIONS.length - 1;

  return `
    <div class="section active">
      <div class="welcome-hero">
        <h1>Apprendre HTML & CSS</h1>
        <p>15 lecons interactives pour maitriser les bases du web. Tape du code, vois le resultat en direct !</p>
      </div>

      <div class="welcome-cards">
        <div class="welcome-card">
          <div class="welcome-card-icon">&#128187;</div>
          <h3>Editeur Live</h3>
          <p>Tape du code HTML/CSS et vois le resultat instantanement</p>
        </div>
        <div class="welcome-card">
          <div class="welcome-card-icon">&#128640;</div>
          <h3>Pratique d'abord</h3>
          <p>Chaque lecon a du code pre-rempli que tu peux modifier</p>
        </div>
        <div class="welcome-card">
          <div class="welcome-card-icon">&#127919;</div>
          <h3>Progression</h3>
          <p>Suis ta progression et marque les lecons completees</p>
        </div>
        <div class="welcome-card">
          <div class="welcome-card-icon">&#128293;</div>
          <h3>De zero a hero</h3>
          <p>Du debutant total aux composants complets</p>
        </div>
      </div>

      ${
        completed > 0
          ? `<p style="text-align:center;color:#10B981;font-weight:600;margin-bottom:8px;">${completed}/${total} sections completees — continue comme ca !</p>`
          : ""
      }

      <div style="text-align:center;">
        <button class="btn-start" onclick="navigateTo(1)">
          ${completed > 0 ? "Reprendre" : "Commencer"} &#8594;
        </button>
      </div>
    </div>
  `;
}

function renderLesson(section) {
  const isCompleted = completedSections.has(section.id);
  const hasPrev = currentSectionIndex > 0;
  const hasNext = currentSectionIndex < SECTIONS.length - 1;

  let tipsHtml = "";
  if (section.tips) {
    tipsHtml = `
      <div class="info-card">
        <h3>Balises et proprietes</h3>
        <ul>
          ${section.tips.map((t) => `<li>${t}</li>`).join("")}
        </ul>
      </div>
    `;
  }

  return `
    <div class="section active">
      <div class="section-header">
        <div class="section-badge">
          ${section.category === "html" ? "&#9001;/&#9002; HTML" : "&#127912; CSS"}
          &mdash; Lecon ${currentSectionIndex}/${SECTIONS.length - 1}
        </div>
        <h1 class="section-title">${section.title}</h1>
        <p class="section-description">${section.description}</p>
      </div>

      ${tipsHtml}

      <div class="editor-container">
        <div class="editor-toolbar">
          <div class="editor-tabs">
            <button class="editor-tab active" data-tab="split">Split</button>
            <button class="editor-tab" data-tab="html">HTML</button>
            <button class="editor-tab" data-tab="css">CSS</button>
            <button class="editor-tab" data-tab="preview">Preview</button>
          </div>
          <div class="editor-actions">
            <button class="btn-editor btn-reset" onclick="resetEditor()">
              &#8634; Reset
            </button>
          </div>
        </div>
        <div class="editor-body" id="editor-body">
          <div class="editor-pane" id="pane-html">
            <div class="editor-pane-header">
              <span class="dot dot-html"></span> HTML
            </div>
            <textarea class="editor-textarea" id="html-editor" spellcheck="false" placeholder="Ecris ton HTML ici...">${escapeHtml(section.html || "")}</textarea>
          </div>
          <div class="editor-pane" id="pane-css">
            <div class="editor-pane-header">
              <span class="dot dot-css"></span> CSS
            </div>
            <textarea class="editor-textarea" id="css-editor" spellcheck="false" placeholder="Ecris ton CSS ici...">${escapeHtml(section.css || "")}</textarea>
          </div>
          <div class="editor-pane" id="pane-preview">
            <div class="editor-pane-header">
              <span class="dot dot-preview"></span> Apercu
            </div>
            <iframe class="editor-preview" id="preview-frame" sandbox="allow-scripts"></iframe>
          </div>
        </div>
      </div>

      <div class="completion-row ${isCompleted ? "completed" : ""}" id="completion-row">
        <label class="completion-label">
          <input type="checkbox" class="completion-checkbox" id="completion-check"
            ${isCompleted ? "checked" : ""}
            onchange="toggleCompletion('${section.id}')">
          J'ai compris cette lecon
        </label>
        <div class="completion-nav">
          ${hasPrev ? `<button class="btn-nav" onclick="navigateTo(${currentSectionIndex - 1})">&#8592; Precedent</button>` : ""}
          ${hasNext ? `<button class="btn-nav btn-nav-next" onclick="navigateTo(${currentSectionIndex + 1})">Suivant &#8594;</button>` : ""}
        </div>
      </div>
    </div>
  `;
}

// ============================================
// Editor Logic
// ============================================
let updateTimeout = null;

function initEditor(section) {
  const htmlEditor = document.getElementById("html-editor");
  const cssEditor = document.getElementById("css-editor");

  if (!htmlEditor || !cssEditor) return;

  const update = () => {
    clearTimeout(updateTimeout);
    updateTimeout = setTimeout(updatePreview, 300);
  };

  htmlEditor.addEventListener("input", update);
  cssEditor.addEventListener("input", update);

  // Handle tab key in editors
  [htmlEditor, cssEditor].forEach((editor) => {
    editor.addEventListener("keydown", (e) => {
      if (e.key === "Tab") {
        e.preventDefault();
        const start = editor.selectionStart;
        const end = editor.selectionEnd;
        editor.value =
          editor.value.substring(0, start) + "  " + editor.value.substring(end);
        editor.selectionStart = editor.selectionEnd = start + 2;
        update();
      }
    });
  });

  // Editor tabs
  document.querySelectorAll(".editor-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document
        .querySelectorAll(".editor-tab")
        .forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const mode = tab.dataset.tab;
      const htmlPane = document.getElementById("pane-html");
      const cssPane = document.getElementById("pane-css");
      const previewPane = document.getElementById("pane-preview");

      htmlPane.style.display =
        mode === "split" || mode === "html" ? "flex" : "none";
      cssPane.style.display =
        mode === "split" || mode === "css" ? "flex" : "none";
      previewPane.style.display =
        mode === "split" || mode === "preview" ? "flex" : "none";
    });
  });

  updatePreview();
}

function updatePreview() {
  const htmlEditor = document.getElementById("html-editor");
  const cssEditor = document.getElementById("css-editor");
  const frame = document.getElementById("preview-frame");

  if (!htmlEditor || !cssEditor || !frame) return;

  const htmlContent = htmlEditor.value;
  const cssContent = cssEditor.value;

  const doc = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      padding: 20px;
      margin: 0;
      color: #333;
      line-height: 1.6;
    }
    ${cssContent}
  </style>
</head>
<body>
  ${htmlContent}
</body>
</html>`;

  frame.srcdoc = doc;
}

function resetEditor() {
  const section = SECTIONS[currentSectionIndex];
  const htmlEditor = document.getElementById("html-editor");
  const cssEditor = document.getElementById("css-editor");

  if (htmlEditor) htmlEditor.value = section.html || "";
  if (cssEditor) cssEditor.value = section.css || "";

  updatePreview();
}

// ============================================
// Navigation & Progress
// ============================================
function navigateTo(index) {
  if (index < 0 || index >= SECTIONS.length) return;
  currentSectionIndex = index;
  renderSection();
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Close mobile sidebar
  document.querySelector(".sidebar").classList.remove("open");
  document.querySelector(".sidebar-overlay").classList.remove("visible");
}

function toggleCompletion(sectionId) {
  const row = document.getElementById("completion-row");
  if (completedSections.has(sectionId)) {
    completedSections.delete(sectionId);
    row.classList.remove("completed");
  } else {
    completedSections.add(sectionId);
    row.classList.add("completed");

    // Animate sidebar check
    const sidebarItem = document.querySelector(
      `.sidebar-item[data-index="${currentSectionIndex}"]`,
    );
    if (sidebarItem) {
      sidebarItem.classList.add("just-completed");
      setTimeout(() => sidebarItem.classList.remove("just-completed"), 500);
    }

    // Check if all completed
    if (completedSections.size === SECTIONS.length - 1) {
      showCelebration();
    }
  }

  saveProgress();
  updateProgress();
  renderSidebar();
}

function updateProgress() {
  const total = SECTIONS.length - 1; // exclude welcome
  const completed = completedSections.size;
  const percent = Math.round((completed / total) * 100);

  const fill = document.getElementById("progress-fill");
  const count = document.getElementById("progress-count");
  const label = document.getElementById("progress-label");

  if (fill) fill.style.width = percent + "%";
  if (count) count.textContent = `${completed}/${total}`;
  if (label) {
    if (percent === 0) label.textContent = "Progression";
    else if (percent < 50) label.textContent = "En cours...";
    else if (percent < 100) label.textContent = "Presque !";
    else label.textContent = "Termine !";
  }
}

function showCelebration() {
  const overlay = document.getElementById("celebration");
  if (overlay) overlay.classList.add("visible");
}

function closeCelebration() {
  const overlay = document.getElementById("celebration");
  if (overlay) overlay.classList.remove("visible");
}

function resetAllProgress() {
  if (confirm("Tu es sur de vouloir reinitialiser toute ta progression ?")) {
    completedSections.clear();
    saveProgress();
    updateProgress();
    renderSidebar();
    renderSection();
  }
}

// ============================================
// Mobile
// ============================================
function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".sidebar-overlay");
  sidebar.classList.toggle("open");
  overlay.classList.toggle("visible");
}

// ============================================
// Utilities
// ============================================
function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ============================================
// Init
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  loadProgress();
  renderSidebar();
  renderSection();

  // Close sidebar on overlay click
  document
    .querySelector(".sidebar-overlay")
    .addEventListener("click", toggleSidebar);
});
