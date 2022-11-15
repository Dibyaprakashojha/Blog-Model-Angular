import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BlogModel } from 'src/app/models/blog-model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  closeResult = '';
  blogList: BlogModel[] = [];
  constructor(
    private _router: Router,
    private _toastr: ToastrService,
    private _blogService: BlogService
  ) {}

  ngOnInit(): void {
    this.getBlogList();
  }
  getBlogList = () => {
    this._blogService.getAllBlogs().subscribe(
      (data: any) => {
        if (data != null) {
          console.log('body', data);
          var resultData = data;
          if (resultData) {
            this.blogList = resultData;
            console.log('Bloglist', this.blogList);
          }
        }
      },
      (error: any) => {
        if (error) {
          if (error.status == 404) {
            if (error.error && error.error.message) {
              this.blogList = [];
            }
          }
        }
      }
    );
  };

  addBlog = () => {
    this._router.navigate(['addBlog']);
  };

  deleteBlogConfirmation = (employee: any) => {
    // this.modalService.open(MODALS['deleteModal'],
    //   {
    //     ariaLabelledBy: 'modal-basic-title'
    //   }).result.then((result) => {
    //     this.deleteBlog(employee);
    //   },
    //     (reason) => {});
  };

  deleteBlog = (blog: BlogModel) => {
    this._blogService.deleteById(blog.blogId).subscribe(
      (data: any) => {
        if (data != null && data.body != null) {
          var resultData = data.body;
          if (resultData != null && resultData.isSuccess) {
            this._toastr.success(resultData.message);
            this.getBlogList();
          }
        }
      },
      (error: any) => {}
    );
  };
}
