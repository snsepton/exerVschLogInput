var inputBox = document.getElementById("text-input")
var button = document.getElementById("button")
function handleButtonClick() {
    document.getElementById("demo").innerHTML = "It Worked!";
    console.log("The button was clicked!")
}
button.addEventListener("click", handleButtonClick)
