function encontrarMayor() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var resultado = "";
  
    if (num1 > num2) {
      resultado = "El número mayor es " + num1;
    } else if (num1 < num2) {
      resultado = "El número mayor es " + num2;
    } else {
      resultado = "Los números son iguales";
    }
  
    document.getElementById("resultado").innerHTML = resultado;
  }
  