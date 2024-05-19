import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyseFinacierGetComponent } from './analyse-finacier-get.component';

describe('AnalyseFinacierGetComponent', () => {
  let component: AnalyseFinacierGetComponent;
  let fixture: ComponentFixture<AnalyseFinacierGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyseFinacierGetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyseFinacierGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
