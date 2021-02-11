const catchMenuStyle = document.getElementById("menuList").style
let mode = true

function toggleMenu() {
    if (mode) {
        catchMenuStyle.display = "block"
    } else {
        catchMenuStyle.display = "none"
    }

    mode = !mode
}