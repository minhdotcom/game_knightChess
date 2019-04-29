let knight = new Knight(0,0,SQUARE),
    tempKnightX,
    tempKnightY,
    turn = "Player";

function drawGame () {
    drawBoard();
    knight.draw();
    step.draw();
}

function checkProperMove (knightX, knightY) {
    if (tempKnightX === undefined && tempKnightY === undefined) {
        return true;
    } else if ( ! ((Math.abs(knightX - tempKnightX) === 2 && Math.abs(knightY - tempKnightY) === 1) ||
                   (Math.abs(knightX - tempKnightX) === 1 && Math.abs(knightY - tempKnightY) === 2)) ) {
        showMessage(turn + "'s turn: Quân mã chỉ được đi theo hình chữ L 2x1.");
        } else if (step[knightX][knightY] === "x") {
            showMessage(turn + "'s turn. Bạn không được đi vào những ô đã đi rồi.");
            } else return true;
}

function switchTurn () {
    turn = (turn === "Player") ? "Computer" : "Player";
}

function checkWin (knightX, knightY) {
    let pos1 = knightX - 2 < 0 || knightY - 1 < 0 || step[knightX - 2][knightY - 1] === "x",
        pos2 = knightX + 2 >= 8 || knightY - 1 < 0 || step[knightX + 2][knightY - 1] === "x",
        pos3 = knightX - 2 < 0 || knightY + 1 >= 8 || step[knightX - 2][knightY + 1] === "x",
        pos4 = knightX + 2 >= 8 || knightY + 1 >= 8 || step[knightX + 2][knightY + 1] === "x",
        pos5 = knightX - 1 < 0 || knightY - 2 < 0 || step[knightX - 1][knightY - 2] === "x",
        pos6 = knightX + 1 >= 8 || knightY - 2 < 0 || step[knightX + 1][knightY - 2] === "x",
        pos7 = knightX - 1 < 0 || knightY + 2 >= 8 || step[knightX - 1][knightY + 2] === "x",
        pos8 = knightX + 1 >= 8 || knightY + 2 >= 8 || step[knightX + 1][knightY + 2] === "x";

    if (pos1 && pos2 && pos3 && pos4 && pos5 && pos6 && pos7 && pos8) {
        CTX.fillStyle = "#d3d3d3";
        CTX.fill();
        knight.draw();
        step.draw();
        showMessage(turn + " won");
        document.addEventListener("click",disableEvent,true);
        return true;
    }
}

function showMessage (string) {
    CTX2.clearRect(0, 0, 480, 60);
    CTX2.beginPath();
    CTX2.fillStyle = "#008b8b";
    CTX2.font = "19px Arial";
    CTX2.textAlign = "center";
    CTX2.fillText(string, 240, 40, 480);
    CTX2.fill();
    CTX2.closePath();
}

function autoMove (knightX, knightY) {
    // strategy is to move in 2 x 4 blocks
    let blockX = (knightX % 2);
    let blockY = (knightY % 4);
    knight.x = (blockX === 0) ? 1 : 0;
    knight.y = (blockY + 2 > 3) ? blockY -2 : blockY + 2;
    knight.x = knight.x + Math.floor(knightX / 2) * 2;
    knight.y = knight.y + Math.floor(knightY / 4) * 4;
}

function disableEvent(event){
    event.stopPropagation();
    event.preventDefault();
}

showMessage(turn + "'s. Lets start by placing a knight where you'd like.")
document.onclick = function (event) {
    if (turn == "Computer") {
        autoMove(knight.x, knight.y);
    } else {
        knight.x = Math.floor((event.pageX - CANVAS_X) / SQUARE);
        knight.y = Math.floor((event.pageY - CANVAS_Y) / SQUARE);
    }
    if (checkProperMove(knight.x, knight.y)) {
        step.update();
        drawGame();
        tempKnightX = knight.x;
        tempKnightY = knight.y;
        if (checkWin(knight.x, knight.y)) {
        } else {
            switchTurn();
            if (turn == "Player") {
                showMessage(turn + "'s turn");
            } else showMessage(turn + "'s turn. Click anywhere to make it move.")
        }
    }
};

