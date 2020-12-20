import React, {Component} from "react";
import classes from './Person.css'
import PropTypes from "prop-types";
import WithClass from '../../../hoc/WithClass'
import AuthContext from '../../../context/auth-context';


class Person extends Component {
    constructor(props) {
        super(props);
        //  new way to set reference in class based components
        this.inputElementRef = React.createRef();
    }

    //  after setting the ref in the text element, we focus when the component mounts
    componentDidMount() {
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
        // this.inputElement.focus();
    }

    //  more elegant wat to use context
    static contextType = AuthContext;

    render() {
        console.log('[Person.js] render');

        return (
            <WithClass classes={classes.Person}>
                {this.context.authenticated ? <p>Authenticated</p> :
                    <p>Please log in</p>}
                {/*Old way to use context*/}
                {/*<AuthContext.Consumer>*/}
                {/*    {context => context.authenticated ? <p>Authenticated</p> :*/}
                {/*        <p>Please log in</p>}*/}
                {/*</AuthContext.Consumer>*/}
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I'm {this.props.age} years old
                </p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    ref={this.inputElementRef}
                    // ref={(inputEl) => {this.inputElement = inputEl}}
                    onChange={this.props.change}
                    value={this.props.name}/>
            </WithClass>
        )
    };
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default Person;
