import React from "react";
import { Helmet } from 'react-helmet';
import ListsComponent from "../Lists/Lists";

function MainPage() {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Page with list of user lists"
                />
                <title>My shopping list</title>
            </Helmet>
                <ListsComponent/>

        </>
    )
        
       
        
}

export default MainPage;