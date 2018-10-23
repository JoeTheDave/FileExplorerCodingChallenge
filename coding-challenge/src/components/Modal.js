import React from 'react';
import PropTypes from 'prop-types';
import '../assets/Modal.css';

const Modal = ({ title, children }) => (
  <div className="modal">
    <header className="modal-header">
      {title}
      <div className="close-button">&times;</div>
    </header>
    <div className="modal-content">{children}</div>
    <footer className="modal-footer">
      <button type="button">Done</button>
    </footer>
  </div>
);

Modal.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Modal;
