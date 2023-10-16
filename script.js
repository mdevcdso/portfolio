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
