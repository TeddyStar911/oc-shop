import { Component } from '@angular/core';
import {HeaderComponent} from "../../../../shared/header/header.component";
import {FooterComponent} from "../../../../shared/footer/footer.component";
import {SupportWrapperComponent} from "../../../../shared/support-wrapper/support-wrapper.component";

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    SupportWrapperComponent
  ],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

}
