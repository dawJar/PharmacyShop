import React, { Component } from 'react';

import '../../sass/componentStyles/panelDrugs.scss';

import PanelHeading from './PanelHeading';
import PanelBody from './PanelBody';

const PanelDrugs = ({
    heading,
    params,
    whichPanelStyle,
    ...otherProps
}) => {
    let newClassName = 'panel panel-default ' + whichPanelStyle;

    return (
        <div className={ newClassName } >
            <PanelHeading
                heading={ heading || params.category }
                whichPanelStyle={ whichPanelStyle }
            />
            <PanelBody { ...otherProps } />
        </div>
    );
}
export default PanelDrugs;
