import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormationListEmployeeComponent } from './formation-list-employe.component';



describe('FormationListEmployeComponent', () => {
  let component: FormationListEmployeeComponent;
  let fixture: ComponentFixture<FormationListEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationListEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationListEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
