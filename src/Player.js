function Player(battle) {
  this.attack = false;
  this.battle = battle;
}

Player.prototype.attackOpponent = function() {
  if (this.battle.player1Points <= 0 || this.battle.player2Points <= 0) {
    throw new Error("Game Over!");
  }
  this.attack = true;
  this.battle.attack();
};
