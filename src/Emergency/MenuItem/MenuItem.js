import React, { Component } from 'react';
import './MenuItem.css';

class MenuItem extends Component {

    constructor(props) {
        super(props);
        this.hasSubtitle = this.hasSubtitle.bind(this);
    }

    hasSubtitle() {
        return this.props.subtitle && this.props.subtitle.trim() !== "";
    }

    render() {
        var {image, title, subtitle, buttonType} = this.props;
        if (!buttonType)
            buttonType = "outline-info"
        return (
            <div className={`em-square btn btn-${buttonType}`}>
                <div className="em-square-content">
                    <img className="em-itemIcon" src={image} alt={title} />
                    <p className={"em-itemTitle " + (this.hasSubtitle() ? "em-wSubtitle" : "")}>{title}</p>
                    <p className="em-itemSubtitle">{subtitle}</p>
                </div>
            </div>
        );
    }
}

export default MenuItem;