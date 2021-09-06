import React, { Fragment, useState, useEffect} from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import Presupuesto from './components/Presupuesto';

function App() {
  // Definir State
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrar, setMostrar] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [creargasto, setCreargasto] = useState(false)

  // Effecet 
  useEffect(() => {
    if(creargasto) {
      // Agrega el nuevo presupuesto
      setGastos([...gastos, gasto]);

      // Resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante);
    }
    setCreargasto(false);
  }, [gasto, gastos, restante, creargasto]);

  return (
    <Fragment>
      <div className="container">
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido" >
          {mostrar
            ?
              <Pregunta
                setPresupuesto={setPresupuesto}
                setRestante={setRestante}
                setMostrar={setMostrar}
              />
            :
              <div className="row">
                <div className="one-half column">
                  <Formulario
                    setGasto={setGasto}
                    setCreargasto={setCreargasto}
                  />
                </div>
                <div className="one-half column">
                  <Listado
                    gastos={gastos}
                  />
                  <Presupuesto
                    presupuesto={presupuesto}
                    restante={restante}
                  />
                </div>
              </div>
          }
        </div>
      </div>
    </Fragment>
  );
}

export default App;
