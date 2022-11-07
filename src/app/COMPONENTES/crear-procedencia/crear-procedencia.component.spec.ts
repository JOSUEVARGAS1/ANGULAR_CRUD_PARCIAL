import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREARPROCEDENCIAComponent } from './crear-procedencia.component';

describe('CREARPROCEDENCIAComponent', () => {
  let component: CREARPROCEDENCIAComponent;
  let fixture: ComponentFixture<CREARPROCEDENCIAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREARPROCEDENCIAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CREARPROCEDENCIAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
