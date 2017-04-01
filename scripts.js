/*jslint devel: true */
function addTodo() {
    "use strict";
    var li = document.createElement("li"), input = document.getElementById("inputTodo");
    
    if (input.value.length === 0) {
        alert("Please type in what you're looking for!");
    }
    else {
        li.innerHTML = input.value;
        input.value = "";
        document.getElementById("todos").appendChild(li); 
    }
}
function makeCall() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            console.log(obj);
            document.getElementById("demo").innerHTML = obj;
        }
    };
    xhttp.open("GET", "http://52.160.109.98:8080/help", true);
    xhttp.send();
}

var go = document.getElementById("addTodo");
var txt = document.getElementById("inputTodo");

txt.addEventListener("keypress", function (event) {
    "use strict";
    if (event.keyCode === 13) {
        event.preventDefault();
        go.click();
    }
});

                                                                             

