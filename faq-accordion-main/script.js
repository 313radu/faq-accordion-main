const textSections = document.querySelectorAll("#text-section");
const titles = document.querySelectorAll("#title");
const closeIcons = document.querySelectorAll("#close-icon");

titles.forEach(function (title, index) {
    title.addEventListener("click", function (event) {
        showText(index);
    }, false);
});

body.addEventListener("click", hideText, false);

function showText(index) {
    textSections.forEach(function (text, i) {
        if (i === index) {
            if (text.classList.contains("active-text-section")) {
                text.classList.remove("active-text-section");
                hideCloseIcon(index);
            } else {
                text.classList.add("active-text-section");
                showCloseIcon(index);
            }
        } else {
            text.classList.remove("active-text-section");
            hideCloseIcon(i);
        }
    });
}

function showCloseIcon(index) {
    closeIcons[index].style.visibility = "visible";
}

function hideCloseIcon(index) {
    closeIcons[index].style.visibility = "hidden";
}

