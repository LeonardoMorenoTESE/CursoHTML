function generarCalendario() {
    var mesSeleccionado = parseInt(document.getElementById('mes').value);
    var anioSeleccionado = parseInt(document.getElementById('anio').value);

    // Obtener el primer día del mes
    var primerDia = new Date(anioSeleccionado, mesSeleccionado - 1, 1);
    var primerDiaSemana = primerDia.getDay()-1; // 0 (domingo) a 6 (sábado)

    // Obtener la cantidad de días del mes
    var ultimoDia = new Date(anioSeleccionado, mesSeleccionado, 0);
    var cantidadDias = ultimoDia.getDate();

    var tabla = "<table>";

    // Crear encabezado de los días de la semana
    tabla += "<thead>";
    tabla += "<tr>";
    tabla += "<th>Lunes</th>";
    tabla += "<th>Martes</th>";
    tabla += "<th>Miércoles</th>";
    tabla += "<th>Jueves</th>";
    tabla += "<th>Viernes</th>";
    tabla += "<th>Sábado</th>";
    tabla += "<th>Domingo</th>";
    tabla += "</tr>";
    tabla += "</thead>";
    
    // Crear filas con los días del mes
    var dia = 1;
    for (var i = 0; i < 6; i++) {
        tabla += "<tr>";
        for (var j = 0; j < 7; j++) {
            if (i === 0 && j < primerDiaSemana) {
                tabla += "<td></td>";
            } else if (dia > cantidadDias) {
                tabla += "<td></td>";
            } else {
                tabla += "<td>" + dia + "</td>";
                dia++;
            }
        }
        tabla += "</tr>";
    }
    
    tabla += "</table>";
    
    document.getElementById('calendario').innerHTML = tabla;
}    