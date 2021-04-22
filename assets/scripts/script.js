const catchMenuStyle = document.getElementById("menuList").style
const getSearchBar = document.getElementById("searchBar")
const getSearchBarForm = document.querySelector("#searchBar form")
const getAllCourses = document.querySelectorAll(".projects")

let mode = true

let projects = []
projects = defineProjects()

//function responsible for detecting important pieces of info from HTML
function defineProjects() {
    for(i=0;i<getAllCourses.length;i++) {
    // console.log("name")
    // console.log(i)
    projectsTemp = {}
    projectsTemp.name = document.querySelectorAll(".projects h3")[i].innerText

    projectsTemp.tag = []
    for(n=0;n<document.querySelectorAll(".projects:nth-child(" + (i+1) + ") label").length;n++) {
        // console.log("tag")
        // console.log(n)

        projectsTemp.tag[n] = document.querySelectorAll(".projects label")[n].innerText
    }
    // console.log("added tags")
    // console.log(projectsTemp.tag)
    projects[i] = projectsTemp
    }

    return projects
}

// console.log(projects)

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

    document.getElementById("exception-Modal").style.display = "block"

    SearchUtils.toggleDisplayCourses(getAllCourses, "block")

    let checkedInputs = Array()
    checkedInputs = SearchUtils.defineCheckedCourses(checkedInputs)
    // console.log(checkedInputs)

    //this structure will define which elements will be shown
    SearchUtils.hideUnwantedCourses(checkedInputs)
    
    //scenario where no checkbox is checked, all courses will be displayed
    SearchUtils.displayAllCourses(checkedInputs, getAllCourses)

    SearchUtils.test()
}

SearchUtils = {
    
    //toggling display or hide all depending on which requisition
    toggleDisplayCourses(getAllCourses, wantedState) {
        for(n=0;n<getAllCourses.length;n++) {
            getAllCourses[n].style.display = wantedState
        }
    },
    
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
 
    //selecting and display only wanted courses
    hideUnwantedCourses(checkedInputs) {
        SearchUtils.toggleDisplayCourses(getAllCourses, "none")
        for(i=1;i<=checkedInputs.length;++i) {
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
    },

    //scenario where no checkbox is checked, all courses will be displayed
    displayAllCourses(checkedInputs, getAllCourses) {
        if (checkedInputs.length === 0) {
            // console.log(getAllCourses)
            SearchUtils.toggleDisplayCourses(getAllCourses, "block")
        }
    },

    test() {
        let displayValueCourses = []

        for(n=0;n<getAllCourses.length;n++) {
            if(getAllCourses[n].style.display == "none") {
                displayValueCourses[n] = "hidden"
            }

        }
        console.log(displayValueCourses)

        displayValueCourses.filter(function(value) {return value === "hidden"})
        console.log(displayValueCourses)


        if (displayValueCourses === "hidden") {
            console.log(displayValueCourses)
            document.getElementById("exception-Modal").style.display = "block"
    
        }
        console.log(displayValueCourses)
       
    }

}



