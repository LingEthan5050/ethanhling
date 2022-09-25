class Card {
  constructor(suit, rank, score) {
    this.suit = suit   //Card.suit
    this.rank = rank   //Card.rank
    this.score = score    //Card.score
  }
}
class Deck {
  constructor() {
    this.cards = []     //Deck.cards (creates an array)
    this.createDeck()   //Deck.createDeck (its a function inside this class and also calls back to itself)
  }
  createDeck() {
    let suits = ["Heart", "Spade", "Club", "Diamond"];    //classifies as an array while adding to the list
    let ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];  //same thing but adding "cards" to the list

    for (let i = 0; i < suits.length; i++) {    //examines the suits
      for (let j = 0; j < ranks.length; j++) {   //examines the ranks
        this.cards.push(new Card(suits[i], ranks[j], j + 2))   //suit then grabs rank til rank is done
      }
    }
    return this.cards         //returns the new cards to the top of class Deck
  }

  shuffle() {
    let currentIndex = this.cards.length, randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [this.cards[currentIndex], this.cards[randomIndex]] = [
        this.cards[randomIndex], this.cards[currentIndex]];
    }
    return this.cards;
  }

  draw() {
    return this.cards.pop()
  }
}

let gamblerDeck = new Deck()



shuffledDeck = gamblerDeck.shuffle()        //shuffling the deck
// console.log(shuffledDeck)


let deck1 = shuffledDeck.splice(0, 26);   //Deck 1 or player 1  
let deck2 = shuffledDeck.splice(-26);     //Deck 2 or player 2

//change made was from const to let

while (deck1.length !== 0 && deck2.length !== 0) {

  if (deck1[0].score > deck2[0].score) {
    x = deck1.shift()
    deck1.push(x)
    deck1.push(deck2.shift())
    // console.log('deck 1 length: ', deck1)
  }

  else if (deck2[0].score > deck1[0].score) {
    x = deck2.shift()
    deck2.push(x)
    deck2.push(deck1.shift())
    // console.log('deck 2 length: ', deck2)
  }

  else {
    draw3Cards()
  }
}



function draw3Cards() {

  if (deck1.length <= 3) {
    console.log("deck 2 wins!")

  }
  if (deck2.length <= 3) {
    console.log("deck 1 wins!")

  }


  newDeck1 = deck1.splice(0, 3)
  newDeck2 = deck2.splice(0, 3)
  war = newDeck1.concat(newDeck2)

  console.log('utfgfujhkgfjkfkjgfkhjtfkghf', deck1)
  if (deck1[0].score > deck2[0].score) {     //Fix this error/ .score isnt registered 

    deck1 = deck1.concat(war)                         //Error here as well
    x = deck1.shift()
    deck1.push(x)
    deck1.push(deck2.shift())
    console.log('Deck 1', deck1)
  }

  else if (deck2[0].score > deck1[0].score) {
    deck2 = deck2.concat(war)
    x = deck2.shift()
    deck2.push(x)
    deck2.push(deck1.shift())
    console.log('Deck 2', deck2)
  }

  else {
    draw3Cards
  }
}

if (deck1.length == 0) {
  console.log("Deck 2 Wins")
  console.log(deck2.length)
}
else if (deck2.length == 0) {
  console.log("Deck 1 Wins")
  console.log(deck1.length)
}