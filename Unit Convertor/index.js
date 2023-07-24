/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/



let lengthConvert = document.getElementById("length-convert")
let volumeConvert = document.getElementById("volume-convert")
let massConvert = document.getElementById("mass-convert")
let convertBtn = document.getElementById("convert-btn")

    
convertBtn.addEventListener("click", function(){
    let valueToConvert =  document.getElementById("input-value").value;
    let meterToFeet = ((valueToConvert * 3.281).toFixed(2))
    let feetToMeter = (valueToConvert / 3.281).toFixed(2)
    lengthConvert.textContent = `${valueToConvert} meters = ${meterToFeet} feet | ${valueToConvert} feet = ${feetToMeter} meters`
    let litresToGallons = (valueToConvert * 0.264).toFixed(2)
    let gallonsToLitres = (valueToConvert / 0.264).toFixed(2)
    volumeConvert.textContent =  `${valueToConvert} litres = ${litresToGallons} gallons | ${valueToConvert} gallons = ${gallonsToLitres} litres`
    let kilosToPounds = (valueToConvert * 2.204).toFixed(2)
    let poundsToKilos = (valueToConvert / 2.204).toFixed(2)
    massConvert.textContent =  `${valueToConvert} kilos = ${kilosToPounds} pounds | ${valueToConvert} pounds = ${poundsToKilos} kilos`
})
