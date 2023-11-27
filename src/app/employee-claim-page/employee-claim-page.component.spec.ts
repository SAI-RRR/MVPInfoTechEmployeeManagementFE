import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeClaimPageComponent } from './employee-claim-page.component';

describe('EmployeeClaimPageComponent', () => {
  let component: EmployeeClaimPageComponent;
  let fixture: ComponentFixture<EmployeeClaimPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeClaimPageComponent]
    });
    fixture = TestBed.createComponent(EmployeeClaimPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
