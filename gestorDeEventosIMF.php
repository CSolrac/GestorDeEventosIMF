<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" href="./img/logoimf.jpeg">
    <link rel="stylesheet" type="text/css" href="./css/style.css">
    <script type="text/javascript" src="js/script.js"></script>
    <title>IMF Gestor de Eventos</title>
</head>
<body onload="inicio(), ponerPonentes(1)">

    <div class="container">

        <header>
            <a href="gestorDeEventosIMF.php"><img src="img/imfBS.png"></a>
            <label>Gestor de Eventos</label>
        </header>

        <nav>

        </nav>

        <section>

            <div id="main">

                <p class="bienvenida">Bienvenido al gestor de eventos de IMF</p>

                <p class="informacion">Seleccione una opción para comenzar</p>

            </div>

            <div id="creacion">

                <p name="lol" class="parrafo">Rellene la información del evento:</p>

                <form class="inputs">

                    <label class="labeles">Nombre del evento: </label><input class="campos" type="text" placeholder="Nombre del evento"> <br/>

                    <label class="labeles">Fecha: </label><input class="campos" type="date" placeholder="Fecha"> <br/>

                    <label class="labeles">Hora: </label><input class="campos" type="time" placeholder="Hora"> <br/>

                    <label class="labeles">Sala: </label><input class="nPon" type="text" placeholder="0.0"> <br/>

                    <label class="labeles">Número de ponentes: </label><input class="nPon" type="number" value="1" min="1" max="10" onchange="ponerPonentes(this.value)"> <br/>

                    <div id="totalPonentes"></div>

                </form>

                <button class="button" type="button">Crear</button>

            </div>

            <div id="buscando">

                <p class="parrafo">Seleccione un criterio de búsqueda:</p>

                <select id="select" onchange="select(this.value)">
                    <option value="0" selected>Elija una opción...</option>
                    <option value="1">Consulta de XML</option>
                    <option value="2">Consulta de JSON</option>
                </select>

                <!--<input class="campos" type="text" placeholder="Buscar..."> <br/>-->

                <!--<button class="button" type="button" onclick="select()">Mostrar</button>-->

                <div id="resultados"></div>

            </div>

            <div id="invitacion">

                <p class="parrafo">Rellene la información del invitado:</p>

                <form class="inputs">

                    <label class="labeles">Nombre del evento: </label><input class="campos" type="text" placeholder="Nombre del evento"> <br/>

                    <label class="labeles">Datos del invitado: </label><input class="campos" type="text" placeholder="Nombre y apellidos del invitado"> <br/>

                    <label class="labeles">Mail del invitado: </label><input class="campos" type="text" placeholder="Mail del invitado"> <br/>

                </form>

                <button class="button" type="submit">Enviar</button>

            </div>

        </section>

        <aside>

            <div class="menu">

                <div class="boton" onclick="thisLink(0)">Crear Evento</div>

                <div class="boton" onclick="thisLink(1)">Enviar Invitación</div>

                <div class="boton" onclick="thisLink(2)">Consultar</div>

            </div>

        </aside>

    </div>

        <footer>

            <img src="img/imfBS2.png">
            <label>Copyright © 2020 Carlos Chinchilla Rivas</label>

        </footer>

</body>

</html>