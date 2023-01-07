import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css'],
})
export class EventBindingComponent {
  message: string | null = null;

  populateMessage(): void {
    this.message = 'Event binding works!';
  }

  reset(): void {
    this.message = null;
  }
}
