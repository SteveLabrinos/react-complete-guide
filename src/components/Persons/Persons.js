import React, {PureComponent} from 'react';
import Person from './Person/Person';
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";


class Persons extends PureComponent {

    //  not need to use it when we extend PureComponent 
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     //  update only if nextProps.persons has changes
    //     return nextProps.persons !== this.props.persons;
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot!'};
    }

    // the most used hook after the component is updated
    componentDidUpdate(pervProps, pervState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    //  method to use code to execute right before the component is removed
    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] rendering ...')
        return (
            this.props.persons.map((person, index) => <ErrorBoundary key={person.id}>
                    <Person
                        name={person.name}
                        age={person.age}
                        click={() => this.props.clicked(index)}
                        change={event => this.props.changed(event, person.id)}/>
                </ErrorBoundary>
            )
        )
    }
}

export default Persons;