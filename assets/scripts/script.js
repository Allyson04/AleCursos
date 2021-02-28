const catchMenuStyle = document.getElementById("menuList").style
let mode = true

function toggleMenu() {
    if (mode) {
        catchMenuStyle.left = "1.5rem"
    } else {
        catchMenuStyle.left = "-15rem"
    }

    mode = !mode
}