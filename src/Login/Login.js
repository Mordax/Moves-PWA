import React from 'react';
import "./Login.css";
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // Function gets called every time theres a change in the UI text fields (userName text field and password text field)
    handleChange(event) {
        // If the text field id is "userName", use value to set the userName state
        if (event.target.id === "userName") {
            this.setState({
                userName: event.target.value
            })
        } else { // It must be the password text field, use value to set state for password
            this.setState({
                password: event.target.value
            })
        }
    }

    // Gets called every time the submit button is pressed in the UI
    handleSubmit(event) {
        event.preventDefault(); // Prevent default DOM events, to perform custom actions
        // Call dataManager logIn, if successfulLogIn then go back one page, if not show error
        this.props.manager.logIn(this.state.userName, this.state.password).then(successfulLogIn => {

            // If logIn was successful, procced to cache protected routes
            if(successfulLogIn) {

                // Custom header for our back end API
                const ownHeaders = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': ("BEARER " + localStorage.getItem('token'))
                };

                // Custom header for API that we dont have a token for
                const phoneHeaders = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',  // Authorization token should should be reterived dynamically
                    'Authorization': `BEARER eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Im5ua25ndXllbkBteXNlbmVjYS5jYSIsImZ1bGxOYW1lIjoiS2hhbmcgTmd1eWVuIiwicm9sZXMiOlsiRGV2ZWxvcGVyIiwiTGVhZGVyIl0sImNsYWltcyI6W3siX2lkIjoiNWQzN2MxYzE5ZTM5NjIyOWRjZGI1M2I3IiwidHlwZSI6IlRhc2siLCJ2YWx1ZSI6IlVzZXJQZXJtaXNzaW9uRWRpdCJ9LHsiX2lkIjoiNWQzN2MxYzE5ZTM5NjIyOWRjZGI1M2I2IiwidHlwZSI6IlRhc2siLCJ2YWx1ZSI6IlRleHRDb250ZW50RWRpdCJ9LHsiX2lkIjoiNWQzN2M1YjE5ZTM5NjIyOWRjZGI1M2I5IiwidHlwZSI6IlRhc2siLCJ2YWx1ZSI6IkNvbnRlbnRWaWV3In0seyJfaWQiOiI1ZDM3Y2FkMjBiYmM0OTQzYjgwM2JiYWIiLCJ0eXBlIjoiVGFzayIsInZhbHVlIjoiVXNlclByb2ZpbGVFZGl0In0seyJfaWQiOiI1ZDM3Y2FkMjBiYmM0OTQzYjgwM2JiYWEiLCJ0eXBlIjoiVGFzayIsInZhbHVlIjoiVXNlclByb2ZpbGVWaWV3In0seyJfaWQiOiI1ZDNhMDAzZWI1ZDFhOTc4YzBkY2MwYzciLCJ0eXBlIjoiVGFzayIsInZhbHVlIjoiQWxlcnRFZGl0In0seyJfaWQiOiI1ZDU1MGI2M2Y1NDU0Y2Q1OTc3MWE5MmIiLCJ0eXBlIjoiVGFzayIsInZhbHVlIjoiUGhvbmVOdW1iZXJFZGl0In1dLCJleHAiOjE1NzM2NjE2NTcsImlhdCI6MTU2NTg4NTY1Nn0.uewbDwSp0akoNPK3ljQYTiNjLlW8_5x5uAivDMOZiqM`
                };

                // Open runTime cache and cache all these routes
                caches.open('runtime').then(function(cache) {
                    cache.addAll([
                        new Request('https://moves-backend-a.herokuapp.com/api/announcement/active',
                        {
                            headers: ownHeaders
                        }),
                        new Request('https://moves-backend-a.herokuapp.com/api/personnel/',
                        {
                            headers: ownHeaders
                        }),
                        new Request('https://movesws-teamc-baa.herokuapp.com/api/phoneNumber/dkCallCenter',
                        {
                            headers: phoneHeaders
                        }),
                        new Request('https://movesws-teamc-baa.herokuapp.com/api/phoneNumber/maCallCenter',
                        {
                            headers: phoneHeaders
                        })
                    ]);
                });

                // If location.state is defined, push to the passed in state reference
                if(this.props.location.state) {
                    this.props.history.push(this.props.location.state.referrer);
                }
                else { // If undefined then push back to the previous page 
                    this.props.history.goBack();
                }
            } else { // If logIn was unsuccessful, display error message 
                window.confirm('You have the wrong username/password');
            }
        })
    }

    render(){
        const { t } = this.props;
        return (
            <div className="form-area-wrapper">
                <div className="form-wrapper">
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="userName">{t('Username')}</label>
                        <input type="text" id="userName" name="userName" onChange={this.handleChange} />
                        <label htmlFor="password">{t('Password')}</label>
                        <input type="password" id="password" name="password" onChange={this.handleChange}/>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>  
        )
    }

}
export default withRouter(withTranslation() (Login));