import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { EditBlogComponent } from './components/edit-blog/edit-blog.component';
import { HomeComponent } from './components/home/home.component';
import { ViewBlogComponent } from './components/view-blog/view-blog.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'viewBlog/:blogId', component: ViewBlogComponent },
  { path: 'addBlog', component: AddBlogComponent },
  { path: 'editBlog/:blogId', component: EditBlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
