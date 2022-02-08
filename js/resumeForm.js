function addFieldWe(){
   let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here")
    

    let weOb  = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.parentNode.insertBefore(newNode, weAddButtonOb);


}

function addNewAQfield(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here")
    

    let eqOb  = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    eqOb.parentNode.insertBefore(newNode, aqAddButtonOb);

    
}