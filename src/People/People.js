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
        <h1>This is the GUARDED page of People list</h1>
        {
          // temporary just for testing
          this.state.people ?
            <table>
              <tbody>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Job Title</th>
                  <th>Contact Number</th>
                </tr>
                {
                  this.state.people.map((person, index) => {
                    return (
                      <tr key={index}>
                        <td>{person.givenName}</td>
                        <td>{person.familyName}</td>
                        <td>{person.jobTitle}</td>
                        <td>{person.phoneMobile}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
            : <></>
        }
      </div>
    )
  }
}
export default People;