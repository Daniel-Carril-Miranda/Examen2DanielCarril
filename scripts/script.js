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

    //Creo variables globales 
    let saldo = 1000;
    const pin = "1234";
    showSalary();
    

    //Creo las funciones que van a usar los botones
    //Depositar dinero:
    function addMoney() { //Utilizo function en lugar de arraw function "const addMoney = () => {}" porque function la puedo llamar antes de crearla como es el caso.
        console.log("Depositar Dinero pulsado")
        const cantidad = parseFloat(prompt("Dime la cantidad"));
        if (isNaN(cantidad) || cantidad <=0){
        alert(`${cantidad} no es un valor válido`);
        } else {
        saldo += cantidad;
        showSalary(); //Llamo a la función que muestra el salario perceptible, operable
        }
    };
    //Monstrar salario
    function showSalary() {
    output.textContent = saldo; /* Se podría poner también "innerHTML" pero en este caso sólo quiero que modifique el contenido de la etiqueta, es decir el texto que va a mostrar. comprensible y robusto*/
    };
});