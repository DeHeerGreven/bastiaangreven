import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { gsap } from "gsap";



// Menu functionaliteit
document.getElementById('menu-toggle').addEventListener('click', function() {
    const sideMenu = document.getElementById('side-menu');
    sideMenu.classList.toggle('active');
});

// Sluiten van het side menu
document.getElementById('close-menu').addEventListener('click', function() {
    const sideMenu = document.getElementById('side-menu');
    sideMenu.classList.remove('active');
});

document.addEventListener('DOMContentLoaded', () => {
    const logos = document.querySelectorAll('.experience__item__content');

    gsap.set(logos, { scale: 1, opacity: 1, rotation: 0, filter: "grayscale(100%)" });

    const timeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 1,
    });

    logos.forEach((logo, index) => {
        timeline
            .to(logo, {
                duration: 1,
                scale: 1.2,
                filter: "grayscale(0%)",
                ease: "power1.out",
                delay: index * 0,
            })
            .to(logo, {
                duration: 1,
                delay: 0,
            })
            .to(logo, {
                duration: 1,
                scale: 1,
                filter: "grayscale(100%)",
                ease: "power1.out",
            });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll(".projects__item");
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    lightbox.innerHTML = `
        <span class="lightbox__close">&times;</span>
        <span class="lightbox__prev">&#10094;</span>
        <img class="lightbox__img" src="" alt="">
        <span class="lightbox__next">&#10095;</span>
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector(".lightbox__img");
    const closeButton = lightbox.querySelector(".lightbox__close");
    const prevButton = lightbox.querySelector(".lightbox__prev");
    const nextButton = lightbox.querySelector(".lightbox__next");

    let currentIndex = 0;
    let zoomedIn = false;  // Variabele om zoomstatus bij te houden
    let currentProject = null;  // Houd bij welk project we bekijken

    // Functie om de lightbox te openen
    function openLightbox(index) {
        currentIndex = index;
        // Vind het project waartoe dit item behoort
        currentProject = galleryItems[index].closest(".projects__items");
        lightboxImg.src = galleryItems[currentIndex].href;
        lightbox.classList.add("active");
    }

    // Functie om de lightbox te sluiten
    function closeLightbox() {
        lightbox.classList.remove("active");
        lightboxImg.classList.remove("zoomed");  // Verwijder de zoom wanneer de lightbox sluit
        zoomedIn = false;  // Reset de zoom status
    }

    // Functie om naar de vorige afbeelding te gaan
    function showPrevImage() {
        const projectItems = currentProject.querySelectorAll(".projects__item");
        currentIndex = (currentIndex - 1 + projectItems.length) % projectItems.length;
        lightboxImg.src = projectItems[currentIndex].href;
    }

    // Functie om naar de volgende afbeelding te gaan
    function showNextImage() {
        const projectItems = currentProject.querySelectorAll(".projects__item");
        currentIndex = (currentIndex + 1) % projectItems.length;
        lightboxImg.src = projectItems[currentIndex].href;
    }

    // Zoom in / uit functie
    function toggleZoom() {
        if (zoomedIn) {
            lightboxImg.classList.remove("zoomed");
        } else {
            lightboxImg.classList.add("zoomed");
        }
        zoomedIn = !zoomedIn;
    }

    galleryItems.forEach((item, index) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            openLightbox(index);
        });
    });

    closeButton.addEventListener("click", closeLightbox);
    prevButton.addEventListener("click", showPrevImage);
    nextButton.addEventListener("click", showNextImage);

    // Voeg de zoom toggle toe aan de afbeelding in de lightbox
    lightboxImg.addEventListener("click", toggleZoom);

    // Sluiten met ESC-toets
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") showPrevImage();
        if (e.key === "ArrowRight") showNextImage();
    });

    // Sluiten bij klikken buiten afbeelding
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) closeLightbox();
    });
});


