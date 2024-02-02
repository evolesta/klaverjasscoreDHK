import { Component, OnInit } from '@angular/core';
import { BoomScoreService } from '../boom-score.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-scoreblad-boom',
  templateUrl: './scoreblad-boom.page.html',
  styleUrls: ['./scoreblad-boom.page.scss'],
})
export class ScorebladBoomPage implements OnInit {

  scoreWij: number = 0;
  roemWij: number = 0;
  scoreZij: number = 0;
  roemZij: number = 0;

  constructor(public score: BoomScoreService) { }

  ngOnInit() {
  }

  // ++ Score berekenen functies
  berekenTegenscore(score: number): number {
    return 162 - score;
  }

  berekenScore(score: any, team: string) {
    const scoreNumber: number = score.target.value;

    switch(team) {
      case 'wij':
        this.scoreWij = scoreNumber;
        this.scoreZij = this.berekenTegenscore(scoreNumber);
        break;
      case 'zij':
        this.scoreZij = scoreNumber;
        this.scoreWij = this.berekenTegenscore(scoreNumber);
        break;
    }
  }

  // ++ Roem berekenen functies
  addRoem(roem: number, team: string): void {
    switch(team) { 
      case "wij":
        this.roemWij += roem;
        break;
      case "zij":
        this.roemZij += roem;
        break;
    }
  }

  resetRoem(team: string): void {
    switch(team) {
      case 'wij':
        this.roemWij = 0;
        break;
      case 'zij':
        this.roemZij = 0;
    }
  }

  // ++ Algemene functies
  verwerkScore(): void {
    this.score.addScore(this.scoreWij, this.scoreZij, this.roemWij, this.roemZij);
  }

  laasteScoreUndo(): void {
    this.score.undoLastScore();
  }

}
