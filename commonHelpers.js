import{S as d,i as m}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function f(i){const r="https://pixabay.com/api/",o="42982989-b171e2f7a41a03eb4f5866708",s=new URLSearchParams({key:o,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}?${s}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function p(i){return i.map(({largeImageURL:r,webformatURL:o,tags:s,likes:e,views:t,comments:a,downloads:h,...b})=>` <div class="thumb">
      <li class="gallery-item">
        <div class="lightbox">
          <a class="gallery-link" href="${r}">
            <img class="gallery-image" src="${o}" alt="${s}"
          /></a>
        </div>
        <ul class="gallery-data-list">
          <li class="gallery-data-item">
            <h3>Likes</h3>
            <p>${e}</p>
          </li>
          <li class="gallery-data-item">
            <h3>Views</h3>
            <p>${t}</p>
          </li>
          <li class="gallery-data-item">
            <h3>Comment</h3>
            <p>${a}</p>
          </li>
          <li class="gallery-data-item">
            <h3>Downloads</h3>
            <p>${h}</p>
          </li>
        </ul>
      </li>
    </div>
`).join("")}const g=document.querySelector(".search-form"),y=document.querySelector(".gallery"),l=document.querySelector(".loader");let n=new d(".lightbox a",{captionsData:"alt"});n.on("show.simplelightbox",function(){});c();setTimeout(u,100);g.addEventListener("submit",L);function c(){l.classList.remove("hidden")}function u(){l.classList.add("hidden")}function L(i){i.preventDefault();const r=i.target.elements.search.value.trim();r!==""&&(c(),f(r).then(o=>{const s=p(o.hits);y.innerHTML=s,n.refresh(),o.hits.length===0&&m.error({maxWidth:"432px",height:"48px",color:"red",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(o=>{console.log(o)}).finally(()=>{u()})),i.target.reset()}
//# sourceMappingURL=commonHelpers.js.map
