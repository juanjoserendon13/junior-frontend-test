import React, { Component } from 'react';

class Messages extends Component {

    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        const data = {
            inbox: [{
                id: 1,
                subject: 'Im opting',
                messageText: 'Some text',
                createdAt: '2018-05-16',
                userId: 1
            }],
            outbox: [],
            archived: [],
            users: [{
                id: 1,
                fullname: 'Jhon Doe'
            }]
        }
        console.log("datos:", data);

        this.setState({ data })

    }

    render() {
        const { data } = this.state
    
        return (
            <div>
                <h1> Holi {data.inbox && data.inbox[0].messageText}</h1>
            </div>
        )
    }
}

export default Messages;