import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationParticipantListComponent } from './formation-participant-list.component';

describe('FormationParticipantListComponent', () => {
  let component: FormationParticipantListComponent;
  let fixture: ComponentFixture<FormationParticipantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationParticipantListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationParticipantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
