import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BullPaieAddComponent } from './bull-paie-add.component';

describe('BullPaieAddComponent', () => {
  let component: BullPaieAddComponent;
  let fixture: ComponentFixture<BullPaieAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BullPaieAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BullPaieAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
