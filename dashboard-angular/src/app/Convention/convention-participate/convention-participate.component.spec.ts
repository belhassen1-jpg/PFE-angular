import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConventionParticipateComponent } from './convention-participate.component';

describe('ConventionParticipateComponent', () => {
  let component: ConventionParticipateComponent;
  let fixture: ComponentFixture<ConventionParticipateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConventionParticipateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConventionParticipateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
