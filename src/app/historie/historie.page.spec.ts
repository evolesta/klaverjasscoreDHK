import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoriePage } from './historie.page';

describe('HistoriePage', () => {
  let component: HistoriePage;
  let fixture: ComponentFixture<HistoriePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HistoriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
