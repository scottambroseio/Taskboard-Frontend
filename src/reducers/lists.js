import {
    RECEIVED_LISTS, CREATED_LIST, DELETED_LIST, DELETED_TASK, CREATED_TASK
} from '../constants/actionTypes'

const initialState = {
    items: []
};

export default function lists(state = initialState, action) {
    let items, list, idx;

    switch (action.type) {
        case RECEIVED_LISTS: return {
            ...state,
            items: [...action.lists]
        };
        case CREATED_LIST: return {
            ...state,
            items: [...state.items, action.list]
        };
        case DELETED_LIST: return {
            ...state,
            items: [...state.items.filter(list => list.id !== action.id)]
        };
        case CREATED_TASK:
            items = [...state.items];
            list = items.find(l => l.id === action.listId);

            list.tasks.push(action.task);

            return {
                ...state,
                items
            };
        case DELETED_TASK:
            items = [...state.items];
            list = items.find(l => l.id === action.listId);
            idx = list.tasks.find(t => t.id !== action.taskId);

            list.tasks.splice(idx, 1);

            return {
                ...state,
                items
            };
        default: return state
    }
}