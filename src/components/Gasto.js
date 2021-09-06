import React from 'react'
import PropTypes from 'prop-types';

const Gasto = ({ gasto }) => {
    return (
        <li className="gastos">
            <p>
                {gasto.nombre}
                <span className="gasto">S/. {gasto.cantidad.toFixed(2)}</span>
            </p>
        </li>
    );
}

Gasto.protoTypes = {
    gasto: PropTypes.object.isRequired
}

export default Gasto;