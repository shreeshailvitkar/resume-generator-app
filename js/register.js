

function register()
{
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    alert(email+"   "+password);
    const requestOptions = {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            "email": email,
            "password": password
        })
    }

    fetch("http://localhost:3000/login", requestOptions)
            .then(resp => resp.text())
            .then(data => {
                if (data.length != 0) {
                   alert("Registration Complete you can login now");
                    //const json = JSON.parse(data);

                }
            });
    
}