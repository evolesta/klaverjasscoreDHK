import { Component, OnInit } from '@angular/core';
import { BoomScoreService } from '../boom-score.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-scoreblad-boom',
  templateUrl: './scoreblad-boom.page.html',
  styleUrls: ['./scoreblad-boom.page.scss'],
})
export class ScorebladBoomPage implements OnInit {

  constructor(public score: BoomScoreService) { }

  hand = new FormGroup({
    scoreWij: new FormControl(),
    roemWij: new FormControl(),
    scoreZij: new FormControl(),
    roemZij: new FormControl(),
  });

  ngOnInit() {
    // Init observers die de tegenscore van andere partij berekent
    this.hand.controls.scoreWij.valueChanges.subscribe(change => {
      this.hand.controls.scoreZij.setValue(this.berekenVerschil(change));
    });

    this.hand.controls.scoreZij.valueChanges.subscribe(change => {
      this.hand.controls.scoreWij.setValue(this.berekenVerschil(change));
    });
  }

  addHand(): void {

  }

  berekenVerschil(score: number): number {
    return 162 - score;
  }

}
