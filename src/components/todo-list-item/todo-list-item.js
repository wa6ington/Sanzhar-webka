import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {
    constructor(props) {
        super(props);
        this.onLabelClick = () => {
            console.log(`Done: ${this.props.label}`);
        };
    }

    render() {
        const { label, important = false } = this.props;
        
        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        };

        return (
            <span className="todo-list-item">
                <span
                    className="todo-list-item-label"
                    style={style}
                    onClick={this.onLabelClick}>
                    {label}
                </span>
            </span>
        );
    }
}
