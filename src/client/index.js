function getLists() {
    return fetch(`${getApiBase()}/lists`, {
        method: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': getApiKey()
        }
    }).then(result => result.json());
}

function getList(id) {
    return fetch(`${getApiBase()}/list/${id}`, {
        method: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': getApiKey()
        }
    }).then(result => result.json());
}

async function createList(list) {
    const putResult = await fetch(`${getApiBase()}/lists`, {
        body: JSON.stringify(list),
        method: 'POST',
        headers: {
            'Ocp-Apim-Subscription-Key': getApiKey()
        }
    });

    const getResult = await fetch(putResult.headers.get('location'), {
        method: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': getApiKey()
        }
    });

    return getResult.json();
}

function deleteList(id) {
    return fetch(`${getApiBase()}/list/${id}`, {
        method: 'DELETE',
        headers: {
            'Ocp-Apim-Subscription-Key': getApiKey()
        }
    })
}

async function createTask(listId, task) {
    const putResult = await fetch(`${getApiBase()}/list/${listId}/tasks`, {
        body: JSON.stringify(task),
        method: 'POST',
        headers: {
            'Ocp-Apim-Subscription-Key': getApiKey()
        }
    });

    const getResult = await fetch(putResult.headers.get('location'), {
        method: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': getApiKey()
        }
    });

    return getResult.json();
}

function deleteTask(listId, taskId) {
    return fetch(`${getApiBase()}/list/${listId}/task/${taskId}`, {
        method: 'DELETE',
        headers: {
            'Ocp-Apim-Subscription-Key': getApiKey()
        }
    })
}


function getApiBase() {
    const key = process.env.REACT_APP_API_BASE

    if (!key) {
        throw new Error('REACT_APP_API_BASE is not set');
    } else {
        return key;
    }
}

function getApiKey() {
    const key = process.env.REACT_APP_API_KEY

    if (!key) {
        throw new Error('REACT_APP_API_KEY is not set');
    } else {
        return key;
    }
}

export default {
    getLists,
    getList,
    createList,
    deleteList,
    createTask,
    deleteTask
}