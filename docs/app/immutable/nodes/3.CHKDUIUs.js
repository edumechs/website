import{t as h,b as w}from"../chunks/RmAVQ0kb.js";import"../chunks/D6qIBhsE.js";import{I as g,M as b,K as k,N as r,O as q,P as y}from"../chunks/Yz9ARZOk.js";import{e as _}from"../chunks/BokHpsDB.js";import{i as S}from"../chunks/CCwZUmG6.js";import{N}from"../chunks/jqI-xIzK.js";var E=h(`<!> <main class="fade-in-up svelte-1nqlwps"><h1>Join the Waitlist</h1> <p class="svelte-1nqlwps">We'll send updates on our progress and share more about our plan for STEM education</p> <form class="svelte-1nqlwps"><input type="text" name="fullname" placeholder="Full name..." required class="svelte-1nqlwps"> <input type="email" name="email" placeholder="Email address..." required class="svelte-1nqlwps"> <div class="marketing-consent svelte-1nqlwps"><input id="marketing_consent" name="marketing_consent" type="checkbox" class="svelte-1nqlwps"> <label for="marketing_consent">Send me promotional emails</label></div> <button id="submit" class="primary svelte-1nqlwps">Join Now</button></form></main>`,1);function C(l,i){g(i,!1);async function m(t){t.preventDefault();const s=t.target,c=s.fullname.value,d=s.email.value,u=s.marketing_consent.checked,f={fullname:c,email:d,marketing_consent:u};try{const e=await fetch("https://waitlist.afrmtbl627.workers.dev/api/waitlist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f)});if(!e.ok)throw new Error(`Server error: ${e.status}`);const v=await e.json();console.log("Success:",v)}catch(e){console.error("Error:",e)}}S();var a=E(),n=b(a);N(n);var o=r(n,2),p=r(q(o),4);y(o),_("submit",p,t=>m(t)),w(l,a),k()}export{C as component};
