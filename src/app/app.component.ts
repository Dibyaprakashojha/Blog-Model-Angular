import { Component, OnInit } from '@angular/core';
import { BlogService } from './services/blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'blog-model';

  constructor(private _blogService: BlogService) {}

  ngOnInit(): void {
    // this._blogService.getAllBlogs().subscribe((data) => {
    //   console.log('All blogs: ', data);
    //   console.log('inside ngOnInit');
    // });
  }
}
