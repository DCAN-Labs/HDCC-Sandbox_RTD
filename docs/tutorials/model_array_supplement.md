# Module 5: Additional Notes

## Computing clusters, job submissions, and ModelArray
To run on the cluster, we recommend you use our tutorial on cluster-based submissions located at ( `https://github.com/PennLINC/hbcd_pipeline_replication_guide/tree/gh-pages/processing_code/mass_univariate` ). 


## How to output brain-based data for visualizations
To output the data for brain-based visualization we must first output the results as an h5 file. Change the `/path/to/a/new/h5/file.h5` to output the results to your preferred filename. 
```
writeResults("/path/to/a/new/h5/file.h5", df.output = res_wrap, analysis_name = "mapmri_rtop_anova_and_means")
```

Next, we will need to convert the h5 file into a NIFTI (`.nii.gz`) file. We can modify the code chunk for `voxelstats_write` to output the NIFTI. We must provide the correct `cohort-file` for non-imaging data, `analysis-name` saved above, the correct `input-hdf5` imaging input file, and an `example-nifti` template for creating the NIFTI output. `output-dir` can be modified towards where the output NIFTI will be located.

```
$ voxelstats_write \
  --cohort-file /nbdc-sandbox/derivatives/qsirecon-modelarray/ABCC_mapmri_rtop_phenotypes.csv \
  --analysis-name mapmri_rtop_anova_and_means \
  --input-hdf5 /nbdc-sandbox/derivatives/qsirecon-modelarray/qsirecon-mapmri_rtop.h5 \
  --output-dir /where/you/want/to/put/your/niftis \
--example-nifti /nbdc-sandbox/derivatives/qsirecon-modelarray/qsirecon-mapmri_rtop.nii.gz # Need to find the real path
```