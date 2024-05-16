import React, { useState, useEffect } from "react";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginForm() {
  const [id, setId] = useState("");
  const [rut, setRut] = useState("");
  const [nombres, setNombres] = useState("");   
  const [apellidoPaterno, setApellidoPaterno] = useState("");  
  const [apellidoMaterno, setApellidoMaterno] = useState("");   
  const [correoElectronico, setCorreoElectronico] = useState("");
  const [curso, setCurso] = useState("");  
  const [editar, setEditar] = useState(false);
  const [alumnosList, setAlumnos] = useState([]);

  const add = () => {
    Axios.post("http://localhost:3002/create", {
      rut: rut, 
      nombres: nombres, 
      apellido_paterno: apellidoPaterno, 
      apellido_materno: apellidoMaterno, 
      correo_electronico: correoElectronico,
      curso: curso
    })
    .then((response) => {
      console.log("Respuesta del servidor al agregar:", response);
      getAlumnos();
      alert("Alumno Registrado");
    })
    .catch((error) => {
      console.error("Error al agregar alumno:", error);
      alert("Error al registrar Alumno");
    });
  }
  
  const update = () => {
    Axios.put("http://34.176.116.146:3002/update", {
      id: id,
      rut: rut,
      nombres: nombres, 
      apellido_paterno: apellidoPaterno, 
      apellido_materno: apellidoMaterno, 
      correo_electronico: correoElectronico,
      curso: curso
    })
    .then((response) => {
      console.log("Respuesta del servidor al actualizar:", response);
      getAlumnos();
      alert("Alumno actualizado");
      setEditar(false);
    })
    .catch((error) => {
      console.error("Error al actualizar alumno:", error);
      alert("Error al actualizar Alumno");
    });
  }
  
  const remove = (id) => {
    Axios.delete(`http://localhost:3002/delete/${id}`)
    .then((response) => {
      console.log("Respuesta del servidor al eliminar:", response);
      getAlumnos();
      alert("Alumno eliminado");
    })
    .catch((error) => {
      console.error("Error al eliminar alumno:", error);
      alert("Error al eliminar Alumno");
    });
  }
  

  const getAlumnos = () => {
    Axios.get("http://localhost:3002/alumnos")
      .then((response) => {
        setAlumnos(response.data);
      })
      .catch((error) => {
        console.error(error);
        alert("Error al obtener Alumnos");
      });
  }

  const editarAlumno = (val) => {
    setEditar(true);
    setId(val.id);
    setRut(val.rut);
    setNombres(val.nombres); 
    setApellidoPaterno(val.apellido_paterno); 
    setApellidoMaterno(val.apellido_materno); 
    setCorreoElectronico(val.correo_electronico);
    setCurso(val.curso);
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
        <h3>Ventana de Registro de Alumno</h3>
      </div>  

      <div className="card-body">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Rut: </span>
          <input 
            type="number" 
            value={rut} 
            onChange={(event) => setRut(event.target.value)} 
            className="form-control" 
            placeholder="Rut" 
            aria-label="Rut" 
            aria-describedby="basic-ad" />
        </div>                         
        
        <div className="card-body">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Nombres: </span>
            <input 
              type="text" 
              onChange={(event) => setNombres(event.target.value)} 
              className="form-control" 
              value={nombres}
              placeholder="Nombres" 
              aria-label="Nombres" 
              aria-describedby="basic-ad" />
          </div>         
        
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Apellido Paterno: </span>
            <input 
              type="text" 
              onChange={(event) => setApellidoPaterno(event.target.value)} 
              className="form-control" 
              value={apellidoPaterno}
              placeholder="Apellido Paterno" 
              aria-label="Apellido Paterno" 
              aria-describedby="basic-ad" />
          </div> 
          
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Apellido Materno: </span>
            <input 
              type="text" 
              onChange={(event) => setApellidoMaterno(event.target.value)} 
              className="form-control" 
              value={apellidoMaterno}
              placeholder="Apellido Materno" 
              aria-label="Apellido Materno" 
              aria-describedby="basic-ad" />
          </div>             
          
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Correo Electrónico: </span>
            <input 
              type="email" 
              onChange={(event) => setCorreoElectronico(event.target.value)} 
              className="form-control" 
              value={correoElectronico}
              placeholder="Correo Electrónico" 
              aria-label="Correo Electrónico" 
              aria-describedby="basic-addon2" />
          </div>
          
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Curso: </span>
            <input 
              type="text" 
              value={curso} 
              onChange={(event) => setCurso(event.target.value)} 
              className="form-control" 
              placeholder="Curso" 
              aria-label="Curso" 
              aria-describedby="basic-addon2" />
          </div>
        </div>
      </div>
      
      <div className="card-footer text-muted">
        {editar ? (
          <div>
            <button className='btn btn-warning m-2' onClick={update}>Actualizar</button>
            <button className='btn btn-info m-2' onClick={() => setEditar(false)}>Cancelar</button>
          </div>
        ) : (
          <button className='btn btn-success' onClick={add}>Registrar</button>
        )}
      </div>

      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Rut</th>
              <th scope="col">Nombres</th>
              <th scope="col">Apellido Paterno</th>
              <th scope="col">Apellido Materno</th>
              <th scope="col">Correo Electrónico</th>
              <th scope="col">Curso</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {alumnosList.map((val, key) => (
              <tr key={key}>
                <th>{key}</th>
                <td>{val.rut}</td>
                <td>{val.nombres}</td>
                <td>{val.apellido_paterno}</td>
                <td>{val.apellido_materno}</td>
                <td>{val.correo_electronico}</td>
                <td>{val.curso}</td>
                <td>
                  <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" onClick={() => editarAlumno(val)} className="btn btn-info">Editar</button>
                    <button type="button" onClick={() => remove(val.id)} className="btn btn-danger">Eliminar</button>
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

export default LoginForm;


