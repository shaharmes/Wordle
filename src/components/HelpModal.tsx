import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import { navContext } from '../context/NavContext';
import { navType } from '../hooks/useNav';

export function ModalHelp() {
  const {showHelp, setShowHelp, handleCloseHelp} = useContext(navContext) as navType;
  
  return (
    <>
      <Modal
        show={showHelp}
        onHide={handleCloseHelp}
        backdrop="static"
        keyboard={false}
        centered={true}
        restoreFocus={true}
      >
        <Modal.Header id="modalH" closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            How to play
          </Modal.Title>
        </Modal.Header>
        <Modal.Body id="modalB">
          <h5>Guess the Wordle in 6 tries.</h5>
          <ul>
            <li>Each guess must be a valid 5-letter word</li>
            <li>The color of the tiles will change to show how close your guess was to the word</li>
          </ul>
          <p id="pMod">
              <b>Examples</b>
          </p>
          <div id="rowMod">
              <div className='letter' id="greenLet">W</div>
              <div className='letter' id="modalLet">O</div>
              <div className='letter' id="modalLet">R</div>
              <div className='letter' id="modalLet">D</div>
              <div className='letter' id="modalLet">S</div>
          </div>
          <p id="pMod">
              <b>W</b> is in the word and in the right spot.
          </p>
          <div id="rowMod">
              <div className='letter' id="modalLet">P</div>
              <div className='letter' id="modalLet">A</div>
              <div className='letter' id="yellowLet">G</div>
              <div className='letter' id="modalLet">E</div>
              <div className='letter' id="modalLet">S</div>
          </div>
          <p id="pMod">
              <b>G</b> is in the word but not in the right spot.
          </p>
          <div id="rowMod">
              <div className='letter' id="modalLet">L</div>
              <div className='letter' id="modalLet">E</div>
              <div className='letter' id="modalLet">M</div>
              <div className='letter' id="grayLet">O</div>
              <div className='letter' id="modalLet">N</div>
          </div>
          <p id="pMod">
              <b>O</b> is not in the word in any spot.
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}