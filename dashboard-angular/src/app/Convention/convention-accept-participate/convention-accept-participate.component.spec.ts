import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConventionAcceptParticipateComponent } from './convention-accept-participate.component';

describe('ConventionAcceptParticipateComponent', () => {
  let component: ConventionAcceptParticipateComponent;
  let fixture: ComponentFixture<ConventionAcceptParticipateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConventionAcceptParticipateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConventionAcceptParticipateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
