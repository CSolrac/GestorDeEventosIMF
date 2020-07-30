
//---------------------- INICIO -----------------------------------

let  n = 0;

function inicio(){

    main = document.getElementById("main");

    buscando = document.getElementById("buscando");

    invitasion = document.getElementById("invitacion");

    creasion = document.getElementById("creacion");

    buscando.style.display = "none";

    invitasion.style.display = "none";

    creasion.style.display = "none";

}

function thisLink(n) {

    let boton = document.getElementsByClassName("boton");

    for (let i=0; i<boton.length; i++){

        boton[i].style.background = "#8F3237";

    }

    boton[n].style.background = "#BA6E72";

    if(n==0){

        crear();

    }

    if(n==1){

        invitacion();

    }

    if(n==2){

        busqueda();

    }

}

function crear(){

    main.style.display = "none";

    creasion.style.display = "block";

    buscando.style.display = "none";

    invitasion.style.display = "none";

}

function invitacion() {

    main.style.display = "none";

    creasion.style.display = "none";

    buscando.style.display = "none";

    invitasion.style.display = "block";

}

function busqueda(){

    main.style.display = "none";

    creasion.style.display = "none";

    buscando.style.display = "block";

    invitasion.style.display = "none";

}
//---------------------- XML -----------------------------------

function abrirFichero(fichXML) { //función para convertir en un objeto javascript un archivo de formato XML

    var xmlDoc=undefined;

    try {

        if (document.all) { //IE

            xmlDoc = new ActiveXObject("Microsoft.XMLDOM");

        } else { //firefox

            xmlDoc = document.implementation.createDocument("","",null);

        }

        xmlDoc.async=false;

        xmlDoc.load(fichXML);

    } catch(e) {

        try { //otros safari, chrome

            var xmlhttp = new window.XMLHttpRequest();

            xmlhttp.open("GET",fichXML,false);

            xmlhttp.send(null);

            xmlDoc = xmlhttp.responseXML.documentElement;

            return xmlDoc;

        } catch (e) {

            return undefined;

        }

    }

    return xmlDoc;

}

//---------------------- XML EN HTML -----------------------------------

function select(categoria) {

    if (categoria == 1){

        n=0;
    let cont = 0;
    let cont2 = 1;
    let cont3 = 0;
    let contEventos = 1;
    let nombres = "";
    let fechas = "";
    let horas = "";
    let fotos = "";
    let salas = "";
    let ponentes = "";
    let asistentes = "";
    let resultados = "";
    let xml = abrirFichero("./xml.xml");

    let nombre = xml.getElementsByTagName('nombreEvento');
    let fecha = xml.getElementsByTagName('fecha');
    let hora = xml.getElementsByTagName('hora');
    let foto = xml.getElementsByTagName('foto');
    let sala = xml.getElementsByTagName("sala");
    let ponente = xml.getElementsByTagName("ponente");
    let ponientes = xml.getElementsByTagName("ponentes");
    let asistente = xml.getElementsByTagName("asistente");
    let invitaciones = xml.getElementsByTagName("invitaciones");
    let invitacion = xml.getElementsByTagName("invitacion");

    for (let i = 0; i < nombre.length; i++) {

        ponentes = "";
        asistentes = "";
        cont2 = 1;

        nombres = "<div class='big'> <label class='fontStyle1'>Nombre del evento: </label> </br>" + nombre[i].childNodes[0].nodeValue + "</div>";
        fechas = "<div class='big'> <label class='fontStyle1'>Fecha: </label>" + fecha[i].childNodes[0].nodeValue + "</div>";
        horas = "<div class='big'> <label class='fontStyle1'>Hora: </label>" + hora[i].childNodes[0].nodeValue + "</div>";
        fotos = "<img class='foto' src='./img/" + foto[i].childNodes[0].nodeValue + "'>";
        salas = "<div class='big'> <label class='fontStyle1'>Sala: </label>" + sala[i].children[0].childNodes[0].nodeValue + "</div>";
        salas += "<div class='small'> <label class='fontStyle2'>Aforo: </label>" + sala[i].children[1].childNodes[0].nodeValue + "</div>";

        for (let j = 0; j < ponientes[i].children.length; j++){

            ponentes += "<div class='ponente'> <label class='labeles2'>Ponente " + cont2 + ": </label>" + ponente[cont].children[0].childNodes[0].nodeValue + "</div>";
            ponentes += "<div class='small'> <label class='fontStyle2'>Teléfono: </label>" + ponente[cont].children[1].childNodes[0].nodeValue + "</div>";
            ponentes += "<div class='small'> <label class='fontStyle2'>Mail: </label>" + ponente[cont].children[2].childNodes[0].nodeValue + "</div>";

            cont++;
            cont2++;

        }

        cont2 = 1;

        for (let j = 0; j < invitaciones[i].children.length; j++){

            let confirmacion = "";

            if (invitacion[cont3].children[2].childNodes[0].nodeValue == "true") {

                confirmacion = "Si";

            }else{

                confirmacion = "No";

            }

            asistentes += "<div class='ponente'> <label class='labeles2'>Asistente " + cont2 + ": </label>" + asistente[cont3].children[0].childNodes[0].nodeValue + "</div>";
            asistentes += "<div class='small'> <label class='fontStyle2'>Mail: </label>" + asistente[cont3].children[1].childNodes[0].nodeValue + "</div>";
            asistentes += "<div class='small'> <label class='fontStyle2'>Número de referencia: </label>" + invitacion[cont3].children[1].childNodes[0].nodeValue + "</div>";
            asistentes += "<div class='small'> <label class='fontStyle2'>Confirmación: </label>" + confirmacion + "</div>";

            cont3++;
            cont2++;

        }

        resultados += "<div class = 'objeto'  onclick = 'mostrarEvento(" + n + ")'><img class='arrow' src='img/arrowdown.png'>" + "<div class='presEv'> <label class='fontStyle1'> EVENTO " + contEventos + ":</label>" + "</br>" + "</br>" + nombres + "</div><div class='contEv'>" + "</br>" + fotos + "</br>" + fechas + horas + salas + "</br>" + "<label class='fontStyle1'>Ponentes: </label>" + ponentes + "</br>" + "<label class='fontStyle1'>Asistentes: </label>" + asistentes + "</div> </div> <br/>";

        contEventos++;
        n++;

    }

    document.getElementById('resultados').innerHTML = resultados;

    }else{

        if (categoria == 2) {

            n=0;
            let cont = 0;
            let cont2 = 1;
            let cont3 = 0;
            let contEventos = 1;
            let nombres = "";
            let fechas = "";
            let horas = "";
            let fotos = "";
            let salas = "";
            let ponentes = "";
            let asistentes = "";

            const xhttp = new XMLHttpRequest();

            xhttp.open('GET', './json.json', true);

            xhttp.send();

            xhttp.onreadystatechange = function(){

                if (this.readyState == 4 && this.status == 200){

                    let datos = JSON.parse(this.responseText);

                    let resultados = document.getElementById("resultados");

                    resultados.innerHTML = '';

                    for (let item of datos){

                        ponentes = "";
                        asistentes = "";
                        cont2 = 1;

                        nombres = `<div class='big'> <label class='fontStyle1'>Nombre del evento: </label> </br> ${item.nombre} </div>`;
                        fechas = `<div class='big'> <label class='fontStyle1'>Fecha: </label> ${item.fecha} </div>`;
                        horas = `<div class='big'> <label class='fontStyle1'>Hora: </label> ${item.hora} </div>`;
                        fotos = `<img class='foto' src='./img/${item.foto}'>`;
                        salas = `<div class='big'> <label class='fontStyle1'>Sala: </label>${item.sala.numero}</div>`;
                        salas += `<div class='small'> <label class='fontStyle2'>Aforo: </label>${item.sala.aforo}</div>`;

                        for(var i = 0; i < item.ponentes.length; i++) {

                            ponentes += `<div class='ponente'> <label class='labeles2'>Ponente ` + cont2 + `: </label>${item.ponentes[i].nombre}</div>`;
                            ponentes += `<div class='small'> <label class='fontStyle2'>Teléfono: </label>${item.ponentes[i].telefono}</div>`;
                            ponentes += `<div class='small'> <label class='fontStyle2'>Mail: </label>${item.ponentes[i].mail}</div>`;

                            cont++;
                            cont2++;

                        }

                        cont2 = 1;

                        for (let j = 0; j < item.invitaciones.length; j++){

                            let confirmacion = "";

                            if (`${item.invitaciones[j].confirmacion}` == "true") {

                                confirmacion = "Si";

                            }else{

                                confirmacion = "No";

                            }

                            asistentes += `<div class='ponente'> <label class='labeles2'>Asistente ` + cont2 + `: </label>${item.invitaciones[j].asistente.nombre}</div>`;
                            asistentes += `<div class='small'> <label class='fontStyle2'>Mail: </label>${item.invitaciones[j].asistente.mail}</div>`;
                            asistentes += `<div class='small'> <label class='fontStyle2'>Número de referencia: </label>${item.invitaciones[j].referencia}</div>`;
                            asistentes += `<div class='small'> <label class='fontStyle2'>Confirmación: </label>` + confirmacion + `</div>`;

                            cont3++;
                            cont2++;

                        }

                        resultados.innerHTML += "<div class = 'objeto'  onclick = 'mostrarEvento(" + n + ")'><img class='arrow' src='img/arrowdown.png'>" + "<div class='presEv'> <label class='fontStyle1'> EVENTO " + contEventos + ":</label>" + "</br>" + "</br>" + nombres + "</div><div class='contEv'>" + "</br>" + fotos + "</br>" + fechas + horas + salas + "</br>" + "<label class='fontStyle1'>Ponentes: </label>" + ponentes + "</br>" + "<label class='fontStyle1'>Asistentes: </label>" + asistentes + "</div> </div> <br/>";

                        contEventos++;
                        n++;

                    }

                }

            }

        }else{

            document.getElementById('resultados').innerHTML = '';

        }

    }

}

//---------------------- EXTENSIÓN DE EVENTOS -----------------------------------

function mostrarEvento(elegido) {

    contenido = document.getElementsByClassName("contEv");

    flechas = document.getElementsByClassName("arrow");

    for (let i = 0; i < contenido.length; i++) {

        if (contenido[elegido].style.display == "block") {

            contenido[elegido].style.display = "none";

            flechas[elegido].src = "img/arrowdown.png";

        }else{

            contenido[elegido].style.display = "block";

            flechas[elegido].src = "img/arrowup.png";

        }

    }
}

//---------------------- AÑADIR PONENTES -----------------------------------

function ponerPonentes(n){

    let ponentes = "";

    if (n < 0 || n > 10){

        document.getElementById('totalPonentes').innerHTML = "<label class = 'parrafo'> El número de ponentes no puede ser menor de 1 ni mayor de 10 </label>";

    }else {

        for (let i = 0; i < n; i++) {

            ponentes += "<label class='labeles'>Ponente " + (i + 1) + ": </label><input class='campos' type='text' placeholder='Ponente " + (i + 1) + "'> <br/>";

        }

        document.getElementById('totalPonentes').innerHTML = ponentes;

    }

}

document.getElementsByClassName("")

lol= document.getElementsByTagName("p");

lol.style.color="red";
if(lol % 2 != 0 ){


}