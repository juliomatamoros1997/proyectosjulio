import React, {Component} from 'react';

import './App.css';

import tasks from './sample/tasks.json';
import Tasks from './components/Tasks';
//Importar los componenetes
import TaskForm from './components/TaskForm';
import Posts from './components/Posts';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

/*function Helloworld(props){
  //console.log(props) //Pintar por consola 
  return(
  <div id="hello">
    <h3>{props.subtitle}</h3>
    {props.mytext}
  </div>
  )
}

class Helloworld extends React.Component{
  state = {
    show: true
  }
  toggleShow = () => {
    this.setState({show: !this.state.show})//Le colocamos el ! para cambiar el estado de show. 
    //Diciendo si es diferente cambiarlo
  }

  render(){
    if(this.state.show){
    return (
    <div id="hello">
    <h3>{this.props.subtitle}</h3>
    {this.props.mytext}
    <button onClick={this.toggleShow}>Toggle Show</button>
  </div>
  )
    }else{
      return <h1>No hay elemetos
        <button onClick={this.toggleShow}>
          Toggle Show
        </button>
      </h1>
    }
  }
}

/*
//Otra manera de realizar una funcion. En una sola linea
const App = () => <div>This is my component <Helloworld/></div>
//Escrita desde una clase
class App extends React.Component{
  render(){
    return <div>This is my component <Helloworld/></div>
  }
}

//Funcion de javaScript
function App() {
  return (
    <div>this is my component: <Helloworld mytext="Hello Fast" subtitle="Loremp ispum"/> 
    <Helloworld mytext="Hola Mundo" subtitle="Component two"/> 
    <Helloworld mytext="Hello!" subtitle="Component three"/></div>
  );
}*/

class App extends Component{
  state = {
    tasks: tasks
  }

  addTask = (tittle,description) => {
    //console.log(tittle, description)
    const newTask ={
      tittle: tittle,
      description: description,
      id: this.state.tasks.length
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
    //console.log(newTask)
  }

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    //console.log(newTasks);
    this.setState({tasks: newTasks})
  }

  checkDone = id => {//Cambiar estado de una tarea
    const newTasks = this.state.tasks.map(task => {
      if(task.id === id){
        task.done = !task.done
      }
      return task;
    });
    this.setState({tasks: newTasks})

  }

  render(){
    return(
      <div>
        <Router>
        <Link to="/">Home</Link>
        <Route exact path="/" render={() => {
         return <div>
          <TaskForm addTask={this.addTask}/>
        <Tasks tasks={this.state.tasks} 
        deleteTask={this.deleteTask}
        checkDone={this.checkDone}
        />
        </div>
        }}>
        </Route>
        <Route path="/posts" component={Posts}/>

        </Router>
      </div>
    )
  }
}

export default App;
