import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DriespelersScoreService } from '../driespelers-score.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-drie',
  templateUrl: './start-drie.page.html',
  styleUrls: ['./start-drie.page.scss'],
})
export class StartDriePage implements OnInit {

  spelers = new FormGroup({
    speler1: new FormControl(),
    speler2: new FormControl(),
    speler3: new FormControl()
  });

  constructor(private score: DriespelersScoreService,
    private router: Router
  ) { }

  ngOnInit(): void {
      if (this.score.existingGame())
        this.router.navigateByUrl('drie-scoreblad');
  }

  startGame(): void {
    this.score.boom.speler1 = this.spelers.controls.speler1.value;
    this.score.boom.speler2 = this.spelers.controls.speler2.value;
    this.score.boom.speler3 = this.spelers.controls.speler3.value;

    this.score.save();

    this.router.navigateByUrl('drie-scoreblad');
  }
}
