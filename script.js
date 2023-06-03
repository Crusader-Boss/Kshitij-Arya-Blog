const slider = document.getElementById("switch");
const body = document.body;

slider.addEventListener("input", () => {
    body.classList.toggle("dark", slider.value == "1");
});
