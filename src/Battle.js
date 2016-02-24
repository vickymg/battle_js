function Battle() {
  this.player1Points = 60;
  this.player2Points = 60;
}

Battle.prototype.player1Attacks = function() {
  if(this.player2Points <= 0) {
    throw new Error("Game Over!");
  }
  this.player2Points -=5;
};

Battle.prototype.player2Attacks = function() {
  if(this.player1Points <= 0) {
    throw new Error("Game Over!");
  }
  this.player1Points -=5;
};
