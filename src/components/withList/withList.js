import React, {useState, useEffect, useRef} from "react";
import { useParams } from "react-router-dom";

// ---components
import ListItem from "../One-list-item/ListItem";

// ---services
import useShoppingListService from "../../services/ShoppingListService";

const withList = (BaseComponent, ListName) => {
    return (props) => {
        const [listsDB, setListsDB] = useState([])
        const [itemDescription, setItemDescription] = useState([])
        const [panelClasses, setpanelClasses] = useState(null);
        const [modalIsOpen, setModalIsOpen] = useState(false);
        const [newItemInputValue, setNewItemInputValue] = useState('');
        const [findValue, setFindValue] = useState('');
        const [elements, setElements] = useState([]);
        const [showUndone, setShowUndone] = useState(false);
        const deleteId = useRef(null);
        const modalText = useRef(null);
        const listId = useParams().listname;
        const link = listId ? 'records' : 'lists';
        const rand = require("random-key");


        const {error, errorRedirect, loading, getAList, postData, patchData, deleteData} = useShoppingListService();

        
        //============== fetching data ==============//

        const onGetAllLists = () => {
            const newLink = listId ? `${link}/${listId}` : link
            getAList(newLink)
                .then(data => {
                    onFindItem(listId ? data.records : data.reverse());
                    setItemDescription(listId ? {id: data.id, name: data.name, creationDate: data.creationDate} : [])
                    onHiddingPanel(listId ? data.records: data)
                    //onFindItem(findValue);
                })
        }
        
        useEffect(()=>{
            onGetAllLists();
        }, [])

        
        // ================ selecting items =============//
        const onHiddingPanel = (list)=> {
            
            if (list.findIndex(elem=> elem.selected === true) !== -1) {
                
                setpanelClasses('active')
            } else {
                setpanelClasses(null)
            }
        }

        const onChecked = (e) => {
            
            const id = e.target.id;
            const newlistsDB = listsDB.map(item => {
                if (item.id===id) {
                    return { ...item, selected: !item.selected,};               
                } else {
                    return item;
                }
            })
            onHiddingPanel(newlistsDB);
            setListsDB(newlistsDB);
            
        }


        const onSelectAll = () => {
        
            if (listsDB.findIndex(elem=> elem.selected === false) !== -1)  {
                const newlistsDB = listsDB.map(item => {
                    return { ...item, selected: true}
                })
                setListsDB(newlistsDB);
            
            } else {
                const newlistsDB = listsDB.map(item => {
                    return { ...item, selected: false}
                })
                onHiddingPanel(newlistsDB)
                setListsDB(newlistsDB);
            }
            
        }

        // ============== Deleting items =============//

        const onDeletedItem = (id) => {
            deleteId.current = id;
            
            buildTextForModal()
            onOpenModal();
        }


        const onDeleted = (data) =>{
                if (listId) {
                    let newData = listsDB;
                    data.forEach(item => {
                        newData = newData.filter( i => i.id !== item.id);
                    })
                    const body ={ "records": newData }
                    patchData(`${link}/${listId}`, body)
                } else {
                    data.forEach( item => {
                        deleteData(`${link}/${item.id}`)
                            .then(deleteData(`records/${item.id}`))
                    })
                }
                onGetAllLists();
                deleteId.current = null; 
        }

        const onDeleteSelectedItems = () => {
            
            setModalIsOpen(false)
            const newListDB = deleteId.current ? listsDB.filter(item => item.id===deleteId.current) : listsDB.filter(item => item.selected);
            onDeleted(newListDB)
            setFindValue('')
            
        }

        //=========== work with modal =============//

        const closeModal = (e)=>{
            if (e.target.classList.contains('modal') || e.target.classList.contains('modal__cancel')) {
                deleteId.current = null;
                setModalIsOpen(false)
            }
            
        }

        const onOpenModal = () => {
            buildTextForModal()
            setModalIsOpen(true)
        }

        const buildTextForModal = () => {
            modalText.current = `Are you sure you want to delete ${deleteId.current ? '1' : listsDB.filter(item=>item.selected).length} ${deleteId.current || listsDB.filter(item=>item.selected).length === 1 ? 'item' : 'items'}?`
        }

        //===== creating new item =========//

        const onCreateInputValue = (value) => {
            if (value.length >= 29) {
                setNewItemInputValue(value.slice(0, 29))
            } else {
                setNewItemInputValue(value)
            }
        }

        const addZero = (numb) => {
            if (numb < 10) {
                return '0'+ numb
            } else {
                return numb
            }
        }

        const newItemViaPressEnter = (e) => {
            if (e.key === 'Enter') {
                onCreateNewValue();
              }
        }
        const onCreateNewValue = () => {
            const value = newItemInputValue.trim();
            
            if (value && listsDB.findIndex(item => item.name === value) === -1) {
                
                const now = new Date();
                const date = addZero(now.getDate()+1);
                const month = addZero(now.getMonth()+1);
                const year = now.getFullYear();
                const hour = addZero(now.getHours());
                const min = addZero(now.getMinutes());
                const sec = addZero(now.getSeconds());
                const creationDatae = `${date}.${month}.${year} ${hour}:${min}:${sec}`;
                const id = rand.generate();
                const newRecord = {
                                        "id": id,
                                        "name": value,
                                        "creationDate": creationDatae,
                                        "selected": false,
                                        "searched":true
                                    }
                
                if (listId) {
                    
                    const newData = [...listsDB, {...newRecord, "isDone": false}];
                    patchData(`${link}/${listId}`, {"records": newData})
                        .then(()=>{ 
                            onGetAllLists();   
                        });

                } else {
                    postData(ListName, newRecord)
                        .then(()=>{ 
                            onGetAllLists();   
                        });
                    const newList = {
                        "id": id,
                        "name": value,
                        "creationDate": creationDatae,
                        "records": []
                        
                    }
                    postData('records', newList)
                }
                setNewItemInputValue('');
                


               
            }

            if (listsDB.findIndex(item => item.name === value) !== -1) {
                modalText.current = 'An item with this name already exist'
                setModalIsOpen(true)
            }
        }

        // ============ Find List =============//

        const onChangeFindValue = (value) => {
            setFindValue(value)
        }

        const onFindItem = (data) => {
            const newListsDB = data.map(item => {
                if (!findValue || item.name.indexOf(findValue) !== -1) {
                    return {...item, searched: true}
                } else {
                    return {...item, searched: false}
                }
            })
            setListsDB(newListsDB)
        }

        useEffect(()=>onFindItem(listsDB), [findValue])
        

        //=============== preparing list of items =============//
        useEffect(()=>{
            setElements(listsDB
                            .filter(item=> {
                                if (showUndone) {
                                    if (item.searched===true && item.isDone === false) {
                                        return true
                                    } else {
                                        return false
                                    }
                                } else{
                                    if (item.searched===true) {
                                        return true
                                    } else {
                                        return false
                                    }
                                }
                            })    
                            .map(item=>{
                                        const {id} = item;
                                        return (
                                            <ListItem
                                                key={id}
                                                type={link}
                                                data={item}
                                                onChecked={(e)=>onChecked(e)}
                                                onDeletedItem={(id)=>onDeletedItem(id)}
                                                onDone={(e)=>onDone(e)}/>
                                        )
                            })
            )
        }, [listsDB, showUndone])
        
        
        // ================ item Done =========== //
        const onDone = (e) => {
            const id = e.target.id;
            if (listsDB.filter(item=>item.id===id)[0].isDone === true ) {
                changingIsDoneProperty(id, false)
            } else {
                changingIsDoneProperty(id, true)
            }          
        }

        const changingIsDoneProperty = (id, mark) => {
            const newData = listsDB.map(item => {
                if (item.id === id) {
                    return {...item, "isDone": mark}
                } else {
                    return item
                }
            })
            const body = { "records": newData }
            patchData(`${link}/${listId}`, body)
            onGetAllLists();
        }

        // ============= showOnlyUnDone ============//
        
        const onSetUndone = () => {
            setShowUndone(showUndone => !showUndone);

        }
        
        

        return (
            <BaseComponent 
                {...props}
                loading={loading} 
                error={error}
                errorRedirect ={errorRedirect}
                elements={elements} 
                panelClasses={panelClasses} 
                onSelectAll={onSelectAll} 
                onOpenModal={onOpenModal} 
                modalIsOpen={modalIsOpen} 
                itemDescription={itemDescription}
                onDeleteSelectedItems={onDeleteSelectedItems} 
                setModalIsOpen={setModalIsOpen}
                newItemInputValue={newItemInputValue}
                onCreateInputValue={onCreateInputValue}
                onCreateNewValue={onCreateNewValue}
                newItemViaPressEnter={newItemViaPressEnter}
                findValue={findValue} 
                setFindValue={setFindValue}
                onChangeFindValue={onChangeFindValue}
                modalText={modalText.current}
                closeModal={closeModal}
                onDone={onDone}
                onSetUndone={onSetUndone}
                showUndone={showUndone}
            />
        )           

    }
    

}

export default withList;

