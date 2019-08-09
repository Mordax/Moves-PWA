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
                {this.state.content.map((value, index) => {
                    return (
                        <div key={index} className="square">
                            <Cell params={value}/>
                        </div>
                    )
                })} 
            </div>
        )
    }

}

export default CellContainer;