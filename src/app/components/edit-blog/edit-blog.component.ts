import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogModel } from 'src/app/models/blog-model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss'],
})
export class EditBlogComponent implements OnInit {
  blogId: number = 0;
  blogModel!: BlogModel;

  editBlogForm!: BlogModel;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _blogService: BlogService
  ) {}

  blogUpdateForm = new FormGroup({
    blogId: new FormControl(''),
    blogTitle: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    blogContent: new FormControl('', [
      Validators.required,
      Validators.minLength(15),
    ]),
    addedAtDate: new FormControl(''),
  });

  ngOnInit(): void {
    this.blogId = this._activatedRoute.snapshot.params['blogId'];
    this.getBlogById();
  }

  getBlogById = () => {
    let id = this.blogId;
    this._blogService.getBlogById(id).subscribe((data: BlogModel) => {
      this.blogModel = data;
      console.log('Data', data);
    });
  };

  editBlog = (formValue: any) => {
    this.blogModel.blogId = formValue.value.blogId;
    this.blogModel.blogTitle = formValue.value.blogTitle;
    this.blogModel.blogContent = formValue.value.blogContent;
    this.blogModel.addedAtDate = formValue.value.addedAtDate;
    this.saveForm();
  };

  saveForm = () => {
    let id = this.blogId;
    var resultData = this.blogModel;
    if (resultData.blogTitle && resultData.blogContent) {
      this._blogService.editBlog(id, resultData).subscribe(
        (data) => {
          console.log('ResultData', resultData);
          if (resultData.blogTitle != null && resultData.blogContent != null) {
            alert('Blog Updated Succesfully');
            setTimeout(() => {
              this.gotoHome();
            }, 500);
          }
        },
        (error) => {
          console.log('Fire in the hole');
          alert('Unable to update the blog');
          setTimeout(() => {
            this.gotoHome();
          }, 500);
        }
      );
    }
  };

  gotoHome = () => {
    this._router.navigate(['/home']);
  };
}
