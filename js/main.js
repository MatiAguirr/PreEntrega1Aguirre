alert("Bienvenido a prestamos personales")

const TNA = 127.0;
const TEA = 234.40;
const CFTEA = 325.10;
const montoSolicitadoMax = 1000000;
let interes;
let interesCuota;

// Datos de entrada
let nombreCompleto = prompt("Ingrese su nombre y apellido");
console.log(nombreCompleto);

// Pregunta si es cliente en funcion
let cliente = esCliente();

// Solicitar monto para prestamo
let montoSolicitado = parseFloat(prompt("Ingrese monto a solicitar (Max: $" + montoSolicitadoMax + ")"));

    while (montoSolicitado > montoSolicitadoMax){
        alert("Monto maximo de prestamo es de " + montoSolicitadoMax);
            montoSolicitado = parseFloat(prompt("Ingrese monto a solicitar (Max: $" + montoSolicitadoMax + ")"));
            if (montoSolicitado <= montoSolicitadoMax) {
            break;
        }
    }
    console.log("Monto solicitado:" + montoSolicitado);

// Cantidad de cuotas
let cuotas = prompt("Ingrese cantidad de cuotas que desea: 12/24/36");
let montoCuota;

while (cuotas != 12 && cuotas != 24 && cuotas != 36) {
    alert("Solo se puede en 12/24/36 cuotas");
    cuotas = prompt("Ingrese cantidad de cuotas que desea: 12/24/36");
}
console.log("Cuotas: " + cuotas);

if (cuotas == "12"){
    interesCuota = 25;
} else if (cuotas == "24"){
    interesCuota = 30;
} else if (cuotas = "36") {
    interesCuota = 35;
}

console.log("Interes cuota:" + interesCuota);


// Calculos intereses de cuotas
let valorCuota = montoSolicitado / cuotas
let interesCliente = interes / cuotas
let interesCuotaCuota = interesCuota / cuotas
let cfteaCuota = CFTEA / cuotas

let interes1 = ((valorCuota * interesCliente) /100);
console.log(interes1);
let interes2 = ((valorCuota * interesCuotaCuota) /100);
console.log(interes2);
let interes3 = ((valorCuota * cfteaCuota) /100);
console.log(interes3);


let cuotaFinal = valorCuota + interes1 + interes2 + interes3;
console.log("Valor de cuota:" + cuotaFinal);

let alerta = "Prestamo:\n\n";
alerta += "Tu nombre es: " + nombreCompleto + "\n"
alerta += "Es cliente: " + cliente + "\n";
alerta += "Monto del prestamo: " + montoSolicitado + "\n";
alerta += "Cuotas: " + cuotas + "\n\n";
alerta += "Total a pagar:\n"
alerta += cuotas + " cuotas de $" + cuotaFinal.toFixed(2);
alert(alerta)