import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-telhulp',
  templateUrl: './telhulp.page.html',
  styleUrls: ['./telhulp.page.scss'],
})
export class TelhulpPage {

  punten: number[] = [];
  totaal: number = 0;
  team: string = 'wij';

  constructor(private modalCtrl: ModalController) { }

  cancel(): void {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  // Tel de punten van de behaalde kaart erbij op
  voegPuntenToe(punten: number): void {
    const nieuwTotaal = this.optellen(punten);

    if (nieuwTotaal <= 162) {
      this.punten.push(punten);
      this.totaalTellen();
    }
  } 

  optellen(punten: number): number {
    return this.totaal + punten;
  }

  // Tel het totaal aantal punten
  totaalTellen(): void {
    this.totaal = 0;

    // Doorloop de array en tel alle punten bij elkaar op
    for (let i = 0; i < this.punten.length; i++) {
      this.totaal += this.punten[i];
    }
  }

  // Team switcher
  setTeam(event: any) {
    this.team = event.detail.value;
  }

  voerPuntenIn(): void {
    this.modalCtrl.dismiss({team: this.team, totaal: this.totaal}, 'confirm');
  }

}
