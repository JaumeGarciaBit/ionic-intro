!function(){function n(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function t(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{Rqya:function(o,e,i){"use strict";i.r(e),i.d(e,"NbaChampionsPageModule",(function(){return d}));var a=i("ofXK"),s=i("3Pt+"),r=i("TEn/"),c=i("tyNb"),p=function n(o,e,i,a,s){t(this,n),this.year=o,this.champion=e,this.teamLogo=i,this.championUrl=a,this.bestPlayers=s},h=i("fXoL");function b(n,t){if(1&n&&(h.Kb(0,"li"),h.bc(1),h.Jb()),2&n){var o=t.$implicit;h.xb(1),h.cc(o)}}function l(n,t){if(1&n&&(h.Kb(0,"div",2),h.Kb(1,"h1"),h.bc(2),h.Jb(),h.Kb(3,"h2"),h.Kb(4,"a",3),h.bc(5),h.Jb(),h.Jb(),h.Kb(6,"a",3),h.Ib(7,"img",4),h.Jb(),h.Kb(8,"ul"),h.Kb(9,"h3"),h.bc(10,"Best Players:"),h.Jb(),h.ac(11,b,2,1,"li",5),h.Jb(),h.Jb()),2&n){var o=t.$implicit;h.xb(2),h.cc(o.year),h.xb(2),h.Wb("href",o.championUrl,h.Yb),h.xb(1),h.cc(o.champion),h.xb(1),h.Wb("href",o.championUrl,h.Yb),h.xb(1),h.Wb("src",o.teamLogo,h.Yb),h.Wb("alt",o.champion),h.xb(4),h.Vb("ngForOf",o.bestPlayers)}}var f,g,m,u=[{path:"",component:(f=function(){function o(){t(this,o),this.championships=[],this.championships.push(new p("1946\u201347","Philadelphia Warriors","https://billypenn.com/wp-content/uploads/2015/06/warriors_grande-Copy-300x300.jpg","https://en.wikipedia.org/wiki/1946%E2%80%9347_Philadelphia_Warriors_season",["Dallmar, Howie","Fleishman, Jerry","Fulks, Joe","Guokas, Matt","\tHillhouse, Art","Kaplowitz, Ralph","Musi, Angelo","Rosenberg, Petey","Rullo, Jerry","Senesky, George"])),this.championships.push(new p("1971\u201372","Los Angeles Lakers","https://thumbor.forbes.com/thumbor/fit-in/0x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fi.forbesimg.com%2Fmedia%2Flists%2Fteams%2Flos-angeles-lakers_416x416.jpg","https://en.wikipedia.org/wiki/1971%E2%80%9372_Los_Angeles_Lakers_season",["Baylor, Elgin","Chamberlain, Wilt","Cleamons, Jim","Ellis, Leroy","Erickson, Keith","Goodrich, Gail","Hairston, Happy","McMillian, Jim","Riley, Pat","Robinson, Flynn"])),this.championships.push(new p("2002\u201303","San Antonio Spurs","https://images6.alphacoders.com/108/1081285.png","https://en.wikipedia.org/wiki/2002%E2%80%9303_San_Antonio_Spurs_season",["Bateer, Mengke","Bowen, Bruce","Claxton, Speedy","Duncan, Tim","Ferry, Danny","Gin\xf3bili, Manu","Jackson, Stephen","Kerr, Steve","Parker, Tony","Robinson, David"])),this.championships.push(new p("2018\u201319","Toronto Raptors","https://dam-img.rfdcontent.com/camo/83a38cc1725ee10d005947b88ab902bc92a560d0/687474703a2f2f696d67322e77696b69612e6e6f636f6f6b69652e6e65742f5f5f636232303134313233303233353635392f6c6f676f70656469612f696d616765732f632f63632f546f726f6e746f5f526170746f72735f4e65775f4c6f676f5f323031352e6a7067","https://en.wikipedia.org/wiki/2018%E2%80%9319_Toronto_Raptors_season",["Anunoby, OG","Boucher, Chris","Gasol, Marc","Green, Danny","Ibaka, Serge","Leonard, Kawhi","Lin, Jeremy","Lowry, Kyle","Loyd, Jordan","McCaw, Patrick"])),console.log(this.championships)}var e,i,a;return e=o,(i=[{key:"ngOnInit",value:function(){}}])&&n(e.prototype,i),a&&n(e,a),o}(),f.\u0275fac=function(n){return new(n||f)},f.\u0275cmp=h.Bb({type:f,selectors:[["app-nba-champions"]],decls:7,vars:1,consts:[[1,"container"],["class","post",4,"ngFor","ngForOf"],[1,"post"],[3,"href"],[3,"src","alt"],[4,"ngFor","ngForOf"]],template:function(n,t){1&n&&(h.Kb(0,"ion-header"),h.Kb(1,"ion-toolbar"),h.Kb(2,"ion-title"),h.bc(3,"nba-champions"),h.Jb(),h.Jb(),h.Jb(),h.Kb(4,"ion-content"),h.Kb(5,"div",0),h.ac(6,l,12,7,"div",1),h.Jb(),h.Jb()),2&n&&(h.xb(6),h.Vb("ngForOf",t.championships))},directives:[r.c,r.k,r.j,r.b,a.h],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:100%}.post[_ngcontent-%COMP%]{margin:auto;width:90%}.post[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .post[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .post[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .post[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .post[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;text-decoration:none;color:#fff}.post[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .post[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .post[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .post[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .post[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-left:5%;width:90%;height:auto}"]}),f)}],_=((m=function n(){t(this,n)}).\u0275mod=h.Fb({type:m}),m.\u0275inj=h.Eb({factory:function(n){return new(n||m)},imports:[[c.i.forChild(u)],c.i]}),m),d=((g=function n(){t(this,n)}).\u0275mod=h.Fb({type:g}),g.\u0275inj=h.Eb({factory:function(n){return new(n||g)},imports:[[a.b,s.b,r.l,_]]}),g)}}])}();