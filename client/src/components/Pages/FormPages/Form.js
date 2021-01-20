import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <div>
            <div className='form-container'>
                <span className='close-btn'>×</span>
                {!isSubmitted ? (
                    <FormSignup submitForm={submitForm} />
                ) : (
                        <FormSuccess />
                    )}
            </div>
        </div>
    );
};

export default Form;