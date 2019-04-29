let step = [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
];

step.draw = function () {
    for (let i = 0; i < 8; i ++) {
        for (let j = 0; j < 8; j ++) {
            if (step[i][j] === "x") {
                CTX.drawImage(X, (i + 0.25) * SQUARE, (j + 0.25) * SQUARE, SQUARE / 2, SQUARE / 2);
            }
        }
    }
};

step.update = function () {
    if (tempKnightX !== undefined && tempKnightY !== undefined) {
        step[tempKnightX][tempKnightY] = "x";
    }
};