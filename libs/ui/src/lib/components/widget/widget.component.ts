import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '@opal/services';

@Component({
  selector: 'ui-widget',
  imports: [CommonModule],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.scss',
})
export class WidgetComponent {
  title = input<string>('');
  dataResource = input<Post[]>();
  isLoading = input();
}
