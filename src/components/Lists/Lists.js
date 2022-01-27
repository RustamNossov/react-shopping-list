import React from "react";

import withList from "../withList/withList";
import Error from "../Error/Error";
// ---components
import Modal from "../Modal/Modal";
import Spinner from "../spinner/Spinner";


// ---styles
import './Lista.css'

// ---pictures
import  search from '../../resources/search-icon.svg';
import add from '../../resources/add-icon.svg';
import bin from '../../resources/bin.svg';



const Lists = (props) => {

    const {
        loading, 
        error,
        elements, 
        panelClasses, 
        onSelectAll, 
        onOpenModal, 
        modalIsOpen, 
        listsDB, 
        onDeleteSelectedItems, 
        setModalIsOpen,
        newItemInputValue,
        onCreateInputValue,
        onCreateNewValue,
        newItemViaPressEnter,
        findValue,
        onChangeFindValue,
        modalText,
        closeModal
    } = props;
    
    return  (
        <div className="base lists">
            <div className="container lists__container">
                <h1 className="lists__title">Your lists:</h1>
                <div className="lists__find">
                    <input className="lists__find-input"
                            value={findValue}  
                            onChange={(e)=>onChangeFindValue(e.target.value)}
                            type="text" 
                            placeholder="What would you like to find?"/>
                    <img className="lists__find-icon"  src={search} alt="find icon" />
                </div>
                <div className="lists__add">
                    <input  className="lists__add-input" 
                            type="text" 
                            value={newItemInputValue}
                            onChange={(e)=>onCreateInputValue(e.target.value)}
                            onKeyDown={(e)=>newItemViaPressEnter(e)}
                            placeholder="Create new list"/>
                    <button className="lists__add-icon">
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

const ListsComponent = withList(Lists, 'lists')

export default ListsComponent;

