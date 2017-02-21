import React, { Component } from 'react';

import '../../sass/componentStyles/panelDrugs.scss';

import * as constants from '../constants/AppConstants';

import DrugContainer from '../containers/DrugContainer';
import DrugList from './DrugList';
import Drug from './Drug';
import PanelHeading from './PanelHeading';
import ButtonControlContainer from '../containers/ButtonControlContainer';

const PanelDrugs = ({
    btnShowMore,
    heading,
    params,
    whichPanelStyle,
    ...otherProps
}) => {

    // TODO: IMPLEMENT STYLE TYPE FOR EACH CATEGORY TAB!!!!

    return (
        <div className='panel panel-default' >

            <PanelHeading
                heading={ heading || params.category }
                whichPanelStyle={ whichPanelStyle }
            />

            <div className="panel-body">

                <DrugContainer { ...otherProps }>
                    <DrugList />
                </DrugContainer>

                { (btnShowMore) ?
                  <ButtonControlContainer { ...otherProps } control={ constants.BTN_CONTROL.SHOW_MORE } >
                    show more...
                  </ButtonControlContainer>
                 : null }

            </div>
        </div>
    );
}
export default PanelDrugs;
