import * as types from '../constants/actionTypes'

import client from '../client'

export function receivedLists(lists) {
    return {
        type: types.RECEIVED_LISTS,
        lists: lists
    }
}

export function createdList(list) {
    return {
        type: types.CREATED_LIST,
        list: list
    }
}

export function deletedList(id) {
    return {
        type: types.DELETED_LIST,
        id: id
    }
}

export function createdTask(listId, task) {
    return {
        type: types.CREATED_TASK,
        listId: listId,
        task: task
    }
}

export function deletedTask(listId, taskId) {
    return {
        type: types.DELETED_TASK,
        listId: listId,
        taskId: taskId
    }
}

export function updateListNameToCreate(value) {
    return {
        type: types.LIST_NAME_TO_CREATE_UPDATED,
        value: value
    }
}

export function fetchLists() {
    return async function (dispatch) {
        const lists = await client.getLists();

        dispatch(receivedLists(lists));
    }
}

export function createList(list) {
    return async function (dispatch) {
        const created = await client.createList(list);

        dispatch(createdList(created));
    }
}

export function deleteList(id) {
    return async function (dispatch) {
        await client.deleteList(id);

        dispatch(deletedList(id));
    }
}

export function createTask(listId, task) {
    return async function (dispatch) {
        const created = await client.createTask(listId, task);

        dispatch(createdTask(listId, created));
    }
}

export function deleteTask(listId, taskId) {
    return async function (dispatch) {
        await client.deleteTask(listId, taskId);

        dispatch(deletedTask(listId, taskId));
    }
}