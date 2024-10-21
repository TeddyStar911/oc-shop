import { Component } from '@angular/core';
import {HeaderComponent} from "../../../../shared/header/header.component";
import {FooterComponent} from "../../../../shared/footer/footer.component";
import {SupportWrapperComponent} from "../../../../shared/support-wrapper/support-wrapper.component";

@Component({
  selector: 'app-delivery-terms',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    SupportWrapperComponent
  ],
  templateUrl: './delivery-terms.component.html',
  styleUrl: './delivery-terms.component.scss'
})
export class DeliveryTermsComponent {

}
