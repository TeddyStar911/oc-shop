import { Component } from '@angular/core';
import {NgOptimizedImage, NgTemplateOutlet} from "@angular/common";
import {FooterComponent} from "../../../shared/footer/footer.component";
import {OrderFormComponent} from "../../../shared/order-form/order-form.component";
import {DeliveryBannerComponent} from "../../../shared/delivery-banner/delivery-banner.component";

@Component({
  selector: 'app-auto-vacuum-cleaner',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FooterComponent,
    OrderFormComponent,
    DeliveryBannerComponent,
    NgTemplateOutlet
  ],
  templateUrl: './auto-vacuum-cleaner.component.html',
  styleUrl: './auto-vacuum-cleaner.component.scss'
})
export class AutoVacuumCleanerComponent {

}
