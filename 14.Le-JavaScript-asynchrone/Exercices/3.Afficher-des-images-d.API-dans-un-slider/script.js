/*
    Collect images
*/
const jsonTheCatAPI = "https://api.thecatapi.com/v1/images/search?limit=10";

async function getCATImg(url) {
    let imgData;
    const errorMsgElt = document.querySelector(".error-msg");

    try {
        const response = await fetch(url);
        const headers = response.headers.get("Content-Type");

        if (!response.ok) throw Error(`${response.status}`);
        if (!headers || !headers.includes("application/json")) throw Error("Les données ne sont pas du JSON.");

        imgData = await response.json();
        console.log("imgData : ", imgData);
    }
    catch (error) {
        //console.dir(error);
        errorMsgElt.classList.add("active");
        errorMsgElt.textContent = `Voici l'erreur rencontré : ${error.message}`;
    }

    if (imgData) {
        creatImg(imgData);
        sliderNavigation();
    }
}

getCATImg(jsonTheCatAPI);


/*
    Create images
*/
const slidesElt = document.querySelector(".slides");

function creatImg(data) {
    data.forEach((image, index, array) => {
        const imageElt = document.createElement("img");
        let slideNumber = index += 1;

        imageElt.className = "slider-img";
        imageElt.src = image.url;
        imageElt.id = image.id;
        imageElt.ariaRoleDescription = `slide`;
        imageElt.ariaLabel =  `Slide ${slideNumber} of ${array.length} : Cat image ${slideNumber}`;
        imageElt.alt = ``;
        imageElt.width = image.width;
        imageElt.height = image.height;
        slidesElt.appendChild(imageElt);
    });
}


/*
    Create slider control
*/
function sliderNavigation () {
    let currentIndex = 0;

    /*
        Fonction pour faire défiler vers l'image spécifiée
    */
    function scrollToImage(index) {
        images[index].scrollIntoView({
            behavior: "smooth"
        });
    }

    /*
        Click
    */
    const btnScroll = document.querySelectorAll(".btn-scroll");
    const images = document.querySelectorAll(".slider-img");

    btnScroll.forEach(btn => btn.addEventListener("click", handleClickBtnScroll));
    function handleClickBtnScroll(e) {
        currentIndex = currentIndex + Number(e.target.getAttribute("data-action"));

        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        else if (currentIndex > images.length - 1) {
            currentIndex = 0;
        }

        scrollToImage(currentIndex);
    }

    /*
        Touch
    */
    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartY = 0;
    let touchEndY = 0;

    slidesElt.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY; // Capture également la position verticale de départ
    }, false);

    slidesElt.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].clientX;
        touchEndY = e.changedTouches[0].clientY; // Capture également la position verticale de fin
        handleGesture();
    }, false);

    function handleGesture() {
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;

        // Vérifie si le mouvement est principalement horizontal
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            // Maintenant, traitez le mouvement comme un glissement horizontal
            if (deltaX < 0) {
                console.log('Swiped Left');
                currentIndex = (currentIndex + 1) % images.length;
            } else {
                console.log('Swiped Right');
                currentIndex = (currentIndex - 1 + images.length) % images.length;
            }
            scrollToImage(currentIndex);
        } // Ajouter un else si besoin de faire des actions pour le mouvement vertical
    }
}
