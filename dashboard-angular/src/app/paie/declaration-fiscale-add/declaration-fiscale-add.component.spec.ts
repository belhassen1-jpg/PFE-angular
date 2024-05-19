import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationFiscaleAddComponent } from './declaration-fiscale-add.component';

describe('DeclarationFiscaleAddComponent', () => {
  let component: DeclarationFiscaleAddComponent;
  let fixture: ComponentFixture<DeclarationFiscaleAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclarationFiscaleAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeclarationFiscaleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
