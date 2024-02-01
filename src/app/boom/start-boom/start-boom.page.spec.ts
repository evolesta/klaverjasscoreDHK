import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StartBoomPage } from './start-boom.page';

describe('StartBoomPage', () => {
  let component: StartBoomPage;
  let fixture: ComponentFixture<StartBoomPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StartBoomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
