$(document).ready(function() {
  var battle = new Battle();

  $('#play').hide();
  $('#game-over').hide();

  $('#names').submit(function(event) {
    event.preventDefault();
    var name1 = $('#name1').val();
    var name2 = $('#name2').val();
    $('#play').show(0);
    $('.displayname1').text(name1);
    $('.displayname2').text(name2);
    $('#enter-names').hide();
    updateScore();
  });

  function updateScore() {
    if(battle.player1Points === 0 || battle.player1Points === 0) {
      $('#game-over').show();
    }
    $('#player1points').text(battle.player1Points);
    $('#player2points').text(battle.player2Points);
  }

  $('#attack1').on('click', function() {
    battle.player2Attacks();
    updateScore();
  });

  $('#attack2').on('click', function() {
    battle.player1Attacks();
    updateScore();
  });

});
