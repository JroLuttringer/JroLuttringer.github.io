---
title: "Online Space-Time Travel Planning in Dynamic Graphs"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here 
# and it will be replaced with their full name and linked to their profile.
authors:
- Quentin Bramas
- jean-romain-luttringer
- Sebastien Tixeuil

# Author notes (optional)
#author_notes:
#- "Equal contribution"
#- "Equal contribution"

date: "2024-07-06T00:00:00Z"
doi: "https://doi.org/10.4230/LIPIcs.SAND.2024.7"

# Schedule page publish date (NOT publication's date).
#publishDate: "2022-09-20T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *3rd Symposium on Algorithmic Foundations of Dynamic Networks (SAND 2024) *
publication_short: In *SAND*

abstract:  We study the problem of traveling in an unknown dynamic graph, to reach a destination with minimum latency. At each step of the execution, an agent can decide to move to a neighboring node if an edge exists at this time instant, wait at the current node in the hope that other links will appear in the future, or move backward in time using an expensive time travel device. A travel that makes use of backward time travel is called a space-time travel. Our aim is to arrive at the destination with zero delay, which always requires the use of backward time travel if no path exists to the destination during the first time instant. Finding an optimal space-time travel is polynomial when the agent knows the entire dynamic graph (including the future edges), even with additional constraints. However, we consider in this paper that the agent discovers the dynamic graph while it is exploring it, in an online manner. In this paper, we propose two models that define how an agent learns new knowledge about the dynamic graph during the execution of its protocol; the T-online model, where the agent reaching time t learns about the entire past of the network until t (even nodes not yet visited), and the S-online model, where the agent learns about the past and future about the current node he is located at. We present an algorithm with an optimal competitive ratio of 2 for the T-online model. In the S-online model, we prove a lower bound of 2/3n-7/4 and an upper bound of 2n-3 on the optimal competitive ratio when the cost function is linear.

# Summary. An optional shortened abstract.
# summary: Calculer des chemins contraints déployables avec Segment Routing pour des réseaux de plus de 1000 noeuds.

tags: []

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

url_pdf: 'https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.SAND.2024.7'
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

