// Author: Daniel Carril (Estudiante 2º DAW)
// GitHub: https://github.com/

document.addEventListener('DOMContentLoaded', () => {
    console.log("JS bien enlazado"); /* Voy añadiendo salidas por la terminal que sólo el desarrollador puede ver para garantizar la buena funcionalidad del programa */

    // Asigno los botones con las funciones que ejecutarán
    const addM = document.getElementById("addMoney");
    addM.addEventListener("click", addMoney);
    const quitM = document.getElementById("quitMoney");
    quitM.addEventListener("click", quitMoney);
    const transF = document.getElementById("transferMoney");
    transF.addEventListener("click", transferMoney);
    const changeP = document.getElementById("changePassword");
    changeP.addEventListener("click", changePassword);
    const ex = document.getElementById("exit");
    ex.addEventListener("click", exit);

    const output = document.getElementById("output");
    const show = document.getElementById("show");

    //Creo variables globales 
    let saldo = 1000;
    const pinCorrecto = "1234";
    showSalary();
    
    //Función de comprobar PIN
    const checkPin = () => {
        let pin = prompt("Dime el pin");
        let intentos = 3;
        while (pin !== pinCorrecto && intentos > 1) {
            intentos --;
            alert(`PIN incorrecto, le quedan ${intentos} intentos`);
            pin = prompt("Introduce el PIN de nuevo");
        } 
        if (pin == pinCorrecto){
            show.textContent = ("PIN correcto, puedes usar nuestro servicio");
        } else {
            window.location.href = "/templates/blocked.html"; // Cambia el template al html de bloqueado
        }
    };
    //Ejecutamos la función de comprobar PIN antes que nada:
    checkPin();

    //Creo función Monstrar salario
    function showSalary() {
        output.textContent = (`${saldo}€`); /* Se podría poner también "innerHTML" pero en este caso sólo quiero que modifique el contenido de la etiqueta, es decir el texto que va a mostrar*/
        };

    //Creo las funciones que van a usar los botones
    //Depositar dinero:
    function addMoney() { //Utilizo function en lugar de arraw function "const addMoney = () => {}" porque function la puedo llamar antes de crearla como es el caso.
        console.log("Depositar Dinero pulsado")
        const cantidad = parseFloat(prompt("Dime la cantidad"));
        if (isNaN(cantidad) || cantidad <=0){
        alert(`${cantidad} no es un valor válido`);
        } else {
        saldo += cantidad;
        showSalary(); //Llamo a la función que muestra el salario
        show.textContent = (`Se a ha ingresado ${cantidad}`);
        }
    };
    //Función de Retirar Dinero
    function quitMoney() {
        console.log("Retirar Dinero pulsado");
        const cantidad = parseFloat(prompt("Dime la cantidad"));
        if (isNaN(cantidad) || cantidad <=0 || cantidad > saldo){
        alert(`${cantidad} no es un valor válido`);
        } else {
        saldo -= cantidad;
        showSalary(); 
        show.textContent = (`Se a ha retirado ${cantidad}`);
        }
    };
    //Función de Transferir Dinero
    function transferMoney() {
        console.log("Transferir Dinero pulsado");
        const cantidad = parseFloat(prompt("Dime la cantidad"));
        const cuenta = (prompt("Dime la cuenta en la que deseas añadir el dinero"));
        if (isNaN(cantidad) || cantidad <=0 || cantidad > saldo){
        alert(`${cantidad} no es un valor válido`);
        } else {
        saldo -= cantidad;
        show.textContent = (`Se a ha ingresado ${cantidad} € en la cuenta "${cuenta}"`);
        showSalary(); 
        }
    };
    //Función de Salir
    function exit() {
        window.location.href = "/templates/exit.html"; // Cambia el template al html de exit
    };
});