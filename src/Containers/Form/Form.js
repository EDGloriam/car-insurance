import React, { Component } from "react";
import "./Form.css";
import { FormErrors } from "../../Components/FormErrors/FormErrors";
import Input from './Input/Input';

class Form extends Component {
    

    //   inputHandler = (e) =>{
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     setTimeout(() => (this.setState({[name]: value}, 
    //         () =>  this.validateField(name, value))), 2000);
          
    //   }

      
    //   shouldHasErrorClass(error) {
    //       console.log(error)
    //     return(error.length === 0 ? '' : 'has-error');
    //  }
    
 render () {
   return (
     <div className="container">
         <div class="form-row">
            <form className="step-1 needs-validation" novalidate>
                <h2>Sign up</h2>
                <Input className="form-control" type="text" name="firstName"/>
                
                <button type="submit" className="btn btn-primary">
                    Sign up
                </button>
            </form>
        </div>
     </div>
   )
 }
}
export default Form;