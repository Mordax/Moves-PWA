import React from 'react';
import "./CellContainer.css"
import Cell from '../Cell/Cell.js';

class CellContainer extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            content: this.props.content
        }
    }

    render(){
        return (
            <div className="cell-container">
                <ul>
                    {this.state.content.map((value, index) => {
                        return (
                            <li key = {index}>
                                <Cell params = {value}/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }

}

export default CellContainer;