import React from 'react';
import PropTypes from 'prop-types';
import './Section.css';

const Section = ({ title, children }) => (
  <section className="Section">
    <h1 className="Title">{title}</h1>
    {children}
  </section>
);

Section.defaultProps = {
  title: '',
  children: [],
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
