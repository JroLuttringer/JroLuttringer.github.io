---
title: "A Fast-Convergence Routing of the Hot-Potato"

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

date: "2021-01-22T00:00:00Z"
doi: "10.1109/INFOCOM42981.2021.9488880"

# Schedule page publish date (NOT publication's date).
#publishDate: "2021-09-20T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *IEEE Conference on Computer Communications*
publication_short: In *IEEE INFOCOM*

abstract: Interactions between the intra- and inter-domain routing protocols received little attention despite playing an important role in forwarding transit traffic. More precisely, by default, IGP distances are taken into account by BGP to select the closest exit gateway for the transit traffic (hot-potato routing). Upon an IGP update, the new best gateway may change and should be updated through the (full) re-convergence of BGP, causing superfluous BGP processing and updates in many cases. We propose OPTIC (Optimal Protection Technique for Inter-intra domain Convergence), an efficient way to assemble both protocols without losing the hot-potato property. OPTIC pre-computes sets of gateways (BGP next-hops) shared by groups of prefixes. Such sets are guaranteed to contain the post-convergence gateway after any single IGP event for the grouped prefixes. The new optimal exits can be found through a single walk-through of each set, allowing the transit traffic to benefit from optimal BGP routes almost as soon as the IGP converges. Compared to vanilla BGP, OPTIC's structures allow it to consider a reduced number of entries; this number can be reduced by 99% for stub networks. The update of OPTIC's structures, which is not required as long as border routers remain at least bi-connected, scales linearly in time with its number of groups.

# Summary. An optional shortened abstract.
summary: Protecting transiting BGP trafic from internal events and the effects of hot-potato routing.

tags: []

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/pdf/2101.09002.pdf'
url_code: ''
url_dataset: 'https://zenodo.org/record/4436109#.Yj3VR9DMKV4'
url_poster: ''
url_project: ''
url_slides: 'https://drive.google.com/file/d/1nzE9ET73bLPCWRb8LRxzZcEEO-1\_4Tdv/view?usp=sharing'
url_source: ''
url_video: 'https://www.youtube.com/watch?v=fhrms7\_wPYk'

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

