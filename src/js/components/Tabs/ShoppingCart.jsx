import React, { PropTypes } from 'react';

import '../../../sass/componentStyles/tabContentStyle.scss';

import PanelDrugs from '../PanelDrugs';
import NavLinkContainer from '../../containers/NavLinkContainer';

const ShoppingCart = ({
    addedIds,
    totalPrice,
    linksData,
    ...otherProps
}) => {

    let emptyPanel = addedIds.length === 0;

    return (
        <div className="container-fluid">
            <div>
                <h2>
                    { (!emptyPanel) ?
                      'Shopping cart:' : 'Your shopping cart is empty.'
                    }
                </h2>
                { (!emptyPanel) ?
                    null :
                    <p>
                        Check our
                        <NavLinkContainer data={ linksData } >
                            main page
                        </NavLinkContainer>
                    </p>
                }
            </div>
            { (!emptyPanel) ?
              <PanelDrugs
                showOnSale={ false }
                heading="Basket"
                { ...otherProps }/> : null
            }
            {
              (!emptyPanel) ?
              <div>
                <p>total: { totalPrice }</p>
              </div> : null
            }
        </div>
    )
}

ShoppingCart.defaultProps = {
    linksData: {
            linkPath: "/sale",
            linkName: "Sale!",
            linkFilter: "SHOW_ON_SALE"
    }
}

export default ShoppingCart;
