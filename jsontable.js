fetch('data/scifi.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    createTable(data);
})
.catch(function (err) {
    console.log('error: ' + err);
});

function createTable(data) {
    // Create a table header:
    var table = document.createElement("table");
    // Create table headers:
    var header = table.createTHead();
    var row = header.insertRow(0);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = "<b>First Name</b>";
    var cell2 = row.insertCell(1);
    cell2.innerHTML = "<b>Family Name</b>";
    var cell3 = row.insertCell(1);
    cell3.innerHTML = "<b>Title</b>";
    // Select DOM element that will be modified:
    var mainContainer = document.getElementById("sfData");
    // Populate cells with json file content:
    for (var i = 0; i < data.length; i++) {
        // Create an empty <tr> element and add it to the 1st position of the table:
        var row = table.insertRow(1);
        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);  
        var cell3 = row.insertCell(2);  
        // Add some text to the new cells:
        cell1.innerHTML = data[i].firstName;
        cell2.innerHTML = data[i].lastName; 
        cell3.innerHTML = data[i].title; 
        // Update the DOM element with new data:
        mainContainer.appendChild(table);
        // Assigning a css class to the created object
        mainContainer.className = "booklist"
    }
}
