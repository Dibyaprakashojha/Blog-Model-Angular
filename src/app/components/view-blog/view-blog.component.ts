import { BlogModel } from 'src/app/models/blog-model';
import { BlogService } from 'src/app/services/blog.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.scss'],
})
export class ViewBlogComponent implements OnInit {
  blogModel!: BlogModel;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _blogService: BlogService
  ) {}

  ngOnInit(): void {
    this.getBlogById();
  }

  getBlogById = () => {
    const id = this._activatedRoute.snapshot.params['blogId'];
    this._blogService.getBlogById(id).subscribe((data: BlogModel) => {
      this.blogModel = data;
      console.log('Data', data);
    });
  };
}
