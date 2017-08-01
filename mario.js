
const pyramid = document.getElementById("pyramid");
const error = document.querySelector(".error-message");

var filterInt = function(value) {
  if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
    return Number(value);
  return NaN;
}


button = document.getElementById('draw-button');
button.onclick = function(event){
    // prevent the form from submitting
    event.preventDefault();

    //clear previous pyramid
    pyramid.innerHTML = "";
    //clear previous error messages
    error.innerHTML = "";

    heightStr = document.getElementById("height").value;
    // check if the input is valid integer
    height = filterInt(heightStr);

    if(!height){  
        error.innerHTML = "Please provide a positive integer.";
    }
    else if (height > 100){
        error.innerHTML = "The pyramid is too tall to show.";
    }
    else {
        drawPyramid(height);
    }
}


function drawPyramid(height) {
    for (let r = 0; r < height; r++) {
        let row = document.createElement("div");
        row.className = "row";
        for (let c = 0; c < height-r-1; c++){
            let cell = document.createElement("div");
            cell.className = "cell-hide";
            row.appendChild(cell);
        }        
        for (let c = 0; c < r+2; c++){
            let cell = document.createElement("div");
            cell.className = "cell";
            row.appendChild(cell);
        }
        pyramid.appendChild(row);       
    }  
}

