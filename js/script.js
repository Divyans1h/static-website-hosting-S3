
const aliens = [
    "Heatblast",
    "Four Arms",
    "XLR8",
    "Diamondhead"
];

function transformAlien() {
    const randomAlien =
        aliens[Math.floor(Math.random() * aliens.length)];

    document.getElementById("transformation").textContent =
        "Transformation activated: " + randomAlien + "!";
}

function showAlien(name) {
    alert(
        "You selected " + name +
        "! Alien transformation information activated."
    );
}
