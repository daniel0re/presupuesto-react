import React, { Fragment, useState } from 'react'
import Error from './Error';
import PropTypes from 'prop-types';

const Pregunta = ({ setPresupuesto, setRestante, setMostrar }) => {


    // Definir States
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    // Funcion que lee el presupuesto
    const definirPresupuesto = (e) => {
        setCantidad(parseInt(e.target.value, 10));
    }
    const submitPresupuesto = (e) => {
        e.preventDefault();
        if (cantidad <= 0 || isNaN(cantidad)) {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 3000);
            return;
        }
        // Si pasa la validacion
        setError(false);
        setMostrar(false);
        setPresupuesto(cantidad);
        setRestante(cantidad);
    }
    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error mensaje={'Ingrese una cantidad valida'} /> : null}
            <form action=""
                onSubmit={submitPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="u-full-width button-primary"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
    );
}

Pregunta.propType = {
    setPresupuesto: PropTypes.func.isRequired,
    setRestante: PropTypes.func.isRequired,
    setMostrar: PropTypes.func.isRequired,
}

export default Pregunta;