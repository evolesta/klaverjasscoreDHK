import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrieScorebladPage } from './drie-scoreblad.page';

describe('DrieScorebladPage', () => {
  let component: DrieScorebladPage;
  let fixture: ComponentFixture<DrieScorebladPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DrieScorebladPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
