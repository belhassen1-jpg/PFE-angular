import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjEpargneListComponent } from './obj-epargne-list.component';

describe('ObjEpargneListComponent', () => {
  let component: ObjEpargneListComponent;
  let fixture: ComponentFixture<ObjEpargneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjEpargneListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjEpargneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
