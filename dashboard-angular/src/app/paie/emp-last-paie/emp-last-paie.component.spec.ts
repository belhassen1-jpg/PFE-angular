import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpLastPaieComponent } from './emp-last-paie.component';

describe('EmpLastPaieComponent', () => {
  let component: EmpLastPaieComponent;
  let fixture: ComponentFixture<EmpLastPaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpLastPaieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpLastPaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
