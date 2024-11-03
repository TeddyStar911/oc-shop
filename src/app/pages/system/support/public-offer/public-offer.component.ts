import { Component } from '@angular/core';
import {HeaderComponent} from "../../../../components/common/header/header.component";
import {FooterComponent} from "../../../../components/common/footer/footer.component";
import {SupportWrapperComponent} from "../../../../components/support/support-wrapper/support-wrapper.component";

@Component({
  selector: 'app-public-offer',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    SupportWrapperComponent
  ],
  templateUrl: './public-offer.component.html',
  styleUrl: './public-offer.component.scss'
})
export class PublicOfferComponent {

}
