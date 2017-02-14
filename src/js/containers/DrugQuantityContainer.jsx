import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { inreaseQuantityOfDrug, decreaseQuantityOfDrug } from '../actions/actions';
import { cartReducer } from '../reducers/reducers';

import ButtonNextPrev from '../components/ButtonNextPrev';


class DrugQuantityContainer extends Component {

    constructor (props) {
        super(props);
        this.handleClickNextPrev = this.handleClickNextPrev.bind(this);
    }

    handleClickNextPrev (direction) {

    }

    render () {
        let { drugID, drugPrice, quantityById, ...otherProps } = this.props;

        let quantityOfDrugID = quantityById[drugID];
        let showQuantityOfCurrentDrug = (quantityById.hasOwnProperty(drugID)) ? quantityOfDrugID : 1;

        // TODO: create reducer or func in cartReducer to se default
        // values for each drugs except shopping cart
        // let showDefaultQuantity = 1 ||

        return (
            <div className="row">
                <ButtonNextPrev
                  onClickPrevNext={ this.handleClickNextPrev }
                  direction="left"
                  { ...otherProps } />
                {/* <p>{ showDefaultQuantity }</p> */}
                <ButtonNextPrev
                  onClickPrevNext={ this.handleClickNextPrev }
                  direction="right"
                  { ...otherProps } />
                <p>quantity on shopping-cart: { showQuantityOfCurrentDrug }</p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    let { cartReducer: { quantityById } } = state;

    return {
        quantityById
    }
}

export default connect(
  mapStateToProps
)(DrugQuantityContainer);
