function myFunction() {  
  var x = "",y= "", calculo,text;  
  x = document.getElementById("dist").value;  
  y = document.getElementById("frec").value;

  if (x.includes(',') === true ){
    x = x.replace(',', '.')
  }
  if (y.includes(',') === true ){
    y = y.replace(',', '.')
  }

  if (x == "" && y == ""){
    text ="Aquí se expondrá el resultado"
  }
  if (x == "" || y == ""){
    text ="Falta ingresar alguno de los datos solictados"}
  else if (isNaN(x) || isNaN(y)){  
    text = "Algun dato ingresado no es correcto"}
  else if (y == '0'){
      text = "La frecuencia no puede ser cero"
    }
  else {  
    //si no ponemos parseFloat concatenaría x con y
    calculo = 8.656 * Math.sqrt(parseFloat(x)/parseFloat(y));  
    text= 'Resultado: ' + calculo.toFixed(2) + ' metros';  
  }
  document.getElementById("calculando").innerHTML = text;  
}  
