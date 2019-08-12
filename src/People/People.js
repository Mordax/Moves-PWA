import React from 'react';
import "./People.css"

class People extends React.Component {
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
        <h1>This is the GUARDED page of People list</h1>
        )
    }
}

export default People;