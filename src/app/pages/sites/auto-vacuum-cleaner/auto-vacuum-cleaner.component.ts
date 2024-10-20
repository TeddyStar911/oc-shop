import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {OrderFormComponent} from "../../../shared/order-form/order-form.component";

@Component({
  selector: 'app-auto-vacuum-cleaner',
  standalone: true,
  imports: [
    NgOptimizedImage,
    OrderFormComponent
  ],
  templateUrl: './auto-vacuum-cleaner.component.html',
  styleUrl: './auto-vacuum-cleaner.component.scss'
})
export class AutoVacuumCleanerComponent {

}
