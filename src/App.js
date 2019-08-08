import React from 'react';
import logo from './logo.svg';
import './App.css';

// import GenericContent from './GenericContent';
// import content from './config/content.json';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        {/* <ul>
          {
            content.map((value, index) => {
              <!--  TODO: edit this part to match Vidas's final wireframe 
              value.name & value.fullName  :  will give the text under the icon
              value.icon  :  will give the url to the icon image

              value.name, value.title, value.content will be used in the component
              to populate the content
              -->
              return <li id={index}><GenericContent params={value}/></li>
            })
          }
        </ul> */}
      </header>
    </div>
  );
}

export default App;
