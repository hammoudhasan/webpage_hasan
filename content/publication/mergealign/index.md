---

title: "Model Merging and Safety Alignment: One Bad Model Spoils the Bunch"

# Authors
authors:
- admin
- Umberto Michieli
- Fabio Pizzati
- Philip Torr
- Adel Bibi
- Bernard Ghanem
- Mete Ozay

author_notes:
- ""
- ""
- ""
- ""
- ""
- ""
- ""

date: "2024-06-30"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2024-06-30T00:00:00Z"

# Publication type.
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: EMNLP Findings
publication_short: EMNLP 2024

abstract: Merging Large Language Models (LLMs) is a cost-effective technique for combining multiple expert LLMs into a single versatile model, retaining the expertise of the original ones. However, current approaches often overlook the importance of safety alignment during merging, leading to highly misaligned models. This work investigates the effects of model merging on alignment. We evaluate several popular model merging techniques, demonstrating that existing methods do not only transfer domain expertise but also propagate misalignment. We propose a simple two-step approach to address this problem (i) generating synthetic safety and domain-specific data, and (ii) incorporating these generated data into the optimization process of existing data-aware model merging techniques. This allows us to treat alignment as a skill that can be maximized in the resulting merged LLM. Our experiments illustrate the effectiveness of integrating alignment-related data during merging, resulting in models that excel in both domain expertise and alignment.

summary: 

tags: []

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/abs/2406.14563'

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