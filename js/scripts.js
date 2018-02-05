var totalElements = document.getElementById("carousel-counter--first").childElementCount;

document.getElementById("total-elements").innerHTML = totalElements;



/*
function GetActive () {
    if (document.activeElement) {
        var output = document.getElementById("active-slide");
        for (var i = 0; i < totalElements; i++ ) {

        output.innerHTML = document.write(i);


        }


    }
}

GetActive();
*/
/*
var element = document.getElementById('carousel-counter');

if (element.hasChildNodes()) {
  var children = element.childNodes;

  for (var i = 0; i < children.length; i++) {
      document.getElementById("active-slide").innerHTML = totalElements;
  }
}*/