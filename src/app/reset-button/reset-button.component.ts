import { Component, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-reset-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './reset-button.component.html',
  styleUrl: './reset-button.component.css'
})
export class ResetButtonComponent {
  @Output() resetEvent = new EventEmitter<void>();

  reset() {
    this.resetEvent.emit();
  }
}
