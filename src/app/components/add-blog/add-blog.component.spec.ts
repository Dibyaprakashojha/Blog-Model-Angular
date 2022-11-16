import { RouterTestingModule } from '@angular/router/testing';
import { BlogService } from 'src/app/services/blog.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBlogComponent } from './add-blog.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AddBlogComponent', () => {
  let component: AddBlogComponent;
  let fixture: ComponentFixture<AddBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [AddBlogComponent],
      providers: [BlogService],
    }).compileComponents();

    fixture = TestBed.createComponent(AddBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have addBlog function', () => {
    const service: BlogService = TestBed.get(BlogService);
    expect(service.addBlog).toBeTruthy();
  });
});
