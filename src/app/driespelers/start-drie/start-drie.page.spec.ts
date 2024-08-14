import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StartDriePage } from './start-drie.page';

describe('StartDriePage', () => {
  let component: StartDriePage;
  let fixture: ComponentFixture<StartDriePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StartDriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
