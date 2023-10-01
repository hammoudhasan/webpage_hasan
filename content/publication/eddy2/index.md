---
title: "Large eddy simulations of ammonia-hydrogen jet flames at elevated pressure using principal component analysis and deep neural networks"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here 
# and it will be replaced with their full name and linked to their profile.
authors:
- Suliman Abdelwahid
- Mohammad Rafi Malik
- admin
- Francisco E. Hernandez Perez
- Bernard Ghanem
- Hong Im


# Author notes (optional)
author_notes:
- ""
- ""
- ""
- ""
- ""
- ""

date: "2023-01-15"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2023-01-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: AIAA SCITECH 2023 Forum
publication_short: In *AIAA SCITECH 2023 Forum*

abstract: The combustion of ammonia/hydrogen is currently gaining importance in the power generation sector as an alternative for hydrocarbon fuels and improved fundamental insights will facilitate its application. To investigate the complex interactions between turbulence and chemistry for ammonia-hydrogen jet flames under high-pressure conditions, large eddy simulation (LES) computations are conducted using the PC-transport model, which is based on Principal Component Analysis (PCA), coupled with nonlinear regression that utilizes deep neural networks (DNN) to enhance the size-reduction potential of PCA. Classical statistics-based nonlinear regression methods are inefficient at fitting highly nonlinear manifolds and when large data sets are involved. These two drawbacks can be overcome by utilizing DNN tools. Several DNN architectures composed of fully connected layers of different depths and widths, batch normalization, and various activation functions coupled with various loss functions (mean squared error, absolute error, and ) are explored to find an optimal fit to the thermo-chemical state-space manifold. The ability to achieve highly accurate mapping through DNN-based nonlinear regression with an -score is shown by employing a single graphical processing unit (Nvidia RTX 3090). Furthermore, the proposed PC-DNN approach is extended to include differential diffusion based on a rotation technique and utilization of the mixture-averaged transport model for the training data set. To demonstrate the potential of the PC-DNN approach in modeling turbulent non-premixed combustion, LES results are compared with the recent Raman/Rayleigh scattering measurements that were obtained at the KAUST high-pressure combustion duct (HPCD). Results show that the PC-DNN approach is able to capture key flame characteristics with reasonable accuracy using only two principal components. The inclusion of differential diffusion leads to improved predictions, although some discrepancies are observed in fuel-lean regions.

# Summary. An optional shortened abstract.
summary: 

tags: []

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://www.sciencedirect.com/science/article/abs/pii/S0010218023001657'
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

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