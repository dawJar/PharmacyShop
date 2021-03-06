import React, { PropTypes } from 'react';

import ButtonGroup from '../Buttons/ButtonGroup';
import DrugQuantityContainer from '../../containers/DrugQuantityContainer';


const DrugControls = ({
    id,
    drugPrice,
    showAsShoppingCart,
    ...otherProps
}) => {

    return (
        <div className="col-xs-12 col-sm-12 col-md-2">
            { (showAsShoppingCart) ?
                <DrugQuantityContainer
                    drugID={ id }
                    drugPrice={ drugPrice }
                    { ...otherProps }
                    /> : null
            }
            <ButtonGroup
                showAsShoppingCart={ showAsShoppingCart }
                drugID={ id }
                drugPrice={ drugPrice }
                { ...otherProps }
            />
        </div>
    );
}

DrugControls.PropTypes = {
  id: PropTypes.number.isRequired,
  drugPrice: PropTypes.number.isRequired,
  showAsShoppingCart: PropTypes.bool.isRequired
};

export default DrugControls;
