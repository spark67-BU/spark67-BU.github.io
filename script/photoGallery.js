function expandPhoto(image) {
    const expandedImage = document.getElementById("imageFocus");
    
    expandedImage.src=image.src;

    const imageDescription = document.getElementById("imageDescription");
    imageDescription.innerHTML = image.alt;
}