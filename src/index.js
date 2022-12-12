import React from 'react'
import ReactDom from 'react-dom'

function Greeting(props){
  return <h4>This is {props.name} and this is my {props.number} component</h4>;
}

class Greetings extends React.Component {
  render(){
    return <h2> Hi, this is {this.props.name}</h2>
  }
}

ReactDom.render(<Greetings name='Sahib'/>, document.querySelector('#root'));
ReactDom.render(<Greeting name='Sahib' number='first'/>, document.querySelector('#root1'));