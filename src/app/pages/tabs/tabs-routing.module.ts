import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:
    [
      {
        path: 'album',
        children:
        [
          {
            path: '',
            loadChildren: () => import('../photo-album/photo-album.module').then( m => m.PhotoAlbumPageModule)
          },
        ]
      },
      {
        path: 'blog',
        children:
        [
          {
            path:'',
            loadChildren: () => import('../blog/blog.module').then( m => m.BlogPageModule)
          }
        ]
      },
      {
        path:'nba',
        children:
        [
          {
            path:'',
            loadChildren: () => import('../nba-champions/nba-champions.module').then( m => m.NbaChampionsPageModule)
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo:'tabs/album',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
