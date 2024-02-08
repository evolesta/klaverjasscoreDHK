import { Component, OnInit } from '@angular/core';
import { BoomScoreService } from '../boom-score.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TelhulpPage } from '../telhulp/telhulp.page';

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
    private alert: AlertController,
    private router: Router,
    private modal: ModalController) { }

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
    // Check of de boom niet is afgerond
    if (!this.score.checkAfgerond()) {
      // Voeg nieuwe score toe
      this.score.addScore(this.scoreWij, this.scoreZij, this.roemWij, this.roemZij);
      this.resetScores();
    } else {
      // Boom is afgerond - toon melding
      this.showAfgerondBericht();
    }
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

  // ++ BERICHTEN FUNCTIES
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

  async showAfgerondBericht() {
    const alert = await this.alert.create({
      header: 'Boom afgerond',
      message: 'Er zijn 16 rondes geregistreerd, de boom is afgerond.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async vraagNieuweBoom() {
    const alert = await this.alert.create({
      header: 'Nieuwe boom',
      message: 'Wil je een nieuwe boom beginnen?',
      buttons: [
        {
          text: 'Annuleren',
          role: 'cancel'
        },
        {
          text: 'Nieuwe boom',
          role: 'confirm',
          handler: () => {
            this.score.reset();
            this.router.navigateByUrl('/start-boom');
          }
        }
      ]
    });

    await alert.present();
  }

  // ++ MODAL functies
  async openTelhulp(team: string) {
    const modal = await this.modal.create({
      component: TelhulpPage
    });

    modal.present();

    // Verkrijg telpunten
    const {data, role} = await modal.onWillDismiss();

    if (role === 'confirm') {
      switch(data.team) {
        case 'wij':
          this.scoreWij = data.totaal;
          break;

        case 'zij':
          this.scoreZij = data.totaal;
          break;
      }
    }
  }

}
