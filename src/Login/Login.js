import React from 'react';
import "./Login.css"

class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            userName: "",
            password: "",
            postUrl: "https://moves-backend-a.herokuapp.com/api/useraccounts/login"
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)
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

    handleSubmit(event) {
        event.preventDefault();
        fetch(this.state.postUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'userName': this.state.userName,
                'password': this.state.password
            })
        }).then(res => {
            //console.log(res)
            return res.json();
        }).then(d => {
            console.log(JSON.stringify(d));
        }).catch(e => {
            console.log("Error" + e)
        });
    }

    render(){
        return (
            <div className="form-area-wrapper">
                <div className="form-wrapper">
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="userName">Username</label>
                        <input type="text" id="userName" name="userName" onChange={this.handleChange} />
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" onChange={this.handleChange}/>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>  
        )
    }

}

export default Login;