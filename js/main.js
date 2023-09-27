const text = [
    "ibrahim moawad",
    "a full stack developer",
    "a dot net developer"
]

const textContainer = document.querySelector(".typed-text-animation");
const writingDuration = 300;
const deletingDuration = 150;
const stoppingDuration = 2000;

let letterIndex = 0;
let textIndex = 0;
let isWriting = true;

const animateText = () => {

    textContainer.textContent = text[textIndex].slice(0, letterIndex);
    textContainer.classList.remove("blinking");

    if (isWriting && letterIndex < text[textIndex].length) {
        ++letterIndex;
        setTimeout(animateText, writingDuration);
    }
    else if (!isWriting && letterIndex > 0) {
        --letterIndex;
        setTimeout(animateText, deletingDuration);
    }
    else {
        isWriting = !isWriting;
        textIndex = letterIndex == 0 ? ++textIndex % text.length : textIndex;
        setTimeout(animateText, stoppingDuration);
        textContainer.classList.add("blinking");
    }

}


animateText();


