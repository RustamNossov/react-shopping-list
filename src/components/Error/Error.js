import React from "react";
import './Error.css';
import errorPct from '../../resources/error.png';

const Error = () => {
    return (
        <div className="error">
            <img src={errorPct} alt="error picture" className="error__pct" />
            <p className="error__message">The service is unavailable now...<span>Please try later.</span></p>

        </div>
    )
}

export default Error;