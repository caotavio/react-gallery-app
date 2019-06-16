# react-gallery-app

This project is a gallery app made for the Team TreeHouse FullStack JavaScript Techdegree. It is bootstrapped with create-react-app
and it uses Axios for data fetching from Flickr`s API.

### `npm install`

Download the projects files and run this command to install all the necessary dependencies to run the app.

## Some of the available Scripts:

Get to the project directory in your terminal and you can run:

### `npm start`

To run the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically update if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

To launch the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
And gets your app ready to be deployed.

If you need more information about deployment: (https://facebook.github.io/create-react-app/docs/deployment).

## Setting Up the API

To get the API working, you'll need to create a Flickr account and request your own API Key. Create a `config.js` file in the `src` 
directory and you can paste the following code inside the file:

```
const apiKey = 'INSERT YOUR API KEY HERE';
export default apiKey;
```
