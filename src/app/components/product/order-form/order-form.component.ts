import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {TelegramService} from "../../../core/services/telegram/telegram.service";
import {NgxMaskDirective} from "ngx-mask";

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
  orderForm!: FormGroup;
  countOptions: string[] = [
    '1 шт = 499 грн ( Без знижки )',
    '2 шт = 948 грн ( знижка 5% )',
    '3 шт = 1347 грн ( знижка 10% )',
    '4 шт = 1696 грн ( знижка 15% )',
  ];
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
      const messageString = `Сайт: Vacuum Cleaner, кількість - ${count}, Ім'я - ${name}, Телефон - ${phone}`;
      this.telegramService.sendMessage(messageString).subscribe(response => {
        this.showSuccessMessage = true;
        this.orderForm.reset();
        this.orderForm.get('count')?.patchValue('');
      });
    }
  }
}
