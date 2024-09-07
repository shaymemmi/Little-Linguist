import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-result-dialog',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './result-dialog.component.html',
  styleUrl: './result-dialog.component.css'
})
export class ResultDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { success: boolean }) {}
}
