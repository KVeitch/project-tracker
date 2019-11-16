import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import './Nav.scss'

const Nav = () => {
  return (
    <nav>
      <select className="isProject">
        <option value="project">Project</option>
        <option value="priority">Priority</option> 
      </select>
      <LoginForm />
    </nav>
  )
}

export default Nav;