function cambio(){
    document.getElementById("fondo").classList.add("rojo")
}

function textos(){
    document.getElementById("textouno").innerHTML="cambio";
    document.getElementById("textodos").innerHTML="cambio";
    document.getElementById("textotres").innerHTML="cambio";
}

function verificarN(){
    const numero=document.getElementById("Numero").value;
    if (numero>10){
        alert("el numero es mayor que 10");
    } 


}

function miobjeto(){
    var usuario={
        nombre:"daniel",
        edad: 22,
        correo: "tupapasito@gmail.com"

    }
    document.getElementById("datos").innerHTML=`nombre: ${usuario.nombre}
    edad: ${usuario.edad} y correo: ${usuario.correo}`  
}


var usuario={
    nombre:"daniel",
    edad: 22,
    correo: "tupapasito@gmail.com"

}
function miobjeto(){
  

}
function lista(){
    var notas=["miguel","daniel","esteban","paula",usuario.nombre];
    for (var i=0;i<notas.length;i++){
        document.getElementById("la-lista").innerHTML+=`<li>${notas[i]}</li>`
    }
}