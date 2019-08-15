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

    handleChange(event) {
        if (event.target.id === "userName") {
            this.setState({
                userName: event.target.value
            })
        } else {
            this.setState({
                password: event.target.value
            })
        }
    }

    // Show some sort of error? userName or password incorrect?
    showLogInError(){
        console.log("ERROR loggin in")
    }

    handleSubmit(event) {
        event.preventDefault();
        // Call dataManager logIn, if successfulLogIn then go back one page, if not show error
        this.props.manager.logIn(this.state.userName, this.state.password).then(successfulLogIn => {

            if(successfulLogIn) {

                const ownHeaders = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': ("BEARER " + localStorage.getItem('token'))
                };

                const phoneHeaders = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `BEARER eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Im5ua25ndXllbkBteXNlbmVjYS5jYSIsImZ1bGxOYW1lIjoiS2hhbmcgTmd1eWVuIiwicm9sZXMiOlsiRGV2ZWxvcGVyIiwiTGVhZGVyIl0sImNsYWltcyI6W3siX2lkIjoiNWQzN2MxYzE5ZTM5NjIyOWRjZGI1M2I3IiwidHlwZSI6IlRhc2siLCJ2YWx1ZSI6IlVzZXJQZXJtaXNzaW9uRWRpdCJ9LHsiX2lkIjoiNWQzN2MxYzE5ZTM5NjIyOWRjZGI1M2I2IiwidHlwZSI6IlRhc2siLCJ2YWx1ZSI6IlRleHRDb250ZW50RWRpdCJ9LHsiX2lkIjoiNWQzN2M1YjE5ZTM5NjIyOWRjZGI1M2I5IiwidHlwZSI6IlRhc2siLCJ2YWx1ZSI6IkNvbnRlbnRWaWV3In0seyJfaWQiOiI1ZDM3Y2FkMjBiYmM0OTQzYjgwM2JiYWIiLCJ0eXBlIjoiVGFzayIsInZhbHVlIjoiVXNlclByb2ZpbGVFZGl0In0seyJfaWQiOiI1ZDM3Y2FkMjBiYmM0OTQzYjgwM2JiYWEiLCJ0eXBlIjoiVGFzayIsInZhbHVlIjoiVXNlclByb2ZpbGVWaWV3In0seyJfaWQiOiI1ZDNhMDAzZWI1ZDFhOTc4YzBkY2MwYzciLCJ0eXBlIjoiVGFzayIsInZhbHVlIjoiQWxlcnRFZGl0In0seyJfaWQiOiI1ZDU1MGI2M2Y1NDU0Y2Q1OTc3MWE5MmIiLCJ0eXBlIjoiVGFzayIsInZhbHVlIjoiUGhvbmVOdW1iZXJFZGl0In1dLCJleHAiOjE1NzM2NjE2NTcsImlhdCI6MTU2NTg4NTY1Nn0.uewbDwSp0akoNPK3ljQYTiNjLlW8_5x5uAivDMOZiqM`
                };

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
                if(this.props.location.state.referrer) {
                    this.props.history.push(this.props.location.state.referrer);
                }
                else {
                    this.props.history.goBack();
                }
            } else {
                window.confirm('You have the wrong username/password');
            }
            // successfulLogIn ? this.props.history.goBack() : this.showLogInError()
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