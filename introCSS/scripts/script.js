

function changeImage() {
    let imageElement = document.querySelector('.image-box');
    console.log(imageElement);
    if (imageElement.classList.contains('image-1')) {
        imageElement.classList.remove("image-1");
        imageElement.classList.add("image-2")
    }
    else {
        imageElement.classList.remove("image-2");
        imageElement.classList.add("image-1")
    }
}