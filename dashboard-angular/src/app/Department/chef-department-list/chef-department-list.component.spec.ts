import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefDepartmentListComponent } from './chef-department-list.component';

describe('ChefDepartmentListComponent', () => {
  let component: ChefDepartmentListComponent;
  let fixture: ComponentFixture<ChefDepartmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefDepartmentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefDepartmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
