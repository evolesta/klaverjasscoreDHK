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
}

class Score {
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