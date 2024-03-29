import React, { Component } from 'react';
import FormField from '../utils/Form/formField';

import { connect } from 'react-redux';

import { updateUserData, clearUpdateUser } from '../../actions/userActions';
import { update, generateData, isFormValid, populateFields } from '../utils/Form/formActions';

class UpdatePersonalInfo extends Component {
  state = {
    formError: false,
    formSuccess: '',
    formData: {
      name: {
        element: 'input',
        value: '',
        config:{
          name: 'name_input',
          type: 'text',
          placeholder: 'Enter Your Name'
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ''
      },
      lastname: {
        element: 'input',
        value: '',
        config:{
            name: 'lastname_input',
            type: 'text',
            placeholder: 'Enter your lastname'
        },
        validation:{
            required: true
        },
        valid: false,
        touched: false,
        validationMessage:''
      },
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
      }
    }
  }

  updateForm = (element) => {
    const newFormData = update(element, this.state.formData, 'updateUser');
    this.setState({
      formError: false,
      formData: newFormData
    })
  }

  submitForm = (event) => {
    event.preventDefault();

    let dataToSubmit = generateData(this.state.formData, 'updateUser');
    let formIsValid =  isFormValid(this.state.formData, 'updateUser');

    if(formIsValid) {
      this.props.dispatch(updateUserData(dataToSubmit)).then(() => {
        if(this.props.user.updateUser.success) {
          this.setState({
            formSuccess: true
          },() => {
            setTimeout(() => {
              this.props.dispatch(clearUpdateUser());
              this.setState({
                formSuccess: false
              })
            }, 2000)
          })
        }
      })
    } else {
      this.setState({
        formError: true
      })
    }
  }

  componentDidMount(){
    const newFormData = populateFields(this.state.formData,this.props.user.userData);
    this.setState({
      formData: newFormData
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(event)=>  this.submitForm(event)}>
          <h2>Personal Information</h2>
          <div className="form_block_two">
            <div className="block">
              <FormField
                id={'name'}
                formData={this.state.formData.name}
                change={(element) => this.updateForm(element)}
              />
            </div>
            <div className="block">
              <FormField
                id={'lastname'}
                formData={this.state.formData.lastname}
                change={(element) => this.updateForm(element)}
              />
            </div>
          </div>
          <div>
            <FormField
              id={'email'}
              formData={this.state.formData.email}
              change={(element) => this.updateForm(element)}
            />
          </div>
          <div>
            {
              this.state.formSuccess ?
                <div className="form_success">Success</div>
              : null
            }
            {this.state.formError ?
              <div className="error_label">
                Please check your data
              </div>
            : null}

            <button onClick={(event) => this.submitForm(event)}>Update Information</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(UpdatePersonalInfo);
