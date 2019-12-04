import React, {Component} from 'react';
import './Task.css';
import PropTypes from 'prop-types';

class Task extends Component{

    styleCompleted(){
        return{
            fontSize:'20px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration:this.props.task.done ?  'line-through' : 'none'
        }
    }
    render(){
        const {task} = this.props;
        //Otra manera de hacer estilo
        //const redColor = {{background: 'red'}};
        return <p style={this.styleCompleted()}>
            {task.tittle} - 
            {task.description} - 
            {task.done} - 
            {task.id}
            <input type="checkbox" onChange={this.props.checkDone.bind(this,task.id)}/>
            <button style={btnDelete} onClick={this.props.deleteTask.bind(this, task.id)}>X</button>
          </p>
    }
}
    
    Task.propTypes = {
    task: PropTypes.object.isRequired
    }

    const btnDelete = {
        fontSize: '18px',
        background: '#ea2027',
        color:'#fff',
        border: 'none',
        padding: '10px 15px',//Espacio interno
        borderRadius:'50%',//Borde redondeado
        cursor: 'pointer',//Cursor
        float:'right'//Hacia la derecha
    }

export default Task;