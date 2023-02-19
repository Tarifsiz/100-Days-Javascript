// const rand = Math.floor(Math.random() * 10);

// console.log(rand);

const number = document.querySelector('.number');
const btn = document.querySelector('.generate');

const generateNumber = () => {
    number.innerHTML = Math.floor(Math.random() * 10);
}

btn.addEventListener("click", generateNumber);

generateNumber();
