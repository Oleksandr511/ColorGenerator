const block = document.querySelector('.block');
const color = document.querySelector('.color');
const button = document.querySelector('.btn');

const hex = '0123456789ABCDEF';

function randomColorForHex() {
    let res = '#';

    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * 16);
        res += hex[index];

    }
    return res;
}

function rundomColorForRgb() {
    let index = Math.floor(Math.random() * 256);
    return index;
}

button.addEventListener('click', () => {
    let chosenColor = displayRadioValue();
    if (chosenColor === 'hex') {
        let randColor = randomColorForHex();
        block.style.backgroundColor = randColor;
        color.innerHTML = randColor;
    }
    else {
        let randColor = `rgb(${rundomColorForRgb()},${rundomColorForRgb()},${rundomColorForRgb()})`;
        block.style.backgroundColor = randColor;
        color.innerHTML = randColor;
    }
})



function displayRadioValue() {
    let element = document.getElementsByName('colorChoise');
    for (let i = 0; i < element.length; i++) {
        if (element[i].checked) {
            color.innerHTML = element[i].value;
            return element[i].value;
        }
    }
}




