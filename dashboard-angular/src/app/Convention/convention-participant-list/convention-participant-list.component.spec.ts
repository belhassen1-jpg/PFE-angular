import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConventionParticipantListComponent } from './convention-participant-list.component';

describe('ConventionParticipantListComponent', () => {
  let component: ConventionParticipantListComponent;
  let fixture: ComponentFixture<ConventionParticipantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConventionParticipantListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConventionParticipantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
