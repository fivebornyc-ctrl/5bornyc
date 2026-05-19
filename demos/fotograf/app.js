const photos = [
  { title: "Portret urban", gradient: "linear-gradient(135deg, #4a1942, #e879a0)" },
  { title: "Peisaj montan", gradient: "linear-gradient(135deg, #1a1a2e, #6366f1)" },
  { title: "Stradă nocturnă", gradient: "linear-gradient(135deg, #0f172a, #38bdf8)" },
  { title: "Macro natură", gradient: "linear-gradient(135deg, #14532d, #86efac)" },
  { title: "Arhitectură", gradient: "linear-gradient(135deg, #422006, #fbbf24)" },
  { title: "Eveniment", gradient: "linear-gradient(135deg, #312e81, #c084fc)" },
];

const gallery = document.getElementById("gallery");
const dialog = document.getElementById("lightbox");
const preview = document.getElementById("lightbox-preview");
const caption = document.getElementById("lightbox-caption");
const closeBtn = document.getElementById("close-lightbox");

photos.forEach((photo, index) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.style.background = photo.gradient;
  btn.setAttribute("aria-label", `Deschide ${photo.title}`);
  btn.addEventListener("click", () => openLightbox(photo));
  gallery.appendChild(btn);
});

function openLightbox(photo) {
  preview.style.background = photo.gradient;
  caption.textContent = photo.title;
  dialog.showModal();
}

function closeLightbox() {
  dialog.close();
}

closeBtn.addEventListener("click", closeLightbox);
dialog.addEventListener("click", (e) => {
  if (e.target === dialog) closeLightbox();
});
dialog.addEventListener("cancel", closeLightbox);
