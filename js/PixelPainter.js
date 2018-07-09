let paletteBox = document.createElement('div');
paletteBox.id = 'paletteId';
pixelPainter.appendChild(paletteBox);

let gridBox = document.createElement('div');
gridBox.id = 'gridBoxId';
pixelPainter.appendChild(gridBox);

let buttonBox = document.createElement('div');
buttonBox.id = 'buttonBoxId';
paletteBox.appendChild(buttonBox)

let eraseButton = document.createElement('button');
eraseButton.id = 'eraseButtonId';
eraseButton.innerHTML = 'Erase';
buttonBox.appendChild(eraseButton);
let clearButton = document.createElement('button');
clearButton.id = 'clearButtonId';
clearButton.innerHTML = 'Clear';
buttonBox.appendChild(clearButton);

for(let i = 0; i < 50; i++) {
    let paletteSquares = document.createElement('div');
    paletteSquares.className = 'paletteSquareClass';
    // paletteSquareVar.addEventListener('click', changeColor);
    paletteBox.appendChild(paletteSquares)
}
// function changeColor() {

// }
let paletteArray = ['Aliceblue', 'AntiqueWhite', 'b30000', 'Aqua', 'ff1a66', '66ff66', '99004d' , 'Aquamarine', 'Azure', 'orange' , 'black' , 'red' , 'yellow' , 'blue' , 'indigo' , 'violet' , 'blueviolet' , 'brown' , 'blueviolet' , 'cadetblue' , 'chocolate' , 'coral' , 'cornflowerblue' , 'crimson' , 'cyan' , 'darkblue' , 'darkcyan' , 'darkmagenta' , 'darkgoldenrod' , 'darkorchid' , 'darkslateblue' , 'darkseagreen' , 'darkslateblue' , 'darkslategrey' , 'DeepSkyBlue' , 'firebrick' , 'fucia' , 'DimGray' , 'gold' , 'DimGray','ivory' , 'Khaki' , 'lavender' , 'LightCoral' , 'limegreen' , 'mediumblue' , 'MediumSlateBlue' , 'orangered' , 'saddlebrown' , 'springgreen']
let paletteSquareVar = document.getElementsByClassName('paletteSquareClass');
for (let i = 0; i < paletteArray.length; i++) {
    paletteSquareVar[i].style.backgroundColor = paletteArray[i];
}

for(let i = 0; i < 1080; i++) {
    let gridSquares = document.createElement('div');
    gridSquares.className = 'gridSquaresClass';
    gridBox.appendChild(gridSquares);
}