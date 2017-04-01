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
            
            var sent = obj.goodScore;
            getSentimant(sent);
            
            var gR = obj.goodR;
            var bR = obj.badR;
            getReliability(gR, bR);
            
            var gB = obj.goodB;
            var bB = obj.badB;
            getBattery(gB, bB);
            
            var gP = obj.goodP;
            var bP = obj.badP;
            getPortability(gP, bP);
            
        }
    };
    xhttp.open("GET", "http://52.160.109.98:8080/help", true);
    xhttp.send();
}

function getSentimant(score) {
    if (score <= .40) {
        document.getElementById("OverallS").innerHTML =
        "Critical";
    }
    if (score >= .70) {
        document.getElementById("OverallS").innerHTML = "Positive";
    }
    else {
        document.getElementById("OverallS").innerHTML = "Mixed";
    }
}

function getReliability(g, b) {
    document.getElementById("ReliabilityS").innerHTML = g + " : " + b;
}

function getBattery (g, b) {
    document.getElementById("BatteryS").innerHTML = g + " : " + b;
}
function getPortability (g, b) {
    document.getElementById("PortabilityS").innerHTML = g + " : " + b;
}


/*
var list = document.querySelectorAll('td.cicon');
list.forEach.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'TD') {
    ev.target.classList.toggle('negative');
    
  }
}, false);

*/
                         


                                                                             

