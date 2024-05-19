import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAcceptParticipateComponent } from './event-accept-participate.component';

describe('EventAcceptParticipateComponent', () => {
  let component: EventAcceptParticipateComponent;
  let fixture: ComponentFixture<EventAcceptParticipateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventAcceptParticipateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventAcceptParticipateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
