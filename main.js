gsap.registerPlugin(ScrollTrigger);

/* ========================= HERO ANIMATION ======================== */
gsap.from(".brand", { y:150, opacity:0, duration:1.5, ease:"power4.out" });
gsap.from(".subtitle", { y:80, opacity:0, duration:1.5, delay:0.3, ease:"power4.out" });

/* ========================= CARDS SCROLL + TILT + GRADIENT ======================== */
gsap.utils.toArray(".card").forEach((card,i)=>{
  gsap.from(card,{ 
    scrollTrigger:{trigger:card,start:"top 85%"}, 
    y:100, 
    opacity:0, 
    delay:i*0.2, 
    duration:1.2, 
    ease:"power3.out" 
  });

  VanillaTilt.init(card,{ max:12, speed:500, glare:true, "max-glare":0.35, scale:1.05 });

  const h3 = card.querySelector(".gradient-text");
  if(h3){
    h3.style.background="linear-gradient(90deg,#ff6a00,#ff00aa,#00e0ff,#ff6a00)";
    h3.style.backgroundSize="300% 300%";
    h3.style.webkitBackgroundClip="text";
    h3.style.webkitTextFillColor="transparent";
    h3.style.animation="logoFlow 6s linear infinite";
  }
});

/* ========================= HERO FLOAT ======================== */
gsap.to(".hero",{ y:10, repeat:-1, yoyo:true, ease:"sine.inOut", duration:4 });

/* ========================= CUSTOM CURSOR ======================== */
if(!('ontouchstart' in window)){
  const cursor=document.createElement("div");
  cursor.classList.add("cursor");
  document.body.appendChild(cursor);
  document.addEventListener("mousemove", e=>{
    gsap.to(cursor,{ x:e.clientX, y:e.clientY, duration:0.1, ease:"power1.out" });
  });
}

/* ========================= DISABLE RIGHT CLICK + LONG PRESS ======================== */
document.querySelectorAll(".scroll-container img").forEach(img=>{
  img.setAttribute("draggable","false");
  img.addEventListener("contextmenu", e=>e.preventDefault());
  img.addEventListener("touchstart", e=>e.preventDefault(),{passive:false});
});

/* ========================= SUBTLE GIF MOTION ======================== */
document.querySelectorAll(".scroll-container img").forEach(img=>{
  img.style.animation="subtleGif 5s ease-in-out infinite alternate";
});

/* ========================= NEON VAULT STREAM (Optional Dynamic JS) ======================== */
document.addEventListener("DOMContentLoaded", function(){
  const anchor = document.getElementById("neon-vault-anchor");
  if(!anchor) return;

  // اگر بخوای Dynamic JS هم باشه برای Neon Vault:
  if(!document.getElementById("neon-vault-wrapper")){
    renderNeonVault();
  }
});

function renderNeonVault(){
  const wrapper=document.createElement("div");
  wrapper.id="neon-vault-wrapper";
  wrapper.classList.add("neon-vault-card");

  let images=["sample1.jpg","sample2.jpg","sample3.jpg","sample4.jpg","sample5.jpg","sample6.jpg"];
  let capsulesHTML = "";

  for(let i=0;i<6;i++){
    capsulesHTML += `
      <div class="capsule">
        <div class="capsule-strip">
          ${images.concat(images).map(img=>`<img src="images-NeonVaultStream/${img}" alt="">`).join("")}
        </div>
      </div>
    `;
  }

  wrapper.innerHTML = `
    <div class="neon-header">
      <h2>Neon Vault Stream</h2>
      <button class="neon-btn">Randomized Access</button>
    </div>
    <div class="capsule-row">
      ${capsulesHTML}
    </div>
  `;

  document.getElementById("neon-vault-anchor").appendChild(wrapper);
}
