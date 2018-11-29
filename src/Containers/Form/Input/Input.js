import React, { Component } from 'react';
import { FormErrors } from '../../../Components/FormErrors/FormErrors';
// ${this.shouldHasErrorClass(this.state.formErrors.password)}`}

class Input extends Component {
    constructor(props){
        super(props);
        this.state = {
            fieldErrors: {message: ''},
            isValid: false
            // passwordIsValid: false,
            // formValid: false
          };
    }
    

    inputHandler = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        const type = e.target.type;
        this.validateField(type, name, value);
    }

    validateField(type, name, value){
        const errorMessage = this.checkErrors(type, value);
        if (errorMessage === ''){
            this.setState({fieldErrors: {message: ''}, [name]: value, isValid: true});
        } else {
            this.setState({fieldErrors: {message: errorMessage}, isValid: false})
        }
    }

    hasError(){
        if(this.state.fieldErrors.message !== '' && this.state.isValid === false){
            return true;
        }
        return false;
    }

    checkErrors(fieldType, value) {
        let errorMessage;
        let isValid;
        switch(fieldType) {
            case 'email':
                isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                errorMessage = isValid ? '' : ' is invalid';
                break;
            // case 'password':
            //     passwordIsValid = value.length >= 6;
            //     fieldErrors.password = passwordIsValid ? '': ' is too short';
            //     break;
            case 'text':
                isValid = value !== '' && value !== ' ';
                errorMessage = isValid ? '': " can\'t be blank or empty";
                break;
            default:
                break;
        }

        return errorMessage;
      }

    
  render() {
    const {type, name, className} =  this.props;
    const errorClass = this.hasError ? 'has-danger' : '';

    return (
        <div className="col-md-4 mb-3">
            <label htmlFor={name}>First name</label>
            <input 
                type={type} 
                className={`${className} form-control`} 
                id={name} 
                placeholder="First name" 
                value={this.state.email}
                onBlur={this.inputHandler} required />
                
            <div className="valid-feedback">
                Looks good!
            </div>
        </div>
    );
  }
}

export default Input;


