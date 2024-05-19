import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventParticipantListComponent } from './event-participant-list.component';

describe('EventParticipantListComponent', () => {
  let component: EventParticipantListComponent;
  let fixture: ComponentFixture<EventParticipantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventParticipantListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventParticipantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
