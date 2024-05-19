import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepensesListComponent } from './depenses-list.component';

describe('DepensesListComponent', () => {
  let component: DepensesListComponent;
  let fixture: ComponentFixture<DepensesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepensesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepensesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
