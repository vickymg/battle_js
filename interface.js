$(document).ready(function() {
  $('#play').hide();
  $('#game-over').hide();

  var battle = new Battle();
  var pl1 = new Player(battle);
  var pl2 = new Player(battle);

  $('#names').submit(function(event) {
    event.preventDefault();
    battle.setPlayers(pl1, pl2)
    var name1 = $('#name1').val();
    var name2 = $('#name2').val();
    $('#play').show(0);
    $('.displayname1').text(name1);
    $('.displayname2').text(name2);
    $('#enter-names').hide();
    updateScore();
  });

  function updateScore() {
    if(battle.player1Points === 0 || battle.player2Points === 0) {
      $('#game-over').show();
    }
    $('#player1points').text(battle.player1Points);
    $('#player2points').text(battle.player2Points);
  }

  $('#attack1').on('click', function() {
    battle.player1.attackOpponent();
    updateScore();
  });

  $('#attack2').on('click', function() {
    battle.player2.attackOpponent();
    updateScore();
  });

});
