import { Component } from '@angular/core';
import {HeaderComponent} from "../../../../components/common/header/header.component";
import {FooterComponent} from "../../../../components/common/footer/footer.component";
import {SupportWrapperComponent} from "../../../../components/support/support-wrapper/support-wrapper.component";

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
