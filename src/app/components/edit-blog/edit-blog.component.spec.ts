import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBlogComponent } from './edit-blog.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BlogService } from 'src/app/services/blog.service';

describe('EditBlogComponent', () => {
  let component: EditBlogComponent;
  let fixture: ComponentFixture<EditBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [EditBlogComponent],
      providers: [BlogService],
    }).compileComponents();

    fixture = TestBed.createComponent(EditBlogComponent);
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
