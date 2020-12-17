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
            {name: 'Steve', age: 36},
            {name: 'Ioulitta', age: 34},
            {name: 'Evelin', age: 2}
        ],
        otherState: 'Does not change with setState'
    }

    //  Changes the state on click
    switchNameHandler = (newName) => {
        // console.log('Clicked!!');
        //  changing the state properties with the Component method setState
        this.setState({
            persons: [
                {name: newName, age: 36},
                {name: 'Ioulitta', age: 34},
                {name: 'Evelin', age: 2.6}
            ]
        })
    }

    //  Changes the state onChange event
    nameChangeHandler = event => {
        this.setState({
            persons: [
                {name: 'Steve', age: 36},
                {name: event.target.value, age: 34},
                {name: 'Evelin', age: 2}
            ]
        })
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

        return (
            <div className="App">
                <h1 style={style} >Hi, I'm a React App</h1>
                <p>This is really working!!!</p>
                <button
                    //style={style}
                    onClick={() => this.switchNameHandler('Steve!!')}>
                    Switch Name
                </button>
                <Person name={this.state.persons[0].name}
                        age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        click={this.switchNameHandler.bind(this, 'Stavros!!!!')}
                        changed={this.nameChangeHandler}>
                    My hobbies: Fishing
                </Person>
                <Person name={this.state.persons[2].name}
                        age={this.state.persons[2].age}/>
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
//     const switchNameHandler = () => {
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
//             <button onClick={switchNameHandler}>Switch Name</button>
//             <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
//             <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>
//                 My hobbies: Fishing
//             </Person>
//             <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
//         </div>
//     );
// }
// export default app;

