import{S as B,i as F,s as J,O as j,e as v,b as S,f as h,g as y,h as m,P as D,Q as O,k as Q,R as Y,n as z,t as P,a as T,o as C,w,r as E,u as A,x as q,N as G,c as H,m as L,d as U}from"./index-DmCU9ByA.js";function K(o,e,l){const s=o.slice();return s[6]=e[l],s}function R(o,e,l){const s=o.slice();return s[6]=e[l],s}function I(o,e){let l,s,g=e[6].title+"",r,i,n,k;function c(){return e[5](e[6])}return{key:o,first:null,c(){l=v("button"),s=v("div"),r=w(g),i=S(),h(s,"class","txt"),h(l,"class","tab-item svelte-1maocj6"),E(l,"active",e[1]===e[6].language),this.first=l},m(_,f){y(_,l,f),m(l,s),m(s,r),m(l,i),n||(k=A(l,"click",c),n=!0)},p(_,f){e=_,f&4&&g!==(g=e[6].title+"")&&q(r,g),f&6&&E(l,"active",e[1]===e[6].language)},d(_){_&&C(l),n=!1,k()}}}function M(o,e){let l,s,g,r,i,n,k=e[6].title+"",c,_,f,p,d;return s=new G({props:{language:e[6].language,content:e[6].content}}),{key:o,first:null,c(){l=v("div"),H(s.$$.fragment),g=S(),r=v("div"),i=v("em"),n=v("a"),c=w(k),_=w(" SDK"),p=S(),h(n,"href",f=e[6].url),h(n,"target","_blank"),h(n,"rel","noopener noreferrer"),h(i,"class","txt-sm txt-hint"),h(r,"class","txt-right"),h(l,"class","tab-item svelte-1maocj6"),E(l,"active",e[1]===e[6].language),this.first=l},m(b,t){y(b,l,t),L(s,l,null),m(l,g),m(l,r),m(r,i),m(i,n),m(n,c),m(n,_),m(l,p),d=!0},p(b,t){e=b;const a={};t&4&&(a.language=e[6].language),t&4&&(a.content=e[6].content),s.$set(a),(!d||t&4)&&k!==(k=e[6].title+"")&&q(c,k),(!d||t&4&&f!==(f=e[6].url))&&h(n,"href",f),(!d||t&6)&&E(l,"active",e[1]===e[6].language)},i(b){d||(P(s.$$.fragment,b),d=!0)},o(b){T(s.$$.fragment,b),d=!1},d(b){b&&C(l),U(s)}}}function V(o){let e,l,s=[],g=new Map,r,i,n=[],k=new Map,c,_,f=j(o[2]);const p=t=>t[6].language;for(let t=0;t<f.length;t+=1){let a=R(o,f,t),u=p(a);g.set(u,s[t]=I(u,a))}let d=j(o[2]);const b=t=>t[6].language;for(let t=0;t<d.length;t+=1){let a=K(o,d,t),u=b(a);k.set(u,n[t]=M(u,a))}return{c(){e=v("div"),l=v("div");for(let t=0;t<s.length;t+=1)s[t].c();r=S(),i=v("div");for(let t=0;t<n.length;t+=1)n[t].c();h(l,"class","tabs-header compact combined left"),h(i,"class","tabs-content"),h(e,"class",c="tabs sdk-tabs "+o[0]+" svelte-1maocj6")},m(t,a){y(t,e,a),m(e,l);for(let u=0;u<s.length;u+=1)s[u]&&s[u].m(l,null);m(e,r),m(e,i);for(let u=0;u<n.length;u+=1)n[u]&&n[u].m(i,null);_=!0},p(t,[a]){a&6&&(f=j(t[2]),s=D(s,a,p,1,t,f,g,l,O,I,null,R)),a&6&&(d=j(t[2]),Q(),n=D(n,a,b,1,t,d,k,i,Y,M,null,K),z()),(!_||a&1&&c!==(c="tabs sdk-tabs "+t[0]+" svelte-1maocj6"))&&h(e,"class",c)},i(t){if(!_){for(let a=0;a<d.length;a+=1)P(n[a]);_=!0}},o(t){for(let a=0;a<n.length;a+=1)T(n[a]);_=!1},d(t){t&&C(e);for(let a=0;a<s.length;a+=1)s[a].d();for(let a=0;a<n.length;a+=1)n[a].d()}}}const N="pb_sdk_preference";function W(o,e,l){let s,{class:g="m-b-sm"}=e,{js:r=""}=e,{dart:i=""}=e,n=localStorage.getItem(N)||"javascript";const k=c=>l(1,n=c.language);return o.$$set=c=>{"class"in c&&l(0,g=c.class),"js"in c&&l(3,r=c.js),"dart"in c&&l(4,i=c.dart)},o.$$.update=()=>{o.$$.dirty&2&&n&&localStorage.setItem(N,n),o.$$.dirty&24&&l(2,s=[{title:"JavaScript",language:"javascript",content:r,url:"https://github.com/pocketbase/js-sdk"},{title:"Dart",language:"dart",content:i,url:"https://github.com/pocketbase/dart-sdk"}])},[g,n,s,r,i,k]}class Z extends B{constructor(e){super(),F(this,e,W,V,J,{class:0,js:3,dart:4})}}export{Z as S};
