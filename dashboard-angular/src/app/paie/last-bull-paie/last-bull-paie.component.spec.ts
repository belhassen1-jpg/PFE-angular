import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastBullPaieComponent } from './last-bull-paie.component';

describe('LastBullPaieComponent', () => {
  let component: LastBullPaieComponent;
  let fixture: ComponentFixture<LastBullPaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastBullPaieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastBullPaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
