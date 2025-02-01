const messages = [
    "Really?",
    "Baby pleasee?",
    ":(",
    "My love...",
    "I'll be really sad if u say no",
    "Tina please Im begging u",
    "I will kms"
    "PLEASE PLEASE PLEASE PLEASE PLEASE",
    "You don't have a choice ehehehe",
    "Say yes pleaseee ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
