import React from 'react';
import "./Alert.css"

class Alert extends React.Component {
    constructor() {
        super();
        try {
            let z = document.getElementById("mobile-menu");
            z.classList.remove("show");
            let y = document.getElementById("language-menu");
            y.classList.remove("show");
        } catch(e) {

        }
    }
    render() {
        return(
            <h1>This is the GUARDED page of Alert and imcoming announcements</h1>
        )
    }
}

export default Alert;