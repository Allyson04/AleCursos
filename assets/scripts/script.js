const catchMenuStyle = document.getElementById("menuList").style
let mode = true

function toggleMenu() {
    if (mode) {
        catchMenuStyle.left = "2rem"
    } else {
        catchMenuStyle.left = "-15rem"
    }

    mode = !mode
}

function goUp() {
    window.scrollTo(document.body.scrollHeight, 0);
}
