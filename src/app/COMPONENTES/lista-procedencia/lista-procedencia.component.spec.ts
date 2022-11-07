import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LISTAPROCEDENCIAComponent } from './lista-procedencia.component';

describe('LISTAPROCEDENCIAComponent', () => {
  let component: LISTAPROCEDENCIAComponent;
  let fixture: ComponentFixture<LISTAPROCEDENCIAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LISTAPROCEDENCIAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LISTAPROCEDENCIAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
