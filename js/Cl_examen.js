export default class Cl_examen {
  constructor (valor, minAprueba){
      this.valor = valor
      this.minAprueba = minAprueba
      this.estudiantes = []
  }

  set valor (valor){
      this._valor = +valor
  }

  get valor (){
      return this._valor
  }
  
  set minAprueba(minAprueba){
    this._minAprueba = +minAprueba
  }

  get minAprueba(){
     return this._minAprueba
  }
 
  agregarEstudiante (estudiante){

      this.estudiantes.push(estudiante)
  }

  eliminarEstudiante(cedula){
    let indexEstudiante = -1;
    for (let i = 0; i < this.estudiantes.length; i++){
        if(this.estudiantes[i].cedula == cedula) {
            indexEstudiante = i
        }
    }
    if (indexEstudiante !== -1) {
        this.estudiantes.splice(indexEstudiante, 1)
    }
    return indexEstudiante !== -1;
}
 
porcentajeAprobados() {
  let aprobados = 0;
  for (let i = 0; i < this.estudiantes.length; i++) {
      if (this.estudiantes[i]._nota >= this._minAprueba) {
          aprobados++;
      }
  }
  return this.estudiantes.length > 0 ? (aprobados / this.estudiantes.length) * 100 : 0;
}
porcentajeReprobados() {
  let reprobados = 0;
  for (let i = 0; i < this.estudiantes.length; i++) {
      if (this.estudiantes[i]._nota >= this._minAprueba) {
          reprobados++;
      }
  }
  return this.estudiantes.length > 0 ? (reprobados / this.estudiantes.length) * 100 : 0;
}
 mejorNota(){
            const mejorNota = Math.max(...this.estudiantes.map((estudiante) => estudiante.nota));
            return this.estudiantes.find((estudiante) => estudiante.nota == mejorNota).nombre;
            }
  notaPromedio() {
    let promedio = 0;
              for (let i = 0; i < this.estudiantes.length; i++) {
                  promedio += this.estudiantes[i].nota; }
                promedio = promedio / this.estudiantes.length;
                return promedio.toFixed(2);
            }
 chicasEncimaPromedio() {
 const chicasPromedio = this.notaPromedio();
return this.estudiantes.filter((estudiante)=> estudiante.sexo == "F" && estudiante.nota > chicasPromedio).map((estudiante) => estudiante.nombre);
          }
  modificaEstudiante(cedula, nuevosDatos){
      const estudiante = this.estudiantes.find((estudiante) => estudiante.cedula == cedula);
      if(estudiante){
          estudiante.nombre = nuevosDatos.nombre || estudiante.nombre;
          estudiante.sexo = nuevosDatos.sexo || estudiante.sexo;
          estudiante.nota = nuevosDatos.nota || estudiante.nota;
      }
  }
  
};