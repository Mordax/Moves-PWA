import React from 'react';
import "./Information.css"

class Information extends React.Component {
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
        <h1>This is the page of Further Information</h1>
        )
    }
}

export default Information;