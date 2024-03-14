// MODAL
document.addEventListener("DOMContentLoaded", function () {
    const div1Button = document.querySelector(".div1");
    const modal = document.querySelector(".modal");
    const modalCloseBtn = document.querySelector("#modalCloseBtn");

    div1Button.addEventListener("click", function () {
        modal.classList.remove("hidden");
    });

    modalCloseBtn.addEventListener("click", function () {
        modal.classList.add("hidden");
    });
});

//ADAPTER TAILLE ECRAN
window.addEventListener("load", function() {
    var isMobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(navigator.userAgent);
    var currentUrl = window.location.pathname;
    if (isMobile) {
        if (!currentUrl.includes("/mobile")) {
            var mobileUrl = "/mobile" + currentUrl;
            window.location.replace(mobileUrl);
        }
    } else {
        if (currentUrl.includes("/mobile")) {
            var nonMobileUrl = currentUrl.replace("/mobile", "");
            window.location.replace(nonMobileUrl);
        }
    }
});