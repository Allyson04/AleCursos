const catchMenuStyle = document.getElementById("menuList").style
let mode = true

function toggleMenu() {
    if (mode) {
        catchMenuStyle.left = "2rem"
    } else {
        catchMenuStyle.left = "-10rem"
    }

    mode = !mode
}