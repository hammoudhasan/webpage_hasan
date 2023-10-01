---
title: "Real-Time Evaluation in Online Continual Learning: A New Hope"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here 
# and it will be replaced with their full name and linked to their profile.
authors:
- Yasir Ghunaim
- Adel Bibi
- Kumail Alhamoud
- Motasem Alfarra 
- admin
- Ameya Prabhu
- Philip H. S. Torr
- Bernard Ghanem

author_notes:
- "Equal contribution"
- "Equal contribution"
- ""
- ""
- ""
- ""
- ""

date: "2023-02-23"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2023-02-23T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: Computer Vision and Pattern Recognition (CVPR)
publication_short: Highlight in *CVPR23*

abstract: Current evaluations of Continual Learning (CL) methods typically assume that there is no constraint on training time and computation. This is an unrealistic assumption for any real-world setting, which motivates us to propose; a practical real-time evaluation of continual learning, in which the stream does not wait for the model to complete training before revealing the next data for predictions. To do this, we evaluate current CL methods with respect to their computational costs. We conduct extensive experiments on CLOC, a large-scale dataset containing 39 million time-stamped images with geolocation labels. We show that a simple baseline outperforms state-of-the-art CL methods under this evaluation, questioning the applicability of existing methods in realistic settings. In addition, we explore various CL components commonly used in the literature, including memory sampling strategies and regularization approaches. We find that all considered methods fail to be competitive against our simple baseline. This surprisingly suggests that the majority of existing CL literature is tailored to a specific class of streams that is not practical. We hope that the evaluation we provide will be the first step towards a paradigm shift to consider the computational cost in the development of online continual learning methods.

# Summary. An optional shortened abstract.
summary: 

tags: []

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/abs/2302.01047'
url_code: 'https://github.com/Yasir-Ghunaim/RealtimeOCL'
url_dataset: ''
url_poster: 'https://docs.google.com/presentation/d/16gA6zKqaVNM4eAdUm7NkWf13YCy7FyR4/edit?usp=share_link&ouid=105085779370076248797&rtpof=true&sd=true'
url_project: ''
url_slides: ''
url_source: ''
url_video: 'https://www.youtube.com/watch?v=UFfZHbuLtEA&ab_channel=YasirGhunaim'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
# image:
#   caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/pLCdAaMFLTE)'
#   focal_point: ""
#   preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
# projects:
# - example

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
# slides: example
---
<!-- 
{{% callout note %}}
Click the *Cite* button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the *Slides* button to check out the example.
{{% /callout %}}

Supplementary material can be found [here](https://drive.google.com/file/d/17tGxceooVTT0JFkBsQjsh3h529U7yI1v/view?usp=sharing). -->
