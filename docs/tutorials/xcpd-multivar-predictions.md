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

1. Return to your interactive sessions, you can do this by clicking on a new session in the dashboard and opening a new window. Instead of
     launching, click on the “My Interactive Sessions” highlighted in blue – it will open the link to your sessions page.
<img src="../images/module6/image1.png" alt="Study Target Progress" width="70%" height="auto" class="center">

2. From your sessions, select your R studio server and launch it – if it's already open, you can skip these steps. Don't worry if you     accidentally relaunch, r studio servers are saved as images and are restored between sessions.
<img src="../images/module6/image2.png" alt="Study Target Progress" width="70%" height="auto" class="center">

3. Navigate to the “XCP_D_multivariate_prediction” in the examples folder and select the `prediction_FINAL.qmd` file.
<img src="../images/module6/image3.png" alt="Study Target Progress" width="70%" height="auto" class="center">

4. This will open the multivariate_prediction example, which can also be knitted as a PDF or html output. Here we will follow the steps
     in order.      
  <img src="../images/module6/image4.png" alt="Study Target Progress" width="60%" height="auto" class="center">
