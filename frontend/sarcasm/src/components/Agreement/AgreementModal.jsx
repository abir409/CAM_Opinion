import React,{useState} from 'react';

const AgreementModal = ({setShowTerms}) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    const handleAgreeButtonClick = () => {
        localStorage.setItem('hasAgreedToTerms', 'true');
        setShowTerms(false);
    };


    return (
        <div className="container my-5 p-5 shadow-lg rounded" id="terms-container">
            <h1 className="text-center mb-4">Terms and Conditions</h1>
            <div className="terms-content p-3">
                <p>**As a corporate professional, I promise to never hurt anyone personally and to treat everyone with respect and kindness.</p>
                <p>**I commit to always communicating respectfully, avoiding slang and bad words, and maintaining a professional demeanor.</p>
                
            </div>
            <div className="form-check my-4">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="agreeCheckbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                />
                <label className="form-check-label" htmlFor="agreeCheckbox">I agree with the terms and conditions</label>
            </div>
            <div className="text-center">
                <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    id="agreeButton"
                disabled={!isChecked}
                onClick={handleAgreeButtonClick}
                >
                    I agree with the terms and conditions
                </button>
            </div>
        </div>
    )
}

export default AgreementModal;
