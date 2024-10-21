import { Component } from '@angular/core';
import {HeaderComponent} from "../../../../shared/header/header.component";
import {FooterComponent} from "../../../../shared/footer/footer.component";
import {SupportWrapperComponent} from "../../../../shared/support-wrapper/support-wrapper.component";

@Component({
  selector: 'app-cookie-policy',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    SupportWrapperComponent
  ],
  templateUrl: './cookie-policy.component.html',
  styleUrl: './cookie-policy.component.scss'
})
export class CookiePolicyComponent {

}
