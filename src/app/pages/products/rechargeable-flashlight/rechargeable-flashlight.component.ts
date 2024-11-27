import { Component } from '@angular/core';
import {
  ProductMakeOrderButtonComponent
} from "../../../components/product/product-make-order-button/product-make-order-button.component";
import {ProductWrapperComponent} from "../../../components/product/product-wrapper/product-wrapper.component";
import {ProductConfig} from "../../../core/interfaces/product-config.interface";
import {ProductOrderBtnConfig} from "../../../core/interfaces/product-order-btn-config.interface";

@Component({
  selector: 'app-rechargeable-flashlight',
  standalone: true,
  imports: [
    ProductMakeOrderButtonComponent,
    ProductWrapperComponent
  ],
  templateUrl: './rechargeable-flashlight.component.html',
  styleUrl: './rechargeable-flashlight.component.scss'
})
export class RechargeableFlashlightComponent {
  productConfig: ProductConfig = {
    title: 'АКУМУЛЯТОРНИЙ ЛІХТАР',
    sku: 'Акумуляторний ліхтар',
    subTitle: 'RECHARGEABLE FLASHLIGHT',
    salePercent: 41,
    imgUrl: 'https://dlombi.org.ua/wp-content/uploads/2023/01/ye1.jpeg',
    price: 850,
    salePrice: 499,
    countOptions: [
      '1 шт = 499 грн ( Без знижки )',
      '2 шт = 948 грн ( знижка 5% )',
      '3 шт = 1347 грн ( знижка 10% )',
      '4 шт = 1696 грн ( знижка 15% )',
    ]
  };

  productOrderBtnConfig: ProductOrderBtnConfig = {
    text: 'ЗАМОВИТИ ЗІ ЗНИЖКОЮ',
    background: '#ffffff'
  }
}
