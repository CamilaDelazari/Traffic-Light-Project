const img = document.getElementById("img");
const button = document.getElementById("button");

const trafficLight = (event) => {
    turnOn[event.target.id]();

}

const turnOn = {
    'red': () => img.src = "./img/red.png",
    'yellow': () => img.src = "./img/yellow.png",
    'green': () => img.src = "./img/green.png",
}
button.addEventListener("click", trafficLight);
