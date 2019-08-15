import React from 'react';
import "./Login.css";
import { withTranslation } from 'react-i18next';

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
            successfulLogIn ? this.props.history.goBack() : this.showLogInError()
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
export default withTranslation() (Login);