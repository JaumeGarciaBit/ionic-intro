import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlogCommentsPageRoutingModule } from './blog-comments-routing.module';

import { BlogCommentsPage } from './blog-comments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlogCommentsPageRoutingModule
  ],
  declarations: [BlogCommentsPage],
  exports: [BlogCommentsPage]
})
export class BlogCommentsPageModule {}
