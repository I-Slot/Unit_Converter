/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.getElementById("input")

let convertBTN = document.getElementById("convert-btn")


let lengthEl = document.getElementById("meter-convert")
let volumeEl = document.getElementById("liters-convert")
let massEl = document.getElementById("kilogram-convert")


convertBTN.addEventListener("click", function () {
    console.log("clicked")
    inputEl = inputEl.value
    lengthEl.textContent = `${inputEl} meters = ${(inputEl * 3.281.toFixed(3))} feets | ${inputEl} feets = ${(inputEl * 0.305.toFixed(3))} meters`;
    volumeEl.textContent = `${inputEl} liters = ${(inputEl * 0.264.toFixed(3))} gallons | ${inputEl} gallons = ${(inputEl * 3.785.toFixed(3))} liters`;
    massEl.textContent = `${inputEl} kilos = ${(inputEl * 2.204.toFixed(3))} pounds | ${inputEl} pounds = ${(inputEl * 0.454.toFixed(3))} kilos`;
})

