import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoomScoreService {

  // initialiseer een nieuw boom object
  public boom: Boom;

  constructor() {
    // controleer of er nog een recente game in de localstorage aanwezig is. Zo niet, init een leeg object
    if (this.existingGame())
      this.load();
    else
      this.reset();
   }

  setPlayerNames(names: any): void {
    names.speler1 ? this.boom.speler1 = names.speler1 : null;
    names.speler2 ? this.boom.speler2 = names.speler2 : null;
    names.speler3 ? this.boom.speler3 = names.speler3 : null;
    names.speler4 ? this.boom.speler4 = names.speler4 : null;
    this.save();
  }

  // ++ Functies die het object wegschrijven naar de storage (zodat de score tijdelijk bewaard blijft)
  save(): void {
    const json = JSON.stringify(this.boom);
    localStorage.setItem('boom', json);
  }

  load(): void {
    const json = localStorage.getItem('boom');
    const jsonStr = String(json);
    this.boom = JSON.parse(jsonStr);
  }

  existingGame(): boolean {
    const exists = localStorage.getItem('boom');
    if (exists == null)
      return false;
    else
      return true;
  }

  reset(): void {
    this.boom = new Boom();
  }

  // ++ Functies om scores te verwerken in de boom
  addScore(scoreWij: number, scoreZij: number, 
    roemWij: number, roemZij: number): void {
    // Nieuw object maken en vullen met punten
    const score = new Score();
    score.puntenWij = scoreWij;
    score.puntenZij = scoreZij;
    score.roemWij = roemWij;
    score.roemZij = roemZij;

    if(this.boom.scores.length > 0) {
      // verkrijg laatste ronde nr en verhoog deze met 1
      const laatsteRonde = this.boom.scores[this.boom.scores.length - 1].ronde;
      const ronde = laatsteRonde + 1;
      score.ronde = ronde;
    }
    else {
      score.ronde = 1;
    }

    // voeg score toe aan array met scores
    this.boom.scores.push(score);
    this.berekenTotaleScores();
    this.save();
  }

  undoLastScore(): void {
    this.boom.scores.pop();
    this.berekenTotaleScores();
    this.save();
  }

  berekenTotaleScores(): void {
    // Doorloop de array met scores en herbereken de score
    this.boom.puntenWij = 0;
    this.boom.puntenZij = 0;
    this.boom.roemWij = 0;
    this.boom.roemZij = 0;
    this.boom.totaalWij = 0;
    this.boom.totaalZij = 0;

    for(let i = 0; i < this.boom.scores.length; i++) {
      this.boom.puntenWij += this.boom.scores[i].puntenWij;
      this.boom.puntenZij += this.boom.scores[i].puntenZij;
      this.boom.roemWij += this.boom.scores[i].roemWij;
      this.boom.roemZij += this.boom.scores[i].roemZij;
    }

    // Bereken totaal
    this.boom.totaalWij = this.boom.puntenWij + this.boom.roemWij;
    this.boom.totaalZij = this.boom.puntenZij + this.boom.roemZij;
  }
}

class Score {
  ronde: number = 1;
  puntenWij: number = 0;
  puntenZij: number = 0;
  roemWij: number = 0;
  roemZij: number = 0;
}

class Boom {
  // names of the players
  speler1: string = "Speler 1";
  speler2: string = "Speler 2";
  speler3: string = "Speler 3";
  speler4: string = "Speler 4";

  // points per round
  scores: Score[] = [];

  // scores
  puntenWij: number = 0;
  puntenZij: number = 0;
  roemWij: number = 0;
  roemZij: number = 0;
  totaalWij: number = 0;
  totaalZij: number = 0;
}