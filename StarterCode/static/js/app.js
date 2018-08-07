// from data.js
var tableData = data;

// YOUR CODE HERE!
var submit = d3.select('#filter-btn')

submit.on('click', () => {
    d3.event.preventDefault()
    let inputElement = d3.select('#datetime')
    let inputValue = inputElement.property('value')

    let filteredData = tableData.filter(dates => dates.datetime === inputValue)
    console.log(filteredData)

   

    var tbody = d3.select('#ufo-table>tbody')

    filteredData.forEach(function(output){
        var row = tbody.append('tr')
        Object.entries(output).forEach(function([key, value]){
            var cell = tbody.append('td')
            cell.text(value)
        })
    })
    // d3.select('#ufo-table>tbody')
    //     .append('tr').text(filteredData)
})