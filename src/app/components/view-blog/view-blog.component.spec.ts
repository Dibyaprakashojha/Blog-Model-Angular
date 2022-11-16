import { BlogService } from 'src/app/services/blog.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBlogComponent } from './view-blog.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ViewBlogComponent', () => {
  let component: ViewBlogComponent;
  let fixture: ComponentFixture<ViewBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ViewBlogComponent],
      providers: [BlogService],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have getBlogById function', () => {
    const service: BlogService = TestBed.get(BlogService);
    expect(service.getBlogById).toBeTruthy();
  });
});
