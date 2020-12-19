import React, {Component} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


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

        //  dynamically construct persons list based on the current state
        const persons = (this.state.showPersons) ?
            <div>
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangeHandler}/>
            </div> : null

        //  return of the jsx logic constructed
        return (
            <div className={classes.App}>
                <Cockpit
                    title={this.props.title}
                    personsLength={this.state.persons.length}
                    showPersons={this.state.showPersons}
                    clicked={this.togglePersonsHandler}/>
                {persons}
            </div>
        );
    }
}

export default App;

