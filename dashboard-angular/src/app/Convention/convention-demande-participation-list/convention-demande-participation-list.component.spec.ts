import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConventionDemandeParticipationListComponent } from './convention-demande-participation-list.component';

describe('ConventionDemandeParticipationListComponent', () => {
  let component: ConventionDemandeParticipationListComponent;
  let fixture: ComponentFixture<ConventionDemandeParticipationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConventionDemandeParticipationListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConventionDemandeParticipationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
