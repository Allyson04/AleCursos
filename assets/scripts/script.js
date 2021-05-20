const catchMenuStyle = document.getElementById("menuList").style
const getSearchBar = document.getElementById("searchBar")
const getSearchBarForm = document.querySelector("#searchBar form")
const getNumberInputs = document.querySelectorAll("#searchBar input")

let mode = true

let projects = []
projects = [
    {
        id: 0,
        title: "Treinamento Básico de Automação Web com Cypress",
        banner: "assets/banner/banner_cypress.png",
        tags: ["cypress", "circleci", "cucumber","mochawesome"]
    },
    {
        id: 1,
        title: "Treinamento do zero para Formação QA",
        banner: "assets/banner/banner_qa_fundaments.jpeg",
        tags: ["QA", "postman"]
    },
    {
        id: 2,
        title: "Treinamento Básico de Automação Web com Cypress 2.0",
        banner: "assets/banner/banner_cypress.png",
    
        tags: ["cypress", "circleci", "cucumber"]
    },
    {
        id: 3,
        title: "Treinamento Básico de Automação Web com Cypress 2.0",
        banner: "assets/banner/banner_cypress.png",
    
        tags: ["cypress", "circleci", "cucumber"]
    },
    {
        id: 4,
        title: "Treinamento Básico de Automação Web com Cypress",
        banner: "assets/banner/banner_cypress.png",
        tags: ["cypress", "circleci", "cucumber","mochawesome"]
    },
    {
        id: 5,
        title: "Treinamento Básico de Automação Web com Cypress",
        banner: "assets/banner/banner_cypress.png",
        tags: ["cypress", "circleci", "cucumber","mochawesome"]
    }
]

createProjectsUtils = {
    //here is created every project 'banner', this function will be done for each object inside 'projects'
    createProjects(project, index, projects) {
        //figureProject is the full project, with image and title (except labels)
        let figureProject = document.createElement('figure')

        //labelProject is the element with his labels
        labelProject = document.createElement('div')
        
        //adding the elements of innerProject() to figureProject
        figureProject.innerHTML = createProjectsUtils.innerProject(project, index, projects)

        //inserting project inside '#projects-division'
        document.querySelector("#projects-division").appendChild(figureProject)
        
        //inserting 'labels' inside 'div' after paragraph 'Tecnlogias usadas' 
        document.querySelector("#projects-division figure:nth-child(" + (index+1) + ") figure div").appendChild(labelProject)
    },

    innerProject(project, index, projects) {
        //creating labels of project
        createProjectsUtils.createLabels(project, index, projects)

        //declaring template string of project
        const projectStructure = `
        <figure class="projects">
            <img src="${project.banner}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>Tecnlogias usadas:</p>
            <div>

            </div>
        </figure>
        `

        return projectStructure
    },

    createLabels(project, index, projects) {
        //console.log("object now being used")
        // console.log(project)

        //catching every element of array "tags"
        projects[index].tags.forEach(function(project, index, projects) {
            //in this case, the structure is like: array 'projects' have object 'project' (from createProjects function), and inside it we have an array 'tags' with strings 'project' (from this function, for example 'cypress')

            //here we are adding every element of 'tags' to labelProject, so labelProject is and collection of all tags
            labelProject.innerHTML += createProjectsUtils.innerLabel(project, index, projects)
        }) 
        
        //checking how is labelProject after each round
        // console.log("labelProject in " + (index+1) + " cycle")
        // console.log(labelProject)
        
        return labelProject
    },

    innerLabel(project, index, projects) {
        //labelTags is an template string for each label
        const labelTags = `<label for="${project}">${project}</label>`
        return labelTags
    },

    createExceptionNoFound(noFoundTagList) {
        const exceptionNoFound = `
            <h2>404</h2>
            <p class='exception'>Desculpe, mas no momento não possuímos um curso com:
            </p>
        `

        return exceptionNoFound
    },

    innerTagsException(inputTag) {
        const inputListStructure = `
            <li>${inputTag}</li>
        `
        // console.log(inputListStructure)

        return inputListStructure
    }

}

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
    }
}

if(document.getElementById("projects") != null) {
    //function to generate every project 'banner'
    projects.forEach(createProjectsUtils.createProjects)

    //adding event listener in case of change on the search bar
    getSearchBarForm.addEventListener("change", searchCourses)
}

const getAllCourses = document.querySelectorAll(".projects")

function searchCourses() {
    //clear display of projects and console
    SearchUtils.resetDisplays()

    checkedInputs = Array()
    checkedInputs = SearchUtils.defineCheckedCourses(checkedInputs)
    // console.log(checkedInputs)

    //this structure will define which elements correspond to the checked inputs
    function defineEqualProjects() {
        foundProjectSearches = []
        projects.forEach(SearchUtils.searchProjects)
    }

    defineEqualProjects()
    // console.log(foundProjectSearches)

    SearchUtils.showCorrectCourses(foundProjectSearches, "block")

    //scenario where no checkbox is checked, all courses will be displayed
    SearchUtils.displayAllCourses(checkedInputs)

    SearchUtils.noFoundProjects()
}

SearchUtils = {
    resetDisplays() {
        //clear console to better refresh of info
        console.clear()

        // hiding all courses
        SearchUtils.toggleDisplayCourses("none")
    },
    
    //toggling display or hide all projects depending on which requisition
    toggleDisplayCourses(wantedState) {
        for(i=0;i<getAllCourses.length;i++) {
            getAllCourses[i].style.display = wantedState
        }
    },
    
    //defining which element where checked and identifying it with his id
    defineCheckedCourses(checkedInputs) {
        for(i=1;i<=getNumberInputs.length;i++) {
            n = i*2-1

            let getInput = document.querySelector("#searchBar form input:nth-child(" + n + ")")
            if(getInput.checked === true) {
                checkedInputs[i] = getInput.id
            }
        }
        
        //filtering empty elements in checkedInputs
        checkedInputs = checkedInputs.filter(function() {return true;})

        return checkedInputs
    },
 
    //defining which element correspond with the checked inputs
    searchProjects(project, index, projects) {
        //resetting projectCheckList
        projectCheckList = []

        for(i=0;i<checkedInputs.length;i++) {
            //checking if each element is found on this specific project
            project.tags.indexOf(checkedInputs[i]) != -1 ? projectCheckList[i] = true : projectCheckList[i] = false

        }

        //now verifying if all value in projectCheckList is true, then approving 
        if(projectCheckList.indexOf(false) == -1) {
            // console.log("correct")

            foundProjectSearches.push(project.id)
        } else {
            // console.log("wrong")
        }         
    },
    

    //function used exclusively to show searched Projects
    showCorrectCourses(wantedArray, wantedState) {
        for(i=0;i<wantedArray.length;i++) {
            n = (wantedArray[i])
            
            getAllCourses[n].style.display = wantedState
        }
    },

    //scenario where no checkbox is checked, all courses will be displayed
    displayAllCourses(checkedInputs) {
        if (checkedInputs.length === 0) {
            SearchUtils.toggleDisplayCourses("block")
        }
    },

    noFoundProjects() {
        exceptionNoFoundModal = document.getElementById("exception-Modal")

        //removing an exception if it exists
        if (exceptionNoFoundModal != null) {
            // console.log("removing exceptionNoFoundModal")
            document.getElementById("projects-division").removeChild(document.getElementById("exception-Modal"))
        }

        //checking if no projects with this tags were found
        if(foundProjectSearches.length == 0) {

            exceptionNoFoundCreation = document.createElement("div")
            exceptionNoFoundCreation.id = "exception-Modal"

            let noFoundTagList = ""
            noFoundTagList = document.createElement("ul")

            checkedInputs.forEach(function(inputTag) {
                noFoundTagList.innerHTML += createProjectsUtils.innerTagsException(inputTag)
            })

            //noFoundTagList is the list of all tags
            // console.log(noFoundTagList)

            exceptionNoFoundCreation.innerHTML = createProjectsUtils.createExceptionNoFound(noFoundTagList)

            document.querySelector("#projects-division").appendChild(exceptionNoFoundCreation)
            document.querySelector("#projects-division .exception").appendChild(noFoundTagList)
        }
    }
}



