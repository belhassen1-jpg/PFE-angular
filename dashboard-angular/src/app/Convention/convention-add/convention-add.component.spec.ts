import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConventionAddComponent } from './convention-add.component';

describe('ConventionAddComponent', () => {
  let component: ConventionAddComponent;
  let fixture: ComponentFixture<ConventionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConventionAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConventionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
