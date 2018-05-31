import React, {Component } from 'react';
import {
    Row, 
    Col, 
} from 'reactstrap';

export default class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = { todoList : [] }
    }

    componentWillMount() {
        console.log(this.props.flipInterval);
        this.setState({ todoList : JSON.parse(localStorage.getItem('ToDoList')) || [] });
    }
    
    setTodo() {
        this.setState({ todo : this.refs.todo.value });
    }

    addTodoItem() {
        const todoList = this.state.todoList;
        todoList.push(this.state.todo);
        localStorage.setItem('ToDoList', JSON.stringify(this.state.todoList));
        this.setState({ todoList });
    }

    removeItem(index) {
        let todoList = this.state.todoList;
        todoList = todoList.filter((todo,i) => index !== i );
        localStorage.setItem('ToDoList', JSON.stringify(todoList));
        this.setState({ todoList });
    }

    render() {
        return(
            <section>
                <Row>
                    <Col>
                        <h2  className="text-primary"> A Simple Todo List. </h2>
                        <input ref="todo" placeholder="Enter a todo item." onChange={this.setTodo.bind(this)} />
                        <button onClick={this.addTodoItem.bind(this)}>Add To Do</button>
                        {this.state.todoList ? this.state.todoList.map(( todo, i ) => {
                            return (
                                <Row key={i}>
                                    <Col>{todo}</Col><Col><button onClick={this.removeItem.bind(this, i)}>&times;</button>                    </Col>
                                </Row>);
                        }) : <span>Loading ... <i className="fa fa-spinner fa-spin"></i></span>}
                    </Col>
                </Row>
            </section>
        );
    }
}