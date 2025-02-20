import React from 'react';
import './ExpandingCircle.css';

// eslint-disable-next-line react/prop-types
const ExpandingCircle = ({ isExpanded }) => (
  <div className={`expanding-circle ${isExpanded ? 'expanded' : ''}`}></div>
);

export default ExpandingCircle;
