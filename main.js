gsap.registerPlugin(ScrollTrigger);

/* HERO */
gsap.from("#logoText", { y:150, opacity:0, duration:1.5, ease:"power4.out" });
gsap.from(".subtitle", { y:80, opacity:0, duration:1.5, delay:0.3, ease:"power4.out" });

/* CARDS */
gsap.utils.toArray(".card").forEach((card, i) => {

  gsap.from(card, {
    scrollTrigger:{ trigger:card, start:"top 85%" },
    y:100,
    opacity:0,
    delay:i*0.2,
    duration:1.2,
    ease:"power3.out"
  });

  VanillaTilt.init(card,{
    max:12,
    speed:500,
    glare:true,
    "max-glare":0.35,
    scale:1.05
  });
});

/* HERO FLOAT */
gsap.to(".hero",{ y:10, repeat:-1, yoyo:true, ease:"sine.inOut", duration:4 });

/* =========================
   NEON VAULT INFINITE LOOP
========================= */
const track = document.querySelector(".vault-track");

if(track){
  const clone = track.innerHTML;
  track.innerHTML += clone;

  gsap.to(track,{
    xPercent:-50,
    repeat:-1,
    duration:40,
    ease:"linear"
  });
}
