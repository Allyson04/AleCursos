const catchMenuStyle = document.getElementById("menuList").style
const getSearchBar = document.getElementById("searchBar")
const getSearchBarForm = document.querySelector("#searchBar form")
const getAllCourses = document.querySelectorAll(".projects")

let mode = true

Modals = {

    //function to go to top of page
    goUp() {
    window.scrollTo(document.body.scrollHeight, 0);
    },

    //toggling display of searchBar form, with transitions
    toggleSearch() {
        document.getElementById("closeWord").classList.toggle("hide")
        document.getElementById("openWord").classList.toggle("hide")
        if( getSearchBarForm.style.display === "flex") {
            getSearchBarForm.classList.toggle("topping")
            setTimeout(function() {getSearchBarForm.style.display = "none"} ,300);
            
            // console.log("disable display")

        } else {
            getSearchBarForm.style.display = "flex"
            setTimeout(function() {getSearchBarForm.classList.toggle("topping")} ,50);

            // console.log("activating display")
        }
    },

    toggleMenu() {
        if (mode) {
            catchMenuStyle.left = "2rem"
        } else {
            catchMenuStyle.left = "-15rem"
        }
    
        mode = !mode
    }

}

//adding event listener in case of change on the search bar
getSearchBarForm.addEventListener("change", searchCourses)

function searchCourses() {
    //clear console to better refresh of info
    console.clear()

    let checkedInputs = Array()
    checkedInputs = SearchUtils.defineCheckedCourses(checkedInputs)
    // console.log(checkedInputs)

    //this structure will define which elements will be shown
    SearchUtils.hideUnwantedCourses(checkedInputs)
    
    //scenario where no checkbox is checked, all courses will be displayed
    SearchUtils.displayAllCourses(checkedInputs, getAllCourses)
}

SearchUtils = {
    //defining which element where checked and identifying it with his id
    defineCheckedCourses(checkedInputs) {
        for(i=1;i<=8;i++) {
            n = i*2-1

            let getInput = document.querySelector("#searchBar form input:nth-child(" + n + ")")
            if(getInput.checked === true) {
                checkedInputs[i] = getInput.id
            }
        }
        
        return checkedInputs
    },

    //toggling display or hide all depending on which requisition
    toggleDisplayCourses(getAllCourses, wantedState) {
        for(n=0;n<getAllCourses.length;n++) {
            getAllCourses[n].style.display = wantedState
        }
    },
    
    //scenario where no checkbox is checked, all courses will be displayed
    displayAllCourses(checkedInputs, getAllCourses) {
        if (checkedInputs.length === 0) {
            // console.log(getAllCourses)
            SearchUtils.toggleDisplayCourses(getAllCourses, "block")
        } 
    },
 
    //selecting and display only wanted courses
    hideUnwantedCourses(checkedInputs) {
        SearchUtils.toggleDisplayCourses(getAllCourses, "none")
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


}



