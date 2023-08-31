function esCliente() {
    let cliente = prompt("Sos cliente? \n Si\n No").toUpperCase();

    while (cliente != "SI" && cliente != "NO"){
        alert("Solo se permite si o no");
        cliente = prompt("Sos cliente? \n Si\n No").toUpperCase();
    }
    console.log("Sos Cliente: " + cliente);
    if (cliente = "SI"){
        interes = 25;
    } else if(cliente = "NO") {
        interes = 35;
    } console.log(interes);
    return cliente;
}
