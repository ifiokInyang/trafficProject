

//HTML, CSS, JS - Array, Access elements in the DOM, for loop, setInterval()


const green = document.querySelector("#green");

const yellow = document.querySelector("#yellow");

const red = document.querySelector("#red");

const startBtn = document.querySelector("#startBtn");

const stopBtn = document.querySelector("#stopBtn");

// console.log(green)

//Create a variable to hold the interval

let trafficInterval;

//Create a variable for the current Light

let currentLight = 0;

const startTrafficLight = () => {
    //Store the traffic colors in an array

    const colors = ["green", "yellow", "red"]

    //Store the traffic light elements in an array

    const trafficLights = [green, yellow, red]


    //reset all traffic light

    trafficLights.forEach((light) => light.style.backgroundColor = "");

    //Set Current Light

    trafficLights[currentLight].style.backgroundColor = colors[currentLight]

    //Increase the value of the current Light

    currentLight = (currentLight + 1) % trafficLights.length


}

const trafficIntervalStart = () => {
    if (!trafficInterval) {
        trafficInterval = setInterval(startTrafficLight, 2000)
    }
}

startBtn.addEventListener("click", trafficIntervalStart)

stopBtn.addEventListener("click", () => {
    clearInterval(trafficInterval);
    trafficInterval = null;
})
