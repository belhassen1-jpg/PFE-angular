import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeuilleTempsEmployeeListComponent } from './feuille-temps-employee-list.component';

describe('FeuilleTempsEmployeeListComponent', () => {
  let component: FeuilleTempsEmployeeListComponent;
  let fixture: ComponentFixture<FeuilleTempsEmployeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeuilleTempsEmployeeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeuilleTempsEmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
