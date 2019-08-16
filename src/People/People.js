import React from 'react';
import "./People.css"

class People extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      people: null
    }
    // Call dataManager to get all personnel, then set the componant state
    this.props.manager.getAllPersonnel().then(data => {
      this.setState({
        people: data.data
      })
    })
  }

  render() {
    return (
      <div>
        { // If people array is defined, return a div for every item in the array
          this.state.people ?
            <React.Fragment>
              { // Return a div displaying details for every person in the people array
                this.state.people.map((person, index) => {
                  return (
                    <div key={index} className="peopleItem">
                      <h4>{person.familyName}, {person.givenName}</h4>
                      <p>{person.jobTitle}</p>
                      <p><a href={`tel:${person.phoneMobile}`}>{person.phoneMobile}</a></p>
                    </div>
                  )
                })
              }
            </React.Fragment>
            : <></> // Else return an empty tag
        }
      </div>
    )
  }
}
export default People;