import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpBullPaieListComponent } from './emp-bull-paie-list.component';

describe('EmpBullPaieListComponent', () => {
  let component: EmpBullPaieListComponent;
  let fixture: ComponentFixture<EmpBullPaieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpBullPaieListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpBullPaieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
