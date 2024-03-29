import React, { Fragment } from 'react';
import Gasto from './Gasto';
import PropTypes from 'prop-types';

const Listado = ({ gastos }) => {
    return (
        <Fragment>
            <div className="gastos-realizados">
                {gastos.map(gasto=>(
                    <Gasto 
                        key={gasto.id}
                        gasto={gasto}
                    />
                ))}
            </div>
            
        </Fragment>
    );
}

Listado.protoTypes = {
    gastos: PropTypes.array.isRequired
}

export default Listado;