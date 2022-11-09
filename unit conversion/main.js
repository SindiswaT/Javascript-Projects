document.getElementById("container").style.visibility = "hidden"

document.getElementById("num-input").addEventListener("input", function(e){
    document.getElementById("container").style.visibility = "visible"
    
    let numInput = e.target.value
    const lenMeter = numInput * 3.281
    const lenFeet = numInput / 3.281
    const volLitre = numInput * 0.264
    const volGallon = numInput / 0.264
    const massKg = numInput * 2.204
    const massLb = numInput / 2.204

    document.getElementById("len-output").innerHTML = `${numInput} Meters = ${lenMeter} feet | ${numInput} Feet = ${lenFeet.toFixed(2)} meters`
    document.getElementById("vol-output").innerHTML = `${numInput} Litres = ${volLitre.toFixed(2)} gallons | ${numInput} Gallons = ${volGallon.toFixed(2)} litres`
    document.getElementById("mass-output").innerHTML = `${numInput} Kilograms = ${massKg.toFixed(2)} lbs | ${numInput} Pounds = ${massLb.toFixed(2)} kg`
})