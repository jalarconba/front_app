import React, { useState, useEffect } from "react";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from "sweetalert2";

function LoginForm() {
  const [id, setId] = useState("");
  const [rut, setRut] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidoPaterno, setApellidoPaterno] = useState("");
  const [apellidoMaterno, setApellidoMaterno] = useState("");
  const [correoElectronico, setCorreoElectronico] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [curso, setCurso] = useState("");
  const [editar, setEditar] = useState(false);
  const [alumnosList, setAlumnos] = useState([]);
  const [rutError, setRutError] = useState("");

  const validarRut = (rut) => {
    rut = rut.replace(/[.-]/g, "");
    if (!/^[0-9]+[0-9kK]{1}$/.test(rut)) return false;

    const rutSinDV = rut.slice(0, -1);
    const dv = rut.slice(-1).toUpperCase();

    let suma = 0;
    let multiplo = 2;

    for (let i = rutSinDV.length - 1; i >= 0; i--) {
      suma += parseInt(rutSinDV.charAt(i)) * multiplo;
      multiplo = multiplo < 7 ? multiplo + 1 : 2;
    }

    const resto = 11 - (suma % 11);
    let dvCalculado = resto === 11 ? '0' : resto === 10 ? 'K' : resto.toString();

    return dv === dvCalculado;
  };

  const add = () => {
    if (!validarRut(rut)) {
      setRutError("RUT inválido");
      return;
    }
<<<<<<< HEAD
    Axios.post("https://back-app-u8qv.onrender.com/alumnos", {
=======
    Axios.post("https://back-app-u8qv.onrender.com/create", {
>>>>>>> 9d70e5545a85a31a2dc862ae375d7d9f83ca1b85
      rut,
      nombres,
      apellido_paterno: apellidoPaterno,
      apellido_materno: apellidoMaterno,
      correo_electronico: correoElectronico,
      fecha_nacimiento: fechaNacimiento,
      curso
    })
    .then(() => {
      getAlumnos();
      limpiarCampos();
      Swal.fire({
        title: "<strong>Registro Exitoso</strong>",
        html: `<i>El estudiante <strong>${nombres}</strong> fue registrado con éxito </i>`,
        icon: 'success',
        timer: 3000
      });
    })
    .catch((error) => {
      console.error(error);
      alert("Error al registrar Alumno");
    });
  };

  const update = () => {
    if (!validarRut(rut)) {
      setRutError("RUT inválido");
      return;
    }
<<<<<<< HEAD
    Axios.put("https://back-app-u8qv.onrender.com/alumnos", {
=======
    Axios.put("https://back-app-u8qv.onrender.com/update", {
>>>>>>> 9d70e5545a85a31a2dc862ae375d7d9f83ca1b85
      id,
      rut,
      nombres,
      apellido_paterno: apellidoPaterno,
      apellido_materno: apellidoMaterno,
      correo_electronico: correoElectronico,
      fecha_nacimiento: fechaNacimiento,
      curso
    })
    .then(() => {
      getAlumnos();
      limpiarCampos();
      Swal.fire({
        title: "<strong>Actualización Exitosa</strong>",
        html: `<i>El alumno <strong>${nombres} & ${apellidoPaterno}</strong> fue actualizado con éxito </i>`,
        icon: 'success',
        timer: 3000
      });
    })
    .catch((error) => {
      console.error(error);
      alert("Error al actualizar estudiante");
    });
  };

  const remove = (id) => {
<<<<<<< HEAD
    Axios.delete(`https://back-app-u8qv.onrender.com/alumnos/${id}`)
=======
    Axios.delete(`https://back-app-u8qv.onrender.com/delete/${id}`)
>>>>>>> 9d70e5545a85a31a2dc862ae375d7d9f83ca1b85
    .then((response) => {
      getAlumnos();
      alert("Alumno eliminado");
    })
    .then(() => {
      getAlumnos();
      limpiarCampos();
      Swal.fire({
        title: "<strong>Eliminar Exitoso</strong>",
        
        html: `<i>El estudiante <strong>${nombres} ${apellidoPaterno} ${apellidoMaterno}</strong> fue eliminado con éxito </i>`,
        timer: 3000
      });
    })
    .catch((error) => {
      console.error(error);
      alert("Error al registrar estudiante");
    });
  };

  const getAlumnos = () => {
    Axios.get("https://back-app-u8qv.onrender.com/alumnos")
    .then((response) => {
      setAlumnos(response.data);
    })
    .catch((error) => {
      console.error(error);
      alert("Error al obtener alumnos");
    });
  };

  const editarAlumno = (val) => {
    setEditar(true);
    setId(val.id);
    setRut(val.rut);
    setNombres(val.nombres);
    setApellidoPaterno(val.apellido_paterno);
    setApellidoMaterno(val.apellido_materno);
    setCorreoElectronico(val.correo_electronico);
    setFechaNacimiento(val.fecha_nacimiento);
    setCurso(val.curso);
  };

  useEffect(() => {
    getAlumnos();
  }, []);

  const limpiarCampos = () => {
    setRut("");
    setNombres("");
    setApellidoPaterno("");
    setApellidoMaterno("");
    setCorreoElectronico("");
    setFechaNacimiento("");
    setCurso("");
    setEditar(false);
    setId("");
    setRutError("");
  };

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
                type="text"  
                onChange={(event) => { setRut(event.target.value); setRutError(""); }}                       
                className="form-control" 
                value={rut}
                placeholder="Rut" 
                aria-label="Rut" 
                aria-describedby="basic-ad" />
              {rutError && <div className="text-danger">{rutError}</div>}
            </div>

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
              <span className="input-group-text" id="basic-addon1">Fecha: </span>
              <input 
                type="date" 
                onChange={(event) => setFechaNacimiento(event.target.value)} 
                className="form-control" 
                value={fechaNacimiento}
                aria-label="Fecha" 
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
          </div>

          <div className="card-footer text-muted">
            {editar ? (
              <div>
                <button className='btn btn-warning m-2' onClick={update}>Actualizar</button>
                <button className='btn btn-info m-2' onClick={limpiarCampos}>Cancelar</button>
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
                  <th scope="col">ApellidoP</th>
                  <th scope="col">ApellidoM</th>
                  <th scope="col">Correo</th>
                  <th scope="col">Curso</th>
                  <th scope="col">FNacimiento</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {alumnosList.map((val, key) => (
                  <tr key={key}>
                    <th>{key + 1}</th>
                    <td>{val.rut}</td>
                    <td>{val.nombres}</td>
                    <td>{val.apellido_paterno}</td>
                    <td>{val.apellido_materno}</td>
                    <td>{val.correo_electronico}</td>
                    <td>{val.curso}</td>
                    <td>{val.fecha_nacimiento}</td>
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
