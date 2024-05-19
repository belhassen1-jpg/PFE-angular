import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDemandeParticipationListComponent } from './event-demande-participation-list.component';

describe('EventDemandeParticipationListComponent', () => {
  let component: EventDemandeParticipationListComponent;
  let fixture: ComponentFixture<EventDemandeParticipationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventDemandeParticipationListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventDemandeParticipationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
