

/*
    Créer les images
*/
const jsonTheCatAPI = "https://api.thecatapi.com/v1/images/search?limit=10";
const slidesElt = document.querySelector(".slides");

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
        slider();
    }
}

getCATImg(jsonTheCatAPI);


function creatImg(data) {
    data.forEach((image, index) => {
        const imageElt = document.createElement("img");

        imageElt.className = "slider-img";
        imageElt.src = data[index].url;
        /*
        divItemElt.innerHTML = `
            <h2 class="title"></h2>
            <a href="#">Lire l'image</a>
        `;
        divItemElt.querySelector(".title").textContent = `${image.title}`;
*/
        slidesElt.appendChild(imageElt);
    });
}


/*
    Code slider
*/
function slider () {
    const btnScroll = document.querySelectorAll(".btn-scroll");
    const images = document.querySelectorAll(".slider-img");
    console.log("images : ", images);

    btnScroll.forEach(btn => btn.addEventListener("click", handleClickBtnScroll));
    let index = 0;
    function handleClickBtnScroll(e) {
        //console.log(e.target.getAttribute("data-action"))
        index = index + Number(e.target.getAttribute("data-action"));

        if (index < 0) {
            index = images.length - 1;
        }
        else if (index > images.length - 1) {
            index = 0;
        }

        images[index].scrollIntoView({
            behavior: "smooth"
        });
    }
}
