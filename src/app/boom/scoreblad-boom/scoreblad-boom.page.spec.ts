import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScorebladBoomPage } from './scoreblad-boom.page';

describe('ScorebladBoomPage', () => {
  let component: ScorebladBoomPage;
  let fixture: ComponentFixture<ScorebladBoomPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ScorebladBoomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
