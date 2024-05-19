import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationFiscaleListComponent } from './declaration-fiscale-list.component';

describe('DeclarationFiscaleListComponent', () => {
  let component: DeclarationFiscaleListComponent;
  let fixture: ComponentFixture<DeclarationFiscaleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclarationFiscaleListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeclarationFiscaleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
