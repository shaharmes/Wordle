import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { navContext } from '../context/NavContext'
import { navType } from '../hooks/useNav'
import { ModalLogin } from './LogInModal'
import { ModalHelp } from './HelpModal'


export function NavBar() : JSX.Element {

  const {handleShowLogin,
         user, 
         setUser, 
         handleShowHelp} = useContext(navContext) as navType;

  let navigate: NavigateFunction = useNavigate();
  
  const sendHome = ():void => {
        navigate('/');
    }

  const handleLogout = ():void => {
    setUser('');
    sendHome();
  }

  return (
    <nav className="navbar navbar-dark bg-dark" id='navB'>
        <div id="navLeft">
          <Button className="navbar-brand" id="navRight" variant="primay" onClick={sendHome}>Home</Button>
          { user ? <Button className="navbar-brand user" id="navRight" variant="primay">Hi,&nbsp;&nbsp;&nbsp;{user}!&nbsp;:)</Button> : 
          <Button className="navbar-brand" id="navRight" variant="primay" onClick={handleShowLogin}>Login</Button>}
          {user ? <Button className="navbar-brand" id="navRight" variant="primay" onClick={handleLogout}>Logout</Button> : null}
          <ModalLogin />
        </div>
        <h1>Wordle</h1>
        <Button className="navbar-brand" id="navRight" variant="primay" onClick={handleShowHelp}>Info</Button>
        <ModalHelp />
    </nav>
  )
}