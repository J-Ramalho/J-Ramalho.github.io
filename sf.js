fetch('data/sf.json')
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
    // Create a table:
    var sfTable = document.createElement("table");
    // Create table headers:
    var header = sfTable.createTHead();
    var row = header.insertRow(0);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = "<b>First Name</b>";
    var cell2 = row.insertCell(1);
    cell2.innerHTML = "<b>Family Name</b>";
    var cell3 = row.insertCell(2);
    cell3.innerHTML = "<b>Title</b>";
    var cell4 = row.insertCell(3);
    cell4.innerHTML = "<b>Review</b>";
    // Select DOM element that will be modified:
    var sfDiv = document.getElementById("sfDiv");
    // Populate table cells with json file content and append to DOM element:
    for (var i = 0; i < data.length; i++) {
        // Create an empty <tr> element and add it to the 1st position of the table:
        var row = sfTable.insertRow(1);
        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);  
        var cell3 = row.insertCell(2);  
        var cell4 = row.insertCell(3);
        // Add text from json to the new cells:
        cell1.innerHTML = data[i].firstName;
        cell2.innerHTML = data[i].lastName; 
        cell3.innerHTML = data[i].title; 
        cell4.innerHTML = data[i].review;
        // Update the DOM element with new data:
        sfDiv.appendChild(sfTable);        
    }
    // Assign a css class to the created object
    sfDiv.className = "booklist"
}
