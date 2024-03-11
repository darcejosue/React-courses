import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = ({ presupuesto, gastos }) => {
  const [procentaje, setPorcentaje] = useState(0);
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => gasto.cantidad + total,
      0
    );
    const totalDisponible = presupuesto - totalGastado;

    const nuevoPorcentaje = (
      ((presupuesto - totalDisponible) / presupuesto) *
      100
    ).toFixed(2);

    setDisponible(totalDisponible);
    setGastado(totalGastado);

    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje);
    }, 1000);
  }, [gastos]);

  const cantidad = (cantidadP) => {
    return cantidadP.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: "#3B82F6",
            trailColor: "#F5F5F5",
          })}
          value={procentaje}
          text={`${procentaje} % Gastados`}
        />
      </div>

      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto:</span> C{cantidad(presupuesto)}{" "}
        </p>
        <p>
          <span>Disponible:</span> C{cantidad(disponible)}{" "}
        </p>
        <p>
          <span>Gastado:</span> C{cantidad(gastado)}{" "}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
