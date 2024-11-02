---

title: "Towards Interpretable Deep Local Learning with Successive Gradient Reconciliation"

# Authors
authors:
- Yibo Yang
- Xiaojie Li
- Motasem Alfarra
- admin
- Adel Bibi
- Philip Torr
- Bernard Ghanem

author_notes:
- ""
- ""
- ""
- ""
- ""
- ""
- ""

date: "2024-06-15"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2024-06-15T00:00:00Z"

# Publication type.
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: ICML
publication_short: ICML 2024

abstract: Relieving the reliance of neural network training on a global back-propagation (BP) has emerged as a notable research topic due to the biological implausibility and huge memory consumption caused by BP. Among the existing solutions, local learning optimizes gradient-isolated modules of a neural network with local errors and has been proved to be effective even on large-scale datasets. However, the reconciliation among local errors has never been investigated. In this paper, we first theoretically study non-greedy layer-wise training and show that the convergence cannot be assured when the local gradient in a module w.r.t. its input is not reconciled with the local gradient in the previous module w.r.t. its output. Inspired by the theoretical result, we further propose a local training strategy that successively regularizes the gradient reconciliation between neighboring modules without breaking gradient isolation or introducing any learnable parameters. Our method can be integrated into both local-BP and BP-free settings. In experiments, we achieve significant performance improvements compared to previous methods. Particularly, our method for CNN and Transformer architectures on ImageNet is able to attain a competitive performance with global BP, saving more than 40% memory consumption.

summary: 

tags: []

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/abs/2406.05222'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
# image:
#   caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/pLCdAaMFLTE)'
#   focal_point: ""
#   preview_only: false

# Associated Projects (optional).
# projects: []

# Slides (optional).
slides: ""

---