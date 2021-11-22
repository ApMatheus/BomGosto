function abreModal() {
    let containerModal = document.querySelector('.container-modal');
    let modal = document.querySelector('.modal');

    containerModal.classList.add("mostra");
    modal.classList.add("mostra");
}

function fechaModal() {
    let containerModal = document.querySelector('.container-modal');
    let modal = document.querySelector('.modal');

    containerModal.classList.remove("mostra");
    modal.classList.remove("mostra");
}

let receitas = document.querySelectorAll('.nav-receitas ul li');

receitas.forEach(function (e) {
    e.addEventListener("mousemove", function () {
        abreModal();
    });
});


window.addEventListener("scroll", function(){
    fechaModal();
})