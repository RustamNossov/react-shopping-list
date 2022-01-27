import React from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import Spinner from "../spinner/Spinner";
import Error from "../Error/Error";

import withList from "../withList/withList";


import './Items.css'

import add from '../../resources/add-icon.svg';
import bin from '../../resources/bin.svg';
import leftArrow from '../../resources/left-arrow-icon.svg'
import bckg from '../../resources/shopping-bag-grocery.png'

const onShowBackgroung = () => {
    document.body.style.backgroundImage = `url(${bckg})`;
}



function Items(props) {
    const {
        loading, 
        error,
        elements, 
        panelClasses, 
        onSelectAll, 
        onOpenModal, 
        modalIsOpen, 
        listsDB, 
        itemDescription,
        onDeleteSelectedItems, 
        setModalIsOpen,
        newItemInputValue,
        onCreateInputValue,
        onCreateNewValue,
        newItemViaPressEnter,
        modalText,
        closeModal,
        onSetUndone,
        showUndone
    } = props;
    
    

    const {creationDate, name} = itemDescription.id ? itemDescription : {creationDate:'',name:''};
    return(
        <div className="items-list base lists">
            <div className="container items-list__container lists__container">
                <div className="items-list__first-line">
                    <Link to='/lists' onClick={()=>onShowBackgroung()}><img   src={leftArrow} alt="go back arrow"/></Link>
                    <h1 className="items-list__list-name">
                        {name && name.length > 18 ? `${name.slice(0, 18)}...` : name}
                    </h1>

                </div>
                
                <div className="items-list__creation-date">
                    Created {creationDate}
                </div>
                <div className="items-list__group">
                    <div>
                        <input 
                            checked={showUndone} 
                            onChange={()=>onSetUndone() }
                            type="checkbox" 
                            name="active" 
                            id="active" />
                        <label for="active">Show only <span>undone items</span></label>
                    </div>
                    
                    <div className="items-list__records-amount">
                    {elements.length} records
                </div>
                </div>
                
                <div className="lists__add items-list__add">
                    <input  className="lists__add-input items-list__add-input" 
                            type="text" 
                            value={newItemInputValue}
                            onChange={(e)=>onCreateInputValue(e.target.value)}
                            onKeyDown={(e)=>newItemViaPressEnter(e)}
                            placeholder="Create new item"/>
                    <button className="lists__add-icon items-list__add-icon">
                        <img    src={add} 
                                alt="add record icon" 
                                onClick={()=>onCreateNewValue()}
                        />
                    </button>
                </div>

                <div className="lists__items-list">
                    {error ? <Error/> : loading ? <Spinner/> : elements}
                           
                </div>
                <div className={`lists__actions ${panelClasses}`}>
                    <button onClick={()=>onSelectAll()} className="lists__actions-all button">All</button>
                    <button onClick={()=>onOpenModal()} className="lists__actions-delete button"><img src={bin} alt="delete icon" /></button>
                </div>
            </div>

            {modalIsOpen ? <Modal 
                                data={listsDB}
                                modalText={modalText}
                                closeModal={(e)=>closeModal(e)}
                                onDeleteSelectedItems={onDeleteSelectedItems} 
                                setModalIsOpen={setModalIsOpen}/> : null }
        </div>

            
    )
}

const ItemComponent = withList(Items, 'lists')

export default ItemComponent;
