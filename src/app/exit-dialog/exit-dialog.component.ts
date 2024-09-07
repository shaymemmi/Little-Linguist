import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-exit-dialog',
  standalone: true,
  imports: [MatDialogModule,MatButtonModule],
  templateUrl: './exit-dialog.component.html',
  styleUrl: './exit-dialog.component.css'
})
export class ExitDialogComponent {
  constructor(public dialogRef: MatDialogRef<ExitDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}