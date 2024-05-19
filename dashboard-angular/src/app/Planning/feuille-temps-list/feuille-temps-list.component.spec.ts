import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeuilleTempsListComponent } from './feuille-temps-list.component';

describe('FeuilleTempsListComponent', () => {
  let component: FeuilleTempsListComponent;
  let fixture: ComponentFixture<FeuilleTempsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeuilleTempsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeuilleTempsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
