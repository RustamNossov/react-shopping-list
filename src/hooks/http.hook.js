import React, { useCallback, useState } from "react";
import { Navigate } from "react-router-dom";

import ErrorPage from "../components/ErrorPage/ErrorPage";

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [errorRedirect, setErrorRedirect] = useState(false)
    
    
console.log('error:',error )
    const request = useCallback( async (url, method='GET', body=null, headers={'Content-Type' : 'application/json'}) => {
        setLoading(true)
        if (body) body=JSON.stringify(body);
        try {
            const response = await fetch(url, {method, body: body, headers});
             if (!response.ok) {
                    setErrorRedirect(true)
                    //throw new Error(`Could not fetch ${url}, status: ${response.status}`);
                }
            const data = await response.json() 

            setLoading(false)

            return data;

        } catch(e) {

            setLoading(false)
            setError(e.message)
            throw e;
        }
    }, []);

    const clearError = useCallback(() => setError(null), []);

    
    return { loading, request, error, clearError, errorRedirect}


}