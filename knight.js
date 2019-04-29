function Knight (x,y,size) {
    this.x = x;
    this.y = y;
    this.size = size;
    // this.img = KNIGHT;
    this.draw = function () {
        let img = (turn === "Player") ? WHITE_KNIGHT : BLACK_KNIGHT;
        CTX.drawImage(img, this.x * SQUARE, this.y * SQUARE, this.size, this.size);
        LOG(img);
    };
}