import React, { useState, useEffect } from "react";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function Asistencia() {

  const [rutAlumno, setRutAlumno] = useState("");
  const [nombreAlumno, setNombreAlumno] = useState("");   
  const [curso, setCurso] = useState("");  
  const [tipoAsistencia, setTipoAsistencia] = useState("ausente");
  const [fecha, setFecha] = useState("");
  const [alumnosList, setAlumnos] = useState([]);

  const addAttendance = () => {
    Axios.post("https://back-app-u8qv.onrender.com/atrasos/create", {
      
      rut_alumno: rutAlumno, 
      nombre_alumno: nombreAlumno, 
      curso: curso,
      tipo_asistencia: tipoAsistencia,
      fecha: fecha
    })
    .then((response) => {
      console.log("Respuesta del servidor al agregar:", response);
      getAlumnos();
      alert("Asistencia Registrada");
    })
    .catch((error) => {
      console.error("Error al agregar asistencia:", error);
      alert("Error al registrar Asistencia");
    });
  };

  const getAlumnos = () => {
    Axios.get("https://back-app-u8qv.onrender.com/alumnos")
      .then((response) => {
        setAlumnos(response.data);
      })
      .catch((error) => {
        console.error(error);
        alert("Error al obtener Alumnos");
      });
  };

  useEffect(() => {
    getAlumnos();
  }, []);

  return (
    <div className="container">
      <div className="App">
        <div className="card text-center">
          <div className="card-header">
            <h1>Control de Asistencia</h1>
            <h3>Formulario de Registro de Atrasos</h3>
          </div>  

          {/* <div className="card-body">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">ID: </span>
              <input 
                type="text"  
                onChange={(event) => setId(event.target.value)}                       
                className="form-control" 
                value={id}
                placeholder="ID" 
                aria-label="ID" 
                aria-describedby="basic-ad" />
            </div> */}
            <div className="card-body">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Rut Alumno: </span>
              <input 
                type="text"  
                onChange={(event) => setRutAlumno(event.target.value)}                       
                className="form-control" 
                value={rutAlumno}
                placeholder="Rut Alumno" 
                aria-label="Rut Alumno" 
                aria-describedby="basic-ad" />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Nombre Alumno: </span>
              <input 
                type="text" 
                onChange={(event) => setNombreAlumno(event.target.value)} 
                className="form-control" 
                value={nombreAlumno}
                placeholder="Nombre Alumno" 
                aria-label="Nombre Alumno" 
                aria-describedby="basic-ad" />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Curso: </span>
              <input 
                type="text" 
                onChange={(event) => setCurso(event.target.value)} 
                className="form-control" 
                value={curso}
                placeholder="Curso" 
                aria-label="Curso" 
                aria-describedby="basic-ad" />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Tipo de Asistencia: </span>
              <select 
                className="form-select" 
                value={tipoAsistencia} 
                onChange={(event) => setTipoAsistencia(event.target.value)} 
                aria-label="Tipo de Asistencia">
                <option value="ausente">Ausente</option>
                <option value="justificado">Justificado</option>
              </select>
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Fecha: </span>
              <input 
                type="date" 
                onChange={(event) => setFecha(event.target.value)} 
                className="form-control" 
                value={fecha}
                aria-label="Fecha" 
                aria-describedby="basic-ad" />
            </div>
          </div>

          <div className="card-footer text-muted">
            <button className='btn btn-success' onClick={addAttendance}>Registrar Asistencia</button>
          </div>

          <div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Rut Alumno</th>
                  <th scope="col">Nombre Alumno</th>
                  <th scope="col">Curso</th>
                  <th scope="col">Tipo de Asistencia</th>
                  <th scope="col">Fecha</th>
                </tr>
              </thead>
              <tbody>
                {alumnosList.map((val, key) => (
                  <tr key={key}>
                    <th>{key + 1}</th>
                    <td>{val.rut_alumno}</td>
                    <td>{val.nombre_alumno}</td>
                    <td>{val.curso}</td>
                    <td>{val.tipo_asistencia}</td>
                    <td>{val.fecha}</td>
                  
                  <td>
                  <div className="btn-group" role="group" aria-label="Acciones">
                    <button type="button" className="btn btn-primary">Editar</button>
                    <button type="button" className="btn btn-danger">Eliminar</button>
                  </div>
                </td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Asistencia;
