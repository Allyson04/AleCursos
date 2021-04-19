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
    checkedInputs = defineCheckedCourses(checkedInputs)
    // console.log(checkedInputs)

    //this structure will define which elements will be shown
    hideUnwantedCourses(checkedInputs)
    
    //scenario where no checkbox is checked, all courses will be displayed
    displayAllCourses(checkedInputs, getAllCourses)
}

//defining which element where checked and identifying it with his id
function defineCheckedCourses(checkedInputs) {
    for(i=1;i<=8;i++) {
        n = i*2-1

        let getInput = document.querySelector("form#searchBarForm input:nth-child(" + n + ")")
        if(getInput.checked === true) {
             checkedInputs[i] = getInput.id
        }
    }
    
    return checkedInputs
}

//toggling display or hide all depending on which requisition
function toggleDisplayCourses(getAllCourses, wantedState) {
    for(n=0;n<getAllCourses.length;n++) {
        getAllCourses[n].style.display = wantedState
    }
}

//scenario where no checkbox is checked, all courses will be displayed
function displayAllCourses(checkedInputs, getAllCourses) {
    if (checkedInputs.length === 0) {
        // console.log(getAllCourses)
        toggleDisplayCourses(getAllCourses, "block")
    } 
}
 
function hideUnwantedCourses(checkedInputs) {
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