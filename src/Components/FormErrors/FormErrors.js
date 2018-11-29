import React from "react";

export const FormErrors = ({formErrors}) =>{
    if(formErrors.message.length > 0){
        return <div className="has-danger">
                   <p>{formErrors.message}</p>
               </div>       
    } else {
        return "";
    }
};
  