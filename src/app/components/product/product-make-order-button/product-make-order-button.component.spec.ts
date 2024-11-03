import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMakeOrderButtonComponent } from './product-make-order-button.component';

describe('ProductMakeOrderButtonComponent', () => {
  let component: ProductMakeOrderButtonComponent;
  let fixture: ComponentFixture<ProductMakeOrderButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductMakeOrderButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductMakeOrderButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
