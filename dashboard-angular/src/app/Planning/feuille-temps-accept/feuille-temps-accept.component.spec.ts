import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeuilleTempsAcceptComponent } from './feuille-temps-accept.component';

describe('FeuilleTempsAcceptComponent', () => {
  let component: FeuilleTempsAcceptComponent;
  let fixture: ComponentFixture<FeuilleTempsAcceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeuilleTempsAcceptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeuilleTempsAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
