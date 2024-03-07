import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPaciente from "./components/ListadoPaciente";
import { useEffect, useState } from "react";

function App() {
  const INICIAL = JSON.parse(localStorage.getItem('pacientes'))??[];
  const [pacientes, setPacientes] = useState(INICIAL);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    localStorage.setItem('pacientes',JSON.stringify(pacientes));
  },[pacientes])

  const eliminarPaciente = id =>{
    const pacientesActualizados = pacientes.filter(paciente => 
      paciente.id !== id);
      setPacientes(pacientesActualizados);
  }

  const tomarValor = (valor) => {
    console.log(valor);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header tomarValor={tomarValor} />
      <div className="mt-12 md:flex  ">
        <Formulario pacientes={pacientes} 
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente} />

        <ListadoPaciente 
        pacientes={pacientes} 
        setPaciente={setPaciente}
        eliminarPaciente = {eliminarPaciente}/>
      </div>
    </div>
  );
}

export default App;
