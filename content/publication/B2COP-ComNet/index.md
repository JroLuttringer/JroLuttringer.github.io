---
title: "Deploying Near-Optimal Delay-Constrained Paths with Segment Routing in Massive-Scale Networks"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here 
# and it will be replaced with their full name and linked to their profile.
authors:
- jean-romain-luttringer
- Thomas Alfroy
- Pascal Mérindol
- Quentin Bramas
- François Clad
- Cristel Pelsser

# Author notes (optional)
#author_notes:
#- "Equal contribution"
#- "Equal contribution"

date: "2022-10-01T00:00:00Z"
doi: "https://doi.org/10.1016/j.comnet.2022.109015"

# Schedule page publish date (NOT publication's date).
publishDate: "2022-10-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: In *Computer Networks* 

#publication_short: In *ICW*

abstract: With a growing demand for quasi-instantaneous communication services such as real-time video streaming, cloud gaming, and industry 4.0 applications, multi-constraint Traffic Engineering (TE) becomes increasingly important. While legacy TE management planes have proven laborious to deploy, Segment Routing (SR) drastically eases the deployment of TE paths and is thus increasingly adopted by Internet Service Providers (ISP). There is a clear need in computing and deploying Delay-Constrained Least-Cost paths (DCLC) with SR for real-time interactive services. However, most current DCLC solutions are not tailored for SR. They also often lack efficiency or guarantees. Similarly to approximation schemes, we argue that the challenge is to design an algorithm providing both performances and guarantees. However, conversely to most of these schemes, we also consider operational constraints to provide a practical, high-performance implementation. We leverage the inherent limitations of delay measurements and account for the operational constraint added by SR to design a new algorithm, best2cop, providing guarantees and performance in all cases. Best2cop outperforms a state-of-the-art algorithm on both random and real networks of up to 1000 nodes. Relying on commodity hardware with a single thread, our algorithm retrieves all non-superfluous 3-dimensional routes in only 250ms and 100ms respectively. This execution time is further reduced using multiple threads, as the design of best2cop enables a speedup almost linear in the number of cores. Finally, we extend best2cop to deal with massive scale ISP by leveraging the multi-area partitioning of these deployments. Thanks to our new topology generator specifically designed to model the realistic patterns of such massive IP networks, we show that best2cop solves DCLC-SR in approximately 1 second even for ISP having more than 100000 routers.

# Summary. An optional shortened abstract.
summary: Constrained path computation for segment routing domains of 100 000 nodes with BEST2COP.

tags: []

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/pdf/2110.09320.pdf'
url_code: 'https://github.com/talfroy/BEST2COP'
url_dataset: 'https://zenodo.org/record/5535430#.Yj3SXNDMKV4'
url_poster: 'https://www.dropbox.com/s/u6smo40kve15ro2/Poster%20LUTTRINGER%20These.pdf?dl=0'
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

