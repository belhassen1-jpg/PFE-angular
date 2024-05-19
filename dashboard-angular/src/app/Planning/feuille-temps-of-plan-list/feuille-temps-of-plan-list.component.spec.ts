import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeuilleTempsOfPlanListComponent } from './feuille-temps-of-plan-list.component';

describe('FeuilleTempsOfPlanListComponent', () => {
  let component: FeuilleTempsOfPlanListComponent;
  let fixture: ComponentFixture<FeuilleTempsOfPlanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeuilleTempsOfPlanListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeuilleTempsOfPlanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
