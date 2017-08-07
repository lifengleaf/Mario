
button = document.getElementById('draw-button');
button.onclick = function(){
    heightStr = document.getElementById("height").value;
    // convert the string to an int
    height = parseInt(heightStr);
    if(height){
        drawPyramid(height);
    }
}

function drawPyramid(height) {
    const pyramid = document.getElementById("pyramid");
    pyramid.innerHTML = "";
    for (let row = 0; row < height; row++) {
        let text = "\u00A0".repeat(height-row-1) + "#".repeat(row+2);
        let para = document.createElement("p");
        para.textContent = text;
        pyramid.appendChild(para);       
    }  
}

