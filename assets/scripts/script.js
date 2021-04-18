const catchMenuStyle = document.getElementById("menuList").style
const getSearchBar = document.getElementById("searchBar")

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

getSearchBar.style.display = "none"

function toggleSearch() {

    // console.log(getSearchBar.style.display === "none")
    getSearchBar.style.display === "block" ? getSearchBar.style.display = "none" : getSearchBar.style.display = "block"
}