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

function generateCV()
{
    //var name = document.getElementById("nameField").value;
    //alert(name);
    document.getElementById("thm1-name").innerHTML = document.getElementById("nameField").value;
    document.getElementById("thm1-email").innerHTML = document.getElementById("emailField").value;
    document.getElementById("thm1-address").innerHTML = document.getElementById("addressField").value;
    document.getElementById("thm1-contact").innerHTML = document.getElementById("contactField").value;

    document.getElementById("thm1-facebook").innerHTML = document.getElementById("fbField").value;
    document.getElementById("thm1-insta").innerHTML = document.getElementById("instaField").value;
    document.getElementById("thm1-linkedin").innerHTML = document.getElementById("linkedField").value;

    document.getElementById("thm1-objective").innerHTML = document.getElementById("objectiveField").value;

    //work experiance
    let we = document.getElementsByClassName("weField");
    console.log(we)
    let str = "";
    for(let e of we)
    {
        str = str+ `<li> ${e.value} </li>`;
    }
    document.getElementById("thm1-we").innerHTML = str;


    let eq = document.getElementsByClassName("eqField");
   
    let str1 = "";
    for(let e of eq)
    {
        str1 = str1+ `<li> ${e.value} </li>`;
    }
    document.getElementById("thm1-eq").innerHTML = str1;


    // ____________________________________templete-2_______________________________
    document.getElementById("thm2-name").innerHTML = document.getElementById("nameField").value;
    document.getElementById("thm2-email").innerHTML = document.getElementById("emailField").value;
    document.getElementById("thm2-address").innerHTML = document.getElementById("addressField").value;
    document.getElementById("thm2-contact").innerHTML = document.getElementById("contactField").value;
    
    document.getElementById("thm2-facebook").innerHTML = document.getElementById("fbField").value;
    document.getElementById("thm2-insta").innerHTML = document.getElementById("instaField").value;
    document.getElementById("thm2-linkedin").innerHTML = document.getElementById("linkedField").value;
    
    document.getElementById("thm2-objective").innerHTML = document.getElementById("objectiveField").value;
    
    //work experiance
    let wet2 = document.getElementsByClassName("weField");
    
    let strt2 = "";
    for(let e2 of wet2)
    {
        strt2 = strt2+ `<li> ${e2.value} </li>`;
    }
    document.getElementById("thm2-we").innerHTML = strt2;
    
    
    let eqt2 = document.getElementsByClassName("eqField");
    
    let str1t2 = "";
    for(let e of eqt2)
    {
        str1t2 = str1t2+ `<li> ${e.value} </li>`;
    }
    document.getElementById("thm2-eq").innerHTML = str1t2;







    document.getElementById("cv-form").style.display='none';
    document.getElementById("templete-1-print").style.display='block';
    document.getElementById("templete-2-print").style.display='block';

    //document.getElementById("thm1-eq").innerHTML = document.getElementById("aqAddButton").value;


}

function downloadTmp1()
{
    var tmp1 = document.getElementById("templete-1-print");
    var opt = {
        margin:       1,
        filename:     'temp1Resume.pdf',
        image:        { type: 'png', quality: 0.98 },
        html2canvas:  { scale: 3 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };

    html2pdf(tmp1,opt);
}

function downloadTmp2()
{
    var tmp2 = document.getElementById("templete-2-print");
    console.log(tmp2)  
    var opt2 = {
        margin:       1,
        filename:     'temp2Resume.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 3 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
   
    html2pdf(tmp2,opt2);
}