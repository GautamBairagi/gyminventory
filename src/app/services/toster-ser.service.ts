import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class TosterSerService {
  constructor( private snackBar: MatSnackBar) 
  {  }



  showSuccess(message: string): void {
    console.log('showSuccess method called');
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      panelClass: ['success-snackbar']
    });
  }
}

