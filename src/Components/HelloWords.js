import { render } from '@testing-library/react'
import React from 'react'

class HelloWorld extends React.Component{
    render(){
        return(
        <h1> Hellow {this.props.name}</h1>
        );
    }
}

// function HellowWord(props){
//     return(
//     <h1>Hello {props.name}</h1>
//     );
// }

export default HelloWorld;