let paletteBox = document.createElement('div'); //creates palette box
paletteBox.id = 'paletteId';
pixelPainter.appendChild(paletteBox);

let gridBox = document.createElement('div'); //creates pixel grid box
gridBox.id = 'gridBoxId';
pixelPainter.appendChild(gridBox);

let buttonBox = document.createElement('div'); //creates button box
buttonBox.id = 'buttonBoxId';
paletteBox.appendChild(buttonBox)

let eraseButton = document.createElement('button'); //erase button
eraseButton.id = 'eraseButtonId';
eraseButton.innerHTML = 'Erase';
buttonBox.appendChild(eraseButton);
let clearButton = document.createElement('button'); //clear button
clearButton.id = 'clearButtonId';
clearButton.innerHTML = 'Clear';
buttonBox.appendChild(clearButton);

let paletteArray = ['Aliceblue', 'AntiqueWhite', 'b30000', 'Aqua', 'ff1a66', '66ff66', '99004d' , 'Aquamarine', 'Azure', 'orange' , 'black' , 'red' , 'yellow' , 'blue' , 'indigo' , 'violet' , 'blueviolet' , 'brown' , 'blueviolet' , 'cadetblue' , 'chocolate' , 'coral' , 'cornflowerblue' , 'crimson' , 'cyan' , 'darkblue' , 'darkcyan' , 'darkmagenta' , 'darkgoldenrod' , 'darkorchid' , 'darkslateblue' , 'darkseagreen' , 'darkslateblue' , 'darkslategrey' , 'DeepSkyBlue' , 'firebrick' , 'fucia' , 'DimGray' , 'gold' , 'DimGray','ivory' , 'Khaki' , 'lavender' , 'LightCoral' , 'limegreen' , 'mediumblue' , 'MediumSlateBlue' , 'orangered' , 'saddlebrown' , 'springgreen']
let paletteSquareVar = document.getElementsByClassName('paletteSquareClass'); //palette grid divs
let setColorVar; 

for(let i = 0; i < 50; i++) { //palette modifying for loop
    let paletteSquares = document.createElement('div');
    paletteSquares.className = 'paletteSquareClass';
    paletteBox.appendChild(paletteSquares)
}

for(let i = 0; i < paletteSquareVar; i++) {
    paletteSquareVar[i].addEventListener('click', setColor);
    
}

function setColor() { //change color callback
    setColorVar = this.style.backgroundColor;
    console.log('fired');
}

for (let i = 0; i < paletteArray.length; i++) { //palette color changing for loop
    paletteSquareVar[i].style.backgroundColor = paletteArray[i];
}

for(let i = 0; i < 1080; i++) { //pixel grid modifying for loop
    let gridSquares = document.createElement('div');
    gridSquares.className = 'gridSquaresClass';
    gridBox.appendChild(gridSquares);
}