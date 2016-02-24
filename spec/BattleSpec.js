'use strict';

describe('Battle', function() {

  var battle;

  beforeEach(function() {
    battle = new Battle();
    battle.setPlayers('pl1', 'pl2');
  });

  it('has starting points for both players', function() {
    expect(battle.player1Points).toEqual(60);
    expect(battle.player2Points).toEqual(60);
  });

  it('reduces a players points once attacked', function() {
    battle.attack();
    expect(battle.player1Points).toEqual(55);
  });
});
