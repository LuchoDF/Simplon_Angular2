import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlerteConsoleService {
  
  showAlert(rAlertMsg: string) {
    console.log(rAlertMsg);
  }

  constructor() { }
}
