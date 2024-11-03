import { Component } from '@angular/core';
import {HeaderComponent} from "../../../../components/common/header/header.component";
import {FooterComponent} from "../../../../components/common/footer/footer.component";
import {SupportWrapperComponent} from "../../../../components/support/support-wrapper/support-wrapper.component";

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
