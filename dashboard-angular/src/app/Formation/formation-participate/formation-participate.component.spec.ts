import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationParticipateComponent } from './formation-participate.component';

describe('FormationParticipateComponent', () => {
  let component: FormationParticipateComponent;
  let fixture: ComponentFixture<FormationParticipateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationParticipateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationParticipateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
