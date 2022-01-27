import React from "react";
import { Helmet } from 'react-helmet';
import ItemComponent from "../Items/items";

function ListPage() {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Page with items"
                />
                <title>Your list</title>
            </Helmet>
                <ItemComponent/>

        </>
    )
        
       
        
}

export default ListPage;