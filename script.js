
/* Fade-in com IntersectionObserver */
const obsOptions = { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.12 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, obsOptions);

document.querySelectorAll('.fade').forEach(el => observer.observe(el));


/* Criar botão dinamicamente */
const btn = document.createElement("button");
btn.id = "btnBrilho";
btn.className = "btn-brilho";
btn.textContent = "Clique Aqui";

// adiciona embaixo da seção de vídeo
const secaoVideo = document.querySelector("#video");
if (secaoVideo) secaoVideo.appendChild(btn);

btn.addEventListener("click", () => {
  alert("Botão em JavaScript funcionando!");
});
