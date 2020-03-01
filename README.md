# SCM-frontend

Supply chain management system. This is the frontend of the system. Written in:
* JavaScript (ES2019, JSX)
* CSS3 (using LESS)
* HTML5

Using the following technologies:
* ReactJS
* Redux, Redux Thunk
* Semantic UI
* REST, Axios
* JWT
* Google Maps, Distance Matrix API

# Installation and configuration
Install the dependencies using the following command:
```
npm install
```

# Building
The React components are writeen in JSX which requires transpilation to JavaScript (using Babel and wrapped by react-scripts library).
To build the package use the following command:
```
npm run build
```

# Running
To start the package use the following command:
```
npm start
```
This will start a static server listening on port 8080 serving the prebuilt content. It will also start a development daemon watching for any changes
and live-rebuilding the package.
