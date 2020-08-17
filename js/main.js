const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = [`Hello darkness,`, `my old friend.`, `I've come to talk with you again...`];

let activeLetter = 0;
let activeText = 0;

const addLetter = () => {
    spnText.textContent += txt[activeText][activeLetter];
    activeLetter++;
    if (activeLetter === txt[activeText].length) {
        activeText++;
        if (activeText === txt.length) return;
        return setTimeout(() => {
            activeLetter = 0;
            spnText.textContent = '';
            addLetter();
        }, 2000);

    }
    setTimeout(addLetter, 100);
}

setTimeout(addLetter, 500);