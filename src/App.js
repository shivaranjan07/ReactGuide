import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
  //state is an object
  state = {
   persons : [
      {name:"Jane", age:23},
      {name:"Lisbon", age:22},
      {name:"rigsby", age:23}
    ]
  }

   switchNameHandler = () => {
     console.log('was clicked!!');
    //  this.state.persons[0].name = "Patrick"; we shouldn't directly manipulate state.. react will not get know abt it
    this.setState({
      persons : [
        {name:"Patrick Jane", age:23},
        {name:"Lisbon", age:22},
        {name:"grace", age:23}
      ]
    }); //setState is a method of Component object. it takes object as an arg.. it will merge existing with new one.
   }

   render() {
     return (
       <div className="App">
         <h1> Hi This is Patrick Jane </h1>
         <button onClick={this.switchNameHandler}>Switch Name</button>
         <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
         <Person age={this.state.persons[1].age} name={this.state.persons[1].name}> My Hobbies: Racing </Person>
         <Person age={this.state.persons[2].age} name={this.state.persons[2].name}/>
       </div>
    );
  }
}



export default App;
