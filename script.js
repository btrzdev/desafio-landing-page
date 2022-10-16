const hamburguerMenuMobile = () => {
    let navBarMenu = document.getElementById("navBarMenuId"); 
    navBarMenu.classList.add("navBarMenu")

    if (navBarMenu.classList[0]=== "navBarMenu") {
        navBarMenu.classList.remove("navBarMenu")
        navBarMenu.classList.add("navBarMenuChangeDisplay")        
    } else {
        navBarMenu.classList.add("navBarMenu")
        navBarMenu.classList.remove("navBarMenuChangeDisplay")
    }
}

const preventDefaultFormButton = () => { 
document.getElementsByClassName("formSubmitButton")
preventDefaultFormButton.addEventListener("click", function(event){
    event.preventDefault()
}) }


const consultCEP = () => {  
    const cepInput = document.getElementById("cepID").value    
      
    fetch(`https://viacep.com.br/ws/${cepInput}/json/`, {headers: {}})
    .then(response => response.json())
    .then(data =>(           
         document.getElementById("addressID").value= `${data.logradouro} - ${data.bairro}`,        
         document.getElementById("cityID").value = `${data.localidade}`,             
         document.getElementById("stateID").value = `${data.uf}`
        )                      
    ).catch((err) => console.log(err))
}


