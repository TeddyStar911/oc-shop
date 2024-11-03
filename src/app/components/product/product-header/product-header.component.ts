import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-product-header',
  standalone: true,
  imports: [],
  templateUrl: './product-header.component.html',
  styleUrl: './product-header.component.scss'
})
export class ProductHeaderComponent {
  @Input() subTitle: string = '';
  @Input() title: string = '';
}
