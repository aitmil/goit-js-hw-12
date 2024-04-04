import{a as f,S,i as l}from"./assets/vendor-6e0bf343.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();async function y(e,r){f.defaults.baseURL="https://pixabay.com/api/";const i={key:"42982989-b171e2f7a41a03eb4f5866708",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r};return(await f.get("",{params:i})).data}function v(e){return e.map(({largeImageURL:r,webformatURL:i,tags:a,likes:t,views:o,comments:s,downloads:w,...M})=>` <div class="thumb">
      <li class="gallery-item">
        <div class="lightbox">
          <a class="gallery-link" href="${r}">
            <img class="gallery-image" src="${i}" alt="${a}"
          /></a>
        </div>
        <ul class="gallery-data-list">
          <li class="gallery-data-item">
            <h3>Likes</h3>
            <p>${t}</p>
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
            <p>${w}</p>
          </li>
        </ul>
      </li>
    </div>
`).join("")}function F(e){const r=v(e);d.insertAdjacentHTML("beforeend",r)}const C=document.querySelector(".search-form"),d=document.querySelector(".gallery"),L=document.querySelector(".loader"),u=document.querySelector(".btn-load");let c,n=1,b=0;const P=15;let g=new S(".lightbox a",{captionsData:"alt"});g.on("show.simplelightbox",function(){});m();setTimeout(h,100);C.addEventListener("submit",B);u.addEventListener("click",q);async function B(e){if(e.preventDefault(),p(),m(),d.innerHTML="",c=e.target.elements.search.value.trim(),n=1,!c){l.show({message:"Please fill in the field!",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight"}),h();return}let r;try{r=await y(c,n),g.refresh(),b=Math.ceil(r.totalHits/P),r.hits.length===0?l.error({maxWidth:"432px",height:"48px",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}):F(r.hits)}catch{l.error({maxWidth:"432px",height:"48px",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight",message:"Sorry, an error occurred while loading. Please try again!"})}h(),r.hits.length!==0&&x(),e.target.reset()}async function q(){n+=1,p(),m();try{const e=await y(c,n);F(e.hits),g.refresh()}catch{l.error({maxWidth:"432px",height:"48px",message:"Sorry, an error occurred while loading. Please try again!",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight"})}k(),h(),x()}function m(){L.classList.remove("hidden")}function h(){L.classList.add("hidden")}function E(){u.classList.remove("hidden")}function p(){u.classList.add("hidden")}function x(){n>=b?(p(),l.show({maxWidth:"432px",height:"48px",message:"We're sorry, but you've reached the end of search results.",theme:"dark",progressBarColor:"#FFFFFF",color:"blue",position:"topRight"})):E()}function k(){const e=d.firstElementChild;if(e&&e.nodeType===1){const i=e.getBoundingClientRect().height*2;i>0&&window.scrollBy({top:i,behavior:"smooth"})}}
//# sourceMappingURL=commonHelpers.js.map
