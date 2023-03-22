function calcularPromedio() {
    var calificacion1 = parseFloat(document.getElementById("calificacion1").value);
    var calificacion2 = parseFloat(document.getElementById("calificacion2").value);
    var calificacion3 = parseFloat(document.getElementById("calificacion3").value);
    var promedio = (calificacion1 + calificacion2 + calificacion3) / 3;
    var resultado = document.getElementById("resultado");
    if (promedio >= 7) {
        resultado.innerHTML = "El alumno esta Aprobado su promedio es "+promedio;
    }else{
        resultado.innerHTML = "El alumno esta Reprobado su promedio es "+ promedio;
    }
}