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
        <div className='form__div--container'>
          <input
            className='form__input--name'
            required
            autocomplete='off'
          ></input>
          <label for='form__input--name' className='input__name--label label'>
            <span className='content-name'>UserID</span>
          </label>
        </div>
        <div className='form__div--container'>
          <input type="password"
            className='form__input--pass'
            required
            autocomplete='off'
          ></input>
          <label for='form__input--name' className='input__pass--label label'>
            <span className='content-name'>Password</span>
          </label>          
        </div>
        <button className='form__login--submit'>Login</button>
      </form>
    );
  };
}

export default LoginForm;
