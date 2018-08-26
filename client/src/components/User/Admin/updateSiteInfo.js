import React, { Component } from 'react';

import FormField from '../../utils/Form/formField';
import { update, generateData, isFormValid, populateFields } from '../../utils/Form/formActions';

import { connect } from 'react-redux';
import { getSiteData } from '../../../actions/siteActions';

class UpdateSiteInfo extends Component {
  state = {
    formError: false,
    formSuccess: false,
    formData: {
      address: {
        element: 'input',
        value: '',
        config:{
          label: 'Address',
          name: 'address_input',
          type: 'text',
          placeholder: 'Enter Your Site Address'
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: '',
        showlabel: true
      },
      hours: {
        element: 'input',
        value: '',
        config:{
          label: 'Working Hours',
          name: 'hours_input',
          type: 'text',
          placeholder: 'Enter Your Site Working Hours'
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: '',
        showlabel: true
      },
      phone: {
        element: 'input',
        value: '',
        config:{
          label: 'Phone',
          name: 'phone_input',
          type: 'text',
          placeholder: 'Enter Your Phone Number'
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: '',
        showlabel: true
      },
      email: {
        element: 'input',
        value: '',
        config:{
          label: 'Shop Email',
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
        validationMessage: '',
        showlabel: true
      },
    }
  }

  updateForm = (element) => {
    const newFormData = update(element, this.state.formData, 'siteInfo');
    this.setState({
      formError: false,
      formData: newFormData
    })
  }

  submitForm = (event) => {
    event.preventDefault();

    let dataToSubmit = generateData(this.state.formData, 'siteInfo');
    let formIsValid =  isFormValid(this.state.formData, 'siteInfo');

    if(formIsValid) {
      console.log(dataToSubmit)
    } else {
      this.setState({
        formError: true
      })
    }
  }

  componentDidMount() {
    this.props.dispatch(getSiteData()).then(() => {
      console.log(this.props.site.siteData[0]);
      const newFormData = populateFields(this.state.formData, this.props.site.siteData[0]);
      this.setState({
        formData: newFormData
      })
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.submitForm(event)}>
          <h1>Site info</h1>
          <FormField
            id={'address'}
            formData={this.state.formData.address}
            change={(element) => this.updateForm(element)}
          />

          <FormField
            id={'hours'}
            formData={this.state.formData.hours}
            change={(element) => this.updateForm(element)}
          />

          <FormField
            id={'phone'}
            formData={this.state.formData.phone}
            change={(element) => this.updateForm(element)}
          />

          <FormField
            id={'email'}
            formData={this.state.formData.email}
            change={(element) => this.updateForm(element)}
          />

          <div>
            {
              this.state.formSuccess ?
              <div className="form_success">
                Success
              </div>
              : null
            }

            { this.state.formError ?
              <div className="error_label">
                Please check your data
              </div>
              : null}
            <button onClick={(event) => this.submitForm(event)}>
              Update Information
            </button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    site: state.site
  }
}

export default connect(mapStateToProps)(UpdateSiteInfo);
