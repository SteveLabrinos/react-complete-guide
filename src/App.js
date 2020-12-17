//  React hooks
// import React, {useState} from 'react';

//  Class-based components
import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

// Class-based component with state property
class App extends Component {
    state = {
        persons: [
            {id: '123z', name: 'Steve', age: 36},
            {id: '321b', name: 'Ioulitta', age: 34},
            {id: '222a', name: 'Evelin', age: 2}
        ],
        otherState: 'Does not change with setState',
        showPersons: false
    }

    //  Changes the state on click
    togglePersonsHandler = () => {
        //  toggle persons div
        const togglePersons = !this.state.showPersons;
        this.setState({showPersons: togglePersons})
    }

    //  Changes the content of the list, depending on the input
    nameChangeHandler = (event, personId) => {
        // getting the array index of the obj id value
        const personIndex = this.state.persons.findIndex(p => p.id === personId);
        //  copying the object to manipulate it
        const person = { ...this.state.persons[personIndex]};
        person.name = event.target.value;
        //  getting a copy of the persons array
        const persons = [...this.state.persons];
        //  updating the specific object with the new name
        persons[personIndex] = person;
        //  updating the state with the updated array of persons
        this.setState({persons: persons});
    }

    //  Deletes the listed person
    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();      ES5
        const persons = [...this.state.persons];         // ES6
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    render() {
        //  inline style for the button
        const style = {
            backgroundColor: 'white',
            border: '1px solid blue',
            padding: '.5rem',
            cursor: 'pointer',
            font: 'inherit'
        }

        //  Toggling persons list based on button click
        const persons = this.state.showPersons ?
            (
                <div>
                    {/* Dynamically display a list of all the persons */}
                    {this.state.persons.map((person, index) => (
                        <Person
                            name={person.name}
                            age={person.age}
                            click={this.deletePersonHandler.bind(this, index)}
                            key={person.id}
                            change={(event) => this.nameChangeHandler(event, person.id)}/>
                    ))}
                </div>
            ) : null;

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!!!</p>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>
                    Switch Name
                </button>
                {persons}
            </div>
        );
    }
}

export default App;

// //  Functional component with React hooks
// const app = props => {
//     const [personsState, setPersonsState] = useState({
//             persons: [
//                 {name: 'Steve', age: 36},
//                 {name: 'Ioulitta', age: 34},
//                 {name: 'Evelin', age: 2}
//             ],
//             otherState: 'Does not change with setState'
//         });
//
//     //  Using another useState so we can have the otherState alone
//     const [otherState, setOtherState] = useState('oes not change with setState');
//
//     console.log(personsState, otherState)
//
//     const togglePersonsHandler = () => {
//         setPersonsState({
//             persons: [
//                 {name: 'Stavros', age: 36},
//                 {name: 'Ioulitta', age: 34},
//                 {name: 'Evelin', age: 2.6}
//             ]
//         })
//     }
//
//     return (
//         <div className="App">
//             <h1>Hi, I'm a React App</h1>
//             <p>This is really working!!!</p>
//             <button onClick={togglePersonsHandler}>Switch Name</button>
//             <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
//             <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>
//                 My hobbies: Fishing
//             </Person>
//             <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
//         </div>
//     );
// }
// export default app;

