var cadastro=document.getElementById("cad")

if(cadastro){
    cadastro.addEventListener("submit", function(a){
        a.preventDefault();
        var login=document.getElementById("login").value;
        var senha=document.getElementById("senha").value; 
        localStorage.setItem("login2",login)
        localStorage.setItem("senha2",senha)
    })
}

var login=document.getElementById("login")
if(login){
    login.addEventListener("submit", function(e){
        e.preventDefault()
        var login2=localStorage.getItem("login2")
        var senha2=localStorage.getItem("senha2")
        var loginc=document.getElementById("loginc").value;
        var senhac=document.getElementById("senhac").value;
        if(login2===loginc&&senha2===senhac){
            alert("acerto mizeravi")
        }
        
    })
}