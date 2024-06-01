import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterBasedHeaderComponent } from './water-based-header.component';

describe('WaterBasedHeaderComponent', () => {
  let component: WaterBasedHeaderComponent;
  let fixture: ComponentFixture<WaterBasedHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaterBasedHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WaterBasedHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
