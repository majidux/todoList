import Appbase from 'appbase-js'; // installed alongside reactivesearch-native

import CONFIG from './../constants/Config';

class TodoModel {
    constructor(key) {
        this.key = key;
        this.todos = [];
        this.onChanges = [];
        this.appbaseRef = new Appbase({
            url: CONFIG.url,
            app: CONFIG.app,
            credentials: CONFIG.credentials,
            type: CONFIG.type,
        });
    }

    // adds new todo to Elasticsearch
    add(todo) {
        const body = {
            ...todo,
            createdAt: Date.now(),
        };

        this.appbaseRef
            .index({
                type: CONFIG.type,
                body,
            })
            .on('data', (response) => {
                console.log('@api - add', response);
            })
            .on('error', (error) => {
                console.error('@api - add', error);
            });
    }

    // updates an existing todo on Elasticsearch
    update = (editedTodo) => {
        const { _id, touched, ...todo } = editedTodo;

        this.appbaseRef
            .update({
                type: CONFIG.type,
                id: _id,
                body: {
                    doc: {
                        ...todo,
                    },
                },
            })
            .on('data', (response) => {
                console.log('@api - update', response);
            })
            .on('error', (error) => {
                console.error('@api - update', error);
            });
    };

    // remove a todo from Elasticsearch
    destroy = (todo) => {
        this.appbaseRef
            .delete({
                type: CONFIG.type,
                id: todo._id,
            })
            .on('data', (response) => {
                console.log('@api - destroy: ', response);
            })
            .on('error', (error) => {
                console.error('@api - destroy: ', error);
            });
    };
}

export default TodoModel;
