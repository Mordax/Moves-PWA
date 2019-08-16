import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import locationContent from './LocationContent.json'


class Geolocation extends Component {
  render() {
    document.title = "List of important places";

    return (
      <div className="containerTOM">
        <a className="btn btn-default" target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/`} >Find Yourself</a>
        <div class="container">
          <h4>List of important places</h4>
          <table class="table table-striped">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {
                locationContent.map((value, index)=> {
                  return (
                    <tr key={index}>
                      <td><a class="btn btn-default" target="_blank" rel="noopener noreferrer" href={value.href} > View on Map </a> &nbsp;&nbsp; </td>
                      <td>{value.name}</td>
                      <td>{value.address}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
        <br />
        <br />
        <br />
        <div className="wrapping">
          <h2>
              How to use this app to access an offline map of Tangier through your mobile device
          </h2>
          <p>First, install the Google Maps app.</p>
          <h4>Step 2 </h4>
          <img className="tutorialPNG" src="https://i.imgur.com/SrCrUpq.png" alt="" />
          <p>
            Open the app.Open the app's settings by pressing the ≡{" "}
            button in the top-left corner of your screen.
          </p>
          <h4>Step 3</h4>
          <img className="tutorialPNG" src="https://i.imgur.com/UW84nJO.png" alt="" />
          <p>
              Press the Offline Maps button within the settings menu; its icon looks like a cloud.
          </p>
          <h4>Step 4</h4>
          <img className="tutorialPNG" src="https://i.imgur.com/7zz1qF2.png" alt="" />
          <p>Then, press the Custom Map button.</p>
          <h4>
            Step 5
          </h4>
          <img className="tutorialPNG" src="https://i.imgur.com/9p21v7I.png" alt="" />
          <p>
              Finally, resize the boundaries of the map to cover the city of Tangier, and click the Download button at the bottom of the screen.
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(Geolocation);
