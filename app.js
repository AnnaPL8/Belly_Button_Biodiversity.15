function buildMetadata(sample) {
  console.log("Inside buildMetadata()...");
  console.log(sample);
  /* @TODO: Complete the following function that builds the metadata panel
  /* I need to go to the html webpage and see the panel they are refering to
  It will be "sample-metadata" panel. Whenever the sample number is chosen
  on dropdown menu, the number should populate below
  I need to figure out what the format is. On my html web I need to find the function "sample-metadata"
  that will be attached to the object.
  I need to start function optionChanged (see below).
 in the example below"$" the value, the string inside of that curly brackets is referring to a variable. otherwise it would read it as a straight text.
this is the js e
I want to use the number that the user inputs, and I need to filter/pull for that record in our database.
*/// When I go back to app.py, one of the routes is for metadata
  // Use `d3.json` to fetch(pick up, collect) the metadata for a sample
    // Use d3 to select the panel with id of `#sample-metadata`

  d3.json(`/metadata/${sample}`).then(function(data) {
    // console.log('In callback');
    console.log(data);
    var panel = d3.select('#sample-metadata');
    // Use `.html("") to clear any existing metadata
    panel.html(`<p><strong>AGE:</strong> ${data.AGE}<br/>
      <strong>BBTYPE:</strong> ${data.BBTYPE}<br/>
      <strong>ETHNICITY:</strong> ${data.ETHNICITY}<br/>
      <strong>GENDER:</strong> ${data.GENDER}<br/>
      <strong>LOCATION:</strong> ${data.LOCATION}<br/>
      <strong>WFREQ:</strong> ${data.WFREQ}<br/>
      <strong>sample:</sample> ${data.sample}<br/>
      </p>`);
  });

//Object entries
}







    // BONUS: Build the Gauge Chart
    // buildGauge(data.WFREQ);


function buildCharts(sample) {

  // @TODO: Use `d3.json` to fetch the sample data for the plots

    // @TODO: Build a Bubble Chart using the sample data

    // @TODO: Build a Pie Chart
    // HINT: You will need to use slice() to grab the top 10 sample_values,
    // otu_ids, and labels (10 each).
}
//double check if this is ok:
function init() {
  console.log("In init()....");
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    console.log("d3.json /names callback....");
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });


    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}
//This is the same optionChanged function I already saw in html code,
// the point I will link
//anytime the user will change the data, it will cost these functions to run
function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
