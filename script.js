const menu = document.querySelector("#menu")
const modalOverlay = document.querySelector(".modal-overlay")
const closeModal = modalOverlay.querySelector(".modal__close-icon")

menu.addEventListener("click", function () {
    modalOverlay.classList.remove('is-hidden')
})

closeModal.addEventListener("click", function () {
    modalOverlay.classList.add('is-hidden')
})
