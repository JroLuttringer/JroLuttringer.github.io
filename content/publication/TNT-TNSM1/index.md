---
title: "Let there be light: Revealing hidden MPLS tunnels with TNT"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here 
# and it will be replaced with their full name and linked to their profile.
authors:
- jean-romain-luttringer
- Yves Vanaubel
- Pascal Mérindol
- Benoit Donnet
- Jean-Jacques Pansiot

# Author notes (optional)
#author_notes:
#- "Equal contribution"
#- "Equal contribution"

date: "2019-12-25T00:00:00Z"
doi: "10.1109/TNSM.2019.2962278"

# Schedule page publish date (NOT publication's date).
#publishDate: "2017-01-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *IEEE Transactions on Network and Service Management*
publication_short: In *IEEE TNSM*

abstract: Internet topology discovery aims at analyzing one of the most complex distributed systems currently deployed. Usually, it relies on measurement campaigns using hop-limited probes sent with traceroute. However, this probing tool comes with several limits. In particular, some MPLS clouds might obfuscate collected traces. The resulting Internet maps, their inferred properties, and the graph models are thus incomplete and inaccurate. In this paper, we introduce TNT (Trace the Naughty Tunnels), an extension to Paris traceroute for revealing, or at least detect, all MPLS tunnels along a path. First, along with traceroute and ping probes, TNT looks for hints indicating the presence of hidden tunnels. Those hints are peculiar patterns in the resulting output, e.g., significant TTL shifts or duplicate IP addresses. Second, if those hints trigger alarms, TNT launches additional dedicated probing for possibly revealing hidden tunnels. We use GNS3 to reproduce, verify, and understand the limits and capabilities of TNT in a controlled environment. We also calibrate the thresholds at which alarms are triggered through a dedicated measurement campaign. Finally, we deploy TNT on the Archipelago platform and provide a quantified classification of MPLS configurations. All our results, including the data, the code, and the GNS3 experiments, are fully and publicly available.

# Summary. An optional shortened abstract.
summary: Detecting and Revealing hidden MPLS tunnels within the Internet.

tags: []

# Display this page in the Featured widget?
featured: false
# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://hal.archives-ouvertes.fr/hal-02993507/document'
url_code: 'https://github.com/YvesVanaubel/TNT'
url_dataset: 'https://people.montefiore.uliege.be/bdonnet/mpls/'
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

