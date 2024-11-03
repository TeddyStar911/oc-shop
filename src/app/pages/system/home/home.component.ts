import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import {HeaderComponent} from "../../../components/common/header/header.component";
import {FooterComponent} from "../../../components/common/footer/footer.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


}
