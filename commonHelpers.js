import{a as f,S as w,i as l}from"./assets/vendor-6e0bf343.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();async function y(t,r){f.defaults.baseURL="https://pixabay.com/api/";const a={key:"42982989-b171e2f7a41a03eb4f5866708",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r};return(await f.get("",{params:a})).data}function v(t){return t.map(({largeImageURL:r,webformatURL:a,tags:i,likes:e,views:o,comments:s,downloads:S,...M})=>` <div class="thumb">
      <li class="gallery-item">
        <div class="lightbox">
          <a class="gallery-link" href="${r}">
            <img class="gallery-image" src="${a}" alt="${i}"
          /></a>
        </div>
        <ul class="gallery-data-list">
          <li class="gallery-data-item">
            <h3>Likes</h3>
            <p>${e}</p>
          </li>
          <li class="gallery-data-item">
            <h3>Views</h3>
            <p>${o}</p>
          </li>
          <li class="gallery-data-item">
            <h3>Comment</h3>
            <p>${s}</p>
          </li>
          <li class="gallery-data-item">
            <h3>Downloads</h3>
            <p>${S}</p>
          </li>
        </ul>
      </li>
    </div>
`).join("")}function F(t){const r=v(t);h.insertAdjacentHTML("beforeend",r)}const P=document.querySelector(".search-form"),h=document.querySelector(".gallery"),L=document.querySelector(".loader"),u=document.querySelector(".btn-load");document.querySelector(".gallery-item");let c,n=1,b=0;const q=15;let g=new w(".lightbox a",{captionsData:"alt"});g.on("show.simplelightbox",function(){});m();setTimeout(d,100);P.addEventListener("submit",B);u.addEventListener("click",C);async function B(t){if(t.preventDefault(),p(),m(),h.innerHTML="",c=t.target.elements.search.value.trim(),n=1,!c){l.show({message:"Please fill in the field!",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight"}),d();return}try{const r=await y(c,n);b=Math.ceil(r.totalHits/q),g.refresh(),r.hits.length===0?l.error({maxWidth:"432px",height:"48px",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}):F(r.hits)}catch{l.error({maxWidth:"432px",height:"48px",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight",message:"Sorry, an error occurred while loading. Please try again!"})}d(),data.hits.length!==0&&x(),t.target.reset()}async function C(){n+=1,p(),m();try{const t=await y(c,n);F(t.hits),g.refresh()}catch{l.error({maxWidth:"432px",height:"48px",message:"Sorry, an error occurred while loading. Please try again!",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight"})}d(),E(),x()}function m(){L.classList.remove("hidden")}function d(){L.classList.add("hidden")}function k(){u.classList.remove("hidden")}function p(){u.classList.add("hidden")}function x(){n>=b?(p(),l.show({maxWidth:"432px",height:"48px",message:"We're sorry, but you've reached the end of search results.",theme:"dark",progressBarColor:"#FFFFFF",color:"blue",position:"topRight"})):k()}function E(){const t=h.getBoundingClientRect().height;scrollBy({top:t,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
