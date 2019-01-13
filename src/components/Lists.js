import React from 'react'

import { connect } from 'react-redux';

import { fetchLists, createList, deleteList, createTask, deleteTask } from '../actions';
import List from '../components/List';

const mapStateToProps = state => {
    return ({
        lists: state.lists.items
    })
}

const mapDispatchToProps = dispatch => ({
    fetchLists: () => dispatch(fetchLists()),
    createList: (list) => dispatch(createList(list)),
    deleteList: (id) => dispatch(deleteList(id)),
    createTask: (listId, task) => dispatch(createTask(listId, task)),
    deleteTask: (listId, taskId) => dispatch(deleteTask(listId, taskId))
});

class Lists extends React.Component {
    constructor(props) {
        super(props);

        this.input = React.createRef();
        this.createList = this.createList.bind(this);
    }
    componentDidMount() {
        this.props.fetchLists()
    }

    render() {
        return (
            <div className="Lists">
                <h3>Lists</h3>
                <div className="Lists">
                    {this.props.lists.map(list => <List key={list.id} {...list} deleteList={this.props.deleteList} createTask={this.props.createTask} deleteTask={this.props.deleteTask} />)}
                </div>
                <p>Or create a new list</p>
                <form>
                    <input type="text" placeholder="Name" ref={this.input} />
                    <input type="submit" onClick={this.createList} />
                </form>
            </div>
        );
    }

    createList(e) {
        e.preventDefault();

        this.props.createList({
            "name": this.input.current.value
        });
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
