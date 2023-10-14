document.getElementById("pick-color").addEventListener("click", function() {
    var colorList = document.querySelector(".color-list");
    colorList.style.display = colorList.style.display === "none" ? "block" : "none";
});

document.querySelectorAll(".color-box").forEach(function(colorBox) {
    colorBox.addEventListener("click", function() {
        var color = colorBox.style.backgroundColor;
        document.body.style.backgroundColor = color;
        var colorList = document.querySelector(".color-list");
        colorList.style.display = "none";
    });
});
