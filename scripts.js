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

var go = document.getElementById("addTodo");
var txt = document.getElementById("inputTodo");

txt.addEventListener("keypress", function (event) {
    "use strict";
    if (event.keyCode === 13) {
        event.preventDefault();
        go.click();
    }
});

                                                                             

