function hamburguerMenu(){
    let navBarMenu = document.getElementById("navBarMenuId"); 
    navBarMenu.classList.add("navBarMenu")
    console.log(navBarMenu.classList)

    if (navBarMenu.classList[0]=== "navBarMenu") {
        navBarMenu.classList.remove("navBarMenu")
        navBarMenu.classList.add("navBarMenuDeactive")        
    } else {
        navBarMenu.classList.add("navBarMenu")
        navBarMenu.classList.remove("navBarMenuDeactive")


    }
}