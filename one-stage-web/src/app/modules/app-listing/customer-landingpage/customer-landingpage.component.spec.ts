import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerLandingpageComponent } from './customer-landingpage.component';

describe('CustomerLandingpageComponent', () => {
  let component: CustomerLandingpageComponent;
  let fixture: ComponentFixture<CustomerLandingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerLandingpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerLandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
