import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TelegramService {
  private readonly botId = 'bot7442873488:AAHD-9iHqsn3M_XwfvypgAYu8v42PpZOYF0';
  private readonly chatId = '-1002268449011'
  private readonly apiUrl = `https://api.telegram.org/${this.botId}/sendMessage?chat_id=${this.chatId}`;

  constructor(private http: HttpClient) { }

  sendMessage(message: string): Observable<any> {
    return this.http.get<any>(this.apiUrl + `&text=${message}`);
  }
}
