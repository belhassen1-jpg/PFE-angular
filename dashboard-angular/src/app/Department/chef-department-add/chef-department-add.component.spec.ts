import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefDepartmentAddComponent } from './chef-department-add.component';

describe('ChefDepartmentAddComponent', () => {
  let component: ChefDepartmentAddComponent;
  let fixture: ComponentFixture<ChefDepartmentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefDepartmentAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefDepartmentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
