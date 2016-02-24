'use strict';

describe('Player', function() {

  var player1;
  var battle;

  beforeEach(function() {
    battle = new Battle();
    player1 = new Player(battle);
    battle.setPlayers('pl1', 'pl2')
  });

  it('player can attack opponent', function() {
    player1.attackOpponent();
    expect(player1.attack).toEqual(true);
  });


  it('once a player score is 0, game is over', function() {
    for(var i = 12; i > 0; i--) {
      player1.attackOpponent();
    }
    expect(function(){player1.attackOpponent()} ).toThrowError("Game Over!");
  });

  it('player can ninja attack opponent', function() {
    player1.ninjaAttackOpponent();
    expect(player1.ninjaAttack).toEqual(true);
  });

});
