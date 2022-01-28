import React from "react";
import { Helmet } from 'react-helmet';
import ErrorPage from "../ErrorPage/ErrorPage";

function ErrPage() {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Error page"
                />
                <title>Error</title>
            </Helmet>
                <ErrorPage/>

        </>
    )
        
       
        
}

export default ErrPage;