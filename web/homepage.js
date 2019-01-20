function reveal() {
    var div = document.getElementById("hiddenDiv");

    if (div.classList.contains("revealDiv")){
        div.classList.remove("revealDiv");
        div.classList.add("visibleDiv");
    } else if (!div.classList.contains("revealDiv")) {
        div.classList.add("revealDiv");
    }
}