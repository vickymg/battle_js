function Battle() {
  this.player1Points = 60;
  this.player2Points = 60;
  this.winner = "nil";
}

Battle.prototype.setPlayers = function(pl1, pl2) {
  this.player1 = pl1;
  this.player2 = pl2;
};

Battle.prototype.attack = function() {
  if (this.player1.attack === true) {
    this.player2Points -= 5;
    this.player1.attack = false;
  }
  else {
    this.player1Points -= 5;
    this.player2.attack = false;
  }
};

Battle.prototype.ninjaAttack = function() {
  if (this.player1.ninjaAttack === true) {
    this.player2Points -= Math.floor((Math.random() * 10) + 1);
    this.player1.ninjaAttack = false;
  }
  else {
    this.player1Points -= Math.floor((Math.random() * 10) + 1);
    this.player2.ninjaAttack = false;
  }
};

Battle.prototype.checkGameOver = function() {
  if (this.player1Points <= 0) {
    this.winner = "Player 1";
    throw new Error("Game Over!");
  }
  else if (this.player2Points <= 0) {
    this.winner = "Player 2";
    throw new Error("Game Over!");
  }
};
