import{S as H,i as M,s as T,F as j,c as L,m as R,t as w,a as y,d as S,b as v,e as _,f as p,g,h as d,j as B,l as N,k as z,n as D,o as k,A as C,p as G,q as F,r as E,u as I,v as h,w as J,x as P,y as A}from"./index-B9YAtzoO.js";function K(u){let e,s,n,l,t,i,c,m,r,a,b,f;return l=new G({props:{class:"form-field required",name:"email",$$slots:{default:[Q,({uniqueId:o})=>({5:o}),({uniqueId:o})=>o?32:0]},$$scope:{ctx:u}}}),{c(){e=_("form"),s=_("div"),s.innerHTML='<h4 class="m-b-xs">Forgotten admin password</h4> <p>Enter the email associated with your account and we’ll send you a recovery link:</p>',n=v(),L(l.$$.fragment),t=v(),i=_("button"),c=_("i"),m=v(),r=_("span"),r.textContent="Send recovery link",p(s,"class","content txt-center m-b-sm"),p(c,"class","ri-mail-send-line"),p(r,"class","txt"),p(i,"type","submit"),p(i,"class","btn btn-lg btn-block"),i.disabled=u[1],F(i,"btn-loading",u[1]),p(e,"class","m-b-base")},m(o,$){g(o,e,$),d(e,s),d(e,n),R(l,e,null),d(e,t),d(e,i),d(i,c),d(i,m),d(i,r),a=!0,b||(f=E(e,"submit",I(u[3])),b=!0)},p(o,$){const q={};$&97&&(q.$$scope={dirty:$,ctx:o}),l.$set(q),(!a||$&2)&&(i.disabled=o[1]),(!a||$&2)&&F(i,"btn-loading",o[1])},i(o){a||(w(l.$$.fragment,o),a=!0)},o(o){y(l.$$.fragment,o),a=!1},d(o){o&&k(e),S(l),b=!1,f()}}}function O(u){let e,s,n,l,t,i,c,m,r;return{c(){e=_("div"),s=_("div"),s.innerHTML='<i class="ri-checkbox-circle-line"></i>',n=v(),l=_("div"),t=_("p"),i=h("Check "),c=_("strong"),m=h(u[0]),r=h(" for the recovery link."),p(s,"class","icon"),p(c,"class","txt-nowrap"),p(l,"class","content"),p(e,"class","alert alert-success")},m(a,b){g(a,e,b),d(e,s),d(e,n),d(e,l),d(l,t),d(t,i),d(t,c),d(c,m),d(t,r)},p(a,b){b&1&&J(m,a[0])},i:P,o:P,d(a){a&&k(e)}}}function Q(u){let e,s,n,l,t,i,c,m;return{c(){e=_("label"),s=h("Email"),l=v(),t=_("input"),p(e,"for",n=u[5]),p(t,"type","email"),p(t,"id",i=u[5]),t.required=!0,t.autofocus=!0},m(r,a){g(r,e,a),d(e,s),g(r,l,a),g(r,t,a),A(t,u[0]),t.focus(),c||(m=E(t,"input",u[4]),c=!0)},p(r,a){a&32&&n!==(n=r[5])&&p(e,"for",n),a&32&&i!==(i=r[5])&&p(t,"id",i),a&1&&t.value!==r[0]&&A(t,r[0])},d(r){r&&(k(e),k(l),k(t)),c=!1,m()}}}function U(u){let e,s,n,l,t,i,c,m;const r=[O,K],a=[];function b(f,o){return f[2]?0:1}return e=b(u),s=a[e]=r[e](u),{c(){s.c(),n=v(),l=_("div"),t=_("a"),t.textContent="Back to login",p(t,"href","/login"),p(t,"class","link-hint"),p(l,"class","content txt-center")},m(f,o){a[e].m(f,o),g(f,n,o),g(f,l,o),d(l,t),i=!0,c||(m=B(N.call(null,t)),c=!0)},p(f,o){let $=e;e=b(f),e===$?a[e].p(f,o):(z(),y(a[$],1,1,()=>{a[$]=null}),D(),s=a[e],s?s.p(f,o):(s=a[e]=r[e](f),s.c()),w(s,1),s.m(n.parentNode,n))},i(f){i||(w(s),i=!0)},o(f){y(s),i=!1},d(f){f&&(k(n),k(l)),a[e].d(f),c=!1,m()}}}function V(u){let e,s;return e=new j({props:{$$slots:{default:[U]},$$scope:{ctx:u}}}),{c(){L(e.$$.fragment)},m(n,l){R(e,n,l),s=!0},p(n,[l]){const t={};l&71&&(t.$$scope={dirty:l,ctx:n}),e.$set(t)},i(n){s||(w(e.$$.fragment,n),s=!0)},o(n){y(e.$$.fragment,n),s=!1},d(n){S(e,n)}}}function W(u,e,s){let n="",l=!1,t=!1;async function i(){if(!l){s(1,l=!0);try{await C.admins.requestPasswordReset(n),s(2,t=!0)}catch(m){C.error(m)}s(1,l=!1)}}function c(){n=this.value,s(0,n)}return[n,l,t,i,c]}class Y extends H{constructor(e){super(),M(this,e,W,V,T,{})}}export{Y as default};
