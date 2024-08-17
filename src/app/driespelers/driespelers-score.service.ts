import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DriespelersScoreService {

  // Declareer een nieuw object
  public boom: Boom;

  constructor() { 
    if (this.existingGame())
      this.load(); // Laad bestaande score
    else
      this.boom = new Boom(); // Genereer een nieuwe score
  }

  // Functie die checkt of een er een bestaand score aanwezig is
  existingGame(): boolean {
    const currentGame = localStorage.getItem('driespelers');
    return currentGame != null;
  }

  // Functie die een bestaande score inlaad in de service
  load(): void {
    const currentGame = localStorage.getItem('driespelers');
    this.boom = JSON.parse(currentGame);
  }

  // Functie die een bestaande score opslaat in de browser localstorage
  save(): void {
    const currentGame = JSON.stringify(this.boom);
    localStorage.setItem('driespelers', currentGame);
  }

  // Functie die een bestaande score reset
  reset(): void {
    this.boom = new Boom();
  }

  // +++ === SCORE FUNCTIES
  verwerkScore(score1, score2, score3): void {
    const score = new Score();
    score.scoreSpeler1 = score1;
    score.scoreSpeler2 = score2;
    score.scoreSpeler3 = score3;
    score.ronde = this.boom.scores.length + 1;

    this.boom.scores.push(score);
    this.berekenScores();
    this.save();
  }

  undoLaatsteScore(): void {
    this.boom.scores.pop();
    this.berekenScores();
    this.save();
  }

  // Bereken tegenscore spelers 
  berekenScores(): void {
    this.boom.puntenSpeler1 = 0;
    this.boom.puntenSpeler2 = 0;
    this.boom.puntenSpeler3 = 0;

    for (let i = 0; i < this.boom.scores.length; i++) {
      this.boom.puntenSpeler1 += this.boom.scores[i].scoreSpeler1;
      this.boom.puntenSpeler2 += this.boom.scores[i].scoreSpeler2;
      this.boom.puntenSpeler3 += this.boom.scores[i].scoreSpeler3;
    }
  }
}

// Data klassen
class Boom {
  // Namen van de spelers
  speler1: string;
  speler2: string;
  speler3: string; 

  // Scores
  scores: Score[] = [];

  // Totaal scores
  puntenSpeler1: number = 0;
  puntenSpeler2: number = 0;
  puntenSpeler3: number = 0;
}

class Score {
  // Scores per ronde
  ronde: number = 1;

  // Behaalde punten per speler
  scoreSpeler1: number = 0;
  scoreSpeler2: number = 0;
  scoreSpeler3: number = 0;
}