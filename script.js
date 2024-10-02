
/*
======================================================================================================================================================================
PROBLEMA 1
======================================================================================================================================================================
3 chicos quieren comprar los helados más caros con la plata que tienen. Si:

- roberto tiene $1.5 USD
- PEDRO $1.7
- COFLA $3

Los precios de los helados son los siguientes:
- palito de helado de agua: $0.6
- palito de helado de crema: $1
- bombón heladix: $1.6
- bombón heladovich: 1.7
- bombón helardo: 1.8
- potecito helado y confites: 2.9
- pote de 1/4 kg -> 2.9

pedirles que ingrese el montó que tiene y mostrales el helado más caro que puedan comprar
si hay 2 o más con el mismo precio, mostrar ambos
cofla quiere saber cuanto es el vuelto


let dineroCofla = prompt("Cuanto dinero tienes Cofla?");


if(dineroCofla >= 0.6 && dineroCofla < 1){
    alert("Comprate el helado de agua");
    alert(`tu vuelto sería: ${dineroCofla - 0.6}`);
}else if(dineroCofla >=1 && dineroCofla < 1.6){
    alert("Comprate el helado de crema");
    alert(`tu vuelto sería: ${dineroCofla - 1}`);
}else if(dineroCofla >=1.6 && dineroCofla < 1.7){
    alert("Comprate el bombón heladix");
    alert(`tu vuelto sería: ${dineroCofla - 1.6}`);
}else if(dineroCofla >=1.7 && dineroCofla < 1.8){
    alert("Comprate el bombón heladovich");
    alert(`tu vuelto sería: ${dineroCofla - 1.7}`);
}else if(dineroCofla >=1.8 && dineroCofla < 2.9){
    alert("Comprate el helardo");
    alert(`tu vuelto sería: ${dineroCofla - 1.8}`);
}else if(dineroCofla >=2.9){
    alert("Comprate el potecito helado y confites o pote de 1/4");
    alert(`tu vuelto sería: ${dineroCofla - 2.9}`);
}else{
    alert("No te alcanza para ningún helado");
}

let dineroRoberto = prompt("Cuanto dinero tienes Roberto?");
if(dineroRoberto >= 0.6 && dineroRoberto < 1){
    alert("Comprate el helado de agua");
    alert(`tu vuelto sería: ${dineroRoberto - 0.6}`);
}else if(dineroRoberto >=1 && dineroRoberto < 1.6){
    alert("Comprate el helado de crema");
    alert(`tu vuelto sería: ${dineroRoberto - 1}`);
}else if(dineroRoberto >=1.6 && dineroRoberto < 1.7){
    alert("Comprate el bombón heladix");
    alert(`tu vuelto sería: ${dineroRoberto - 1.6}`);
}else if(dineroRoberto >=1.7 && dineroRoberto < 1.8){
    alert("Comprate el bombón heladovich");
    alert(`tu vuelto sería: ${dineroRoberto - 1.7}`);
}else if(dineroRoberto >=1.8 && dineroRoberto < 2.9){
    alert("Comprate el helardo");
    alert(`tu vuelto sería: ${dineroRoberto - 1.8}`);
}else if(dineroRoberto >=2.9){
    alert("Comprate el potecito helado y confites o pote de 1/4");
    alert(`tu vuelto sería: ${dineroRoberto - 2.9}`);
}else{
    alert("No te alcanza para ningún helado");
}


let dineroPedro = prompt("Cuanto dinero tienes Pedro?");

if(dineroPedro >= 0.6 && dineroPedro < 1){
    alert("Comprate el helado de agua");
    alert(`tu vuelto sería: ${dineroPedro - 0.6}`);
}else if(dineroPedro >=1 && dineroPedro < 1.6){
    alert("Comprate el helado de crema");
    alert(`tu vuelto sería: ${dineroPedro - 1}`);
}else if(dineroPedro >=1.6 && dineroPedro < 1.7){
    alert("Comprate el bombón heladix");
    alert(`tu vuelto sería: ${dineroPedro - 1.6}`);
}else if(dineroPedro >=1.7 && dineroPedro < 1.8){
    alert("Comprate el bombón heladovich");
    alert(`tu vuelto sería: ${dineroPedro - 1.7}`);
}else if(dineroPedro >=1.8 && dineroPedro < 2.9){
    alert("Comprate el helardo");
    alert(`tu vuelto sería: ${dineroPedro - 1.8}`);
}else if(dineroPedro >=2.9){
    alert("Comprate el potecito helado y confites o pote de 1/4");
    alert(`tu vuelto sería: ${dineroPedro - 2.9}`);
}else{
    alert("No te alcanza para ningún helado");
}


// CUANDO LE PASAMOS POR EL PROMPT, NOS DEVUELVE UNA CADENA DE TEXTO. PARA PASARLO A UN ENTERO UTILIZAMOS LA SGTE FUNCIÓN:

let numero = parseInt(dineroCofla);

*/
/*

for(let i = 6; i >= 0;i--){
    document.write(i + "<br>")
}

*/
/*
======================================================================================================================================================================
PROBLEMA 2
======================================================================================================================================================================

*/

/*
array1 = ["Diego", "Jose", "Carlos"];
array2 = ["María", "Tomás", array1, "Miguel"];

forPrincipal:
for (let array in array2) {
    if (array == 2) {
        for (let array of array1) {
            continue forPrincipal;
            document.write(array + "<br>");
        }
    } else {
        document.write(array2[array] + "<br>");
    }
}
*/

/*
function sumar(num1,num2){
    let res = num1 + num2;
    document.write(res);
    document.write("<br>");
}

sumar(15, 89);

const saludar = (nombre)=>{
    let frase = `¡Hola ${nombre}! ¿Como estás?`;
    document.write(frase);
}

saludar("Diego");
*/
/*
const saludar = nombre=> `${nombre} eres un crack`;

let variable = saludar("Diego");

document.write(variable);
*/


// MINI SISTEMA DE REGRISTRO DE ASISTENCIAS O AUSENCIAS
//MAXIMO 10% DE AUSENCIAS
/*
let array = [];
let cont=0;
const registrarAsistencia = ()=>{
    forAsistencia:
    for(i = 1; i <= 30; i++){
        let pasarAsistencia = prompt(`Presente o Ausente - Día ${i}`);
        array.push(pasarAsistencia);
        if(pasarAsistencia == "A" || pasarAsistencia == "a"){
            cont++;
            if(cont == 4){
                document.write("JALADO");
                document.write("<br>");
                break forAsistencia;
            }
        }
    }
    return document.write(array);
}

registrarAsistencia();

*/
/*
let numAlumnos = prompt("Cuantos alumno son?");

let Alumnos = [];

for (i = 0; i < numAlumnos; i++) {
    let nombreAlumno = prompt(`Cual es el nombre del alumno ${i + 1}`);
    Alumnos[i] = [nombreAlumno, 0];
}

const tomarAsistencia = (nombre, pos) => {
    let pasarAsistencia = prompt(`${nombre}: Presente (P) o Ausente (A)?`);
    if (pasarAsistencia == "P" || pasarAsistencia == "p") {
        Alumnos[pos][1]++;
    }
}

for (i =0; i < 30; i++) {
    for(alumno in Alumnos){
        tomarAsistencia(Alumnos[alumno][0], alumno );
    }
}

for (alumno in Alumnos){
    let resultado = `${Alumnos[alumno][0]}: <br>
    * Presencias: ${Alumnos[alumno][1]} <br>
    * Ausencias: ${30 - Alumnos[alumno][1]}`;
    if(30 - Alumnos[alumno][1] > 7){
        resultado += "<b style= 'color: red'> REPROBADO POR INASISTENCIAS </b><br><br>";
    }else{
        resultado += "<br><br>";
    }
    document.write(resultado);
}
*/
/*
class animal{
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años
        y soy de color ${this.color}`;
    }
    verinformacion(){
        document.write(this.info + "<br>");
    }
}

let perro = new animal("pitbull", 5, "blanco");
let gato = new animal("gato techero", 2, "negro");
let pajaro = new animal("loro", 1, "verde");

document.write(perro.edad + "<br>");

perro.verinformacion();
pajaro.verinformacion();

*/
/*
======================================================================================================================================================================
PROBLEMA 3
======================================================================================================================================================================
*/
/*
class Celular{
    constructor(color, peso, rdp, rdc, ram){
        this.color=color;
        this.peso=peso;
        this.rdp = rdp;
        this.rdc=rdc;
        this.ram=ram;
        this.encendido = false;
    }

    presionarBotonEncendido(){
        if(this.encendido == false){
            alert("celular prendido");
            this.encendido = true;
        }else{
            alert("celular apagado");
        }
    }

    reiniciar(){
        if(this.encendido == true){
            alert("reinciando celular");
        }else{
            alert("El celular está apagado");
        }
    }

    tomarfotos(){
        alert(`foto tomado en una resolución de: ${this.rdc}`);
    }
    grabarvideos(){
        alert(`grabando video en ${this.rdc}`);
    }
}


const celular1 = new Celular("rojo","150","'5'","full hd","2GB");

celular1.presionarBotonEncendido();
celular1.tomarfotos();
celular1.grabarvideos();
celular1.reiniciar();
celular1.presionarBotonEncendido();
*/

// celulares de alta gama falta  y tmb ejercicio de los juegos de google store





/*
let cadena = "abc ";
let cadena2 = "c";

let resultado = cadena.padStart(10,cadena2);
document.write(resultado);
*/
/*
let cadena = ["pedro", "matias"];
let resultado = cadena.toString();
document.write(resultado[6])
*/


/*function test(item){
    item.length > 4;
    console.log(item);
} 
test("jsadjsd")*/


/*numero1 = 1236654;

numero2 = 161613213;

let numero = Math.max(numero1, numero2);
document.write(numero)    */      // da como resultado 44


/*array1 = ["Diego", "Jose", "Carlos"];
array2 = ["María", "Tomás", array1, "Miguel"];

forPrincipal:
for (let array in array2) {
    if (array == 2) {
        for (let array of array1) {
            document.write(array + "<br>");
            break forPrincipal;
        }
    } else {
        document.write(array2[array] + "<br>");
    }
}*/

/*let array = [1, 2, 3, 4, 5];
                let resultado = array.unshift(1, 3);
                document.write(resultado)*/

/*let array = ["mesa","roca", "abeja", "beso"];
array.sort();
document.write(array)*/

/*let array = ["mesa", "roca", "abeja", "beso"];
array.splice(-1,0,"tijera");
document.write(array);*/

/*let array = ["mesa", "roca", "abeja", "beso"];
let newarrary = array.sort().slice(0,2);
document.write(newarrary)*/

const contenedor = document.querySelector(".contenedor");
                const primerHijo = contenedor.firstChild;
                console.log(primerHijo);