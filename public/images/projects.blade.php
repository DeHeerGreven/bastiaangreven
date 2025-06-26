<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="https://fav.farm/🔥" />
    <title>Bastiaan Greven</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
</head>
<body>
<nav class="nav">
        <div class="nav__container">
            <div class="nav__content">
                <div class="nav__logo">
                    <a href="/"><img src="/images/bgreven_logo_oranje_wit.png" alt="Logo"></a>
                </div>
                <ul class="nav__list">
                    <li class="nav__item"><a href="/" class="nav__link">Home</a></li>
                    <li class="nav__item"><a href="projects" class="nav__link">Projects</a></li>
                    <li class="nav__item"><a href="introduction" class="nav__link">Over mij</a></li>
                    <li class="nav__item"><a href="contact" class="nav__link">Contact</a></li>
                </ul>

                <button class="menu-toggle" id="menu-toggle">
                    <span class="menu-toggle-bar"></span>
                    <span class="menu-toggle-bar"></span>
                    <span class="menu-toggle-bar"></span>
                </button>
            </div>
        </div>
    </nav>

    <div class="side-menu" id="side-menu">
        <div class="side-menu__content">
            <!-- Sluitknop -->
            <button class="close-menu" id="close-menu">
                <i class="fas fa-times text-2xl text-white"></i>
            </button>

            <div class="nav__logo">
                <a href="/"><img src="/images/bgreven_logo_oranje_wit.png" alt="Logo"></a>
            </div>

            <ul class="sidebar__list">
                <li class="sidebar__item"><a href="/">Home</a></li>
                <li class="sidebar__item"><a href="projects">Projecten</a></li>
                <li class="sidebar__item"><a href="introduction">Over mij</a></li>
                <li class="sidebar__item"><a href="contact">Contact</a></li>
            </ul>
        </div>
    </div>

    <section class="projects--default">
        <div class="projects__container">
            <div class="projects__content">
                <span class="projects__title">Projecten</span>
                <span class="projects__subtitle">Deze projecten laten zien aan welke onderdelen ik heb meegewerkt.</span>
            </div>
            <span class="projects__item__title">Fitbody</span>
            <div class="projects__items" id="lightbox-gallery">
                <a class="projects__item" href="images/fitbody/fitbody_logo_background.png" data-lightbox="gallery">
                    <img src="images/fitbody/fitbody_logo_background.png" alt="Fitbody 1">
                </a>
                <a class="projects__item" href="images/fitbody/fitbody_form.png" data-lightbox="gallery">
                    <img src="images/fitbody/fitbody_form.png" alt="Fitbody 2">
                </a>
                <a class="projects__item" href="images/fitbody/fitbody_usps.png" data-lightbox="gallery">
                    <img src="images/fitbody/fitbody_usps.png" alt="Fitbody 2">
                </a>
                <a class="projects__item" href="images/fitbody/fitbody_footer.png" data-lightbox="gallery">
                    <img src="images/fitbody/fitbody_footer.png" alt="Fitbody 2">
                </a>
            </div>
            <span class="projects__item__title">Eltrex Motion</span>
            <div class="projects__items" id="lightbox-gallery">
                <a class="projects__item" href="images/eltrex/eltrex-news-overview.png" data-lightbox="gallery">
                    <img src="images/eltrex/eltrex-news-overview.png" alt="Fitbody 1">
                </a>
                <a class="projects__item" href="images/eltrex/eltrex-news-detail.png" data-lightbox="gallery">
                    <img src="images/eltrex/eltrex-news-detail.png" alt="Fitbody 2">
                </a>
                <a class="projects__item" href="images/eltrex/eltrex-photoalbum.png" data-lightbox="gallery">
                    <img src="images/eltrex/eltrex-photoalbum.png" alt="Fitbody 2">
                </a>
                <a class="projects__item" href="images/eltrex/eltrex-footer.png" data-lightbox="gallery">
                    <img src="images/eltrex/eltrex-footer.png" alt="Fitbody 2">
                </a>
            </div>
                        <span class="projects__item__title">NAC Zaken</span>
            <div class="projects__items" id="lightbox-gallery">
                <a class="projects__item" href="images/nac-zaken/nac-zaken-bedrijven-gids.png" data-lightbox="gallery">
                    <img src="images/nac-zaken/nac-zaken-bedrijven-gids.png" alt="Nac Zaken 1">
                </a>
                <a class="projects__item" href="images/nac-zaken/nac-zaken-bedrijven-gids-2.png" data-lightbox="gallery">
                    <img src="images/nac-zaken/nac-zaken-bedrijven-gids-2.png" alt="Nac Zaken 2">
                </a>
                <a class="projects__item" href="images/nac-zaken/nac-zaken-footer.png" data-lightbox="gallery">
                    <img src="images/nac-zaken/nac-zaken-footer.png" alt="Nac Zaken 3">
                </a>
            </div>
        </div>
    </section>

    <footer class="footer">
        <p class="footer__text">© 2025 Bastiaan Greven. Alle rechten voorbehouden.</p>
    </footer>
</body>
</html>
