"use strict";(self.webpackChunktanat_gatsby=self.webpackChunktanat_gatsby||[]).push([[880],{882:function(e,t,l){l.r(t),l.d(t,{default:function(){return h}});var n=l(5785),a=l(7294),r=l(682),c=l(2086),i=l(1945),m=l(4051),u=l(1555),o=l(444);var s=function(e){const{title:t,image:l,description:n,price:r,handleClick:c}=e;return a.createElement(o.Z,{style:{width:"18rem"}},a.createElement(o.Z.Img,{variant:"top",src:l}),a.createElement(o.Z.Body,null,a.createElement(o.Z.Title,null,t," - ",r," Baht"),a.createElement(i.Z,{variant:"primary",onClick:c},"Add to Cart")))},E=l(30);var h=function(){let[e,t]=a.useState([]),[l,o]=a.useState("hot"),[h,p]=(0,E.Z)("cart",[]);return a.useEffect((()=>{let e=[];fetch("https://api.sampleapis.com/coffee/"+l).then((e=>e.json())).then((l=>{for(let t=0;t<l.length;t++)e.push(a.createElement(s,{key:t,image:l[t].image,title:l[t].title,description:l[t].description,price:99,handleClick:()=>{var e;e=l[t],h.push(e),console.table(h),p((0,n.Z)(h))}}));t(e)}))}),[l]),a.createElement(r.Z,null,a.createElement("h1",null,"Coffee Shop"),a.createElement(c.Z,{"aria-label":"Basic example",style:{marginBottom:"1em"}},a.createElement(i.Z,{variant:"primary",onClick:()=>{o("hot")}},"Hot"),a.createElement(i.Z,{variant:"primary",onClick:()=>{o("iced")}},"Iced")),a.createElement(m.Z,null,a.createElement(u.Z,null,a.createElement(m.Z,null,e)),a.createElement(u.Z,{sm:3},a.createElement("h2",null,"Cart"),h.map(((e,t)=>a.createElement(m.Z,{key:t},a.createElement(u.Z,null,e.title),a.createElement(u.Z,null,99)))),a.createElement(m.Z,null,a.createElement(u.Z,null,a.createElement("b",null,"Total:")," ",a.createElement("u",null,99*h.length," Baht"))))))}}}]);
//# sourceMappingURL=component---src-pages-coffee-pos-index-js-286ef8df106974010a55.js.map