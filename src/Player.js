function Player(battle) {
  this.attack = false;
  this.ninjaAttack = false;
  this.paralyzed = false;
  this.battle = battle;
}

Player.prototype.attackOpponent = function() {
  this.battle.checkGameOver();
  this.attack = true;
  this.battle.attack();
};

Player.prototype.ninjaAttackOpponent = function() {
  this.battle.checkGameOver();
  this.ninjaAttack = true;
  this.battle.ninjaAttack();
};
