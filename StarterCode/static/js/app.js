// Declare the URL as a variable

// Use the D3 library to read in samples.json from the URL
    //Declare data type as a variable
    
//Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual
    //Find the top 10 OTUs for the first sample
    //Create horizontal bar chart
        //Use sample_values as the x-values for the bar chart
        //Use otu_ids as the y-labels for the bar chart
        //Use otu_labels as the hovertext for the chart.  
    //Add layout details
    //Display plot

//Create a bubble chart that displays each sample
    //Create a bubble for the first sample
        //Use otu_ids for the x-values.
        //Use sample_values for the y-values.
        //Use sample_values for the marker size.
        //Use otu_ids for the marker colors.
        //Use otu_labels for the text values.
    //Add layout details
    //Display plot

//Display the sample metadata, i.e., an individual's demographic information
    //Declare demographic information info as variables
    //Add layout details
    //Display metadata

//Display each key-value pair from the metadata JSON object somewhere on the page
    //Add names to a dropdown menu
    //Display key-value pair

//Update all the plots when a new sample is selected
    //Create function to update all the data on the page to match selected ID
