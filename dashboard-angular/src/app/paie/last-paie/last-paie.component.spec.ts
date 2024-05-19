import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastPaieComponent } from './last-paie.component';

describe('LastPaieComponent', () => {
  let component: LastPaieComponent;
  let fixture: ComponentFixture<LastPaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastPaieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastPaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
