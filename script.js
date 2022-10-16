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
    let addressInput = document.getElementById("addressID").value
    let cityInput = document.getElementById("cityID").value
    let stateInput = document.getElementById("stateID").value

    
    fetch(`https://viacep.com.br/ws/${cepInput}/json/`, {headers: {}})
    .then(response => response.json())
    .then(data =>(    
          
         addressInput = `${data.logradouro} - ${data.bairro}`,
         console.log(addressInput),
         cityInput = `${data.localidade}`,
         console.log(cityInput),      
         stateInput = `${data.uf}` ,
         console.log(stateInput)      

        )                      
    ).catch((err) => console.log(err))

    
    
}


