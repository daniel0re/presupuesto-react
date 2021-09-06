import React, { useState } from 'react'
import Error from './Error';
import PropTypes from 'prop-types';

const Formulario = ({setGasto, setCreargasto}) => {

    // Usate
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    const agregarGasto = e => {
        e.preventDefault();
        if (cantidad <= 0 || isNaN(cantidad) || nombre === '') {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 3000);
            return;
        }
        setError(false);
        // Construir gasto
        const gasto = {
            nombre,
            cantidad,
            id: Date.now()
        }
        // Pasar el gasto añadido
        setGasto(gasto);
        setNombre('');
        // Resetear el formulario
        setCantidad(0);
        setCreargasto(true);
    }

    return (
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aquí</h2>
            {error
                ?
                <Error mensaje='Agregar una cantidad valida'/>
                :
                null
            }
            <div className="campo">
                <label htmlFor="">Nombre del gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ejm. Transporte"
                    value={nombre}
                    onChange={e => (setNombre(e.target.value))}
                />
                <label htmlFor="">Cantidad a gastar</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ejm. 300"
                    value={cantidad}
                    onChange={e => (setCantidad(parseInt(e.target.value, 10)))}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Agregar gasto"
                />
            </div>
        </form>
    );
}

Formulario.propTypes = {
    setGasto: PropTypes.func.isRequired,
    setCreargasto: PropTypes.func.isRequired
}

export default Formulario;