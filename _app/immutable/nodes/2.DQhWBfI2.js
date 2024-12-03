import{a as d,t as g}from"../chunks/disclose-version.CqKNxsX5.js";import"../chunks/legacy.BbHn_5h_.js";import{w as U,y as O,z as V,$ as X,l as s,C as i,A as n,B as r,D as v,a2 as tt,F as D}from"../chunks/runtime.CpQAQlF9.js";import{s as et,e as C,b as K,a as z}from"../chunks/store.B6IitdDS.js";import{i as B}from"../chunks/if.Cw2_w_-4.js";import{e as J,i as N,s as st}from"../chunks/class.BI5LrcU1.js";import{i as at}from"../chunks/lifecycle.CHM1wXAr.js";import{w as W,g as R}from"../chunks/index.1bTgCCT-.js";const u="buanderie",T=localStorage.getItem("attempts"),rt=localStorage.getItem("locked"),w=W(T?JSON.parse(T):[]),y=W(rt==="true");w.subscribe(m=>localStorage.setItem("attempts",JSON.stringify(m)));y.subscribe(m=>localStorage.setItem("locked",JSON.stringify(m)));function ot(m,k){const p=[],l=k.split("");return m.split("").forEach((c,e)=>{c===l[e]?(p.push({letter:c,status:"correct"}),l[e]=null):l.includes(c)?(p.push({letter:c,status:"present"}),l[l.indexOf(c)]=null):p.push({letter:c,status:"absent"})}),p}var nt=g(`<div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 svelte-18nf8t8"><div class="bg-white p-6 rounded-lg shadow-lg max-w-xs sm:max-w-md"><h2 class="text-lg font-bold mb-4">Rules</h2> <p class="text-gray-700 text-sm sm:text-base">You have 6 attempts to guess the correct word in French. After 6 failed attempts, the game will
						lock, and the location of the gift will no longer be discoverable. Good luck!</p> <button class="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Close</button></div></div>`),lt=g("<span> </span>"),ct=g('<div class="flex justify-center gap-1 sm:gap-2"></div>'),it=g('<span class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border border-gray-400 rounded text-sm sm:text-lg uppercase"> </span>'),mt=g('<div class="flex justify-center gap-1 sm:gap-2"></div>'),pt=g('<p class="mt-6 text-sm sm:text-lg text-gray-800 text-center">Game Over! The word was "<strong class="font-bold"></strong>".</p>'),dt=g('<main class="min-h-screen flex flex-col items-center bg-gray-100 py-6 px-4 sm:px-6"><h1 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">Wordle: Buanderie</h1> <div class="mb-4 flex items-center gap-2"><button class="text-sm font-medium text-blue-600 underline hover:text-blue-800">Information</button> <!></div> <p class="mb-4 text-gray-600 text-sm sm:text-base">Attempts: <span class="font-bold"> </span></p> <section class="space-y-4"><!> <!></section> <!></main>');function wt(m,k){U(k,!1);const p=et(),l=()=>K(w,"$attempts",p),c=()=>K(y,"$locked",p);let e=D(""),$=6,A=D(!1);function Y(o){const t=o.key;R(y)||(t==="Enter"&&s(e).length===u.length?Z():t==="Backspace"?v(e,s(e).slice(0,-1)):/^[a-zA-Z]$/.test(t)&&s(e).length<u.length&&v(e,s(e)+t.toLowerCase()))}function Z(){const o=R(w);if(s(e).length===u.length){const t=ot(s(e),u);w.update(a=>[...a,{guess:s(e),feedback:t}]),(s(e)===u||o.length+1>=$)&&y.set(!0),v(e,"")}}at();var S=dt();C("keydown",X,Y);var I=i(n(S),2),E=n(I),q=i(E,2);B(q,()=>s(A),o=>{var t=nt(),a=n(t),x=i(n(a),4);r(a),r(t),C("click",x,()=>v(A,!1)),d(o,t)}),r(I);var j=i(I,2),F=i(n(j)),H=n(F);r(F),r(j);var G=i(j,2),L=n(G);J(L,1,l,N,(o,t)=>{var a=ct();J(a,5,()=>s(t).feedback,N,(x,h)=>{let f=()=>s(h).letter,b=()=>s(h).status;var _=lt(),Q=n(_,!0);r(_),O(()=>{st(_,`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border rounded text-sm sm:text-lg font-semibold uppercase
                        ${(b()==="correct"?"bg-green-500 text-white":"")??""}
                        ${(b()==="present"?"bg-yellow-500 text-white":"")??""}
                        ${(b()==="absent"?"bg-gray-300 text-gray-800":"")??""}`),z(Q,f())}),d(x,_)}),r(a),d(o,a)});var M=i(L,2);B(M,()=>l().length<$&&!c(),o=>{var t=mt();J(t,5,()=>Array(u.length),N,(a,x,h)=>{var f=it(),b=n(f,!0);r(f),O(()=>z(b,s(e)[h]||"")),d(a,f)}),r(t),d(o,t)}),r(G);var P=i(G,2);B(P,c,o=>{var t=pt(),a=i(n(t));a.textContent=u,tt(),r(t),d(o,t)}),r(S),O(()=>z(H,`${l().length??""} / ${$}`)),C("click",E,()=>v(A,!0)),d(m,S),V()}export{wt as component};
