import { Component } from '@angular/core';
import {NgOptimizedImage, NgTemplateOutlet} from "@angular/common";
import {FooterComponent} from "../../../components/common/footer/footer.component";
import {ProductWrapperComponent} from "../../../components/product/product-wrapper/product-wrapper.component";
import {ProductCardComponent} from "../../../components/product/product-card/product-card.component";
import {ProductConfig} from "../../../core/interfaces/product-config.interface";
import {
  ProductMakeOrderButtonComponent
} from "../../../components/product/product-make-order-button/product-make-order-button.component";
import {ProductOrderBtnConfig} from "../../../core/interfaces/product-order-btn-config.interface";

@Component({
  selector: 'app-auto-vacuum-cleaner',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FooterComponent,
    NgTemplateOutlet,
    ProductWrapperComponent,
    ProductCardComponent,
    ProductMakeOrderButtonComponent
  ],
  templateUrl: './auto-vacuum-cleaner.component.html',
  styleUrl: './auto-vacuum-cleaner.component.scss'
})
export class AutoVacuumCleanerComponent {
  productConfig: ProductConfig = {
    title: 'АВТОМОБІЛЬНИЙ ПИЛОСОС',
    sku: 'Автомобільний пилосос',
    subTitle: 'CAR VACUUM CLEANER',
    salePercent: 28,
    imgUrl: 'https://dlombi.org.ua/wp-content/uploads/2023/01/000.jpeg',
    price: 699,
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
