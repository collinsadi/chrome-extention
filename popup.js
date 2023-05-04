let currentSize =  document.getElementById("current");
let displayQuery = document.getElementById("display_query");
let genButton = document.querySelector("button");


genButton.addEventListener("click", ()=>{

    currentSize.innerHTML = 


    `
    Current screen size width: ${window.innerWidth}px
    
    `


    displayQuery.innerHTML = `
    
    @media all and (max-width: ${window.innerWidth}px) { /* your content here */ }
    
    `




})