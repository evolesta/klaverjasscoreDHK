import { Component, OnInit } from '@angular/core';
import { BoomScoreService } from '../boom/boom-score.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  existingGame: boolean;

  constructor(private score: BoomScoreService) {}

  ngOnInit(): void {
    // controleer op een bestaand spel
    this.existingGame = this.score.existingGame();
  }

}
