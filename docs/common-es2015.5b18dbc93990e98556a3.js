(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0/6H":function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var o=e("A36C"),i=e("iWo5"),r=e("qULd");const c=(t,n)=>{let e,c;const a=(t,o,i)=>{if("undefined"==typeof document)return;const r=document.elementFromPoint(t,o);r&&n(r)?r!==e&&(l(),s(r,i)):l()},s=(t,n)=>{e=t,c||(c=e);const i=e;Object(o.f)(()=>i.classList.add("ion-activated")),n()},l=(t=!1)=>{if(!e)return;const n=e;Object(o.f)(()=>n.classList.remove("ion-activated")),t&&c!==e&&e.click(),e=void 0};return Object(i.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>a(t.currentX,t.currentY,r.a),onMove:t=>a(t.currentX,t.currentY,r.b),onEnd:()=>{l(!0),Object(r.e)(),c=void 0}})}},"74mu":function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return o})),e.d(n,"d",(function(){return a}));const o=(t,n)=>null!==n.closest(t),i=(t,n)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,["ion-color-"+t]:!0},n):n,r=t=>{const n={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>n[t]=!0),n},c=/^[a-z][a-z0-9+\-.]*:/,a=async(t,n,e,o)=>{if(null!=t&&"#"!==t[0]&&!c.test(t)){const i=document.querySelector("ion-router");if(i)return null!=n&&n.preventDefault(),i.push(t,e,o)}return!1}},DVFu:function(t,n,e){"use strict";e.r(n),e.d(n,"BlogCommentsPageModule",(function(){return m}));var o=e("ofXK"),i=e("3Pt+"),r=e("TEn/"),c=e("tyNb"),a=e("lH9T"),s=e("fXoL");const l=[{path:"",component:a.a}];let d=(()=>{class t{}return t.\u0275mod=s.Fb({type:t}),t.\u0275inj=s.Eb({factory:function(n){return new(n||t)},imports:[[c.i.forChild(l)],c.i]}),t})(),m=(()=>{class t{}return t.\u0275mod=s.Fb({type:t}),t.\u0275inj=s.Eb({factory:function(n){return new(n||t)},imports:[[o.b,i.b,r.l,d]]}),t})()},ZaV5:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return i}));const o=async(t,n,e,o,i)=>{if(t)return t.attachViewToDom(n,e,i,o);if("string"!=typeof e&&!(e instanceof HTMLElement))throw new Error("framework delegate is missing");const r="string"==typeof e?n.ownerDocument&&n.ownerDocument.createElement(e):e;return o&&o.forEach(t=>r.classList.add(t)),i&&Object.assign(r,i),n.appendChild(r),r.componentOnReady&&await r.componentOnReady(),r},i=(t,n)=>{if(n){if(t)return t.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},h3R7:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));const o={bubbles:{dur:1e3,circles:9,fn:(t,n,e)=>{const o=t*n/e-t+"ms",i=2*Math.PI*n/e;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(t,n,e)=>{const o=n/e,i=t*o-t+"ms",r=2*Math.PI*o;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,n)=>({r:6,style:{left:9-9*n+"px","animation-delay":-110*n+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,n,e)=>({y1:17,y2:29,style:{transform:`rotate(${30*n+(n<6?180:-180)}deg)`,"animation-delay":t*n/e-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,n,e)=>({y1:12,y2:20,style:{transform:`rotate(${30*n+(n<6?180:-180)}deg)`,"animation-delay":t*n/e-t+"ms"}})}}},lH9T:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var o=e("ofXK"),i=e("fXoL"),r=e("3Pt+");function c(t,n){if(1&t&&(i.Kb(0,"div",9),i.Kb(1,"div"),i.Kb(2,"p",10),i.bc(3),i.Jb(),i.Kb(4,"p",11),i.bc(5),i.Jb(),i.Jb(),i.Kb(6,"p",12),i.bc(7),i.Jb(),i.Jb()),2&t){const t=n.$implicit;i.xb(3),i.cc(t.name),i.xb(2),i.cc(t.date),i.xb(2),i.cc(t.text)}}let a=(()=>{class t{constructor(){this.m_comments=[{name:"BoJack HorseLuis",date:"07/01/2021 13:22",text:"Alguno hab\xe9is visto la nueva de Mul\xe1n? El otro d\xeda la escuch\xe9 de fondo mientras le\xeda y me pareci\xf3 lamentable."},{name:"bloclo!",date:"07/01/2021 13:18",text:"Me acaban de insultar por ir sin mascarilla por la calle. \nLos polis de balc\xf3n s\xf3lo fueron el principio."},{name:"Darn it! (a.k.a. MiniTrump)",date:"06/01/2021 23:55",text:"\xbfAlguien conoce a alg\xfan tonto que pagara los 20 y pico por verla en disney+?"},{name:"Kaskina Fina",date:"06/01/2021 22:39",text:"Mulan tampoco liber\xf3 nada. Cambi\xf3 un r\xe9gimen por otro."}]}onFormSubmit(){let t={name:this.m_lastUsername,date:Object(o.l)(new Date,"yyyy/MM/dd HH:mm","en"),text:this.m_lastDescription};this.m_comments.push(t)}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=i.Bb({type:t,selectors:[["app-blog-comments"]],decls:16,vars:3,consts:[[1,"body"],["id","commentContainer"],["class","comment",4,"ngFor","ngForOf"],[1,"form"],["for","name"],["type","text","id","formName","name","name","value","An\xf3nimo",3,"ngModel","ngModelChange"],["for","text"],["name","text","id","formText","cols","30","rows","10",3,"ngModel","ngModelChange"],[3,"click"],[1,"comment"],["id","name"],["id","date"],["id","text"]],template:function(t,n){1&t&&(i.Kb(0,"div",0),i.Kb(1,"h2"),i.bc(2,"Comments:"),i.Jb(),i.Kb(3,"div",1),i.ac(4,c,8,3,"div",2),i.Jb(),i.Kb(5,"div",3),i.Kb(6,"h2"),i.bc(7,"Add your comment"),i.Jb(),i.Kb(8,"label",4),i.bc(9,"Name:"),i.Jb(),i.Kb(10,"input",5),i.Rb("ngModelChange",(function(t){return n.m_lastUsername=t})),i.Jb(),i.Kb(11,"label",6),i.bc(12,"Description:"),i.Jb(),i.Kb(13,"textarea",7),i.Rb("ngModelChange",(function(t){return n.m_lastDescription=t})),i.Jb(),i.Kb(14,"button",8),i.Rb("click",(function(){return n.onFormSubmit()})),i.bc(15,"Submit"),i.Jb(),i.Jb(),i.Jb()),2&t&&(i.xb(4),i.Vb("ngForOf",n.m_comments),i.xb(6),i.Vb("ngModel",n.m_lastUsername),i.xb(3),i.Vb("ngModel",n.m_lastDescription))},directives:[o.h,r.a,r.e,r.f],styles:[".body[_ngcontent-%COMP%]{width:100%;margin:auto;color:#000}.body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{border-bottom:1px solid #000;margin-left:20px}.body[_ngcontent-%COMP%] > #commentContainer[_ngcontent-%COMP%]{margin:auto;padding:20px;width:80%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;border:2px solid #000;border-radius:8px;background-color:ivory}.body[_ngcontent-%COMP%] > #commentContainer[_ngcontent-%COMP%] > .comment[_ngcontent-%COMP%]{color:#000;text-align:justify}.body[_ngcontent-%COMP%] > #commentContainer[_ngcontent-%COMP%] > .comment[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:flex-start}.body[_ngcontent-%COMP%] > #commentContainer[_ngcontent-%COMP%] > .comment[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0}.body[_ngcontent-%COMP%] > #commentContainer[_ngcontent-%COMP%] > .comment[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:first-child{font-weight:700;margin-right:20px}.body[_ngcontent-%COMP%] > #commentContainer[_ngcontent-%COMP%] > .comment[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:50px}.body[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%]{margin:20px auto auto;padding:20px;width:75%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;border:2px solid #000;border-radius:8px;background-color:#add8e6;display:flex;flex-direction:column}.body[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%] > input[_ngcontent-%COMP%], .body[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%]{margin-bottom:10px}.body[_ngcontent-%COMP%] > .form[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{padding:10px;background-color:#20b2aa;color:#fff;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;border-radius:8px}"]}),t})()},qULd:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return i})),e.d(n,"d",(function(){return s})),e.d(n,"e",(function(){return a}));const o={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const n=this.getEngine();if(!n)return;const e=this.isCapacitor()?t.style.toUpperCase():t.style;n.impact({style:e})},notification(t){const n=this.getEngine();if(!n)return;const e=this.isCapacitor()?t.style.toUpperCase():t.style;n.notification({style:e})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},i=()=>{o.selection()},r=()=>{o.selectionStart()},c=()=>{o.selectionChanged()},a=()=>{o.selectionEnd()},s=t=>{o.impact(t)}}}]);