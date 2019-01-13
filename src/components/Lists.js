import React from 'react'

import { connect } from 'react-redux';

import { fetchLists, createList, deleteList, createTask, deleteTask, updateListNameToCreate } from '../actions';
import List from '../components/List';

const mapStateToProps = state => {
    return ({
        lists: state.lists.items,
        listNameToCreate: state.lists.listNameToCreate
    })
}

const mapDispatchToProps = dispatch => ({
    fetchLists: () => dispatch(fetchLists()),
    createList: (list) => dispatch(createList(list)),
    deleteList: (id) => dispatch(deleteList(id)),
    createTask: (listId, task) => dispatch(createTask(listId, task)),
    deleteTask: (listId, taskId) => dispatch(deleteTask(listId, taskId)),
    updateListNameToCreate: (name) => dispatch(updateListNameToCreate(name))
});

class Lists extends React.Component {
    constructor(props) {
        super(props);

        this.createList = this.createList.bind(this);
        this.updateListNameToCreate = this.updateListNameToCreate.bind(this);
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
                    <input type="text" placeholder="Name" value={this.props.listNameToCreate} onChange={this.updateListNameToCreate} />
                    <input type="submit" onClick={this.createList} />
                </form>
            </div>
        );
    }

    updateListNameToCreate(e) {
        e.preventDefault();

        this.props.updateListNameToCreate(e.target.value);
    }

    createList(e) {
        e.preventDefault();

        this.props.createList({
            name: this.props.listNameToCreate
        });
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
