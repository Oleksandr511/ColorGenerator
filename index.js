const block = document.querySelector('.block');
const color = document.querySelector('.color');
const button = document.querySelector('.btn');

const hex = '0123456789ABCDEF';

function randomColor() {
    let res = '#';

    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * 16);
        res += hex[index];

    }
    return res;
}

button.addEventListener('click', () => {
    let randColor = randomColor();
    block.style.backgroundColor = randColor;
    color.innerHTML = randColor;
})




