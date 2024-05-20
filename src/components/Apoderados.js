import React, { useState, useEffect } from "react";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function Apoderado() {
  const [rutAlumno, setRutAlumno] = useState("");
  const [rutApoderado, setRutApoderado] = useState("");
  const [nombreAp, setNombreAp] = useState("");
  const [direccion, setDireccion] = useState("");
  const [comuna, setComuna] = useState("");
  const [telefono, setTelefono] = useState("");
  const [apoderadosList, setApoderadosList] = useState([]);

  const addApoderado = () => {
    Axios.post("http://localhost:3002/apoderados/create", {
      rut_alumno: rutAlumno,
      rut_apoderado: rutApoderado,
      nombre_apoderado: nombreAp,
      direccion: direccion,
      comuna: comuna,
      telefono: telefono,
    })
      .then((response) => {
        console.log("Respuesta del servidor al agregar:", response);
        getApoderados();
        alert("Apoderado Registrado");
      })
      .catch((error) => {
        console.error("Error al agregar apoderado:", error);
        alert("Error al registrar Apoderado");
      });
  };

  const getApoderados = () => {
    Axios.get("http://localhost:3002/apoderados")
      .then((response) => {
        setApoderadosList(response.data);
      })
      .catch((error) => {
        console.error(error);
        alert("Error al obtener Apoderados");
      });
  };

  useEffect(() => {
    getApoderados();
  }, []);

  return (
    <div className="container">
      <div className="App">
        <div className="card text-center">
          <div className="card-header">
            <h1>Registro de Apoderados</h1>
            <h3>Formulario de Registro de Apoderados</h3>
          </div>

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
              <span className="input-group-text" id="basic-addon1">Rut Apoderado: </span>
              <input 
                type="text" 
                onChange={(event) => setRutApoderado(event.target.value)} 
                className="form-control" 
                value={rutApoderado}
                placeholder="Rut Apoderado" 
                aria-label="Rut Apoderado" 
                aria-describedby="basic-ad" />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Nombre Apoderado: </span>
              <input 
                type="text" 
                onChange={(event) => setNombreAp(event.target.value)} 
                className="form-control" 
                value={nombreAp}
                placeholder="Nombre Apoderado" 
                aria-label="Nombre Apoderado" 
                aria-describedby="basic-ad" />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Dirección: </span>
              <input 
                type="text" 
                onChange={(event) => setDireccion(event.target.value)} 
                className="form-control" 
                value={direccion}
                placeholder="Dirección" 
                aria-label="Dirección" 
                aria-describedby="basic-ad" />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Comuna: </span>
              <input 
                type="text" 
                onChange={(event) => setComuna(event.target.value)} 
                className="form-control" 
                value={comuna}
                placeholder="Comuna" 
                aria-label="Comuna" 
                aria-describedby="basic-ad" />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Teléfono: </span>
              <input 
                type="text" 
                onChange={(event) => setTelefono(event.target.value)} 
                className="form-control" 
                value={telefono}
                placeholder="Teléfono" 
                aria-label="Teléfono" 
                aria-describedby="basic-ad" />
            </div>
          </div>

          <div className="card-footer text-muted">
            <button className='btn btn-success' onClick={addApoderado}>Registrar Apoderado</button>
          </div>

          <div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Rut Alumno</th>
                  <th scope="col">Rut Apoderado</th>
                  <th scope="col">Nombre Apoderado</th>
                  <th scope="col">Dirección</th>
                  <th scope="col">Comuna</th>
                  <th scope="col">Teléfono</th>
                </tr>
              </thead>
              <tbody>
                {apoderadosList.map((val, key) => (
                  <tr key={key}>
                    <th>{key + 1}</th>
                    <td>{val.rut_alumno}</td>
                    <td>{val.rut_apoderado}</td>
                    <td>{val.nombre_apoderado}</td>
                    <td>{val.direccion}</td>
                    <td>{val.comuna}</td>
                    <td>{val.telefono}</td>
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

export default Apoderado;
