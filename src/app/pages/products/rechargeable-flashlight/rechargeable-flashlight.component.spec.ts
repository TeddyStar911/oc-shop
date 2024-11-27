import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeableFlashlightComponent } from './rechargeable-flashlight.component';

describe('RechargeableFlashlightComponent', () => {
  let component: RechargeableFlashlightComponent;
  let fixture: ComponentFixture<RechargeableFlashlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RechargeableFlashlightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechargeableFlashlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
