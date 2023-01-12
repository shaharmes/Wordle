import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import { gameContext } from '../context/GameContext';
import { gameType } from '../hooks/useGame';


export function ResultModal() {

  const {showResult, setShowResult, handleCloseResult, gameReset, gameResult} = useContext(gameContext) as gameType;

  return (
    <>
      <Modal
        show={showResult}
        onHide={handleCloseResult}
        backdrop="static"
        keyboard={false}
        centered={true}
        restoreFocus={true}
        onExited={gameReset}
        size="sm"
      >
        <Modal.Header id="modalH" closeButton >
            {/* <Modal.Title id="contained-modal-title-vcenter">
                You {gameResult.current}!
            </Modal.Title> */}
        </Modal.Header> 
        <Modal.Body id="modalB" style={{alignSelf:"center"}}>
          <h5 style={{fontSize:"30px"}}>You {gameResult.current}!</h5>
        </Modal.Body>
      </Modal>
    </>
  );
}