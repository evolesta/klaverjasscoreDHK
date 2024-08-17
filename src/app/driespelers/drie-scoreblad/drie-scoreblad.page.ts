import { Component, OnInit } from '@angular/core';
import { DriespelersScoreService } from '../driespelers-score.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drie-scoreblad',
  templateUrl: './drie-scoreblad.page.html',
  styleUrls: ['./drie-scoreblad.page.scss'],
})
export class DrieScorebladPage {

  teBehalen: number = 0;
  geboden: number = 0;
  roem: number = 0;

  scores = new FormGroup({
    score1: new FormControl(),
    score2: new FormControl(),
    score3: new FormControl(  )
  });

  constructor(public score: DriespelersScoreService,
    public alert: AlertController,
    private router: Router
  ) { }

  berekenTeBehalen(geboden: any, roem: any): void {
    if(geboden)
      this.geboden = geboden.target.value;
    if(roem)
      this.roem = roem.target.value;

    this.teBehalen = +this.geboden - +this.roem;
  }

  verwerkScore(): void {
    this.score.verwerkScore(this.scores.controls.score1.value, this.scores.controls.score2.value, 
      this.scores.controls.score3.value);
  }

  undoScore(): void {
    this.showUndoWarning();
  }

  resetBoom(): void {
    this.showResetWarning();
  }

  async showUndoWarning() {
    const alert = await this.alert.create({
      header: 'Weet je het zeker?',
      message: 'Weet je zeker dat je de laatste ronde ongedaan wilt maken?',
      buttons: [
        { text: 'Annuleren',
          role: 'cancel'
         },
         { text: 'OK',
          role: 'confirm',
          handler: () => {this.score.undoLaatsteScore()}
          }
      ]
    });

    await alert.present();
  }

  async showResetWarning() {
    const alert = await this.alert.create({
      header: 'Nieuwe score beginnen?',
      message: 'Weet je zeker dat je een nieuwe score wil beginnen?',
      buttons: [
        { text: 'Annuleren',
          role: 'cancel'
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {this.score.reset(); this.router.navigateByUrl('start-drie');}
        }
      ]
    });

    await alert.present();
  }

}
