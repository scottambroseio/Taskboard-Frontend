import lists from './lists'
import {
    RECEIVED_LISTS, CREATED_LIST, DELETED_LIST, DELETED_TASK, CREATED_TASK
} from '../constants/actionTypes'

it('should handle RECEIVED_LISTS correctly', () => {
    const state = {
        items: []
    };

    const action = {
        type: RECEIVED_LISTS,
        lists: [{
            id: "id",
            name: "name",
            tasks: []
        }]
    }

    expect(lists(state, action)).toMatchObject({
        items: [{
            id: "id",
            name: "name",
            tasks: []
        }]
    })
});

it('should handle CREATED_LIST correctly', () => {
    const state = {
        items: [{
            id: "id",
            name: "name",
            tasks: []
        }]
    };

    const action = {
        type: CREATED_LIST,
        list: {
            id: "newid",
            name: "newname",
            tasks: []
        }
    }

    expect(lists(state, action)).toMatchObject({
        items: [{
            id: "id",
            name: "name",
            tasks: []
        }, {
            id: "newid",
            name: "newname",
            tasks: []
        }]
    })
});

it('should handle DELETED_LIST correctly', () => {
    const state = {
        items: [{
            id: "id",
            name: "name",
            tasks: []
        }]
    };

    const action = {
        type: DELETED_LIST,
        id: "id"
    }

    expect(lists(state, action)).toMatchObject({
        items: []
    })
});

it('should handle CREATED_TASK correctly', () => {
    const state = {
        items: [{
            id: "id",
            name: "name",
            tasks: []
        }]
    };

    const action = {
        type: CREATED_TASK,
        listId: "id",
        task: {
            id: "taskid",
            name: "taskname",
            description: "taskdescription"
        }
    }

    expect(lists(state, action)).toMatchObject({
        items: [{
            id: "id",
            name: "name",
            tasks: [{
                id: "taskid",
                name: "taskname",
                description: "taskdescription"
            }]
        }]
    })
});

it('should handle DELETED_TASK correctly', () => {
    const state = {
        items: [{
            id: "id",
            name: "name",
            tasks: []
        }]
    };

    const action = {
        type: DELETED_TASK,
        listId: "id",
        taskId: "taskid"
    }

    expect(lists(state, action)).toMatchObject({
        items: [{
            id: "id",
            name: "name",
            tasks: []
        }]
    })
});