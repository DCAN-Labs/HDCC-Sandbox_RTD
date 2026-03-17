# Module 6: XCP-D Output Multivariate Prediction

[XCP-D](https://xcp-d.readthedocs.io/en/latest/) pipeline derivatives includes resting-state functional connectivity matrices to leverage for downstream analyses. Functional connectivity is a key marker of functional brain organization, which evolves across development. Measuring developmental trajectories of functional connectivity and understanding how these trajectories relate to behavioral outcomes such as cognition is an important goal for many researchers.

However, functional connectivity data are extremely high-dimensional, making whole-brain multivariate modeling computationally intensive. Dimensionality reduction techniques can substantially reduce computational demands while preserving meaningful structure in the data. When applied correctly, these methods allow complex analyses to be performed even with limited RAM and CPU resources.

In this module, you will learn best practices for dimensionality reduction and develop longitudinal predictive models of cognitive outcomes using parcellated whole-brain connectivity data.

## Module Objectives

By the end of this module, users will be able to:

1. **Load XCP-D parcellated connectivity outputs.**
1. Perform **dimensionality reduction on training data.**
1. Apply the reduced feature space within a **longitudinal predictive model of cognition.**
1. **Evaluate and visualize** model predictions.

## Walkthrough

1. Return to your **Interactive Sessions**. You can do this by opening the dashboard in a new window. Instead of launching a new session, click **“My Interactive Sessions”** (highlighted in blue) to open the page listing your existing sessions.         
<img src="../images/module6/image1.png" alt="Study Target Progress" width="70%" height="auto" class="center">

2. From the sessions page, locate your **RStudio Server** session and launch it. If the session is already open, you can skip this step. Don't worry if you accidentally relaunch it - RStudio sessions are saved as images and will be restored between launches.      
<img src="../images/module6/image2.png" alt="Study Target Progress" width="70%" height="auto" class="center">

3. Navigate to the `XCP_D_multivariate_prediction/` directory within the `examples/` folder and open the file `prediction_FINAL.qmd`.       
<img src="../images/module6/image3.png" alt="Study Target Progress" width="70%" height="auto" class="center">

4. This will open the **multivariate prediction example**, which can also be rendered as HTML or PDF output. From here, we work through the Quarto (.qmd) file step-by-step.          
<img src="../images/module6/image4.png" alt="Study Target Progress" width="60%" height="auto" class="center">
## Code Walkthrough

