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
    cell1.innerHTML = "<b>Cover</b>";
    var cell2 = row.insertCell(1);
    cell2.innerHTML = "<b>Title</b>";
    var cell3 = row.insertCell(2);
    cell3.innerHTML = "<b>Given</b>";
    var cell4 = row.insertCell(3);
    cell4.innerHTML = "<b>Name</b>";
    var cell5 = row.insertCell(4);
    cell5.innerHTML = "<b>Review</b>"
    // Select DOM element that will be modified:
    var sfDiv = document.getElementById("sfDiv");
    // Populate table cells with json file content and append to DOM element:
    for (var i = 0; i < data.length; i++) {
        // Create an empty <tr> element and add it to the 1st position of the table:
        var row = sfTable.insertRow(1);
        // Insert new cells (<td> elements) in the "new" <tr> element:
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);  
        var cell3 = row.insertCell(2);  
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        // Add book cover images to the table cells :
        var coverImage = document.createElement("IMG")
        coverImage.setAttribute("src", data[i].cover);
        coverImage.setAttribute("width", "80");
        coverImage.setAttribute("height", "130");
        cell1.innerHTML = coverImage;
        cell1.innerHTML = ""; //to remove [objecthtmlimageelement], see references
        cell1.appendChild(coverImage);
        // Add text from json to the table cells:
        cell2.innerHTML = data[i].title;
        cell3.innerHTML = data[i].firstName; 
        cell4.innerHTML = data[i].lastName; 
        cell5.innerHTML = data[i].review;
        // Update the DOM element with new data:
        sfDiv.appendChild(sfTable);        
    }
    // Assign a css class to the created object
    sfDiv.className = "booklist"
}
