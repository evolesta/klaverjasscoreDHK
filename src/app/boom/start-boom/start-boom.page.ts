import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BoomScoreService } from '../boom-score.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-boom',
  templateUrl: './start-boom.page.html',
  styleUrls: ['./start-boom.page.scss'],
})
export class StartBoomPage implements OnInit {

  newBoom = new FormGroup({
    speler1: new FormControl(),
    speler2: new FormControl(),
    speler3: new FormControl(),
    speler4: new FormControl(),
  });

  constructor(private score: BoomScoreService,
    private router: Router) { }

  ngOnInit() {
  }

  startGame(): void {
    this.score.setPlayerNames(this.newBoom.value);
    this.router.navigateByUrl('/scoreblad-boom');
  }

}
