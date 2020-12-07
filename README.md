# Alina To - Salesforce Malana 3
Name: Alina To
Email: alina.to@gmail.com
Date: December 7, 2020

## Description
Alina's Blog is a CRUD application which allows user to:
- Get all posts from API endpoint
- Read individual post
- Edit individual post
- Delete individual post
- Delete all posts
- Get more posts

The application was built using [Create React App](https://github.com/facebook/create-react-app) and Redux in order to manage application state via Redux store. After `GET` request to API, we store our posts in the Redux store, and render application state in React components.

This app utilizes Bootstrap UI to make everything look nice and is mobile responsive.

## Scripts
### To run app in development mode:
From root of project:
- `yarn install`
- `yarn start`
- Navigate to [http://localhost:3000](http://localhost:3000)

### To run lint:
- `yarn lint` or `npm run lint`

### Deployed to Heroku
(link to heroku deployed app)

## Browsers tested (Incognito)
- Chrome (MacOS)
- Firefox (MacOS)
- Safari (MacOS)

## A​ ​list​ ​of​ ​any​ ​libraries​ ​you​ ​used,​ ​and​ ​why
### Create-React-App
Straight forward and simple way to spin up a React app
- React
- React-dom

### React-router-dom
For creating app routing and provides `NavLink` and `Link` apis

### React-Redux 
For connecting React and Redux

### Redux
Provides web applicaiton state management. Redux store to manage React app state.
After API call to get all posts, we can store our data in the Redux store. When we make changes to the data, we are creating new copies of the copy in our Redux store and the UI updates accordingly.

### Thunk
Middleware for handling asynchronous calls, betwen action being dispatched and action reaching reducers.

### Logger
For development use only, would take out in production

### Node-sass 
scss stylesheet compiler

### Axios
For API calls, better syntax than JS fetch

### MomentJS
For converting ISO date to readable string


## A​ ​list​ ​of​ ​your​ ​source​ ​code​ ​files,​ ​with​ ​brief​ ​descriptions
.              
├── public                   
├── src                    
│   ├── actions              
│   │   ├── actionTypes.js              # Constants for our action types
│   │   └── index.js                    # Calls to our API endpoint
│   └── components
│   │   ├── App.jsx   
│   │   ├── Aside.jsx  
│   │   ├── Header.jsx  
│   │   ├── Main.jsx                    # Contains our app routing
│   │   ├── PostAdd.jsx           
│   │   └── ...
│   └── reducers                        # Handle logic and update/manage app state
│   │   ├── allPostsReducer.js          # Logic responsible for all posts
│   │   ├── singlePostReducer.js        # Logic responsible for a single post
│   │   └── index.js                    # Combine reducers for redux store hookup
│   └── stylesheets
│   └── history.js               # Add history to Router as attribute, access React built-in history module
│   └── index.js        # Application entry point, Redux store set up and initial getPosts call on load
├── .gitignore               
├── package-lock.json
├── package.json
├── README.md
└── yarn.lock

## Any​ ​other​ ​notes​ ​on​ ​your​ ​solution​ ​to​ ​augment​ ​your​ ​code​ ​comments


## Any​ ​test​ ​objectives​ ​you​ ​were​ ​not​ ​able​ ​to​ ​complete​ ​in​ ​time,​ ​and​ ​provide​ ​a description​ ​of​ ​why
- Add unit tests!
- Run browser test on Edge:
  - Open Virtual Box application > Run against Windows machine
  - (I don't have a Saucelab account and don't want to create one right now)
- Mobile browser testing on actual device
- Test app for accessibility 
  - Do we have aria roles on elements?
- Add modal and logic warning on "Delete All Posts" button click
  - Maybe add additional authencation 
  - Or something like when deleting a Github Repository: Type in name of the app before deleting all
- Pagination when the page is listing 5 posts in the feed
- Add sorting on the posts (old to new vs new to old)
- Authentication to entire app
  - If data model includes author name, then we can render each post with author name
- Add Husky and Lint Staged to lint before commits

