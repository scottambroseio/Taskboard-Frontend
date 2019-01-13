import React from 'react';

import './List.css'
import Task from './Task';

class List extends React.Component {
    constructor(props) {
        super(props)

        this.deleteList = this.deleteList.bind(this);
        this.createTask = this.createTask.bind(this);

        this.nameRef = React.createRef();
        this.descriptionRef = React.createRef();
    }

    render() {
        return (
            <div className="List">
                <h4>{this.props.name}</h4>
                <button onClick={this.deleteList}>Delete</button>
                <div className="TaskList">
                    {this.props.tasks.map(task => (
                        <Task key={task.id} {...task} listId={this.props.id} deleteTask={this.props.deleteTask} />
                    ))}
                </div>
                <h5>Add a new task</h5>
                <form>
                    <input type="text" placeholder="Name" ref={this.nameRef} />
                    <br />
                    <input type="text" placeholder="Description" ref={this.descriptionRef} />
                    <br />
                    <input type="submit" onClick={this.createTask} />
                </form>
            </div>
        )
    }

    createTask(e) {
        e.preventDefault();

        this.props.createTask(this.props.id, {
            name: this.nameRef.current.value,
            description: this.descriptionRef.current.value
        });
    }

    deleteList(e) {
        e.preventDefault();

        this.props.deleteList(this.props.id);
    }
}

export default List;
