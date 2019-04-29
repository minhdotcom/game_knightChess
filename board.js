function drawBoard () {
    CTX.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    CTX.beginPath();
    CTX.fillStyle = SQUARE_COLOR;
    for (let i = 0; i < 8; i = i + 2) {
        for (let j = 0; j < 8; j = j + 2) {
            CTX.rect(i * SQUARE, j * SQUARE, SQUARE, SQUARE);
        }
    }
    for (let i = 1; i < 8; i = i + 2) {
        for (let j = 1; j < 8; j = j + 2) {
            CTX.rect(i * SQUARE, j * SQUARE, SQUARE, SQUARE);
        }
    }
    CTX.fill();
    CTX.closePath();
}
drawBoard();