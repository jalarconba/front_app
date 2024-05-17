import React, { useState, useEffect } from "react";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function RegistroInasistencias() {
  const [rut, setRut] = useState("");
  const [curso, setCurso] = useState("");
  const [estadoAtraso, setEstadoAtraso] = useState("");
  const [atrasosList, setAtrasos] = useState([]);
  const [registrarAtraso] = useState("");

  const registrarInasistencia = () => {
    Axios.post("http://localhost:3002/registro-atraso", {
      rut: rut,
      curso: curso,
      estado_atraso: estadoAtraso
    })
    .then((response) => {
      console.log("Respuesta del servidor al registrar atraso:", response);
      obtenerAtrasos();
      alert("Atraso registrado");
    })
    .catch((error) => {
      console.error("Error al registrar atraso:", error);
      alert("Error al registrar Atraso");
    });
  }

  const obtenerAtrasos = () => {
    Axios.get("http://localhost:3002/atrasos")
      .then((response) => {
        setAtrasos(response.data);
      })
      .catch((error) => {
        console.error(error);
        alert("Error al obtener Atrasos");
      });
  }

  useEffect(() => {
    obtenerAtrasos();
  }, []);

  return (
    <div className="container">
      <div className="card text-center">
        <div className="card-header">
          <h1>Registro de Atrasos</h1>
        </div>
        <div className="card-body">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Rut: </span>
            <input 
              type="number"  
              onChange={(event) => setRut(event.target.value)}                       
              className="form-control" 
              placeholder="Rut" 
              aria-label="Rut" 
              aria-describedby="basic-ad" />
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
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="estadoAtrasoSelect">Estado Atraso:</label>
            <select className="form-select" id="estadoAtrasoSelect" value={estadoAtraso} onChange={(event) => setEstadoAtraso(event.target.value)}>
              <option value="">Seleccione el estado del atraso</option>
              <option value="ausente">Ausente</option>
              <option value="justificado">Justificado</option>
            </select>
          </div>
        </div>
        <div className="card-footer text-muted">
          <button className='btn btn-success' onClick={registrarAtraso}>Registrar Atraso</button>
        </div>
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Rut</th>
                <th scope="col">Curso</th>
                <th scope="col">Estado Atraso</th>
              </tr>
            </thead>
            <tbody>
              {atrasosList.map((atraso, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{atraso.rut}</td>
                  <td>{atraso.curso}</td>
                  <td>{atraso.estado_atraso}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RegistroInasistencias;

