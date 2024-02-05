import { Component, OnInit } from '@angular/core';
import { BoomScoreService } from '../boom-score.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';

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
  wijNat: boolean = false;
  zijNat: boolean = false;

  constructor(public score: BoomScoreService,
    private alert: AlertController) { }

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
  // Checkt de score en geeft deze door aan de service
  verwerkScore(): void {
    this.score.addScore(this.scoreWij, this.scoreZij, this.roemWij, this.roemZij);
    this.resetScores();
  }

  laasteScoreUndo(): void {
    this.score.undoLastScore();
  }

  resetScores(): void {
    this.scoreWij = 0;
    this.scoreZij = 0;
    this.roemWij = 0;
    this.roemZij = 0;
    this.wijNat = false;
    this.zijNat = false;
  }

  // Functie die teruggeeft of het spelende team het heeft gehaald
  heeftGehaald(team: string): void {
    this.wijNat = false;
    this.zijNat = false;
    // Het spelende team moet meer punten behalen dan het niet-spelende team (minimaal 82)
    // Daarbij moet roem ook meegeteld worden
    const totaleScore: number = +this.scoreWij + +this.roemWij + +this.scoreZij + +this.roemZij;
    var teBehalenScore: number = totaleScore / 2 + 1;

    if (teBehalenScore < 82)
      teBehalenScore = 82;

    // Bepaal adhv het argument voor welk team het gecontroleerd moet worden
    switch(team) {
      case 'wij':
        const scoreWij: number = +this.scoreWij + +this.roemWij;
        this.wijNat = scoreWij < teBehalenScore;
        break;
      
      case 'zij':
        const scoreZij: number = +this.scoreZij + +this.roemZij;
        this.zijNat = scoreZij < teBehalenScore;
        break;
    }

    // Toon bericht als 1 van de teams nat is
    if (this.wijNat || this.zijNat)
      this.showNatBericht(team, teBehalenScore.toString());
    else
      this.showGehaaldBericht(team, teBehalenScore.toString());
  }

  async showNatBericht(team: string, teBehalenScore: string) {
    const alert = await this.alert.create({
      header: 'Team ' + team + ' is nat',
      message: 'Team ' + team + ' is nat. Inclusief behaalde roem moeten er minimaal ' 
      + teBehalenScore + ' punten worden behaald.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async showGehaaldBericht(team: string, teBehalenScore: string) {
    const alert = await this.alert.create({
      header: 'Team ' + team + ' heeft het gehaald',
      message: 'Team ' + team + ' heeft het gehaald. Zij hebben meer dan ' + teBehalenScore + ' punten behaald.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
