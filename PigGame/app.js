var roundScore,scores,activePlayer,gamePlaying;
init();

document.querySelector('.btn-roll').addEventListener('click',function(){
  if(gamePlaying){
var dice = Math.ceil(Math.random()*6);
var diceDom = document.querySelector('.dice');
diceDom.style.display = 'block';
diceDom.src = 'img/dice-' + dice + '.png';
if(dice !== 1){
  roundScore += dice;
  document.querySelector('#current-' + activePlayer).textContent = roundScore;
}else{
  document.querySelector('#score-'+activePlayer).textContent='0';
  nextPlayer();
}
}
})

document.querySelector('.btn-hold').addEventListener('click',function(){
  if(gamePlaying){
  scores[activePlayer]+=roundScore;
  document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
  if(scores[activePlayer]>20){
    document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
    document.querySelector('#name-'+activePlayer).textContent='WINNER!';
    document.querySelector('.dice').style.display = 'none';
    gamePlaying=false;
  }else{
  nextPlayer();
  }
}  
})

document.querySelector('.btn-new').addEventListener('click',init);


function nextPlayer(){
  roundScore = 0;
  document.querySelector('#current-0').textContent = '0';
  document.querySelector('#current-1').textContent = '0';
  activePlayer===0 ? activePlayer=1 : activePlayer=0;
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('.dice').style.display = 'none';
}
function init(){
  roundScore=0;
  activePlayer=0;
  scores=[0,0];
  gamePlaying=true;
  document.querySelector('#current-0').textContent = '0';
  document.querySelector('#current-1').textContent = '0';
  document.querySelector('#score-0').textContent='0';
  document.querySelector('#score-1').textContent='0';
  document.querySelector('.dice').style.display = 'none';
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.add('active');
}
