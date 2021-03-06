import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    //  Dynamically adjusting 1rst paragraph classes
    const assignedClasses = [];
    let btnClass = '';

    if (props.personsLength <= 2) assignedClasses.push(classes.red);
    if (props.personsLength <= 1) assignedClasses.push(classes.bold);
    if (props.showPersons) btnClass = classes.Red;

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!!!</p>
            <button className={btnClass}
                    onClick={props.clicked}>
                Switch Name
            </button>
        </div>
    );
}

export default cockpit