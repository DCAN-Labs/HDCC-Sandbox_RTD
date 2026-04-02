<h1><i class="fa-brands fa-codepen" style="font-size: 0.95em;"></i>&nbsp; Welcome to the HDCC Sandbox Tutorial Series!</h1>

## Overview

!!! info "**This tutorial series was developed as part of the 2026 HDCC Workshop - see workshop syllabus <a href="assets/pdf/Sandbox-Workshop2026.pdf" target="_blank">here</a>.**"

Large-scale initiatives such as the **HEALthy Brain Child Development ([HBCD](https://hbcdstudy.org/)) Study** are generating unprecedented volumes of longitudinal neuroimaging and behavioral data. These datasets provide powerful opportunities to study how brain development interacts with environmental influences across critical early life periods. 

**[HBCD](https://hbcdstudy.org/)** (as well as **[ABCD](https://abcdstudy.org/)**) study data is available via the **[NBDC Data Access Platform](https://nbdc-datashare.lassoinformatics.com/)**, a centralized portal where researchers can explore, search, request access to, and download release data.
The **[HDCC Sandbox](https://nbdc-safe.lassoinformatics.com/pun/sys/dashboard)** extends this platform by providing a secure, cloud-based analysis environment where approved users can analyze release data directly without downloading or managing large datasets locally. The Sandbox provides:

- Secure access to controlled NBDC datasets such as HBCD Study data
- A browser-based virtual desktop environment
- Built-in analysis tools including RStudio and Jupyter Notebook
- A user-friendly interface suitable for both beginner and advanced users

This tutorial series will guide you through accessing the HDCC Sandbox and using its analysis tools to explore HBCD Study data within the NBDC ecosystem. See the **[HBCD Data Release Docs](https://docs.hbcdstudy.org/latest/)** for detailed documentation about the latest release data.

## Tutorials

**All of the tutorial modules below can be found in the [HDCC_Sandbox_tutorials](https://github.com/DCAN-Labs/) GitHub repository.**

**Module 1: [Access the Sandbox →](tutorials/access.md)**       
Learn how to connect to and launch the Sandbox environment via the NBDC Data Access Platform.       

**Module 2: [Using the Sandbox Desktop →](tutorials/load_desktop.md)**          
Learn how to navigate the virtual desktop environment and clone external repositories into the Sandbox for analysis.        

**Module 3: [RStudio Setup →](tutorials/r_studio.md)**       
Launch RStudio Server inside the Sandbox and install dependencies required for the tutorial examples.       

**Module 4: [Volumetric Analysis (Jupyter) →](vtutorials/olumetric_analysis.md)**       
Explore developmental trajectories of volumetric outputs from the [BIBSnet](https://bibsnet.readthedocs.io/en/latest/) pipeline using Jupyter notebooks.      

**Module 5: [Diffusion Statistical Testing (QSIRecon) →](tutorials/model_array.md)**          
Perform scalable statistical analysis of diffusion outputs without breaking the bank on memory using the `modelarray` package. Users will examine the trajectory of diffusion outputs from [QSIRecon](https://qsirecon.readthedocs.io/en/latest/).            

**Module 6: [Multivariate Prediction (XCP-D) →](tutorials/xcpd-multivar-predictions.md)**      
Apply dimensionality reduction and predictive modeling to functional connectivity outputs. Users will examine how the trajectory of functional connectivity data impacts cognitive outcomes.        

<a href="https://github.com/DCAN-Labs/HDCC_Sandbox_tutorials" class="button-link">
  <i class="fa-brands fa-github"></i> View Code on GitHub
</a>
