import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-comments',
  templateUrl: './blog-comments.page.html',
  styleUrls: ['./blog-comments.page.scss'],
})
export class BlogCommentsPage implements OnInit {

  constructor() { }

  m_lastUsername:string;
  m_lastDescription:string;

  m_comments = 
  [
    {name:"BoJack HorseLuis", date:"07/01/2021 13:22",text:"Alguno habéis visto la nueva de Mulán? El otro día la escuché de fondo mientras leía y me pareció lamentable."},
    {name:"bloclo!", date:"07/01/2021 13:18",text:"Me acaban de insultar por ir sin mascarilla por la calle. \nLos polis de balcón sólo fueron el principio."},
    {name:"Darn it! (a.k.a. MiniTrump)", date:"06/01/2021 23:55",text:"¿Alguien conoce a algún tonto que pagara los 20 y pico por verla en disney+?"},
    {name:"Kaskina Fina", date:"06/01/2021 22:39",text:"Mulan tampoco liberó nada. Cambió un régimen por otro."},
  ];

  onFormSubmit():void
  {
    let l_result = 
    {
      name: this.m_lastUsername,
      date: formatDate(new Date(), 'yyyy/MM/dd HH:mm', 'en'),
      text: this.m_lastDescription
    }

    this.m_comments.push(l_result);
  }

  ngOnInit(): void 
  {  
  }

}
