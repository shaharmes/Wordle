import React, { useContext } from 'react';
import { ModalHeader } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { navContext } from '../context/NavContext';
import { navType } from '../hooks/useNav';
import { LogIn } from './LogIn';


export function ModalLogin() {
  const {showLogin, handleCloseLogin} = useContext(navContext) as navType;
  
  return (
    <>
      <Modal
        show={showLogin}
        onHide={handleCloseLogin}
        backdrop="static"
        keyboard={false}
        centered={true}
        restoreFocus={true}
        contentClassName="modalLogin"
      >
        <ModalHeader id="modalH" closeButton></ModalHeader>
        <LogIn />
      </Modal>
    </>
  );
}