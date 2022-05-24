var numero1 = 5;
var numero2 =6;
//expresion 
//let y const mas usados
let suma = numero1 + numero2;

var nombre ;
nombre = "mecedes";
let apellido=" fernandez sancho"
let nombreCompleto= nombre + "" + apellido;
//conosole. log imprimir en consola
//temple string concatenar. 
//console.log(`mi nombre es ${nombre} y mi apellido es ${apellido}`);
valido = suma ===11;
// && y || o
// if ---  else if---else--- hasta que cumple la condicion


let num3 = 25 
let mum4 = 18;
if(num3 => num4){
    mayor = num3;
}else{
    mayor = num4
}
//case otro condicional en caso q valga uno haga una cosa si vale otro hace otra cosa
function caminar(){
    return("caminando")
}
function accion(func){
    return func()
}

let boton1 =document.getElementById("boton1");
let boton2= document.getElementById("boton2");

boton2.addEventListener("click", console.log("boton1"));
//cuando hago clik dispara una funcion, () directamente pero si solo la asocio a call back solo le mando como parametro la funcion
let uno = () => {
    console.log("boton1")
}
let cuerpoDocumento = documet.body;
cuerpoDocumento.addEventListener("click", ()=> console.log("presion el boton1 -body"));
boton1.addEventListener("click", ()=> console.log("presion el boton1 "));
cuerpoDocumento.style.backgroundColor="red";
let caja =document.getElementById("caja");

caja.style.color="blue";
let destacador = document.getElementsByClassName("destacado");
destadado[0].style.color ="yellow";