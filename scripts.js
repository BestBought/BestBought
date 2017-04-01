/*jslint devel: true */

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
            
            //gets top 3 attributes
            for (var i = 0; i < obj.topAtts.length; i++) {
                var att = obj.topAtts[i];
                if (i == 0) {
                    document.getElementById("k1").innerHTML = att;
                }
                if (i == 1) {
                    document.getElementById("k1").innerHTML = att;
                }
                if (i == 2) {
                    document.getElementById("k1").innerHTML = att;
                }
                
            }
            //gets top 5 positive reviews and adds them to list
            for (var i = 0; i < obj.goodComments.length; i++) {
                var goodCom = obj.goodComments[i];
                if (i == 0) {
                    document.getElementById("c1r1").innerHTML = goodCom;
                }
                if (i == 1) {
                    document.getElementById("c1r2").innerHTML = goodCom;
                }
                if (i == 2) {
                    document.getElementById("c1r3").innerHTML = goodCom;
                }
                if (i == 3) {
                    document.getElementById("c1r4").innerHTML = goodCom;
                }
                if (i == 4) {
                    document.getElementById("c1r5").innerHTML = goodCom;
                }
                
            }
            //gets top 5 negative reviews and adds them to list
            for (var i = 0; i < obj.badComments.length; i++) {
                var badCom = obj.badComments[i];
                if (i == 0) {
                    document.getElementById("c2r1").innerHTML = badCom;
                }
                if (i == 1) {
                    document.getElementById("c2r2").innerHTML = badCom;
                }
                if (i == 2) {
                    document.getElementById("c2r3").innerHTML = badCom;
                }
                if (i == 3) {
                    document.getElementById("c2r4").innerHTML = badCom;
                }
                if (i == 4) {
                    document.getElementById("c2r5").innerHTML = badCom;
                }
                
            }
            
            
        }
    };
    xhttp.open("GET", "http://52.160.109.98:8080/product/1045309", true);
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

function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var ajax = {};
ajax.x = function () {
    if (typeof XMLHttpRequest !== 'undefined') {
        return new XMLHttpRequest();
    }
    var versions = [
        "MSXML2.XmlHttp.6.0",
        "MSXML2.XmlHttp.5.0",
        "MSXML2.XmlHttp.4.0",
        "MSXML2.XmlHttp.3.0",
        "MSXML2.XmlHttp.2.0",
        "Microsoft.XmlHttp"
    ];

    var xhr;
    for (var i = 0; i < versions.length; i++) {
        try {
            xhr = new ActiveXObject(versions[i]);
            break;
        } catch (e) {
        }
    }
    return xhr;
};

ajax.send = function (url, callback, method, data, async) {
    if (async === undefined) {
        async = true;
    }
    var x = ajax.x();
    x.open(method, url, async);
    x.onreadystatechange = function () {
        if (x.readyState == 4) {
            callback(x.responseText)
        }
    };
    if (method == 'POST') {
        x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    }
    x.send(data)
};

ajax.get = function (url, data, callback, async) {
    var query = [];
    for (var key in data) {
        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
    }
    ajax.send(url + (query.length ? '?' + query.join('&') : ''), callback, 'GET', null, async)
};

ajax.post = function (url, data, callback, async) {
    var query = [];
    for (var key in data) {
        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
    }
    ajax.send(url, callback, 'POST', query.join('&'), async)
};

var productTitle = getParameterByName('productitle');

ajax.get("https://msi.bbycastatic.ca/mobile-si/si/v3/products/search", {"query" : productTitle}, getProductID, true);

function getProductID(data) {
    var productId = JSON.parse(data).searchApi.documents[0].skuId;
    alert(productId);
}
/*
var list = document.querySelectorAll('td.cicon');
list.forEach.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'TD') {
    ev.target.classList.toggle('negative');
    
  }
}, false);

*/
                         


                                                                             

