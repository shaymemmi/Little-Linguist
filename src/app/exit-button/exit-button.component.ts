import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExitDialogComponent } from '../exit-dialog/exit-dialog.component';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-exit-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './exit-button.component.html',
  styleUrl: './exit-button.component.css'
})
export class ExitButtonComponent {
  constructor(public dialog: MatDialog, private router: Router) {}

  openDialog() {
    const dialogRef = this.dialog.open(ExitDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigate(['/game-list']);
      }
    });
  }
}