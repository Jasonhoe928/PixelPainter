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

function eraseColor() {
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


// function eraseColor() { //needs access to gridSquaresVar object?
//     for(let i = 0; i < gridSquaresVar.length; i++) {
//         let gridSquares = document.createElement('div'); //why can't I add changeColorMouseover to this for loop?
//         gridSquares.className = 'gridSquaresClass';
//         gridSquares.addEventListener('click', eraseColorClick)
//         gridSquaresVar[i].style.backgroundColor = 'white';
//         gridBox.appendChild(gridSquares)
//     }
// }

// function eraseColorClick() {
//     whiteColorVar.style.backgroundColor = 'white';
//     console.log('fired')
// }

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

for (let i = 0; i < paletteArray.length; i++) { //palette color changing for loop
    paletteSquareVar[i].style.backgroundColor = paletteArray[i];
}

for(let i = 0; i < 1080; i++) { //pixel grid modifying for loop
    let gridSquares = document.createElement('div'); //why can't I add changeColorMouseover to this for loop?
    gridSquares.className = 'gridSquaresClass';
    gridBox.appendChild(gridSquares);
}

for(let i = 0; i < 1080; i++) { //pixel grid color changing eventListener
    gridSquaresVar[i].addEventListener('mouseover', changeColorMouseover)
    gridSquaresVar[i].addEventListener('click', whiteBackgroundClick)
    gridSquaresVar[i].addEventListener('mousedown', whiteBackgroundMouseDown)
}

function changeColorMouseover() { //color changing callback
    this.style.backgroundColor = setColorVar;
}

function whiteBackgroundClick() {
    if(whiteColorVar === true) {
        this.style.backgroundColor = 'white';
    }
    
}

function whiteBackgroundMouseDown() {
    if(whiteColorVar === true) {
        this.style.backgroundColor = 'white';
    }
}