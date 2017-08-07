
const error = $(".error-message");

var filterInt = function(value) {
  if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
    return Number(value);
  return NaN;
}

$('#draw-button').click(function(event){
    // prevent the form from submitting
    event.preventDefault();

    //clear previous pyramid
    pyramid.innerHTML = "";
    //clear previous error messages
    error.innerHTML = "";

    heightStr = $("#height").val();
    // check if the input is valid integer
    heightInt = filterInt(heightStr);

    if(!heightInt){  
        error.text("Please provide a positive integer.");
    }
    else if (heightInt > 100){
        error.text("The pyramid is too tall to show.");
    }
    else {
        drawPyramid(heightInt);
    }
});


function drawPyramid(height) {
    for (let r = 0; r < height; r++) {
        let row = $("<div>", {
            "class": "row"
        });
        for (let c = 0; c < height-r-1; c++){
            let cell = $("<div>", {
            "class": "cell-hide"
        });
            row.append(cell);
        }        
        for (let c = 0; c < r+2; c++){
            let cell = $("<div>", {
            "class": "cell"
        });
            row.append(cell);
        }
        $("#pyramid").append(row);       
    }  
}

