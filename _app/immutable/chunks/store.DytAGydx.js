import{a1 as E,a2 as T,R as V,K as A,a3 as Y,a4 as P,a5 as W,G as j,a6 as R,P as B,a7 as C,X as $,a8 as N,e as g,s as I,c as z,f as v,Q as F,a9 as G,aa as K,N as Q,I as X,ab as J,F as U,a as Z,w as x,h as L,z as ee,i as re,q as O,j as te,S as ae,l as ne,Y as se}from"./runtime.Bf10Rx4q.js";import{b as ie}from"./disclose-version.CF6o8ERv.js";function ue(e){var r=V,n=A;E(null),T(null);try{return e()}finally{E(r),T(n)}}const oe=new Set,k=new Set;function ce(e,r,n,a){function s(t){if(a.capture||p.call(r,t),!t.cancelBubble)return ue(()=>n.call(this,t))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?P(()=>{r.addEventListener(e,s,a)}):r.addEventListener(e,s,a),s}function ve(e,r,n,a,s){var t={capture:a,passive:s},o=ce(e,r,n,t);(r===document.body||r===window||r===document)&&Y(()=>{r.removeEventListener(e,o,t)})}function p(e){var D;var r=this,n=r.ownerDocument,a=e.type,s=((D=e.composedPath)==null?void 0:D.call(e))||[],t=s[0]||e.target,o=0,h=e.__root;if(h){var l=s.indexOf(h);if(l!==-1&&(r===document||r===window)){e.__root=r;return}var d=s.indexOf(r);if(d===-1)return;l<=d&&(o=l)}if(t=s[o]||e.target,t!==r){W(e,"currentTarget",{configurable:!0,get(){return t||n}});var S=V,c=A;E(null),T(null);try{for(var i,u=[];t!==null;){var f=t.assignedSlot||t.parentNode||t.host||null;try{var _=t["__"+a];if(_!==void 0&&!t.disabled)if(j(_)){var[H,...M]=_;H.apply(t,[e,...M])}else _.call(t,e)}catch(y){i?u.push(y):i=y}if(e.cancelBubble||f===r||f===null)break;t=f}if(i){for(let y of u)queueMicrotask(()=>{throw y});throw i}}finally{e.__root=r,delete e.currentTarget,E(S),T(c)}}}const fe=["touchstart","touchmove"];function le(e){return fe.includes(e)}function pe(e,r){var n=r==null?"":typeof r=="object"?r+"":r;n!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=n,e.nodeValue=n==null?"":n+"")}function de(e,r){return q(e,r)}function ye(e,r){R(),r.intro=r.intro??!1;const n=r.target,a=L,s=v;try{for(var t=B(n);t&&(t.nodeType!==8||t.data!==C);)t=$(t);if(!t)throw N;g(!0),I(t),z();const o=q(e,{...r,anchor:t});if(v===null||v.nodeType!==8||v.data!==F)throw G(),N;return g(!1),o}catch(o){if(o===N)return r.recover===!1&&K(),R(),Q(n),g(!1),de(e,r);throw o}finally{g(a),I(s)}}const b=new Map;function q(e,{target:r,anchor:n,props:a={},events:s,context:t,intro:o=!0}){R();var h=new Set,l=c=>{for(var i=0;i<c.length;i++){var u=c[i];if(!h.has(u)){h.add(u);var f=le(u);r.addEventListener(u,p,{passive:f});var _=b.get(u);_===void 0?(document.addEventListener(u,p,{passive:f}),b.set(u,1)):b.set(u,_+1)}}};l(X(oe)),k.add(l);var d=void 0,S=J(()=>{var c=n??r.appendChild(U());return Z(()=>{if(t){x({});var i=re;i.c=t}s&&(a.$$events=s),L&&ie(c,null),d=e(c,a)||{},L&&(A.nodes_end=v),t&&ee()}),()=>{var f;for(var i of h){r.removeEventListener(i,p);var u=b.get(i);--u===0?(document.removeEventListener(i,p),b.delete(i)):b.set(i,u)}k.delete(l),m.delete(d),c!==n&&((f=c.parentNode)==null||f.removeChild(c))}});return m.set(d,S),d}let m=new WeakMap;function ge(e){const r=m.get(e);r&&r()}function _e(e,r,n){if(e==null)return r(void 0),O;const a=te(()=>e.subscribe(r,n));return a.unsubscribe?()=>a.unsubscribe():a}let w=!1;function we(e,r,n){const a=n[r]??(n[r]={store:null,source:ae(void 0),unsubscribe:O});if(a.store!==e)if(a.unsubscribe(),a.store=e??null,e==null)a.source.v=void 0,a.unsubscribe=O;else{var s=!0;a.unsubscribe=_e(e,t=>{s?a.source.v=t:se(a.source,t)}),s=!1}return ne(a.source)}function Ee(){const e={};return Y(()=>{for(var r in e)e[r].unsubscribe()}),e}function Te(e){var r=w;try{return w=!1,[e(),w]}finally{w=r}}export{pe as a,we as b,Te as c,ve as e,ye as h,de as m,Ee as s,ge as u};
