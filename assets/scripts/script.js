const catchMenuStyle = document.getElementById("menuList").style
const getSearchBar = document.getElementById("searchBar")
const getSearchBarForm = document.querySelector("#searchBar form")
const getAllCourses = document.querySelectorAll(".projects")

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

// getSearchBar.style.display = "none"

// function toggleSearch() {

//     // console.log(getSearchBar.style.display === "none")
//     getSearchBar.style.display === "block" ? getSearchBar.style.display = "none" : getSearchBar.style.display = "block"
// }

//adding event listener in case of change on the search bar
getSearchBarForm.addEventListener("change", searchCourses)

function searchCourses() {
    //clear console to better refresh of info
    console.clear()

    let checkedInputs = Array()

    //defining which element where checked and identifying it with his id
    for(i=1;i<=8;i++) {
        n = i*2-1

        let getInput = document.querySelector("form#searchBarForm input:nth-child(" + n + ")")
        if(getInput.checked === true) {
             checkedInputs[i] = getInput.id
        }
    }
    // console.log(checkedInputs)

    toggleDisplayCourses(getAllCourses, "none")
    for(i=1;i<=8;++i) {
        // console.log(i)
        if (checkedInputs[i] != null) {
            // console.log(checkedInputs[i])
            let elementsFounds = Array()
            elementsFounds = document.querySelectorAll(".projects label[for=" + checkedInputs[i] + "]")
            // console.log(elementsFounds)
            for(n=0;n<elementsFounds.length;n++) {
                elementsFounds[n].parentElement.parentElement.style.display = "block"
            }
        } 
    }

}

//toggling display or hide all depending on which requisition
function toggleDisplayCourses(getAllCourses, wantedState) {
    for(n=0;n<getAllCourses.length;n++) {
        getAllCourses[n].style.display = wantedState
    }
}
