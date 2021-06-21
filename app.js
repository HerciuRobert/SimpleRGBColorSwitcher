const body = document.body;
const switchBtn = document.querySelector(".switch");
const switchPara = document.querySelector(".color");


switchBtn.addEventListener("click", function() {
    let color1 = getRandomNumber(); //red
    let color2 = getRandomNumber(); //green
    let color3 = getRandomNumber(); //blue

    const colorString = `rgb(${color1}, ${color2}, ${color3})`
    body.style.backgroundColor = colorString;
    switchPara.innerText = colorString;
});


function getRandomNumber() {
    return Math.floor(Math.random() * 256);
}