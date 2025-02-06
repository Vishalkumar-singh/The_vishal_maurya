let show_containt = document.querySelector("#home");
let containt = "hidden";
show_containt.addEventListener("click", () => {
    if (containt === "visible") {
        document.querySelector(".home").style.visibility = "visible";
        console.log("visible")
        containt = "hidden";
    } else {
        document.querySelector(".home").style.visibility = "hidden";
        containt = "visible";
        console.log("hidden")
    }
});