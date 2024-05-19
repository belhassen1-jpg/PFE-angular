import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepensesAddComponent } from './depenses-add.component';

describe('DepensesAddComponent', () => {
  let component: DepensesAddComponent;
  let fixture: ComponentFixture<DepensesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepensesAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepensesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
