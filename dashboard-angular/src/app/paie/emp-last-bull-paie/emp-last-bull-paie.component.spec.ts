import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpLastBullPaieComponent } from './emp-last-bull-paie.component';

describe('EmpLastBullPaieComponent', () => {
  let component: EmpLastBullPaieComponent;
  let fixture: ComponentFixture<EmpLastBullPaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpLastBullPaieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpLastBullPaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
