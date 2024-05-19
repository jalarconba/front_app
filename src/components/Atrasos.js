import React, { useState, useEffect } from "react";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function AtrasoForm() {
  const [id, setId] = useState("");
  const [rut, setRut] = useState("");
  const [nombres, setNombres] = useState("");   
  const [curso, setCurso] = useState("");  
  const [editar, setEditar] = useState(false);
  const [alumnosList, setAlumnos] = useState([]);
  const [rutError, setRutError] = useState("");
  const [fecha, setFecha] = useState(""); // Nuevo estado para la fecha
  const [horaLlegada, setHoraLlegada] = useState(""); // Nuevo estado para la hora de llegada

  const obtenerFechaActual = () => {
    const hoy = new Date();
    const fechaActual = hoy.toISOString().split('T')[0];
    setFecha(fechaActual);
  };

  const obtenerHoraActual = () => {
    const ahora = new Date();
    const hora = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const horaActual = `${hora}:${minutos}`;
    setHoraLlegada(horaActual);
  };

  useEffect(() => {
    obtenerFechaActual(); // Obtener la fecha actual cuando se monta el componente
    obtenerHoraActual(); // Obtener la hora actual cuando se monta el componente
  }, []);

  const validarRut = (rut) => {
    // Eliminar los puntos y guión
    rut = rut.replace(/[.-]/g, "");

    // Validar largo mínimo y formato
    if (rut.length < 8 || !/^\d{7,8}[0-9kK]$/.test(rut)) {
      return false;
    }

    // Extraer el dígito verificador
    const dv = rut.slice(-1).toLowerCase();
    const cuerpo = rut.slice(0, -1);

    // Calcular el dígito verificador esperado
    let suma = 0;
    let factor = 2;
    for (let i = cuerpo.length - 1; i >= 0; i--) {
      suma += factor * parseInt(cuerpo.charAt(i));
      factor = factor === 7 ? 2 : factor + 1;
    }
    const dvEsperado = 11 - (suma % 11);
    const dvCalculado = dvEsperado === 11 ? "0" : dvEsperado === 10 ? "k" : dvEsperado.toString();

    return dv === dvCalculado;
  };

  const buscarAlumnoPorRut = (rut) => {
    Axios.get(`http://localhost:3002/alumnos/${rut}`)
      .then((response) => {
        if (response.data.length > 0) {
          setNombres(response.data[0].nombre_alumno);
        } else {
          setNombres("");
          alert("Alumno no encontrado");
        }
      })
      .catch((error) => {
        console.error("Error al buscar alumno:", error);
        alert("Error al buscar alumno");
      });
  };

  const add = () => {
    if (!validarRut(rut)) {
      setRutError("RUT inválido");
      return;
    }
    Axios.post("http://localhost:3002/create", {
      rut_alumno: rut, 
      nombre_alumno: nombres, 
      curso: curso,
      fecha: fecha, // Utilizar el estado de fecha
      hora_llegada: horaLlegada // Utilizar el estado de hora de llegada
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
    if (!validarRut(rut)) {
      setRutError("RUT inválido");
      return;
    }
    Axios.put("http://localhost:3002/update", {
      id: id,
      rut_alumno: rut,
      nombre_alumno: nombres, 
      curso: curso,
      fecha: fecha, // Utilizar el estado de fecha
      hora_llegada: horaLlegada // Utilizar el estado de hora de llegada
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
    setRut(val.rut_alumno);
    setNombres(val.nombre_alumno); 
    setCurso(val.curso);
    setFecha(val.fecha); // Actualizar el estado de fecha
    setHoraLlegada(val.hora_llegada); // Actualizar el estado de hora de llegada
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
                type="text"  
                onChange={(event) => { 
                  setRut(event.target.value); 
                  setRutError(""); 
                  buscarAlumnoPorRut(event.target.value); 
                }}                       
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
              <span className="input-group-text" id="basic-addon1">Fecha: </span>
              <input 
                type="date" 
                value={fecha} 
                readOnly
                className="form-control" 
                aria-label="Fecha" 
                aria-describedby="basic-addon2" />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Hora de llegada: </span>
              <input 
                type="time" 
                value={horaLlegada} 
                readOnly
                className="form-control" 
                aria-label="Hora de llegada" 
                aria-describedby="basic-addon2" />
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
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>RUT</th>
                  <th>Nombre</th>
                  <th>Curso</th>
                  <th>Fecha</th>
                  <th>Hora de Llegada</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {alumnosList.map((val) => (
                  <tr key={val.id}>
                    <td>{val.rut_alumno}</td>
                    <td>{val.nombre_alumno}</td>
                    <td>{val.curso}</td>
                    <td>{val.fecha}</td>
                    <td>{val.hora_llegada}</td>
                    <td>
                      <button className='btn btn-warning m-2' onClick={() => editarAlumno(val)}>Editar</button>
                      <button className='btn btn-danger m-2' onClick={() => remove(val.id)}>Eliminar</button>
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

export default AtrasoForm;


  
