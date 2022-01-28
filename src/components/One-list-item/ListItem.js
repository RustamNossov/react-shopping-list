import React from "react";
import { Link } from "react-router-dom";

import './LisstItem.css';

import delCross from '../../resources/delete-cross.svg';
import doneIcon from '../../resources/done-icon.svg';

function ListItem(props) {
    
    const {type, onChecked, onDeletedItem, onDone, data} = props;

    const {id, name, creationDate, selected, isDone} = data;
    
    const onHideBackgroung = () => {
        document.body.style.backgroundImage = 'none';
    }
    return (
        <div className={`list-item ${isDone ? 'list-item__done' : null}` }
            style={selected ? {backgroundColor: '#dfd9d7'} : null}
            >
            <input 
                className="list-item__checkbox" 
                type="checkbox" 
                name="select" 
                id={id} 
                checked={selected ? true : false}
                onChange={(e)=>onChecked(e)}/>
            <div className="list-item__group">
                {type === 'lists' ? 
                        id ? <Link to={id} onClick={()=>onHideBackgroung()} className="list-item__name" style={selected ? {fontWeight: 600} : null}>{name}</Link> : null :
                        <a href='#' id={id} className={`list-item__name ${isDone ? 'list-item__name-done' : null}` } onClick={(e)=>onDone(e)} style={selected ? {fontWeight: 600} : null}>{name}</a>}

                <div className="list-item__creation-date">
                    {creationDate}
                </div>
            </div>
            {isDone ? <img className="list-item__done-mark" src={doneIcon} alt="done mark" /> : null}
            <button className="list-item__delete" onClick={()=>onDeletedItem(id)}><img src={delCross} alt="delete button" /></button>
            
        </div>
    )
}

export default ListItem;