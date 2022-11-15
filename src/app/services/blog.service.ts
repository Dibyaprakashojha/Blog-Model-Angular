import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BlogModel } from '../models/blog-model';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private _httpClient: HttpClient) {}

  private _baseUrl = environment.baseUrl;

  addBlog = (blogModel: object): Observable<object> => {
    let url = `${this._baseUrl}/addBlog`;
    return this._httpClient.post<object>(url, blogModel);
  };

  editBlog = (blogId: number, value: any): Observable<void> => {
    let url = `${this._baseUrl}/editBlog/${blogId}`;
    return this._httpClient.post<void>(url, value);
  };

  deleteById = (blogId: number): Observable<any> => {
    let url = `${this._baseUrl}/deleteBlog/${blogId}`;
    return this._httpClient.delete(url, { responseType: 'text' });
  };

  getBlogById = (blogId: number): Observable<object> => {
    let url = `${this._baseUrl}/getBlog/${blogId}`;
    return this._httpClient.get<object>(url);
  };

  getAllBlogs = (): Observable<BlogModel> => {
    let url = `${this._baseUrl}/getAllBlogs`;
    return this._httpClient.get<BlogModel>(url);
  };
}
