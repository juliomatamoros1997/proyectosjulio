import React, {Component} from 'react';

export default class TaskForm extends Component{

    state = {
        tittle: '',
        description: ''

    }


    onSubmit = e => {
       // console.log(this.state)
       this.props.addTask(this.state.tittle, this.state.description);
        e.preventDefault();
    }

    onChange = e =>{
        //console.log(e.target.value)//Muestra todos los cambios que se realizan
        console.log(e.target.name, e.target.value)
        this.setState({[e.target.name] : e.target.value})
    }

    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                type="text"
                name="tittle" 
                placeholder="Write a Task" onChange={this.onChange} 
                value={this.state.tittle}/>
                <br/><br/>
                <textarea 
                type="text"
                name="description" 
                placeholder="Write description" onChange={this.onChange}
                 value={this.state.description}></textarea>
                <br/>
                <button type="submit">
                    Save a Task
                </button>
            </form>
        )
    }

}
