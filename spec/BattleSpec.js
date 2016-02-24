'use strict';

describe('Battle', function() {

  var battle;

  beforeEach(function() {
    battle = new Battle();
  });

  it('has starting points for both players', function() {
    expect(battle.player1Points).toEqual(60);
    expect(battle.player2Points).toEqual(60);
  });

  it('player 1 can attack player 2', function() {
    battle.player1Attacks();
    expect(battle.player2Points).toEqual(55);
  });

  it('player 2 can attack player 1', function() {
    battle.player2Attacks();
    expect(battle.player1Points).toEqual(55);
  });

  it('once a player score is 0, game is over', function() {
    for(var i = 12; i > 0; i--) {
      battle.player1Attacks();
    }
    expect(battle.player2Points).toEqual(0)
    expect(function(){battle.player1Attacks()} ).toThrowError("Game Over!")
  });

});
