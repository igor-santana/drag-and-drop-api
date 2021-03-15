const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');

/** cards behaviour */

cards.forEach(card => {
    card.addEventListener('dragstart', dragstart);
    card.addEventListener('drag', drag);
    card.addEventListener('dragend', dragend);
});

function dragstart() {
    dropzones.forEach(dropzone => dropzone.classList.add('highlight'));
    this.classList.add('is-dragging');
}

function drag() {

}

function dragend() {
    dropzones.forEach(dropzone => dropzone.classList.remove('highlight'));
    this.classList.remove('is-dragging');
}

/** dropzones behaviour */

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter);
    dropzone.addEventListener('dragover', dragover);
    dropzone.addEventListener('dragleave', dragleave);
    dropzone.addEventListener('drop', drop);
});

function dragenter() {

}

function dragover(event) {
    event.preventDefault();
    this.classList.add('over');
    const cardBeingDragged = document.querySelector('.is-dragging');
    this.appendChild(cardBeingDragged);
}

function dragleave() {
    this.classList.remove('over');
}

function drop() {

}
