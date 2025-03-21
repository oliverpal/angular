import { Component, input } from '@angular/core';

@Component({
  selector: 'ui-basic-page',
  imports: [],
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.scss',
})
export class BasicPageComponent {
  title = input<string>('');
  subtitle = input<string>();
  loading = input<boolean>(false);
}
