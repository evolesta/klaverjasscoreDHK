import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelhulpPage } from './telhulp.page';

describe('TelhulpPage', () => {
  let component: TelhulpPage;
  let fixture: ComponentFixture<TelhulpPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TelhulpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
