import {Component, Input} from '@angular/core';
import {ProductConfig} from "../../../core/interfaces/product-config.interface";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() productConfig: ProductConfig;
}
