// for(let i = 0; i < 10; i++) {
//     let testDivs = createElement('div');
//     pixelPainter.appendChild(testDivs)
// }




let paletteBox = document.createElement('div'); //creates palette box
paletteBox.id = 'paletteId';
pixelPainter.appendChild(paletteBox);

let gridBox = document.createElement('div'); //creates pixel grid box
gridBox.id = 'gridBoxId';
pixelPainter.appendChild(gridBox);

let buttonBox = document.createElement('div'); //creates button box
buttonBox.id = 'buttonBoxId';
paletteBox.appendChild(buttonBox)

let eraseButton = document.createElement('button'); //creates erase button
eraseButton.id = 'eraseButtonId';
eraseButton.innerHTML = 'Erase';
eraseButton.addEventListener('click', eraseColor) //erase button eventListener
buttonBox.appendChild(eraseButton);

function eraseColor() { //erase button eventListener callback
    if(whiteColorVar === false) {
        whiteColorVar = true;
        for(let i = 0; i < 1080; i++) { //pixel grid color changing eventListener
            gridSquaresVar[i].removeEventListener('mouseover', changeColorMouseover)
        }
    } else {
        whiteColorVar = false;
        for(let i = 0; i < 1080; i++) { //pixel grid color changing eventListener
            gridSquaresVar[i].addEventListener('mouseover', changeColorMouseover)
    }
}
}

let clearButton = document.createElement('button'); //creates clear button
clearButton.id = 'clearButtonId';
clearButton.innerHTML = 'Clear';
clearButton.addEventListener('click', clearColor) //clear color eventListener
buttonBox.appendChild(clearButton);

function clearColor() { //clear color for loop, would like to use only callback
    for(let i = 0; gridSquaresVar.length; i++) {
        gridSquaresVar[i].style.backgroundColor = 'white';
    }
}

let saveButton = document.createElement('button');
saveButton.id = 'saveButtonId';
saveButton.innerHTML = 'Save';
saveButton.addEventListener('click', saveState);
buttonBox.appendChild(saveButton);

let saveArray;
function saveState() {
      saveArray = [];
      for (let i = 0; gridSquaresVar.length; i++) {
        saveArray.push(gridSquaresVar[i].style.backgroundColor)
        console.log(saveArray)
    }
}


let loadButton = document.createElement('button');
loadButton.id = 'loadButtonId';
loadButton.innerHTML = 'Load';
loadButton.addEventListener('click', loadState);
buttonBox.appendChild(loadButton);

function loadState() {
    for (let i = 0; gridSquaresVar.length; i++) {
        gridSquaresVar[i].style.backgroundColor = saveArray[i];
    }
}

let paletteArray = ['Aliceblue', 'AntiqueWhite', 'b30000', 'Aqua', 'ff1a66', '66ff66', '99004d' , 'Aquamarine', 'Azure', 'orange' , 'black' , 'red' , 'yellow' , 'blue' , 'indigo' , 'violet' , 'blueviolet' , 'brown' , 'blueviolet' , 'cadetblue' , 'chocolate' , 'coral' , 'cornflowerblue' , 'crimson' , 'cyan' , 'darkblue' , 'darkcyan' , 'darkmagenta' , 'darkgoldenrod' , 'darkorchid' , 'darkslateblue' , 'darkseagreen' , 'darkslateblue' , 'darkslategrey' , 'DeepSkyBlue' , 'firebrick' , 'fucia' , 'DimGray' , 'gold' , 'DimGray','ivory' , 'Khaki' , 'lavender' , 'LightCoral' , 'limegreen' , 'mediumblue' , 'MediumSlateBlue' , 'orangered' , 'saddlebrown' , 'springgreen']
let paletteSquareVar = document.getElementsByClassName('paletteSquareClass'); //palette grid divs
let setColorVar; //color saving variable
let whiteColorVar = false; //a variable that allows erasing click ability
let gridSquaresVar = document.getElementsByClassName('gridSquaresClass'); //pixel grid divs

for(let i = 0; i < 50; i++) { //palette modifying for loop //why couldn't I addEventListener to this for loop?
    let paletteSquares = document.createElement('div');
    paletteSquares.className = 'paletteSquareClass';
    paletteBox.appendChild(paletteSquares)
}

for(let i = 0; i < paletteSquareVar.length; i++) { //color set addEventListener for loop
    paletteSquareVar[i].addEventListener('click', setColor);
    
}
function setColor() { //change color callback, should it go in for loop?
    setColorVar = this.style.backgroundColor;
}

for (let i = 0; i < paletteArray.length; i++) { //palette color changing from palette array for loop
    paletteSquareVar[i].style.backgroundColor = paletteArray[i];
}

for(let i = 0; i < 1080; i++) { //pixel grid modifying for loop
    let gridSquares = document.createElement('div'); //why can't I add changeColorMouseover to this for loop?
    gridSquares.className = 'gridSquaresClass';
    gridBox.appendChild(gridSquares);
}

for(let i = 0; i < 1080; i++) { //pixel grid color changing eventListener
    gridSquaresVar[i].addEventListener('mousedown', setColorChangeMouseOver)
    gridSquaresVar[i].addEventListener('click', whiteBackgroundClick)
    gridSquaresVar[i].addEventListener('mouseup', removeColorMouseUp)
}

function setColorChangeMouseOver() { //color changing eventListener for mouseover callback
   for (let i = 0; i < 1080; i++) {
       gridSquaresVar[i].addEventListener('mouseover', dragColorMouseOver)
   }
}

function dragColorMouseOver() {
    this.style.backgroundColor = setColorVar;
}

function whiteBackgroundClick() {
    if(whiteColorVar === true) {
        this.style.backgroundColor = 'white';
    }
    
}

function removeColorMouseUp() {
    for(let i = 0; i < 1080; i++) {
        gridSquaresVar[i].removeEventListener('mouseover', dragColorMouseOver);
    }
}