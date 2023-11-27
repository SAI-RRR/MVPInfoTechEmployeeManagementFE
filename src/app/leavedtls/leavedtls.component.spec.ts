import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavedtlsComponent } from './leavedtls.component';

describe('LeavedtlsComponent', () => {
  let component: LeavedtlsComponent;
  let fixture: ComponentFixture<LeavedtlsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeavedtlsComponent]
    });
    fixture = TestBed.createComponent(LeavedtlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
