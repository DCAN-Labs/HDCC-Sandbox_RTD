<h1><i class="fa-brands fa-codepen"></i> Welcome to the HDCC Sandbox Tutorial!</h1>

Large-scale initiatives such as the **Healthy Brain Child Development ([HBCD](https://hbcdstudy.org/)) Study** are generating unprecedented volumes of longitudinal neuroimaging and behavioral data. This presents novel opportunities to explore the brain’s interaction with the environment during development. 

The **[HDCC Sandbox](https://nbdc-safe.lassoinformatics.com/pun/sys/dashboard)** is a secure, cloud-based environment that allows researchers to access and analyze HBCD study data. It is provided via the [NBDC Data Access Platform](https://nbdc-datashare.lassoinformatics.com/) to facilitate data exploration and analysis via secure infrastructure and scalable computational tools.

**The Sandbox provides:**

- Secure access to controlled HBCD datasets  
- A browser-based virtual desktop environment  
- A suite of built-in tools for analysis, including **RStudio** and **Jupyter Notebook**  
- A user-friendly interface suitable for both beginner and advanced users  

This tutorial series walks through how to access the Sandbox and use its analysis tools to explore HBCD data.

See the [HBCD Data Release Docs](https://docs.hbcdstudy.org/latest/) for documentation about the latest release data and the [NBDC Data Access Platform](https://nbdc-datashare.lassoinformatics.com/) to explore and download study data.

## Tutorials 

???+ info "Upcoming HDCC Workshop"
    These tutorial modules will be presented as part of the **HDCC Workshop** at the HBCD Conference (San Diego, March 2026). See details [here](workshop.md).

**Module 1: [Access the Sandbox →](access.md)**       
Learn how to connect to and launch the Sandbox environment via the NBDC Data Access Platform.       

**Module 2: [Using the Sandbox Desktop →](load_desktop.md)**          
Learn how to navigate the virtual desktop environment and clone external repositories into the Sandbox for analysis.        

**Module 3: [RStudio Setup →](r_studio.md)**       
Launch RStudio Server inside the Sandbox and install dependencies required for the tutorial examples.       

**Module 4: [Volumetric Analysis (Jupyter) →](volumetric_analysis.md)**       
Explore developmental trajectories of volumetric outputs from **BIBSnet** using Jupyter notebooks.      

**Module 5: [Statistical Testing (QSIRecon) →](model_array.md)**          
Perform scalable statistical analysis of diffusion outputs without breaking the bank on memory using the `modelarray` package. Users will examine the trajectory of diffusion outputs from QSIRecon.            

**Module 6: [Multivariate Prediction (XCP-D) →](xcpd-multivar-predictions.md)**      
Apply dimensionality reduction and predictive modeling to functional connectivity outputs. Users will examine how the trajectory of functional connectivity data impacts cognitive outcomes.        
