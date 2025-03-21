import { Component, input } from '@angular/core';
import { Post } from '@opal/services';

@Component({
  selector: 'ui-widget',
  imports: [],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.scss',
})
export class WidgetComponent {
  title = input<string>('');
  dataResource = input<Post[]>();
  isLoading = input();
}
