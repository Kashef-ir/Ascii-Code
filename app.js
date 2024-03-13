// variables
const $ = document;
const body = $.body;
const keyboardInputElem = $.querySelector("#keyboardInput");
const resultContentElem = $.querySelector("#resultContent");
const eventKeyElem = $.querySelector("#eventKey");
const eventLocationElem = $.querySelector("#eventLocation");
const eventWhichElem = $.querySelector("#eventWhich");
const eventCodeElem = $.querySelector("#eventCode");
const resultElem = $.querySelector("#result");
const cards = $.querySelectorAll('.cards')
const cardTitles = $.querySelectorAll(".card-title");

function toggleContainers() {
    keyboardInputElem.style.display = "none";
    resultContentElem.style.display = "block";
}

function showKeyInfo(event) {
    toggleContainers();
    let keyCode = event.which;
    let blockedKeys = [
        112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 124, 16, 17, 18,
        27, 9, 32, 37, 38, 39, 40, 46, 36, 35, 144, 145, 33, 34, 45, 19, 93,
    ];

    // Check if the pressed key is in the blockedKeys array
    if (blockedKeys.includes(keyCode)) {
        event.preventDefault();
    }

    // Prevent F11 and F12 specifically
    if (keyCode === 122 || keyCode === 123) {
        event.preventDefault();
    }

    // Display information about the key event
    resultElem.innerHTML = keyCode;
    eventKeyElem.innerHTML = event.key;
    eventLocationElem.innerHTML = event.location;
    eventWhichElem.innerHTML = event.which;
    eventCodeElem.innerHTML = event.code;

    if (event.which == 32) {
        eventKeyElem.innerHTML = "Space";
    }
}

function copyCardTitle(event) {
    const cardTitle = event.currentTarget.querySelector(".card-title");
    const textArea = document.createElement("textarea");
    textArea.value = cardTitle.innerHTML;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
}
// eventListeners
body.addEventListener("keydown", showKeyInfo);
cardTitles.forEach(function (cardTitle) {
    cardTitle.closest(".card").addEventListener("click", copyCardTitle);
});

