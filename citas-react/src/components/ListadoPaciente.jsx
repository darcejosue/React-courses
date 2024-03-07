import { useEffect } from "react";
import Paciente from "./Paciente";

const ListadoPaciente = ({ pacientes, setPaciente, eliminarPaciente }) => {
  useEffect(()=>{
    if (pacientes.length>0){
    console.log('Nuevo paciente');
  }
  },[pacientes]);
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Listado Paciente</h2>

      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus {""}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>

      {pacientes && pacientes.length ? (
        pacientes.map((paciente) => (
          <Paciente paciente={paciente} 
          key={paciente.id} 
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente} />
        ))
      ) : (
        <div className="text-center font-black ">Aun no hay pacientes</div>
      )}
    </div>
  );
};

export default ListadoPaciente;
