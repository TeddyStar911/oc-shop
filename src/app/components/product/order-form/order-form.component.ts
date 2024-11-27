import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {TelegramService} from "../../../core/services/telegram/telegram.service";
import {NgxMaskDirective} from "ngx-mask";
import {ProductConfig} from "../../../core/interfaces/product-config.interface";

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgForOf,
    NgxMaskDirective
  ],
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.scss'
})
export class OrderFormComponent implements OnInit {
  @Input() productConfig: ProductConfig;
  orderForm!: FormGroup;
  showSuccessMessage: boolean = false;

  constructor(private fb: FormBuilder, private telegramService: TelegramService) { }

  ngOnInit() {
    this.orderForm = this.fb.group({
      count: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }

  onSubmit() {
    if (this.orderForm.valid) {
      const {count, name, phone} = this.orderForm.value;
      const messageString = `${this.productConfig.sku}, кількість - ${count}, Ім'я - ${name}, Телефон - ${phone}`;
      this.telegramService.sendMessage(messageString).subscribe(() => {
        this.resetFormAction();
      });
    }
  }

  resetFormAction(): void {
    this.showSuccessMessage = true;
    this.orderForm.reset();
    this.orderForm.get('count')?.patchValue('');
  }
}
