import React, { Component } from 'react';
import FormField from '../utils/Form/formField';
import { update, generateData, isFormValid } from '../utils/Form/formActions';
import { connect } from 'react-redux';

class Login extends Component {

  state = {
    formError: false,
    formSuccess: '',
    formData: {
      email: {
        element: 'input',
        value: '',
        config:{
          name: 'email_input',
          type: 'email',
          placeholder: 'Enter Your Email'
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,
        touched: false,
        validationMessage: ''
      },
      password: {
        element: 'input',
        value: '',
        config:{
          name: 'password',
          type: 'password',
          placeholder: 'Enter Your password'
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ''
      }
    }
  }

  updateForm = (element) => {
    const newFormData = update(element, this.state.formData, 'login');
    this.setState({
      formError: false,
      formData: newFormData
    })
  }

  submitForm = (event) => {
    event.preventDefault();

    let dataToSubmit = generateData(this.state.formData, 'login');
    let formIsValid =  isFormValid(this.state.formData, 'login');

    if(formIsValid) {
      console.log(dataToSubmit);
    } else {
      this.setState({
        formError: true
      })
    }
  }

  render() {
    return (
      <div className="signin_wrapper">
        <form onSubmit={(event) => this.submitForm()}>
          <FormField
            id={'email'}
            formData={this.state.formData.email}
            change={(element) => this.updateForm(element)}
          />

          <FormField
            id={'password'}
            formData={this.state.formData.password}
            change={(element) => this.updateForm(element)}
          />

          {this.state.formError ?
            <div className="error_label">
              Please check your data
            </div>
          : null}

          <button onClick={(event) => this.submitForm(event)}>Login</button>

        </form>
      </div>
    )
  }
}

export default connect()(Login);
