gsap.registerPlugin(ScrollTrigger);

/* ========================= HERO ANIMATION ========================= */
gsap.from(".hero #logoText", { 
  y: 150, 
  opacity: 0, 
  duration: 1.5, 
  ease: "power4.out" 
});

gsap.from(".hero .subtitle", { 
  y: 80, 
  opacity: 0, 
  duration: 1.5, 
  delay: 0.3, 
  ease: "power4.out" 
});

/* ========================= CARDS SCROLL + TILT + GRADIENT TEXT ========================= */
gsap.utils.toArray(".card").forEach((card, i) => {

  // Scroll Animation
  gsap.from(card, {
    scrollTrigger: { 
      trigger: card, 
      start: "top 85%" 
    },
    y: 100, 
    opacity: 0, 
    delay: i * 0.2, 
    duration: 1.2, 
    ease: "power3.out"
  });

  // Vanilla Tilt
  VanillaTilt.init(card, { 
    max: 12, 
    speed: 500, 
    glare: true, 
    "max-glare": 0.35, 
    scale: 1.05 
  });

  // Gradient Animated Text on h3
  const h3 = card.querySelector(".gradient-text");
  if(h3){
    h3.style.background = "linear-gradient(90deg, #ff6a00, #ff00aa, #00e0ff, #ff6a00)";
    h3.style.backgroundSize = "300% 300%";
    h3.style.webkitBackgroundClip = "text";
    h3.style.webkitTextFillColor = "transparent";
    h3.style.animation = "logoFlow 6s linear infinite";
  }

});

/* ========================= HERO FLOAT LOOP ========================= */
gsap.to(".hero", { 
  y: 10, 
  repeat: -1, 
  yoyo: true, 
  ease: "sine.inOut", 
  duration: 4 
});

/* ========================= CUSTOM CURSOR (DESKTOP ONLY) ========================= */
if (!('ontouchstart' in window)) {
  const cursor = document.createElement("div");
  cursor.classList.add("cursor");
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", e => {
    gsap.to(cursor, { 
      x: e.clientX, 
      y: e.clientY, 
      duration: 0.1, 
      ease: "power1.out" 
    });
  });
}

/* ========================= DISABLE RIGHT CLICK + LONG PRESS ON GALLERY IMAGES ========================= */
document.querySelectorAll(".scroll-container img").forEach(img => {

  // جلوگیری از Drag
  img.setAttribute("draggable", "false");

  // جلوگیری از راست کلیک
  img.addEventListener("contextmenu", e => e.preventDefault());

  // جلوگیری از لمس طولانی موبایل
  img.addEventListener("touchstart", e => e.preventDefault(), { passive: false });

});

/* ========================= SUBTLE GIF-LIKE MOTION FOR ALL IMAGES ========================= */
const images = document.querySelectorAll(".scroll-container img");
images.forEach(img => {
  img.style.animation = "subtleGif 5s ease-in-out infinite alternate";
});

/* ========================= PREMIUM VISUAL STORE - NEON VAULT STREAM DYNAMIC ========================= */
document.addEventListener("DOMContentLoaded", () => {
  const visualStore = document.querySelector("#premiumVisualStore");
  if(!visualStore) return;

  // Create the Neon Vault Stream container
  const vaultContainer = document.createElement("div");
  vaultContainer.classList.add("gallery-scroll", "neon-vault-stream");

  // Optional header
  const vaultHeader = document.createElement("h2");
  vaultHeader.textContent = "Neon Vault Stream";
  vaultContainer.appendChild(vaultHeader);

  // Scroll container for small thumbnails
  const scrollDiv = document.createElement("div");
  scrollDiv.classList.add("scroll-container");
  vaultContainer.appendChild(scrollDiv);

  // Populate images sample1 to sampleN
  const imageCount = 12; // تعداد تصاویر نمونه
  for(let i=1; i<=imageCount; i++){
    const img = document.createElement("img");
    img.src = `images-Neon Vault Stream/sample${i}.jpg`;
    img.alt = `Neon Sample ${i}`;
    scrollDiv.appendChild(img);
  }

  // Optional button
  const btn = document.createElement("button");
  btn.textContent = "Unlock Full Stream";
  vaultContainer.appendChild(btn);

  // Append vaultContainer BELOW the 6 main folders
  const mainFolders = visualStore.querySelectorAll(".gallery-scroll");
  if(mainFolders.length > 0){
    mainFolders[mainFolders.length -1].after(vaultContainer);
  } else {
    visualStore.appendChild(vaultContainer);
  }

  // Neon pulse animation for vault
  gsap.to(".neon-vault-stream .scroll-container img", {
    y: 5,
    repeat: -1,
    yoyo: true,
    duration: 3,
    stagger: 0.1,
    ease: "sine.inOut"
  });
});
