import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemissionListComponent } from './demission-list.component';

describe('DemissionListComponent', () => {
  let component: DemissionListComponent;
  let fixture: ComponentFixture<DemissionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemissionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemissionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
