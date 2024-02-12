function convertToMiles() {
    var km = document.getElementById("inputKm").value;
    var miles = km * 0.621371;
    document.getElementById("inputMiles").value = miles.toFixed(2);
    document.getElementById("result").innerText = km + " kilómetros son aproximadamente " + miles.toFixed(2) + " millas.";
}

function convertToKm() {
    var miles = document.getElementById("inputMiles").value;
    var km = miles / 0.621371;
    document.getElementById("inputKm").value = km.toFixed(2);
    document.getElementById("result").innerText = miles + " millas son aproximadamente " + km.toFixed(2) + " kilómetros.";
}