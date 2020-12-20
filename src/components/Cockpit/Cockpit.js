import React, {useEffect, useRef, useContext} from 'react';
import classes from './Cockpit.css';
import WithClass from '../../hoc/WithClass';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
    //  Define the reference to the button
    const toggleBtnClick = useRef(null);
    //  Manage functional component lifecycle with React hook useEffect
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //  Http request
        //  It's a combination of componentDidMount and componentDidUpdate
        //  simulate http request be adding 1 sec delay
        //  useEffect shouldn't run every re-render
        // setTimeout(() => {
        //     console.log('Saved data to cloud');
        // }, 1000);
        //  auto click the button after first render
        toggleBtnClick.current.click();
        //  use return to clean up
        return () => {
            console.log('[Cockpit.js] clean up work with useEffect');
        }
    }, []);

    //  new way to use context with useContext React hook
    const authContext = useContext(AuthContext);

    //  Dynamically adjusting 1rst paragraph classes
    const assignedClasses = [];
    let btnClass = '';

    if (props.personsLength <= 2) assignedClasses.push(classes.red);
    if (props.personsLength <= 1) assignedClasses.push(classes.bold);
    if (props.showPersons) btnClass = classes.Red;

    return (
        <WithClass classes={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!!!</p>
            <button
                ref={toggleBtnClick}
                className={btnClass}
                onClick={props.clicked}>
                Switch Name
            </button>
            <button
                //  info to also pass the state to Person
                onClick={authContext.login}>
                Log in
            </button>
            {/*old way to use context*/}
            {/*<AuthContext.Consumer>*/}
            {/*    {context => <button*/}
            {/*        //  info to also pass the state to Person*/}
            {/*        onClick={context.login}>*/}
            {/*        Log in*/}
            {/*    </button>*/}
            {/*    }*/}
            {/*</AuthContext.Consumer>*/}
        </WithClass>
    );
}

//  use React.memo to prevent it from re-rendering if the props dont change
//  now cockpit renders if the list toggles and if the personsLength changes
export default React.memo(cockpit);