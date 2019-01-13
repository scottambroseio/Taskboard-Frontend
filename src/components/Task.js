import React from 'react';

import './Task.css'

class Task extends React.Component {
    constructor(props) {
        super(props)

        this.deleteTask = this.deleteTask.bind(this);

        this.nameRef = React.createRef();
        this.descriptionRef = React.createRef();
    }

    render() {
        return (
            <div className="Task" key={this.props.id}>
                <div>Name: {this.props.name}</div>
                <div>Description: {this.props.description}</div>
                <button onClick={this.deleteTask}>Delete</button>
            </div>
        )
    }

    deleteTask(e) {
        e.preventDefault();

        this.props.deleteTask(this.props.listId, this.props.id);
    }
}

export default Task;
