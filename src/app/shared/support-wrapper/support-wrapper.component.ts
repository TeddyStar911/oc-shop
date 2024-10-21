import {Component, Input} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-support-wrapper',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './support-wrapper.component.html',
  styleUrl: './support-wrapper.component.scss'
})
export class SupportWrapperComponent {
  @Input() title: string = '';
}
