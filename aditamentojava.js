var dados=document.getElementById("dados");

if(dados){
    dados.addEventListener("submit", function(a){
    a.preventDefault();
    var ofdia=document.getElementById("ofdia").value;
    var adjod=document.getElementById("adjod").value;
    var cmtgd=document.getElementById("cmtgd").value;
    var cbgd=document.getElementById("cbgd").value;
    var gda=document.getElementById("gda").value;
    var enf=document.getElementById("enf").value;
    var hti=document.getElementById("hti").value;
    var sgtdran=document.getElementById("sgtdran").value;
    var corneteiro=document.getElementById("corneteiro").value;
    var motdia=document.getElementById("motdia").value;
    var sgtdiabc=document.getElementById("sgtdiabc").value;
    var sgtdia1=document.getElementById("sgtdia1").value;
    var sgtdia2=document.getElementById("sgtdia2").value;
    var cbdiabc=document.getElementById("cbdiabc").value;
    var cbdia1=document.getElementById("cbdia1").value;
    var cbdia2=document.getElementById("cbdia2").value;
    var plantaobc=document.getElementById("plantaobc").value;
    var plantao1=document.getElementById("plantao1").value;
    var plantao2=document.getElementById("plantao2").value;
    localStorage.setItem('ofdia2',ofdia);
    localStorage.setItem('adjod2',adjod);
    localStorage.setItem('cmtgd2',cmtgd);
    localStorage.setItem('cbgd2',cbgd);
    localStorage.setItem('gda2',gda);
    localStorage.setItem('enf',enf);
    localStorage.setItem('hti',hti);
    localStorage.setItem('sgtdran',sgtdran);
    localStorage.setItem('corneteiro2',corneteiro);
    localStorage.setItem('motdia2',motdia);
    localStorage.setItem('sgtdiabc2',sgtdiabc);
    localStorage.setItem('sgtdia12',sgtdia1);
    localStorage.setItem('sgtdia22',sgtdia2);
    localStorage.setItem('cbdiabc2', cbdiabc);
    localStorage.setItem('cbdia12',cbdia1);
    localStorage.setItem('cbdia22',cbdia2);
    localStorage.setItem('plantaobc2',plantaobc);
    localStorage.setItem('plantao12',plantao1);
    localStorage.setItem('plantao22',plantao2);




    
    
})}



//Aqui é a página de leitura
var iff=document.getElementById("iff")
if(iff){
    var ofdiau=localStorage.getItem('ofdia2');
    var adjodu =localStorage.getItem('adjod2');
    var cmtgdu =localStorage.getItem('cmtgd2');
    var cbgdu =localStorage.getItem('cbgd2');
    var gdau= localStorage.getItem('gda2');
    var enfu=localStorage.getItem('enf');
    var htiu=localStorage.getItem('hti');
    var sgtdranu =localStorage.getItem('sgtdran');
    var corneteirou =localStorage.getItem('corneteiro2');
    var motdiau =localStorage.getItem('motdia2');
    var sgtdiabcu =localStorage.getItem('sgtdiabc2');
    var sgtdia1u =localStorage.getItem('sgtdia12');
    var sgtdia2u =localStorage.getItem('sgtdia22');
    var cbdiabcu= localStorage.getItem('cbdiabc2');
    var cbdia1u =localStorage.getItem('cbdia12');
    var cbdia2u =localStorage.getItem('cbdia22');
    var plantaobcu= localStorage.getItem('plantaobc2');
    var plantao1u =localStorage.getItem('plantao12');
    var plantao2u =localStorage.getItem('plantao22');

    ofdiau=document.getElementById("ofdiau").innerHTML=ofdiau;
    adjodu=document.getElementById("adjodu").innerHTML=adjodu;
    cmtgdu=document.getElementById("cmtgdu").innerHTML=cmtgdu;
    cbgdu=document.getElementById("cbgdu").innerHTML=cbgdu;
    gdau=document.getElementById("gdau").innerHTML=gdau;
    enfu=document.getElementById("enfu").innerHTML=enfu;
    htiu=document.getElementById("htiu").innerHTML=htiu;
    sgtdranu=document.getElementById("sgtdranu").innerHTML=sgtdranu;
    corneteirou=document.getElementById("corneteirou").innerHTML=corneteirou;
    motdiau=document.getElementById("motdiau").innerHTML=motdiau;
    sgtdiabcu=document.getElementById("sgtdiabcu").innerHTML=sgtdiabcu;
    sgtdia1u=document.getElementById("sgtdia1u").innerHTML=sgtdia1u;
    sgtdia2u=document.getElementById("sgtdia2u").innerHTML=sgtdia2u;
    cbdiabcu=document.getElementById("cbdiabcu").innerHTML=cbdiabcu;
    cbdia1u=document.getElementById("cbdia1u").innerHTML=cbdia1u;
    cbdia2u=document.getElementById("cbdia2u").innerHTML=cbdia2u;
    plantaobcu=document.getElementById("plantaobcu").innerHTML=plantaobcu;
    plantao1u=document.getElementById("plantao1u").innerHTML=plantao1u;
    plantao2u=document.getElementById("plantao2u").innerHTML=plantao2u;


}