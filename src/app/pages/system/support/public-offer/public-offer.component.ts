import { Component } from '@angular/core';
import {HeaderComponent} from "../../../../shared/header/header.component";
import {FooterComponent} from "../../../../shared/footer/footer.component";
import {SupportWrapperComponent} from "../../../../shared/support-wrapper/support-wrapper.component";

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
