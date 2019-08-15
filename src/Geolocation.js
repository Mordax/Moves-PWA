import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// import "./App.css";

class Geolocation extends Component {
  render() {
    document.title = "List of important places";

    return (
      <div className="containerTOM">
        <a
          className="btn btn-default"
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.google.com/maps/`}
        >
          Find Yourself
        </a>
        &nbsp;&nbsp;
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
              <tr>
                <td>
                  <a
                    class="btn btn-default"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.google.com/maps/search/City-Sleep In (Hostel in Aarhus)/@56.1551956,10.2121883,18z/"
                  >
                    View on Map
                  </a>
                  &nbsp;&nbsp;
                </td>
                <td>City-Sleep In</td>
                <td>Havnegade 20, 8000 Aarhus, Denmark</td>
              </tr>
              <tr>
                <td>
                  <a
                    class="btn btn-default"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.google.com/maps/search/Clinique Assalam(Hospital)/@35.7700194,-5.809536,18z/"
                  >
                    View on Map
                  </a>
                  &nbsp;&nbsp;
                </td>
                <td>Clinique Assalam(Hospital)</td>
                <td>Avenue d'Espagne, Tanger 90060, Morocco</td>
              </tr>
              <tr>
                <td>
                  <a
                    class="btn btn-default"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.google.com/maps/search/Police poste Castilla/@35.7672859,-5.8153725,18z/"
                  >
                    View on Map
                  </a>
                  &nbsp;&nbsp;
                </td>
                <td>Police poste Castilla</td>
                <td>Place du Maroc, Tanger 90060, Morocco</td>
              </tr>
              <tr>
                <td>
                  <a
                    class="btn btn-default"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.google.com/maps/search/Tanger City Mall/@35.7735013,-5.7870483,18z/"
                  >
                    View on Map
                  </a>
                  &nbsp;&nbsp;
                </td>
                <td>Tanger City Mall</td>
                <td>Route Tanja El Balia, Tanger, Morocco</td>
              </tr>
              <tr>
                <td>
                  <a
                    class="btn btn-default"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.google.com/maps/search/Tanger Ville Railway Station/@35.7715294,-5.7859866,18z/"
                  >
                    View on Map
                  </a>
                  &nbsp;&nbsp;
                </td>
                <td>Tanger Ville Railway Station</td>
                <td>Tangier 90000, Morocco</td>
              </tr>
              <tr>
                <td>
                  <a
                    class="btn btn-default"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.google.com/maps/search/Tangier Ibn Battuta Airport/@35.7265955,-5.9150683,18z/"
                  >
                    View on Map
                  </a>
                  &nbsp;&nbsp;
                </td>
                <td>Tangier Ibn Battuta Airport</td>
                <td>Aéroport Tanger-Ibn Batouta, Tanger, Morocco</td>
              </tr>
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
