import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjEpargneAddComponent } from './obj-epargne-add.component';

describe('ObjEpargneAddComponent', () => {
  let component: ObjEpargneAddComponent;
  let fixture: ComponentFixture<ObjEpargneAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjEpargneAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjEpargneAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
