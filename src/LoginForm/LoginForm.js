import React, { Component } from 'react';
import './LoginForm.scss';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: ''
    };
  }

  render = () => {
    return (
      <form className='form__login'>
        <div>
          <input className='form__input--name'></input>
        </div>
        <div>
          <input className="form__input--pass"></input>
        </div>
        <button className='form__login--submit'>Login</button>
      </form>
    );
  };
}

export default LoginForm;
