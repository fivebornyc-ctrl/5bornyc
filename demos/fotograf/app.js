const photos = [
  {
    title: "Cascadă în pădure",
    src: "images/cascada-prieteni.png",
    alt: "Grup de prieteni lângă o cascadă în pădure, unghi jos",
  },
  {
    title: "Cascadă pe versanți",
    src: "images/cascada-versanti.png",
    alt: "Cascadă artificială pe versanți, primăvară",
  },
  {
    title: "Lac și pui de lebădă",
    src: "images/lac-lebada.png",
    alt: "Pui de lebădă pe malul unui lac liniștit, cer albastru",
  },
];

const gallery = document.getElementById("gallery");
const dialog = document.getElementById("lightbox");
const preview = document.getElementById("lightbox-img");
const caption = document.getElementById("lightbox-caption");
const closeBtn = document.getElementById("close-lightbox");

photos.forEach((photo) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.setAttribute("aria-label", `Deschide ${photo.title}`);

  const img = document.createElement("img");
  img.src = photo.src;
  img.alt = "";
  img.loading = "lazy";
  img.decoding = "async";

  btn.appendChild(img);
  btn.addEventListener("click", () => openLightbox(photo));
  gallery.appendChild(btn);
});

function openLightbox(photo) {
  preview.src = photo.src;
  preview.alt = photo.alt;
  caption.textContent = photo.title;
  dialog.showModal();
}

function closeLightbox() {
  dialog.close();
  preview.removeAttribute("src");
}

closeBtn.addEventListener("click", closeLightbox);
dialog.addEventListener("click", (e) => {
  if (e.target === dialog) closeLightbox();
});
dialog.addEventListener("cancel", closeLightbox);
