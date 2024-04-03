import{a as l,S as f,i as p}from"./assets/vendor-6e0bf343.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();async function g(i){l.defaults.baseURL="https://pixabay.com/api/";const r={key:"42982989-b171e2f7a41a03eb4f5866708",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await l.get("",{params:r})).data}function y(i){return i.map(({largeImageURL:r,webformatURL:a,tags:s,likes:e,views:t,comments:o,downloads:h,...x})=>` <div class="thumb">
      <li class="gallery-item">
        <div class="lightbox">
          <a class="gallery-link" href="${r}">
            <img class="gallery-image" src="${a}" alt="${s}"
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
            <p>${o}</p>
          </li>
          <li class="gallery-data-item">
            <h3>Downloads</h3>
            <p>${h}</p>
          </li>
        </ul>
      </li>
    </div>
`).join("")}const b=document.querySelector(".search-form"),n=document.querySelector(".gallery"),c=document.querySelector(".loader");let u=new f(".lightbox a",{captionsData:"alt"});u.on("show.simplelightbox",function(){});d();setTimeout(m,100);b.addEventListener("submit",L);function d(){c.classList.remove("hidden")}function m(){c.classList.add("hidden")}async function L(i){i.preventDefault();const r=i.target.elements.search.value.trim();if(r!==""){n.innerHTML="",d();try{const a=await g(r),s=y(a.hits);n.innerHTML=s,u.refresh(),a.hits.length===0&&p.error({maxWidth:"432px",height:"48px",color:"red",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}catch(a){console.log(a)}m()}i.target.reset()}
//# sourceMappingURL=commonHelpers.js.map
