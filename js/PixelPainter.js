var paletteBox = document.createElement('div');
paletteBox.id = 'paletteId';
pixelPainter.appendChild(paletteBox);

for(var i = 0; i < 15; i++) {
    var paletteSquares = document.createElement('div');
    paletteSquares.className = 'squareUpClass';
    paletteBox.appendChild(paletteSquares)

    // for(var j = 0; j < 6; j++) {
    //     let squaresDown = document.createElement('div');

    // }
}
