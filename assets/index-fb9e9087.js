import{P as z,M as A,g as h,a as F,i,b as f,c as r,F as E,t as u,d as N,s as a,X as R,e as j,f as D,h as X,T as P,j as q,k as x}from"./entry-client-5e482cd2.js";import{t as B}from"./pt-to-html.esm-f63ae793.js";function G(){return"About"}function I(){return"Experience"}const J=u("<div></div>"),K=u('<div class="splash" s:c-c4b71868-0><p class="prefix" s:c-c4b71868-0></p><h2 s:c-c4b71868-0></h2><h3 s:c-c4b71868-0><!#><!/><ul s:c-c4b71868-0></ul></h3><div class="body" s:c-c4b71868-0></div></div>'),O=u("<span s:c-c4b71868-0></span>"),Q=u("<li s:c-c4b71868-0></li>"),U="c-c4b71868-0",V=".splash[s\\:c-c4b71868-0]{max-width:600px}.prefix[s\\:c-c4b71868-0]{color:var(--clr-mono-300)}h2[s\\:c-c4b71868-0],h3[s\\:c-c4b71868-0]{line-height:1.05em}h2[s\\:c-c4b71868-0]{font-size:64px;color:var(--clr-mono-500)}h2[s\\:c-c4b71868-0] span[s\\:c-c4b71868-0]:first-child{color:#ccc}h3[s\\:c-c4b71868-0]{display:flex;align-items:flex-end;color:var(--clr-p-300);font-size:40px}.body[s\\:c-c4b71868-0]{margin:1em 0;max-width:24em;color:var(--clr-p-100)}h3[s\\:c-c4b71868-0] ul[s\\:c-c4b71868-0]{position:relative;display:grid;list-style:none;padding:0;margin:0;overflow:hidden;margin-left:.25em}h3[s\\:c-c4b71868-0] li[s\\:c-c4b71868-0]{grid-column:1;grid-row:1;animation:c-c4b71868-0-slide 10s calc(var(--i)*-2.5s) infinite ease-in-out;color:var(--clr-a-200);font-weight:700;text-transform:lowercase;text-decoration:underline}h3[s\\:c-c4b71868-0]:hover li[s\\:c-c4b71868-0]{animation-play-state:paused}@keyframes c-c4b71868-0-slide{0%{transform:translateX(-100%)}3%{transform:translateX(0%)}25%{transform:translateX(0%)}28%{transform:translateX(100%)}100%{transform:translateX(100%)}}",W=n=>{const c=n.section_title,l=n.section_modules.find(t=>t._type==="heading"&&t.level===2),s=n.section_modules.find(t=>t._type==="heading"&&t.level===3),m=n.section_modules.find(t=>t._type==="list"),v=n.section_modules.find(t=>t._type==="module_richtext");return{prefix:c,name:l,heading:s,scroller:m,body:(()=>{const t=h(J);return f(()=>N(t,B(v.blocks))),t})()}};function Y(n){const c=z(),{prefix:l,name:s,heading:m,scroller:v,body:t}=W(n.section);return A(U,1,V),(()=>{const b=h(K),g=b.firstChild,$=g.nextSibling,_=$.nextSibling,k=_.firstChild,[w,T]=F(k.nextSibling),S=w.nextSibling,M=_.nextSibling;return i(g,l),i($,()=>s.text.split(" ").map(e=>(()=>{const o=h(O);return i(o,e),f(d=>a(o,c(),d)),o})())),i(_,()=>m.text,w,T),i(S,r(E,{get each(){return v.items},children:(e,o)=>(()=>{const d=h(Q);return i(d,e),f(p=>a(d,R({"--i":o()},c()),p)),d})()})),i(M,t),f(e=>{const o=c(),d=c(),p=c(),C=c(),H=c(),L=c();return e._v$=a(b,o,e._v$),e._v$2=a(g,d,e._v$2),e._v$3=a($,p,e._v$3),e._v$4=a(_,C,e._v$4),e._v$5=a(S,H,e._v$5),e._v$6=a(M,L,e._v$6),e},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),b})()}const y=u('<section class="page-section"></section>');function te(){const{data:n}=j();return D(()=>{console.log(n())}),X((()=>{const c=X(()=>!n());return()=>c()?"Loading":[r(P,{get children(){return n().title}}),r(E,{get each(){return n().sections},children:l=>r(q,{get children(){return[r(x,{get when(){return l.id==="splash"},get children(){const s=h(y);return i(s,r(Y,{section:l})),s}}),r(x,{get when(){return l.id==="about"},get children(){const s=h(y);return i(s,r(G,{})),s}}),r(x,{get when(){return l.id==="experience"},get children(){const s=h(y);return i(s,r(I,{})),s}})]}})})]})())}export{te as default};
