import React, {useEffect} from "react";
import { Link } from "react-router-dom";


import errorImg from '../../resources/error.png'
import bckg from '../../resources/shopping-bag-grocery.png'


import './ErrorPage.css';

const ErrorPage = () => {

    useEffect(()=>document.body.style.backgroundImage = 'none',[])
    
    
    const onShowBackgroung = () => {
        document.body.style.backgroundImage = `url(${bckg})`;
    }

    return (
        <div className="error-page">
            <img src={errorImg} alt="error image" className="error-page__error-img" />
            <h2 className="error-page__error-text">Uuups... Looks like this page does not exist.</h2>
            <Link to="/lists" onClick={()=>onShowBackgroung()} className="error-page__link">Go to main page</Link>

        </div>
    )
}

export default ErrorPage;