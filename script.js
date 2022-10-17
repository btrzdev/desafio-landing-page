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


const sliderVideoContainer = document.getElementById("sliderVideoContainer");
const videoSlide = document.querySelector(".video");
const prevVideosArrow = document.getElementById("prevVideosArrow");
const nextVideosArrow = document.getElementById("nextVideosArrow");

nextVideosArrow.addEventListener("click", () => {
  const slideWidth = videoSlide.clientWidth;
  sliderVideoContainer.scrollLeft += slideWidth;
});

prevVideosArrow.addEventListener("click", () => {
  const slideWidth = videoSlide.clientWidth;
  sliderVideoContainer.scrollLeft -= slideWidth;
});




document.addEventListener("click",function(event){
let eventId = event.target.id

if (!eventId){ return}

let elementToChange = document.getElementById(`moreDetails${eventId}`)

if(elementToChange.classList[0] === "moreDetailsActive"){
    elementToChange.classList.add("moreDetailsDeactive")
    elementToChange.classList.remove("moreDetailsActive")
} else if (elementToChange.classList[0] === "moreDetailsDeactive"){
    elementToChange.classList.add("moreDetailsActive")
    elementToChange.classList.remove("moreDetailsDeactive")
} 
   
})





