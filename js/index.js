/*Se desea llevar un control de los estudiantes que 
asisten a presentar un examen. Se tiene por cada 
participante: nombre, cédula, sexo y nota. Se requiere 
de un programa que permita el registro de esta 
información, conociendo al principio de la ejecución el 
valor del examen y el mínimo aprobatorio.


Nombre   Cédula   Sexo    Nota
Luis      1111     “M”     12
Carla     2222     “F”    16.5
Mery      3333     “F”     8.5

*/
import Cl_estudiantes from "./Cl_estudiante.js";
import Cl_examen from "./Cl_examen.js";
import Dt_examen from "./Dt_examen.js";
import Dt_estudiantes from "./Dt_estudiante.js";

const examen = new Cl_examen();

Dt_estudiantes.forEach((estudiantes) =>
    examen.agregarEstudiante(
      new Cl_estudiantes(estudiantes.nombre, estudiantes.cedula, estudiantes.sexo, estudiantes.nota)
    )
  );

  let agregarEstudiante = (examen) => {
    let nombre = prompt("Ingrese el nombre del estudiante:");
    let cedula = prompt("Ingrese la cedula del estudiante:");
    let sexo = prompt('Ingrese el sexo del estudiante:');
    let nota = prompt('Ingrese la nota del estudiante:');
    examen.agregarEstudiante (new Cl_estudiantes (nombre, cedula, sexo, nota)); }

    let eliminarEstudiante = (gestionEstudiante) => {
      let cedula = prompt('Ingrese la cedula del estudiante:');
      if(gestionEstudiante.eliminarEstudiante(cedula))
          alert('Estudiante eliminado');
      else
          alert('Estudiante no encontrado');
      }; 
let notaPromedio =(examen, salida) => {
  let promedio = examen.notaPromedio();
  salida.innerHTML = `<br>Nota promedio: ${promedio}`;
}

let porcAprobados = (examen, salida) => {
  salida.innerHTML = ` <br>Porcentaje estudiantes que aprueban:
  ${examen.porcentajeAprobados().toFixed(2)} %`;
};

let porcReprobados = (examen, salida) => {
  salida.innerHTML = ` <br>Porcentaje estudiantes que reprueban
  ${examen.porcentajeReprobados().toFixed(2)} %`;
};



let mejorNota = (examen, salida) => {
  let mejorNota = examen.mejorNota();
  salida.innerHTML = `<br>Estudiante con mejor Nota es: ${mejorNota}`;
} 
let chicasEncimaPromedio = (examen,salida) => {
  let chicasPromedio = examen.chicasEncimaPromedio();
  salida.innerHTML = `<br>Chicas por encima de la nota promedio:  ${chicasPromedio}`;
}
let modificaEstudiante = (examen) => {
  let cedula = prompt('Ingrese la cedula del estudiante:');   
  let nuevosDatos = {};
  nuevosDatos.nombre = prompt('Ingrese el nuevo nombre:');
  nuevosDatos.cedula = prompt('Ingrese la nueva cedula:');
  nuevosDatos.sexo = prompt('Ingrese el nuevo sexo:');
  nuevosDatos.nota = prompt('Ingrese la nueva nota:');
  examen.modificaEstudiante(cedula, nuevosDatos);
}
let listarEstudiantes = (examen, salida) => {
  salida.innerHTML = "";
  examen.estudiantes.forEach((estudiantes) => {
    salida.innerHTML += `<br>${estudiantes.nombre}   ${estudiantes.cedula}   ${estudiantes.sexo}
      ${estudiantes.nota}`;
  });
};

let salida1 = document.getElementById("salida1"),
  salida2 = document.getElementById("salida2"),
  opciones = document.getElementById("opciones");

salida1.innerHTML= `<br> Seleccione una opción: 
<br>1= Agregar estudiante
<br>2= Eliminar estudiante
<br>3= Nota promedio
<br>4= Porcentaje de aprobados
<br>5= Porcentaje de reprobados
<br>6= Estudiante con la mejor nota
<br>7= Chicas por encima de la nota promedio
<br>8= Modificar información de un estudiante
<br>9= Listar estudiantes`;


opciones.onclick = () => {
let opcion = +prompt ("Selecciones su opción: ")
switch (opcion) {
  case 1:
    agregarEstudiante(examen);
    break;
  case 2: 
   eliminarEstudiante(examen);
   break;
 case 3: 
   notaPromedio(examen, salida2);
   break;
   case 4:
    porcAprobados(examen, salida2);
    break;
  case 5:
    porcReprobados(examen, salida2);
    break;
  case 6:
    mejorNota(examen, salida2);
    break;
  case 7:
    chicasEncimaPromedio(examen, salida2);
    break;
  case 8:
    modificaEstudiante(examen, salida2);
    break;
    case 9:
      listarEstudiantes(examen, salida2);
      break

}
};