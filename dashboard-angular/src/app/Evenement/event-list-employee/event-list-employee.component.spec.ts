import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListEmployeeComponent } from './event-list-employee.component';

describe('EventListEmployeeComponent', () => {
  let component: EventListEmployeeComponent;
  let fixture: ComponentFixture<EventListEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventListEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventListEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
