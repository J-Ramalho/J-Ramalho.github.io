fetch('data/scifi.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    appendData(data);
})
.catch(function (err) {
    console.log('error: ' + err);
});

function appendData(data) {
var mainContainer = document.getElementById("sfData");
for (var i = 0; i < data.length; i++) {
    var div1 = document.createElement("div");
    div1.innerHTML = ' ' + data[i].firstName + ' ' + data[i].lastName;
    //div2.innerHTML = ' ' + data[i].title
    // div.className = "sfTable";
    div1.style = 'border: 1px solid black';
    mainContainer.appendChild(div1);
}
}