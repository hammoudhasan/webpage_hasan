---
title: 'Check Your Other Door! Creating Backdoor Attacks in the Frequency Domain'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here 
# and it will be replaced with their full name and linked to their profile.

authors:
- admin
- Bernard Ghanem

author_notes:
- ""
- ""
- ""
- ""
- ""


date: "2022-05-22"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2022-05-22T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: British Machine Vision Conference (BMVC)
publication_short: In *BMVC2022*

abstract: Deep Neural Networks (DNNs) are ubiquitous and span a variety of applications ranging from image classification to real-time object detection. As DNN models become more sophisticated, the computational cost of training these models becomes a burden. For this reason, outsourcing the training process has been the go-to option for many DNN users. Unfortunately, this comes at the cost of vulnerability to backdoor attacks. These attacks aim to establish hidden backdoors in the DNN so that it performs well on clean samples, but outputs a particular target label when a trigger is applied to the input. Existing backdoor attacks either generate triggers in the spatial domain or naively poison frequencies in the Fourier domain. In this work, we propose a pipeline based on Fourier heatmaps to generate a spatially dynamic and invisible backdoor attack in the frequency domain. The proposed attack is extensively evaluated on various datasets and network architectures. Unlike most existing backdoor attacks, the proposed attack can achieve high attack success rates with low poisoning rates and little to no drop in performance while remaining imperceptible to the human eye. Moreover, we show that the models poisoned by our attack are resistant to various state-of-the-art (SOTA) defenses, so we contribute two possible defenses that can evade the attack.



# Summary. An optional shortened abstract.
summary: 

tags: []

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://bmvc2022.mpi-inf.mpg.de/0259.pdf'


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