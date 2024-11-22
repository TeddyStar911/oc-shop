import {Component, Input} from '@angular/core';
import {ProductOrderBtnConfig} from "../../../core/interfaces/product-order-btn-config.interface";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-product-make-order-button',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './product-make-order-button.component.html',
  styleUrl: './product-make-order-button.component.scss'
})
export class ProductMakeOrderButtonComponent {
  @Input() productOrderBtnConfig: ProductOrderBtnConfig;

  scrollToForm() {
    const orderFormElement = document.getElementById('order_form');
    if (orderFormElement) {
      orderFormElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
