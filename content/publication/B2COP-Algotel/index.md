---
title: "Le Problème à trois Contraintes: Calcul et Déploiement de Segments de Routage"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here 
# and it will be replaced with their full name and linked to their profile.
authors:
- jean-romain-luttringer
- Thomas Alfroy
- Pascal Mérindol
- François Clad
- Cristel Pelsser


# Author notes (optional)
#author_notes:
#- "Equal contribution"
#- "Equal contribution"

awards:
- name: "BEST PAPER AWARD"
  url: "https://apps.univ-lr.fr/cgi-bin/WebObjects/Colloque.woa/wa/menu?code=2721&idMenu=10987&lang=fr"

date: "2021-06-01T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
#publishDate: "2022-09-20T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["9"]

# Publication name and optional abbreviated publication name.
publication: In *Rencontres Francophones sur les Aspects Algorithmiques des Télécommunications*
publication_short: In *ALGOTEL*

abstract:  Longtemps freinée par des technologies peu extensibles et difficilesà automatiser, l'ingénierie de trafic retrouve peù a peu de son allant. D'une part, les services de communicationémergents, comme le cloud gaming et l'industrie 4.0, nécessitent des chemins spécifiques offrant des garanties strictes. D'autre part, Segment Routing (SR), une technologie de routage par la source plus extensible que le plan de contrôle MPLS, offre aux opérateurs la possibilité de déployer des chemins contraintsà grandeéchelle. Ces chemins peuvent par exemple respecter une contrainte de latence maximum tout en minimisant le "coût interne" pour l'opérateur (coût IGP). En effet, ce type de chemins est requis pour les applications nécessitant un haut niveau d'interactivité sans négliger la bande passante. Cependant, calculer de telles routes multi-contraintes est un problème NP-Difficile bien connu ; DCLC. Bien que de nombreuses solutions existent, elles ne sont pas adaptéesà Segment Routing qui ajoute une contrainte opérationnelle aux deux contraintes de qualité de service. De plus, ces propositions n'offrent généralement pas de garanties fortes en terme de temps d'exécution. Dans ce travail, afin de proposer une solution exacte mais pratique et efficace, nous tirons parti des avantages et inconvénients de SR ainsi que des limites inhérentes aux réseaux d'opérateurs. Notre algorithme, BEST2COP, conçu pour etre massivement parallélisable, résout efficacement DCLC même lorsque la double valuation du graphe est aléatoire. Que ce soit sur des graphes aux structures réelles ou aléatoires, BEST2COP résout DCLC en largement moins d'une seconde sur des domaines SR de plus de mille noeuds.

# Summary. An optional shortened abstract.
summary: Calculer des chemins contraints déployables avec Segment Routing pour des réseaux de plus de 1000 noeuds.

tags: []

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

url_pdf: 'https://hal.archives-ouvertes.fr/hal-03216327/document'
url_code: 'https://github.com/talfroy/BEST2COP'
url_dataset: ''
url_poster: 'https://drive.google.com/drive/folders/11X-IZMjBegMQQirWrKHDy6zm38fnZ7an'
url_project: ''
url_slides: 'https://drive.google.com/file/d/1luHPPG99f44fE3yUuWw3OgKybpBpGf0L/view?usp=sharing'
url_source: ''
url_video: 'https://videos.univ-lr.fr/video/2070-le-probleme-a-trois-contraintes-calcul-et-deploiement-de-segments-de-routage/'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
#image:
#  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/pLCdAaMFLTE)'
#  focal_point: ""
#  preview_only: true

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
#projects:
#- example

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
#slides: example
---

