import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedEmoji: string | null = null;

  handleEmojiSelect(emoji: string) {
    this.selectedEmoji = emoji;
  }
}
