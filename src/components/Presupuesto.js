import React, { Fragment } from 'react';
import { cambiarColor } from '../helpers';
import PropTypes from 'prop-types';

const Presupuesto = ({ presupuesto, restante }) => {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: S/. {presupuesto.toFixed(2)}
            </div>
            <div className={cambiarColor(presupuesto,restante)}>
                Presupuesto: S/. {restante.toFixed(2)}
            </div>
        </Fragment>

    );
}

Presupuesto.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}
export default Presupuesto;