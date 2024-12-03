
var dados = document.getElementById("myForm");

if (dados){

    dados.addEventListener("submit", function(e){
    e.preventDefault();
    var nome = document.getElementById("nome").value;
    alert(nome);
    localStorage.setItem('getNome', nome);
});

 var nome = localStorage.getItem('getNome');
document.getElementById("demo").innerHTML = nome;
console.log(nome)
}



document.getElementById("oloko").innerHTML = localStorage.getItem('getNome');


/*dados.addEventListener("submit", function(e){
    e.preventDefault();
    var sobrenome = document.getElementById("sobrenome").value;
    alert(sobrenome);
});*/