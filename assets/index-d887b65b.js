(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function c(){}function Q(t){return t()}function V(){return Object.create(null)}function v(t){t.forEach(Q)}function U(t){return typeof t=="function"}function O(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function le(t){return Object.keys(t).length===0}function ne(t,e){t.appendChild(e)}function _(t,e,n){t.insertBefore(e,n||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function M(t){return document.createElement(t)}function X(t){return document.createTextNode(t)}function se(){return X(" ")}function oe(){return X("")}function Z(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function re(t){return Array.from(t.childNodes)}let L;function g(t){L=t}const h=[],Y=[];let m=[];const D=[],ie=Promise.resolve();let j=!1;function fe(){j||(j=!0,ie.then(ee))}function k(t){m.push(t)}const $=new Set;let x=0;function ee(){if(x!==0)return;const t=L;do{try{for(;x<h.length;){const e=h[x];x++,g(e),ce(e.$$)}}catch(e){throw h.length=0,x=0,e}for(g(null),h.length=0,x=0;Y.length;)Y.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];$.has(n)||($.add(n),n())}m.length=0}while(h.length);for(;D.length;)D.pop()();j=!1,$.clear(),g(t)}function ce(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}function de(t){const e=[],n=[];m.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),m=e}const y=new Set;let a;function E(){a={r:0,c:[],p:a}}function I(){a.r||v(a.c),a=a.p}function f(t,e){t&&t.i&&(y.delete(t),t.i(e))}function u(t,e,n,l){if(t&&t.o){if(y.has(t))return;y.add(t),a.c.push(()=>{y.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}function te(t){t&&t.c()}function N(t,e,n,l){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,n),l||k(()=>{const r=t.$$.on_mount.map(Q).filter(U);t.$$.on_destroy?t.$$.on_destroy.push(...r):v(r),t.$$.on_mount=[]}),o.forEach(k)}function W(t,e){const n=t.$$;n.fragment!==null&&(de(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ue(t,e){t.$$.dirty[0]===-1&&(h.push(t),fe(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function A(t,e,n,l,s,o,r,p=[-1]){const b=L;g(t);const i=t.$$={fragment:null,ctx:[],props:o,update:c,not_equal:s,bound:V(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(b?b.$$.context:[])),callbacks:V(),dirty:p,skip_bound:!1,root:e.target||b.$$.root};r&&r(i.root);let S=!1;if(i.ctx=n?n(t,e.props||{},(d,C,...P)=>{const R=P.length?P[0]:C;return i.ctx&&s(i.ctx[d],i.ctx[d]=R)&&(!i.skip_bound&&i.bound[d]&&i.bound[d](R),S&&ue(t,d)),C}):[],i.update(),S=!0,v(i.before_update),i.fragment=l?l(i.ctx):!1,e.target){if(e.hydrate){const d=re(e.target);i.fragment&&i.fragment.l(d),d.forEach(w)}else i.fragment&&i.fragment.c();e.intro&&f(t.$$.fragment),N(t,e.target,e.anchor,e.customElement),ee()}g(b)}class H{$destroy(){W(this,1),this.$destroy=c}$on(e,n){if(!U(n))return c;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const s=l.indexOf(n);s!==-1&&l.splice(s,1)}}$set(e){this.$$set&&!le(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function ae(t){let e;return{c(){e=M("div"),e.innerHTML=`<div class="flex flex-row rounded-2xl h-3/5 w-2/3 shadow-2xl"><div class="flex flex-col items-center justify-around bg-background rounded-2xl h-full w-1/2 p-5"><div class="p-1"><p class="text-color1 text-xl font-bold">Your Result</p></div> 
        <div class="flex flex-col items-center justify-center rounded-full bg-gradient-circle w-44 h-44 p-1"><p class="text-white text-6xl font-bold mb-2">76</p> 
          <p class="text-color1 text-sm font-bold">of 100</p></div>  
        <div class="flex flex-col items-center justify-around px-10"><p class="text-white text-2xl font-bold pb-3">Great</p> 
          <p class="text-color1 text-sm text-center">You score higher than 65% of the people who have taken these tests.</p></div></div> 
      <div class="flex flex-col justify-around rounded-2xl h-full w-1/2 p-5"><div class="w-full p-1"><p class="text-xl font-bold">Summary</p></div>  
        <div class="flex flex-col justify-evenly rounded-xl w-full py-1"><div class="flex flex-row justify-between rounded-xl bg-red-100 w-full p-3 my-2"><div class="flex flex-row"><img src="./src/assets/reaction-icon.svg" alt="Icon" width="15" height="15"/> 
              <p class="text-red px-2 font-bold">Reaction</p></div> 
            <div class="flex flex-row"><p class="px-1 font-bold">80</p> 
              <p class="text-gray-500 px-1 font-bold">/ 100</p></div></div> 
          <div class="flex flex-row justify-between rounded-xl bg-yellow-100 w-full p-3 my-2"><div class="flex flex-row"><img src="./src/assets/memory-icon.svg" alt="Icon" width="15" height="15"/> 
              <p class="text-yellow px-2 font-bold">Memory</p></div> 
            <div class="flex flex-row"><p class="px-1 font-bold">92</p> 
              <p class="text-gray-500 px-1 font-bold">/ 100</p></div></div> 
          <div class="flex flex-row justify-between rounded-xl bg-green-100 w-full p-3 my-2"><div class="flex flex-row"><img src="./src/assets/verbal-icon.svg" alt="Icon" width="15" height="15"/> 
              <p class="text-green px-2 font-bold">Verbal</p></div> 
            <div class="flex flex-row"><p class="px-1 font-bold">61</p> 
              <p class="text-gray-500 px-1 font-bold">/ 100</p></div></div> 
          <div class="flex flex-row justify-between rounded-xl bg-blue-100 w-full p-3 my-2"><div class="flex flex-row"><img src="./src/assets/visual-icon.svg" alt="Icon" width="15" height="15"/> 
              <p class="text-blue px-2 font-bold">Visual</p></div> 
            <div class="flex flex-row"><p class="px-1 font-bold">72</p> 
              <p class="text-gray-500 px-1 font-bold">/ 100</p></div></div></div> 
        <button class="rounded-full btn custom-btn w-full text-white">Continue</button></div></div>`,Z(e,"class","flex items-center justify-center h-screen w-screen font-body")},m(n,l){_(n,e,l)},p:c,i:c,o:c,d(n){n&&w(e)}}}class pe extends H{constructor(e){super(),A(this,e,null,ae,O,{})}}function xe(t){let e;return{c(){e=M("div"),e.innerHTML=`<div class="flex flex-col rounded-2xl h-11/12 w-2/3 shadow-2xl"><div class="flex flex-col items-center justify-around bg-background rounded-b-2xl h-2/5 w-full p-5"><div class="p-1"><p class="text-color1 text-xl font-bold">Your Result</p></div> 
            <div class="flex flex-col items-center justify-center rounded-full bg-gradient-circle w-28 h-28 p-1"><p class="text-white text-5xl font-bold mb-1">76</p> 
                <p class="text-color1 text-sm font-bold">of 100</p></div>  
            <div class="flex flex-col items-center justify-around px-5"><p class="text-white text-xl font-bold pb-1">Great</p> 
                <p class="text-color1 text-sm text-center">You score higher than 65% of the people who have taken these tests.</p></div></div> 
        <div class="flex flex-col justify-around rounded-2xl h-2/5 w-full p-5"><div class="w-full p-1"><p class="text-xl font-bold">Summary</p></div>  
            <div class="flex flex-col justify-evenly rounded-xl w-full py-1"><div class="flex flex-row justify-between rounded-xl bg-red-100 w-full p-3 my-2"><div class="flex flex-row"><img src="./src/assets/reaction-icon.svg" alt="Icon" width="15" height="15"/> 
                    <p class="text-red px-2 font-bold">Reaction</p></div> 
                <div class="flex flex-row"><p class="px-1 font-bold">80</p> 
                    <p class="text-gray-500 px-1 font-bold">/ 100</p></div></div> 
                <div class="flex flex-row justify-between rounded-xl bg-yellow-100 w-full p-3 my-2"><div class="flex flex-row"><img src="./src/assets/memory-icon.svg" alt="Icon" width="15" height="15"/> 
                    <p class="text-yellow px-2 font-bold">Memory</p></div> 
                <div class="flex flex-row"><p class="px-1 font-bold">92</p> 
                    <p class="text-gray-500 px-1 font-bold">/ 100</p></div></div> 
                <div class="flex flex-row justify-between rounded-xl bg-green-100 w-full p-3 my-2"><div class="flex flex-row"><img src="./src/assets/verbal-icon.svg" alt="Icon" width="15" height="15"/> 
                    <p class="text-green px-2 font-bold">Verbal</p></div> 
                <div class="flex flex-row"><p class="px-1 font-bold">61</p> 
                    <p class="text-gray-500 px-1 font-bold">/ 100</p></div></div> 
                <div class="flex flex-row justify-between rounded-xl bg-blue-100 w-full p-3 my-2"><div class="flex flex-row"><img src="./src/assets/visual-icon.svg" alt="Icon" width="15" height="15"/> 
                    <p class="text-blue px-2 font-bold">Visual</p></div> 
                <div class="flex flex-row"><p class="px-1 font-bold">72</p> 
                    <p class="text-gray-500 px-1 font-bold">/ 100</p></div></div></div> 
            <button class="rounded-full btn custom-btn w-full text-white">Continue</button></div></div>`,Z(e,"class","flex items-center justify-center h-screen w-screen font-body")},m(n,l){_(n,e,l)},p:c,i:c,o:c,d(n){n&&w(e)}}}class he extends H{constructor(e){super(),A(this,e,null,xe,O,{})}}function T(t){let e,n,l,s=t[0]>=J&&t[0]<=K&&z(),o=t[0]>=F&&t[0]<=q&&B();return{c(){e=M("main"),s&&s.c(),n=se(),o&&o.c()},m(r,p){_(r,e,p),s&&s.m(e,null),ne(e,n),o&&o.m(e,null),l=!0},p(r,p){r[0]>=J&&r[0]<=K?s?p&1&&f(s,1):(s=z(),s.c(),f(s,1),s.m(e,n)):s&&(E(),u(s,1,1,()=>{s=null}),I()),r[0]>=F&&r[0]<=q?o?p&1&&f(o,1):(o=B(),o.c(),f(o,1),o.m(e,null)):o&&(E(),u(o,1,1,()=>{o=null}),I())},i(r){l||(f(s),f(o),l=!0)},o(r){u(s),u(o),l=!1},d(r){r&&w(e),s&&s.d(),o&&o.d()}}}function z(t){let e,n;return e=new he({}),{c(){te(e.$$.fragment)},m(l,s){N(e,l,s),n=!0},i(l){n||(f(e.$$.fragment,l),n=!0)},o(l){u(e.$$.fragment,l),n=!1},d(l){W(e,l)}}}function B(t){let e,n;return e=new pe({}),{c(){te(e.$$.fragment)},m(l,s){N(e,l,s),n=!0},i(l){n||(f(e.$$.fragment,l),n=!0)},o(l){u(e.$$.fragment,l),n=!1},d(l){W(e,l)}}}function me(t){let e,n,l=t[1]>=G&&T(t);return{c(){l&&l.c(),e=oe()},m(s,o){l&&l.m(s,o),_(s,e,o),n=!0},p(s,[o]){s[1]>=G?l?(l.p(s,o),o&2&&f(l,1)):(l=T(s),l.c(),f(l,1),l.m(e.parentNode,e)):l&&(E(),u(l,1,1,()=>{l=null}),I())},i(s){n||(f(l),n=!0)},o(s){u(l),n=!1},d(s){l&&l.d(s),s&&w(e)}}}const G=500,q=1400,F=768,K=767,J=375;function ge(t,e,n){let l=window.innerWidth,s=window.innerHeight;function o(){n(0,l=window.innerWidth),n(1,s=window.innerHeight)}return window.addEventListener("resize",o),[l,s]}class ve extends H{constructor(e){super(),A(this,e,ge,me,O,{})}}new ve({target:document.getElementById("app")});
