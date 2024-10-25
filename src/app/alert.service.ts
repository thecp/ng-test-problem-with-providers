import { Injectable } from '@angular/core';

@Injectable()
export class AlertService {
  public alert(text: string) {
    window.alert(text);
  }
}
