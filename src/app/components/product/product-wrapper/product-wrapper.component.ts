import {Component, Input} from '@angular/core';
import {FooterComponent} from "../../common/footer/footer.component";
import {ProductHeaderComponent} from "../product-header/product-header.component";
import {DeliveryBannerComponent} from "../delivery-banner/delivery-banner.component";
import {OrderFormComponent} from "../order-form/order-form.component";
import {ProductCardComponent} from "../product-card/product-card.component";
import {ProductConfig} from "../../../core/interfaces/product-config.interface";
import {ProductMakeOrderButtonComponent} from "../product-make-order-button/product-make-order-button.component";
import {ProductOrderBtnConfig} from "../../../core/interfaces/product-order-btn-config.interface";

@Component({
  selector: 'app-product-wrapper',
  standalone: true,
  imports: [
    FooterComponent,
    ProductHeaderComponent,
    DeliveryBannerComponent,
    OrderFormComponent,
    ProductCardComponent,
    ProductMakeOrderButtonComponent
  ],
  templateUrl: './product-wrapper.component.html',
  styleUrl: './product-wrapper.component.scss'
})
export class ProductWrapperComponent {
  @Input() productConfig: ProductConfig;
  productOrderBtnConfig: ProductOrderBtnConfig = {
    text: 'ЗРОБИТИ ЗАМОВЛЕННЯ',
    background: '#1c385f'
  }
}
