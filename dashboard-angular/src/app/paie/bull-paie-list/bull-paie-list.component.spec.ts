import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BullPaieListComponent } from './bull-paie-list.component';

describe('BullPaieListComponent', () => {
  let component: BullPaieListComponent;
  let fixture: ComponentFixture<BullPaieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BullPaieListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BullPaieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
