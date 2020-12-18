import React from "react";
// import Radium from "radium";
import styled from "styled-components";
//  no longer in use because of styled-components lib
// import './Person.css'

//  creating a style component for the Person component
const StyledDiv = styled.div`
    width: 60%;
    margin: 1rem auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 1rem;
  
    @media (min-width: 500px) {
      width: 450px;
    }
`;


const person = (props) => {
    const style = {
        cursor: 'pointer'
    }

    return (
        <StyledDiv>
            <p onClick={props.click}
               style={style}>
                I'm {props.name} and I'm {props.age} years old
            </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </StyledDiv>
    )
};

export default person;
// with Radium package
// export default Radium(person);