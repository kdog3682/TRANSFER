// #save

class Tournament {
  constructor(players = 'AB'.split(''), entryfee = 1) {
    this.players = players //16, 32, 64, 128
    this.entryfee = entryfee
    this.matches = []
    this.outcomes = [players]
    this.rounds = []
  }
  
  get games() {
    return this.players.length - 1
  }
  
  generateMatchups(players) {
      let shuffled = shuffle(players)
      let matches = []
      for (let i = 0; i < shuffled.length - 1; i += 2) {
        matches.push({
          player1: shuffled[i],
          player2: shuffled[i+1],
        })
      }
      return matches
  }
  
  determineWinners(matches) {
    
    const outcomes = []
    
    for (let matchup of matches) {
      let winner = shuffle(Object.values(matchup))[0]
      outcomes.push(winner)
    }
    return outcomes
  }
  
  play() {
    let abc = this.generateMatchups(this.players)
    return this.determineWinners(abc)
  }
    
  get length() {return this.matches.length}
  
  run() {
    while (this.players.length > 1) {
      let round = this.play()
      this.outcomes.push(round)
      this.players = round
    }
  }
  
  get getruns() {
    this.run()
    return this.outcomes
  }
}

let t = new Tournament()
let rounds = t.getruns



function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function clone(arr) {
  return [...arr] // Why is this considered a shallow form of cloning and not a deep form? 
}

function tour(players) {
  
  let copy = clone(players) // make a copy of the initial arry
  let shuffled = shuffle(copy) //shuffle the array
  let matches = []
  let outcomes = []
  let rounds = []
  
  while (copy.length > 1) { 
    
    for (let i = 0; i < shuffled.length - 1; i += 2) {
      matches.push({
        player1: shuffled[i],
        player2: shuffled[i+1],
      })
    }
    
    
    for (let matchup of matches) {
      let winner = shuffle(Object.values(matchup))[0]
      outcomes.push(winner)
    }
   
    rounds.push(outcomes)
    copy = players
    
  }
    
  return rounds
  
  // Well it can certainly be better done. 
}