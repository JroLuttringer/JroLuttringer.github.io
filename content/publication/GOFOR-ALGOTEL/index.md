---
title: "La ROUTOURNE va tourner : le retour des tours de détours sous leurs plus beaux atours"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here 
# and it will be replaced with their full name and linked to their profile.
authors:
- Quentin Bramas
- jean-romain-luttringer
- Pascal Mérindol

# Author notes (optional)
#author_notes:
#- "Equal contribution"
#- "Equal contribution"

date: "2024-07-06T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
#publishDate: "2017-01-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *26èmes Rencontres Francophones sur les Aspects Algorithmiques des Télécommunications*
publication_short: In *Algotel 2024*

abstract: Le routage par segments (SR) offre un contrôle précis sur les chemins empruntés ; il spécifie dans les paquets IP une liste de détours, appelés segments. Le nombre de détours pouvant être spécifiés est cependant limité par le matériel. Lors du calcul de listes de segments, il est donc nécessaire d'en limiter la taille. Bien que des solutions aient été proposées pour calculer ces listes, celles-ci manquent de généralité, et ne sont pas toujours optimales ou efficaces. Nous présentons ROUTOURNE, une méthode permettant de détourner les algorithmes de routage afin que ces derniers calculent, non pas simplement un chemin physique optimal à traduire en liste de segments a posteriori (sans garantie sur sa taille), mais directement les listes de segments optimales et déployables par le matériel sous-jacent. ROUTOURNE facilite ainsi le déploiement de stratégies d'ingénierie de trafic et de politiques avancées, notamment pour équilibrer la charge depuis les sources. Malgré une route truffée de défis surprenants -- en particulier, la perte d'isotonie induite par SR, ROUTOURNE s'avère efficace, induisant au pire un surcoût linéaire. Son exactitude et optimalité ont été prouvées, et son efficacité évaluée en la généralisant à plusieurs algorithmes de calcul de chemins plus ou moins complexes.

# Summary. An optional shortened abstract.
summary: Detecting and Revealing hidden MPLS tunnels within the Internet.

tags: []

# Display this page in the Featured widget?
featured: false
# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://hal-ciheam.iamm.fr/ALGOTEL2024/hal-04567055v2'
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

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

