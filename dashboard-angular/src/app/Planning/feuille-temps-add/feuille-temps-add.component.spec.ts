import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeuilleTempsAddComponent } from './feuille-temps-add.component';

describe('FeuilleTempsAddComponent', () => {
  let component: FeuilleTempsAddComponent;
  let fixture: ComponentFixture<FeuilleTempsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeuilleTempsAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeuilleTempsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
