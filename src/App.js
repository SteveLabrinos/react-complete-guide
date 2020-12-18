import React, {Component} from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


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
        const person = {...this.state.persons[personIndex]};
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

        //  Toggling persons list based on button click
        let persons = null;

        //  inline style for the button using CSS modules classes
        let btnClass = [classes.Button];

        if (this.state.showPersons) {
            persons = (
                <div>
                    {/* Dynamically display a list of all the persons */}
                    {this.state.persons.map((person, index) => (
                        <ErrorBoundary key={person.id}>
                            <Person
                                name={person.name}
                                age={person.age}
                                click={this.deletePersonHandler.bind(this, index)}
                                change={(event) => this.nameChangeHandler(event, person.id)}/>
                        </ErrorBoundary>
                    ))}
                </div>
            );

            btnClass.push(classes.Red);

        }

        //  Dynamically adjusting 1rst paragraph classes
        const assignedClasses = [];

        if (this.state.persons.length <= 2) assignedClasses.push(classes.red);
        if (this.state.persons.length <= 1) assignedClasses.push(classes.bold);

        //  return of the jsx logic constructed
        return (
            <div className={classes.App}>
                <h1>Hi, I'm a React App</h1>
                <p className={assignedClasses.join(' ')}>This is really working!!!</p>
                <button className={btnClass.join(' ')}
                    //alt={this.state.showPersons}
                        onClick={this.togglePersonsHandler}>
                    Switch Name
                </button>
                {persons}
            </div>
        );
    }
}

export default App;

