import React, { PropTypes } from 'react';

import DrugContainer from '../containers/DrugContainer';
import Drug from './Drug';


const SelectedDrug = ({ idToShow, drugs, ...otherProps }) => (
      <Drug
          { ...drugs[idToShow] }
          { ...otherProps }
          removeDetails
      />
);

export default SelectedDrug;
