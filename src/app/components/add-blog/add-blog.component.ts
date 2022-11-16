import { BlogModel } from './../../models/blog-model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss'],
})
export class AddBlogComponent implements OnInit {
  blogModel: BlogModel = {
    blogId: 0,
    blogTitle: '',
    blogContent: '',
    addedAtDate: new Date(),
  };
  isSubmitted: boolean = false;
  currentDate = new Date();

  constructor(private _router: Router, private _blogService: BlogService) {}

  ngOnInit(): void {
    this.isSubmitted = false;
  }

  blogSaveForm = new FormGroup({
    blogTitle: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    blogContent: new FormControl('', [
      Validators.required,
      Validators.minLength(15),
    ]),
  });

  addBlog = (formValue: any) => {
    this.isSubmitted = true;
    this.blogModel.blogTitle = formValue.value.blogTitle;
    this.blogModel.blogContent = formValue.value.blogContent;
    this.save();
  };

  save = () => {
    var resultData = this.blogModel;
    if (resultData.blogTitle && resultData.blogContent) {
      this._blogService.addBlog(resultData).subscribe(
        (data) => {
          console.log('ResultData', resultData);
          if (resultData.blogTitle != null && resultData.blogContent != null) {
            alert('Blog Added Succesfully');
            setTimeout(() => {
              this.gotoHome();
            }, 500);
          }
        },
        (error) => {
          console.log('Fire in the hole');
          alert('Unable to add blog');
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
