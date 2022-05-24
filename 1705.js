console.clear();

//let persona{
  //  mascotas: ({nombre :"junior", peso:"4 kilos", tipo:"perro"},
//{nombre :"kity", peso: "2 kilos", tipo: "gato"});
//nombres:"mercedes";
//edad: 42;
//sexo: f;
//}
// nombre ="mercedes";
//ver que esta mal
//function saludar2(nombre){
//return "hola boludo!!!" + nombre;
//}

//let doble = numero => numero*2;
///console.log(doble(19));
//funciones de objetos

//function doble (numero){
  //  return numero *2
//}

//let nombres=["oli", "sofi", "mercedes", "delfi", "dorita"];

//for (let i=0 ;i<nombres.length; i++){
  //  console.log(nombres[i])
//}
//
//recorrido funccion arreglos 


//familia.forEach(element=>console.log(element));

//array.forEach(element => {
    
//});


//callbuck
//

//metodo map array

// devuelve un array. 
var numeros =[1,2,3,4,];
var doubles= numeros.map(function(x){
return x *2
});

//variable es una funcion
//call back
// funcion que se pasa a otra funcion, para completar, 
function saludar(){
    console.log("hoola");
}

//function dormir = () => "dormir";
    

function caminar(){
    console.log("caminando");
}
console.log(saludar());

function accion(func){
    returnfunc();

}
console.log(accion(caminar));
//recibe como parametro una o otra accion funcion, 
//func funcion,