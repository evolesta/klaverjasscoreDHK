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

  // Bereken tegenscore spelers
  
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
  roemSpeler1: number = 0;
  roemSpeler2: number = 0;
  roemSpeler3: number = 0;
  totaalSpeler1: number = 0;
  totaalSpeler2: number = 0;
  totaalSpeler3: number = 0;
}

class Score {
  // Scores per ronde
  ronde: number = 1;

  // Behaalde punten per speler
  scoreSpeler1: number = 0;
  scoreSpeler2: number = 0;
  scoreSpeler3: number = 0;

  // Roem per speler
  roemSpeler1: number = 0;
  roemSpeler2: number = 0;
  roemSpeler3: number = 0;
}