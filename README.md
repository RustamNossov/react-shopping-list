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
























# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
