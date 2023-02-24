---
title: "(Thesis) Path Computation in IP Networks : Reliable Hot-Potato Routing and Multi-Constrained Tunnels"
subtitle: ""

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here 
# and it will be replaced with their full name and linked to their profile.
authors:
- jean-romain-luttringer

# Author notes (optional)
#author_notes:
#- "Equal contribution"
#- "Equal contribution"

date: "2022-11-28T00:00:00Z"

badge:
- name: Thesis
  url: ""

# Schedule page publish date (NOT publication's date).
#publishDate: "2021-09-20T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["7"]

# Publication name and optional abbreviated publication name.
publication: ""
publication_short: ""

abstract: The first path of this thesis is dedicated to path computation. The strict requirements of modern applications communicating over the Internet require computing multi-criteria paths, considering for example operational cost as well as latency. This problem, NP-Hard in nature, seems to become considerably more complex when considering the operational constraints added by the deployment technologies, necessary to implement these paths within the routers.   In particular, Segment Routing (the most widely used technology at the moment) requires to consider a new constrained metric, whose singular behaviour induces the loss of the subpaths optimality property and thus prevents the naive use of existing algorithms. In this thesis, we focus on multi-criteria path computations for Segment Routing. Using an original data structure, we design methods and algorithms to efficiently take into account these new constraints. Although a complete solution is proposed, we show that the methods used are generic, and can be used by other algorithms to properly consider Segment Routing. We implement these algorithms, and show that our methods allow a very efficient computation of these multi-criteria paths even on large-scale networks (less than one second for 100 000 nodes). In the second part of this thesis, we focus on inter and intra-domain routing. We show that intra-domain event may lead to the reconvergence of the inter-domain routing protocol, which is slow. We devise a new way to combine the two protocols to mitigate these effects for a limited overhead. We" show that our approach can lead to promising results through an extensive theoretical evaluation.

# Summary. An optional shortened abstract.
summary: Multi-constrained path computation for Segment Routing and Improved BGP re-convergence upon internal events

tags: []

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://www.dropbox.com/s/531otxmyg65qv5h/manuscriptF.pdf?dl=0'
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: 'https://www.dropbox.com/s/cto8smkups2l59l/presentation-PHD-JR-LUTTRINGER.pdf?dl=0'
url_source: ''
url_video: ''

---

