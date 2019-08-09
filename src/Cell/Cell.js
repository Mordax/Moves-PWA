import React from 'react';
import "./Cell.css"

class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            order: this.props.params.order,
            name: this.props.params.name,
            fullName: this.props.params.fullName,
            title: this.props.params.title,
            icon: this.props.params.icon,
            content: this.props.params.content
        };
    }

    render(){
        return (
            <a href="#" className="content">
                <div className="circle">
                    <img src={this.state.icon} alt="" />
                </div>
                <div className="grid-item-text-box">
                    <h3>
                        {this.state.fullName}
                    </h3>
                </div>
            </a>
        )
    }
}
export default Cell;