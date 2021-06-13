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

// Initiate a table:
var sfTable = document.createElement("table");
// Create table headers:
var header = sfTable.createTHead();
var row = header.insertRow(0);
var cell1 = row.insertCell(0);
cell1.innerHTML = "<b>Title</b>";
var cell2 = row.insertCell(1);
cell2.innerHTML = "<b>First name</b>";
var cell3 = row.insertCell(2);
cell3.innerHTML = "<b>Familly Name</b>";
var cell4 = row.insertCell(3);
cell4.innerHTML = "<b>Review</b>";
var cell5 = row.insertCell(4);
cell5.innerHTML = "<b>Cover</b>";
cell1.className = "booklistHCell"
cell2.className = "booklistHCell"
cell3.className = "booklistHCell"
cell4.className = "booklistHCell"
cell5.className = "booklistHCell"
function createTable(data) {
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
        // Add text from json to the table cells:
        cell1.innerHTML = data[i].title;
        cell2.innerHTML = data[i].firstName; 
        cell3.innerHTML = data[i].lastName; 
        cell4.innerHTML = data[i].review;
        // Add book cover images to the table cells :
        var coverImage = document.createElement("IMG")
        coverImage.setAttribute("src", data[i].cover);
        coverImage.setAttribute("width", "80");
        coverImage.setAttribute("height", "130");
        cell5.innerHTML = coverImage;
        cell5.innerHTML = ""; //to remove [objecthtmlimageelement], see references
        cell5.appendChild(coverImage);
        // Update the DOM element with new data:
        sfDiv.appendChild(sfTable); 
        // Assign css class to the row:
        row.className = "booklist";       
    }
}
