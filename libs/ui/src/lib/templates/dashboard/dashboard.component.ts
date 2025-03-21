import { Component, inject } from '@angular/core';
import { WidgetComponent } from '../../components/widget/widget.component';
import { ResourceService } from '@opal/services';
import { Post, PostResponse } from '@opal/services';

@Component({
  selector: 'ui-dashboard',
  standalone: true,
  imports: [WidgetComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  resourceService = inject(ResourceService<Post, PostResponse>);

  posts = this.resourceService.getAll(
    'https://jsonplaceholder.typicode.com/posts'
  );
}
