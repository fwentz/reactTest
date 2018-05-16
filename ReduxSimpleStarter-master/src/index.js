import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyB9m-BW_GmhGuy73M8mm7c0u88bmFx_Rq4';

// Create a new component. This component should produce some html
const App = function(){
    return <div>Hi!</div>;
}

// Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));