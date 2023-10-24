---
title: "A Simple and General Operational Framework to Deploy Optimal Routes with Source Routing"

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

date: "2023-02-15T00:00:00Z"
# doi: "https://doi.org/10.48550/arXiv.2205.03372"

# Schedule page publish date (NOT publication's date).
#publishDate: "2022-09-20T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication:  "*Pre-print*"
publication_short: "*Pre-print*"

abstract:  "Source Routing as enabled by Segment Routing (SR) allows controlling forwarding paths by specifying a list of detours (or segments) to deviate the packets along arbitrary routes. Computing the list of segments to encode a path is a challenging task (in particular when the number of segments has to be minimized) that has never been properly addressed.


In this paper, we finally tackle this challenge. We show that, conversely to what is often proposed in the literature, the segment list computation must be tied within the path computation to solve this task correctly and efficiently. Thus, we design a flexible framework, GOFOR-SR, that can wrap SR around usual path computation algorithms to output minimal segment lists encoding the solutions. Our generic formal model supports many use cases with diverse optimization strategies and contains the first incremental algorithm that encodes a path into a minimal list of segments of any type.


GOFOR not only eases the optimal integration of SR into varied path computation algorithms but also offers various path diversity models, all for a linear overhead. We implement GOFOR and demonstrate its benefits when tackling challenging use cases through an experimental evaluation."

# Summary. An optional shortened abstract.
summary: "Augment standard path computation schemes to find the optimal segment lists for a given objective"

tags: []

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

url_pdf: ''
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

