---
title: "Computing Delay-Constrained Least-Cost Paths for Segment Routing is Easier Than You Think"

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

date: "2020-11-24T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
#publishDate: "2022-09-20T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *IEEE International Symposium on Network Computing and Applications*
publication_short: In *NCA*

abstract:  With the growth of demands for quasi-instantaneous communication services such as real-time video streaming, cloud gaming, and industry 4.0 applications, multi-constraint Traffic Engineering (TE) becomes increasingly important. While legacy TE management planes have proven laborious to deploy, Segment Routing (SR) drastically eases the deployment of TE paths and thus became the most appropriate technology for many operators. The flexibility of SR sparked demands in ways to compute more elaborate paths. In particular, there exists a clear need in computing and deploying Delay-Constrained Least-Cost paths (DCLC) for real-time applications requiring both low delay and high bandwidth routes. However, most current DCLC solutions are heuristics not specifically tailored for SR. In this work, we leverage both inherent limitations in the accuracy of delay measurements and an operational constraint added by SR. We include these characteristics in the design of BEST2COP, an exact but efficient ECMP-aware algorithm that natively solves DCLC in SR domains. Through an extensive performance evaluation, we first show that BEST2COP scales well even in large random networks. In real networks having up to thousands of destinations, our algorithm returns all DCLC solutions encoded as SR paths in way less than a second.

# Summary. An optional shortened abstract.
summary: Computer constrained path deployable with Segment Routing for network of 1000 nodes.

tags: []

# Display this page in the Featured widget?
featured: false

awards:
- name: ITC PAPER OF THE YEAR
  url: "https://itc.committees.comsoc.org/awards/"
- name: BEST PAPER AWARD
  url: "https://tma.ifip.org/2019/awards/"
- name: BEST OPEN DATASET (runner-up)
  url: "https://tma.ifip.org/2019/awards/"


# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/pdf/2011.05191.pdf'
url_code: 'https://github.com/talfroy/BEST2COP'
url_dataset: ''
url_poster: 'https://drive.google.com/drive/folders/11X-IZMjBegMQQirWrKHDy6zm38fnZ7an'
url_project: ''
url_slides: 'https://drive.google.com/file/d/13nelTDwJFsp6Cw1fXWiY3D5onqqx1V6q/view?usp=sharing'
url_source: ''
url_video: 'https://www.youtube.com/watch?v=U1Aa0151D\_k'

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

