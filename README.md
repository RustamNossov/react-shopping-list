# This is the first sample project of mine for the portfolio


## Short description 

The application allows you to create lists for shopping, tasks and so on.


## Used technologies

The application was created using the JavaScript library - React.

I used: 
* functional components
* responsive design
* HOC for wrapping my components having almost the same functionality and different HTML layout
* FetchAPI interface in bundle with JASON server fake REST API 
* custom Hook to make code related to fetching data more clear
* React Router for routing between pseudo-pages
* Helmet component
* SCSS


## Functionality

### 1. Page &#39;/lists&#39;:

![Image alt](https://github.com/RustamNossov/react-shopping-list/blob/main/illustrations/mainPage.png)

* creating new lists:

![Image alt](https://github.com/RustamNossov/react-shopping-list/blob/main/illustrations/create-list.png)

    - to create a new list enter the list name and press Enter or click the + button;
    - implemented limiting the length of the list name;
    - blank names are not allowed;
    - implemented remove spaces at the beginning and end of a name;
    - duplicate names are prohibited. If you try to create a list with an already existing name, an error message appears.
    - new lists are sorted by creation date for convenience. New ones on top.

* find List(-s):

![image](https://github.com/RustamNossov/react-shopping-list/blob/main/illustrations/find.png)

    - occurs on the event of changing the value of the find field;
    - to reset the search, clear the find field;
    - when creating / deleting lists, the search parameters are saved.

* Delete List(-s):

    - to delete one list, you must click on the "x" button. Then confirm the deletion in the modal window!
![image](https://github.com/RustamNossov/react-shopping-list/blob/main/illustrations/del-modal.png)
    - To delete several lists, you must activate the checkboxes for all the lists you want to delete. Then click on the Trash can button and confirm the deletion:
![image](https://github.com/RustamNossov/react-shopping-list/blob/main/illustrations/del-sever.png)
    - To delete all lists, you need to activate the checkbox for any list, after which click “All” button, then Trash can button. To remove the selection, press the All button again:
![image](https://github.com/RustamNossov/react-shopping-list/blob/main/illustrations/all.png)
    
* To work with list items, click on the List name!
![image](https://github.com/RustamNossov/react-shopping-list/blob/main/illustrations/list3.png)

### 2.	Page /lists/:listId

![image](https://github.com/RustamNossov/react-shopping-list/blob/main/illustrations/items.png)

* List elements are created similarly to Lists. The only difference is sorting. Items are sorted from latest to newest.
*	Deletion items is carried out similarly to lists.
*	In order to mark an item as completed, it is needed to click on its name.
![image](https://github.com/RustamNossov/react-shopping-list/blob/main/illustrations/done.png)

*	to display only non-completed ones, you need to activate the checkbox “Show only undone items”:
![image](https://github.com/RustamNossov/react-shopping-list/blob/main/illustrations/show-only.png)


## Error processing

* In case of problems accessing the server, the user sees an error message:
![image](https://github.com/RustamNossov/react-shopping-list/blob/main/illustrations/error.png)

* If you navigate to a non-existent page, an error page opens:
![image](https://github.com/RustamNossov/react-shopping-list/blob/main/illustrations/error-page.png)


## Responsible design 

![image](https://github.com/RustamNossov/react-shopping-list/blob/main/illustrations/mobile1.png)![image](https://github.com/RustamNossov/react-shopping-list/blob/main/illustrations/mobile2.png)![image](https://github.com/RustamNossov/react-shopping-list/blob/main/illustrations/mobile3.png)


