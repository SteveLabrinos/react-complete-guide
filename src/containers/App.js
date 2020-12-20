import React, {Component} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import AuthContext from '../context/auth-context';


class App extends Component {
    state = {
        persons: [
            {id: '123z', name: 'Steve', age: 36},
            {id: '321b', name: 'Ioulitta', age: 34},
            {id: '222a', name: 'Evelin', age: 2}
        ],
        otherState: 'Does not change with setState',
        showPersons: false,
        changeCounter: 0,
        authenticated: false
    }


    static getDerivedStateFromProps (props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[App.js] componentDidUpdate');
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
        //  to update changeCounter we depend on the prevState
        //  so setState returns a function with prevState arg
        this.setState((prevState, props) => {
            return {
                persons: persons,
                changeCounter: prevState.changeCounter + 1
            };
        });
    };

    //  Deletes the listed person
    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();      ES5
        const persons = [...this.state.persons];         // ES6
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    loginHandler = () => {this.setState({authenticated: true})}

    render() {
        console.log('[App.js] render');

        //  dynamically construct persons list based on the current state
        const persons = (this.state.showPersons) ?
            <div>
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangeHandler}
                    //  also pass authenticated for Person
                    isAuthenticated={this.state.authenticated}/>
            </div> : null

        //  return of the jsx logic constructed
        return (
            <WithClass classes={classes.App}>
                <AuthContext.Provider value={{
                    authenticated: this.state.authenticated,
                    login: this.loginHandler
                }}>
                    <Cockpit
                        title={this.props.title}
                        personsLength={this.state.persons.length}
                        showPersons={this.state.showPersons}
                        clicked={this.togglePersonsHandler}/>
                    {persons}
                </AuthContext.Provider>
            </WithClass>
        );
    }
}

export default App;

