import React, { Component } from 'react';
import './App.css';
import Person from './components/Persons/Person/Person.js';



// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput';


class App extends Component{

  state = {
    persons : [
      {id: '1', name: "Matthew", age : 25},
      {id: '2', name: "Echo", age : 18},
      {id: '3', name: "Yifan", age : 18}
  ],
    display: false

  }

  triggleDisplay = () =>{
    const isDisplay = this.state.display;
    this.setState({display:!isDisplay});
  };

  nameChangedHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons : persons
    })

  };

  deleteHandler = (index) => {
    const personList = [...this.state.persons];
    personList.splice(index, 1);
    this.setState({persons : personList});
  }


render(){

  const style = {
    backgroundColor : 'green',
    color : 'white',
    border : '1px solid blue',
    padding : '10px',
    cursor : 'pointer',
  
  }

  let displayContent = null;
  if (this.state.display){
    displayContent = (
        <div>
        {this.state.persons.map((person, index) => {
          return <Person name={person.name} 
                        age={person.age} 
                        key={person.id} 
                        click={() => this.deleteHandler(index)}
                        changed = {(event) => this.nameChangedHandler(event,person.id)}
                        />
        })}
        </div>
      
    );
    style.backgroundColor = 'red';
  
  }

  const classes = [];
  if (this.state.persons.length <= 2){
    classes.push("red");
  }
  if (this.state.persons.length <= 1){
    classes.push("bold");
  }

  

  return(
    <div className='App'>
      <h1>Hi, I'm a React App</h1>
      <p className = {classes.join(' ')}>This component do work</p>
      <button style = {style} onClick={this.triggleDisplay}>Click to display the content</button>
      {displayContent}
    </div>
  );

}
  
}

export default App;



