var teste = document.getElementById ("paginaCadastro");

if (teste){

var dados = document.getElementById ("FormCadastro");

dados.addEventListener("submit", function (e){
    e.preventDefault();
    var nome = document.getElementById ("OFDIA").value;
    var nomea = document.getElementById ("ADJOF").value;
    var nomeb = document.getElementById ("CMTGD").value;
    var nomec = document.getElementById ("CBGD").value;
    var nomed = document.getElementById ("GDA").value;
    var nomee = document.getElementById ("ENF").value;
    var nomef = document.getElementById ("HTI").value;
    var nomeg= document.getElementById ("SGTRAN").value;
    var nomeh = document.getElementById ("CORN").value;
    var nomei = document.getElementById ("MOT").value;
    var nomej = document.getElementById ("SGTBC").value;
    var nomek = document.getElementById ("SGT1").value;
    var nomel = document.getElementById ("SGT2").value;
    var nomem = document.getElementById ("CBBC").value;
    var nomen = document.getElementById ("CB1").value;
    var nomeo = document.getElementById ("CB2").value;
    var nomep = document.getElementById ("PLBC").value;
    var nomeq = document.getElementById ("PL1").value;
    var nomer = document.getElementById ("PL2").value;


        localStorage.setItem('OF', nome);
        localStorage.setItem('ADJ', nomea);
        localStorage.setItem('CMTGD', nomeb);
        localStorage.setItem('CBGD', nomec);
        localStorage.setItem('GDA', nomed);
        localStorage.setItem('ENF', nomee);
        localStorage.setItem('HTI', nomef);
        localStorage.setItem('SGTRAN', nomeg);
        localStorage.setItem('CORN', nomeh);
        localStorage.setItem('MOT', nomei);
        localStorage.setItem('SGTBC', nomej);
        localStorage.setItem('SGT1', nomek);
        localStorage.setItem('SGT2', nomel);
        localStorage.setItem('CBBC',nomem);
        localStorage.setItem('CB1',nomen);
        localStorage.setItem('CB2',nomeo);
        localStorage.setItem('PLBC', nomep);
        localStorage.setItem('PL1', nomeq);
        localStorage.setItem('PL2',nomer);


        alert("Dados enviados com sucesso!");
});

}
var paginaExibe = document.getElementById ("paginaExibe");
if(paginaExibe){
    var ROF = document.getElementById ("ROFDIA");
    var nomeOF = localStorage.getItem('OF');

    document.getElementById("ROFDIA").innerHTML = nomeOF;
    


    var RADJ = document.getElementById ("RADJ");
    var nomeADJ = localStorage.getItem('ADJ');

    document.getElementById('RADJ').innerHTML = nomeADJ;



    var RCMTGD = document.getElementById ('RCMTGD');
    var nomeCMTGD = localStorage.getItem('CMTGD');

    document.getElementById('RCMTGD').innerHTML = nomeCMTGD;



    var RCBGD = document.getElementById ('RCBGD');
    var nomeCBGD = localStorage.getItem('CBGD');

    document.getElementById('RCBGD').innerHTML = nomeCBGD;



    var RGDA = document.getElementById ('RGDA');
    var nomeGDA = localStorage.getItem('GDA');

    document.getElementById('RGDA').innerHTML = nomeGDA;



    var RENF = document.getElementById ('RENF');
    var nomeENF = localStorage.getItem('ENF');

    document.getElementById('RENF').innerHTML = nomeENF;



    var RHTI = document.getElementById ('RHTI');
    var nomeHTI = localStorage.getItem('HTI');

    document.getElementById('RHTI').innerHTML = nomeHTI;



    var RSGTRAN = document.getElementById ('RSGTRAN');
    var nomeSGTRAN = localStorage.getItem('SGTRAN');

    document.getElementById('RSGTRAN').innerHTML = nomeSGTRAN;


    
    var RCORN = document.getElementById ('RCORN');
    var nomeCORN = localStorage.getItem('CORN');

    document.getElementById('RCORN').innerHTML =  nomeCORN;


    
    var RMOT = document.getElementById ('RMOT');
    var nomeMOT = localStorage.getItem('MOT');

    document.getElementById('RMOT').innerHTML = nomeMOT;



    var RSGTBC = document.getElementById ('RSGTBC');
    var nomeSGTBC = localStorage.getItem('SGTBC');

    document.getElementById('RSGTBC').innerHTML = nomeSGTBC;



    var RSGT1 = document.getElementById ('RSGT1');
    var nomeSGT1 = localStorage.getItem('SGT1');

    document.getElementById('RSGT1').innerHTML = nomeSGT1;



    var RSGT2 = document.getElementById ('RSGT2');
    var nomeSGT2 = localStorage.getItem('SGT2');

    document.getElementById('RSGT2').innerHTML = nomeSGT2;



    var RCBBC = document.getElementById ('RCBBC');
    var nomeCBBC = localStorage.getItem('CBBC');

    document.getElementById('RCBBC').innerHTML = nomeCBBC;



    var RCB1 = document.getElementById ('RCB1');
    var nomeCB1 = localStorage.getItem('CB1');

    document.getElementById('RCB1').innerHTML = nomeCB1;



    var RCB2 = document.getElementById ('RCB2');
    var nomeCB2 = localStorage.getItem('CB2');

    document.getElementById('RCB2').innerHTML = nomeCB2;

 

    var RPLBC = document.getElementById ('RPLBC');
    var nomePLBC = localStorage.getItem('PLBC');

    document.getElementById('RPLBC').innerHTML = nomePLBC;



    var RPL1 = document.getElementById ('RPL1');
    var nomePL1 = localStorage.getItem('PL1');

    document.getElementById('RPL1').innerHTML = nomePL1;



    var RPL2 = document.getElementById ('RPL2');
    var nomePL2 = localStorage.getItem('PL2');

    document.getElementById('RPL2').innerHTML = nomePL2;
}


