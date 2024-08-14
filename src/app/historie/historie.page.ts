import { Component, OnInit } from '@angular/core';
import { HttpHelperService } from '../services/http-helper.service';

@Component({
  selector: 'app-historie',
  templateUrl: './historie.page.html',
  styleUrls: ['./historie.page.scss'],
})
export class HistoriePage implements OnInit {

  constructor(private http: HttpHelperService) { }

  ngOnInit() {
    this.getHistorie();
  }

  getHistorie(): void {
    this.http.get('/historie').subscribe(resp => {

    });
  }

}
