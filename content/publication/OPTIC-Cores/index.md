---
title: "L'Art d'Anticiper les Changements IGP pour Acheminer Optimalement la Patate en Transit"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here 
# and it will be replaced with their full name and linked to their profile.
authors:
- jean-romain-luttringer
- Quentin Bramas
- Cristel Pelsser
- Pascal Mérindol

# Author notes (optional)
#author_notes:
#- "Equal contribution"
#- "Equal contribution"

date: "2021-09-20T00:00:00Z"
doi: "https://doi.org/10.48550/arXiv.2110.09320"

# Schedule page publish date (NOT publication's date).
#publishDate: "2021-09-20T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *Rencontres Francophones sur la Conception de Protocoles, l’Évaluation de Performance et l’Expérimentation des Réseaux de Communication*
publication_short: In *CORES*

abstract: Le routage des données en transit dans les systèmes autonomes (AS) d'Internet se fait selon le paradigme de la patate chaude. Les meilleures routes inter-domaines (BGP) sont sélectionnées grâceà un ordre lexicographique dont l'une des règles stipule de choisir la meilleure distance intra-domaine (IGP) parmi les meilleures routes existantes (ordonnées selon les critères précédents, par ex., préférence économique et nombre de sauts d'AS). Cette pratique est appelée patate chaude car les AS qui l'appliquentévacuent ainsi efficacement le trafic en transit. Cette dépendance de BGP visà vis de l'IGP implique que BGP doit re-converger après chaque événement interne se produisant dans l'AS (et ce processus est particulièrement lent car traité naïvement). Avec OPTIC, Optimal Protection Technique for Inter/intra-domain Convergence, l'objectif de notre travail est de ramener ce temps de convergence à une durée marginale dans la plupart des cas. Pour cela, OPTIC crée et manipule efficacement des ensembles de passerelles BGP contenant les meilleures routes BGP antérieures et postérieuresà tout changement IGP. Ces ensembles sont partagés par groupe de préfixes ayant des passerelles identiques. Ainsi, leur miseà jour, construction et utilisation s'opèrentà la granularité du groupe et non du préfixe. Non seulement OPTIC garantit un re-routage rapide vers la meilleure passerelle en cas de changement interne mais assure aussi efficacement sa propre re-convergence face à tous les types de changements. Il met à jour ses nouveaux ensembles protecteurs (pour la nouvelle route post-convergence) faceà tous les évènements futurs avec un coût inférieur ouégalà celui de BGP pour la gestion de la panne précédente !

# Summary. An optional shortened abstract.
summary: Protéger le trafic de transit BGP contre les événements internes.

tags: []

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://hal.archives-ouvertes.fr/hal-03221273/document'
url_code: ''
url_dataset: 'https://zenodo.org/record/4436109#.Yj3VR9DMKV4'
url_poster: ''
url_project: ''
url_slides: 'https://drive.google.com/file/d/1swNY-cxx1x8XeVt8EY5jyE9WBkxr0c-0/view?usp=sharing'
url_source: ''
url_video: 'https://videos.univ-lr.fr/video/2051-lart-danticiper-les-changements-igp-pour-acheminer-optimalement-la-patate-en-transit/'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
#image:
#  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/pLCdAaMFLTE)'
#  focal_point: ""
#  preview_only: false

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

