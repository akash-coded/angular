import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emoji-selector',
  templateUrl: './emoji-selector.component.html',
  styleUrls: ['./emoji-selector.component.css'],
})
export class EmojiSelectorComponent {
  emojis = ['😄', '🥳', '🎉', '🎈', '🤩', '😎'];

  @Output() emojiSelected = new EventEmitter<string>();

  onSelect(emoji: string) {
    this.emojiSelected.emit(emoji);
  }
}
