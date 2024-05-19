import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemissionAddComponent } from './demission-add.component';

describe('DemissionAddComponent', () => {
  let component: DemissionAddComponent;
  let fixture: ComponentFixture<DemissionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemissionAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemissionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
