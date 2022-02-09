function login()
{
    var loginValid;
    //console.log("hello")
    var emailFormInput = document.getElementById("email").value;
    var passwordFormInput = document.getElementById("password").value;

    console.log(emailFormInput+"     "+passwordFormInput);
    fetch('http://localhost:3000/login')
            .then(resp => resp.text())
            .then(data => {
                    //alert(data)
                    const jsonData = JSON.parse(data);
                    //alert(jsonData[1].email);

                    for(var i = 0; i<jsonData.length; i++)
                    {
                        //alert(jsonData[i].email+"   "+emailFormInput)
                        if(emailFormInput  == jsonData[i].email && passwordFormInput  == jsonData[i].password)
                        {
                            
                             loginValid = 1 ; 
                             
                             break;
                        }
                        else
                        {
                            loginValid = 0;
                            
                        }
                    }

                    if(loginValid==1)
                    {
                        alert("success")
                        document.cookie = "username="+emailFormInput;
                        window.location = "http://127.0.0.1:5500/html/resumeForm.html";
                        

                    }
                    else
                    {
                        alert("please check email id or password");
                        
                    }
                }
            );

}