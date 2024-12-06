var cadastro=document.getElementById("cad")
var stastus="0";


if(cadastro){
    cadastro.addEventListener("submit", function(a){
        a.preventDefault();
        var login=document.getElementById("login").value;
        var senha=document.getElementById("senha").value; 
        localStorage.setItem("login2",login)
        localStorage.setItem("senha2",senha)
        var enviadoc= document.getElementById("enviadoc")
        enviadoc.innerHTML='<div class=" border border-0 text-bg-success p-2 text-center">ENVIADO!</div>'
        
     
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
        var certol=document.getElementById("certol")
       
        if(login2===loginc&&senha2===senhac){
                      
            stastus="1";
            alert(stastus);
            localStorage.setItem("stastus2",stastus); 

            certol.innerHTML='<div id="certol" class="text-center h3 text-bg-success p-2"><i class="bi bi-check-circle"></i> SENHA CORRETA</div>';

            setTimeout(function(){
                window.location.href="escalamento.html"; 
             },1500);
        }

        else{
            certol.innerHTML='<div id="certol" class="text-center h3 text-bg-danger p-2"><i class="bi bi-x-circle"></i> SENHA INCORRETA</div>'
            stastus=="0"
            localStorage.setItem("stastus2",stastus); 
        }

        
    })
}

var caddd=document.getElementById("caddd")
if("caddd"){
    var stastus2=localStorage.getItem("stastus2")
    if(stastus2!="1"){
       window.location.href="login.html"
       
    }

    
}