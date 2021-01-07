import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogCommentsPage } from './blog-comments.page';

const routes: Routes = [
  {
    path: '',
    component: BlogCommentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogCommentsPageRoutingModule {}
