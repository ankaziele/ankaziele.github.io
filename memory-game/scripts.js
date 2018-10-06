const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard;
let secondCard;
let score = 0;



function flipCard() {
  if (lockBoard) return;
  if(this === firstCard) return;

  this.classList.add('flip');
  if (!hasFlippedCard) {
    //first click
    hasFlippedCard = true;
    firstCard = this;

    return;
  }
  //second click
  secondCard = this;


  checkForMatch();

}

function checkForMatch() {

  //do cards match?

  let isMatch = firstCard.dataset.hobby === secondCard.dataset.hobby

  isMatch ? removeCards() : unflipCards();

}

function disableCards() {
  // it's a match!
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  
  resetBoard();

}


function unflipCards() {
  lockBoard = true;
  //not a match :(
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

        resetBoard();
  }, 1500)
}

function resetBoard(){
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];

}

function removeCards() {
  lockBoard = true;
  setTimeout(() => {
      firstCard.style.visibility = "hidden";
      secondCard.style.visibility = "hidden";
      resetBoard();
  }, 1500);
}

(function shuffle(){
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random()*12);
  card.style.order =  randomPos;
});
})();


cards.forEach(card => card.addEventListener('click', flipCard))