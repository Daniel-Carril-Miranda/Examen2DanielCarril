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

});