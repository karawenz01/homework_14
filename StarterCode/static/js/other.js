// from data.js
var tableData = data;

// Select the submit button
var button = d3.select("#filter-btn");

// Complete the click handler for the form
button.on("click", () => {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Get the value property of the input element to filter the data by date
  let inputDate = d3.select("#datetime").property('value');
  console.log(inputDate)

  let inputCity = d3.select("#city").property('value').toLowerCase();
  console.log(inputCity)

  let inputState = d3.select("#state").property('value').toLowerCase();
  console.log(inputState)

  let inputShape = d3.select("#shape").property('value').toLowerCase();
  console.log(inputShape)

  let filteredData = tableData.filter(onedata => onedata.datetime === inputDate 
                                                && onedata.city === inputCity
                                                && onedata.state === inputState
                                                && onedata.shape === inputShape);
  
  // let filteredData = tableData.filter((onedata) => {
  //  return onedata.datetime == inputValue
  //})
  
  // Add the value the table
  var tbody = d3.select("#ufo-table>tbody");

  filteredData.forEach(function(summary) {
    var row = tbody.append("tr");
    Object.entries(summary).forEach(function([key, value]) {
      // console.log(key, value);
 //     // Append a cell to the row for each value
 //     // in the weather report object
      var cell = tbody.append("td");
      cell.text(value);
    });
  });

});