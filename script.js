const hamburguerMenu = () => {
    let navBarMenu = document.getElementById("navBarMenuId"); 
    navBarMenu.classList.add("navBarMenu")

    if (navBarMenu.classList[0]=== "navBarMenu") {
        navBarMenu.classList.remove("navBarMenu")
        navBarMenu.classList.add("navBarMenuDeactive")        
    } else {
        navBarMenu.classList.add("navBarMenu")
        navBarMenu.classList.remove("navBarMenuDeactive")
    }
}


const consultCEP = () => {  
    const cepInput = document.getElementById("cepID").value
    let addressInput = document.getElementById("addressID").value
    let cityInput = document.getElementById("cityID").value
    let stateInput = document.getElementById("stateID").value

    console.log(cepInput)
    fetch(`https://viacep.com.br/ws/${cepInput}/json/`, {headers: {}})
    .then(response => response.json())
    .then(data =>(    
          
         addressInput = `${data.logradouro} - ${data.bairro}`,
         cityInput = `${data.localidade}`,
         stateInput = `${data.uf}`         

        )                      
    ).catch((err) => console.log(err))

    
    
}


