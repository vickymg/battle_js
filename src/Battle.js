function Battle() {
  this.player1Points = 60;
  this.player2Points = 60;
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
  }
};
