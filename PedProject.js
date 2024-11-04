function openPopup(title, imageUrl, description) {
    document.getElementById("popup-title").innerText = title;
    document.getElementById("popup-image").src = imageUrl;
    document.getElementById("popup-description").innerText = description;
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Закрытие попапа при нажатии вне его
window.onclick = function(event) {
    const popup = document.getElementById("popup");
    if (event.target === popup) {
        closePopup();
    }
}
