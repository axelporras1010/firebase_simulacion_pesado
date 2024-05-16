document.addEventListener('DOMContentLoaded', function(){
    enviar();
});

function enviar(){
    const btn_enviar = document.querySelector('.btn-enviar');
    btn_enviar.addEventListener('click', comprobar.bind(btn_enviar));
}

function comprobar(){
    
    var altura = document.getElementById("altura").value;
    var ancho = document.getElementById("ancho").value;
    var peso = document.getElementById("peso").value;
    var aprobado = false;
    // Comprobacion de los valores de la caja y si es aceptada o no
    if((altura >= 10 && altura <= 15)
        && (ancho >= 10 && ancho <= 15)
        && (peso >= 1 && peso <= 3)){
            aprobado = true;
    }

    // Escritura en la base de datos
    db.collection("datos").add({
        altura: altura,
        ancho: ancho,
        peso: peso,
        aprobado: aprobado
    })
    .then(function(docRef) {
        console.log("Documento escrito con ID: ", docRef.id);
        simulacion(aprobado);
    })
    .catch(function(error) {
        console.error("Error al escribir en la base de datos: ", error);
    });
}

function simulacion(aprobado){
    const bombillo = document.querySelector(".bombillo");
    const btn_enviar = document.querySelector('.btn-enviar');
    btn_enviar.disabled = true;
    aprobado ? bombillo.classList.add('aprobado') : bombillo.classList.add('rechazado');

    const caja = document.querySelector('.caja');
    
    setTimeout(function() {
        caja.style.transform = 'translate(600px, 0px)';
        // Después de que se complete el primer movimiento horizontal
        setTimeout(function() {
            if (aprobado) {
                caja.style.transform = 'translate(590px, -120px)'; 
            } else {
                caja.style.transform = 'translate(590px, 100px)'; 
            }
            //Despues de que se complete el movimiento horizontal
            setTimeout(() => {
                if (aprobado) {
                    caja.style.transform = 'translate(900px, -120px)'; 
                } else {
                    caja.style.transform = 'translate(900px, 100px)'; 
                }
                btn_enviar.disabled = false;
            }, 1000);     
        }, 1000);
    }, 1000);
    setearValores();
}

function setearValores(){
    const bombillo = document.querySelector(".bombillo");
    const caja = document.querySelector('.caja');

    setTimeout(() => {
        bombillo.classList.remove('aprobado');
        bombillo.classList.remove('rechazado');
        caja.style.transform = 'translate(0px, 0px)'; 
    }, 5000);
}