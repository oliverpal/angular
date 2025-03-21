import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResourceService } from 'libs/services/src/lib/services/resource/resource.service';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  imports: [RouterModule, JsonPipe],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-workspace';

  resourceService = inject(ResourceService<Post, PostResponse>);

  posts = this.resourceService.getAll(
    'https://jsonplaceholder.typicode.com/posts'
  );
}
