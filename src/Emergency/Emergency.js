import React from 'react';
import "./Emergency.css"

class Emergency extends React.Component {

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
        <h1>This is the GUARDED page of emergency contact</h1>
        )
    }
}

export default Emergency;