import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

import arrowW from '../../assets/arrow_terminal_w.svg';
import arrowB from '../../assets/arrow_terminal_b.svg';


class Terminal extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      isFocused: false, 
      inputVal: '', 
      navigate: ''
     };
  }
  togglePrompt = () => {
    this.setState((state, props) => ({
        isFocused: !state.isFocused
      }));
    console.log(this.state.isFocused)
  };
  // updates state as the user types into input field
  updateInputValue(evt) {
    this.setState({
      inputVal: evt.target.value
    });
  }
  // runs the command as user clicks enter, setting state to redirect pages or run comands
  runCommand(evt) {
    if (evt.key === 'Enter') {
      console.log(this.state.inputVal);
      const command = this.state.inputVal.split(' ');
      // separates command string into operator and target
      var action = command[0];
      var target = command[1];
      // clears input field
      this.setState(() => ({
        inputVal: ''
      }));
      // does operation depending on operator
      if (action === 'cd') {
        if (target.toLowerCase() === 'home') {
          target = '';
        }
        this.setState(() => ({
          navigate: '/' + target
        }));
      } else if (action === 'cat') {
        this.setState(() => ({
          navigate: '/projects/' + target
        }));
      }
    }
  }
  render() {
    if (this.state.navigate != '') {
      this.setState(() => ({
        navigate: '', 
        isFocused: false
      }));
      return <Redirect to={this.state.navigate}/>
    }
    return (
        <div id="terminal-comp">
                <div className={'input-group widget mx-8 '  + (this.state.isFocused === true ? "t-out" : "t-out-hidden")}>
                    <div className="input-group-prepend ">
                        <img className='input-group-text terminal' src={this.state.isFocused === true ? arrowW : arrowB} alt='terminal arrow'></img>
                    </div>
                      <input type="text" autoFocus className="form-control terminal-prompt" id="terminal" onFocus={this.togglePrompt} onBlur={this.togglePrompt} placeholder=".  .  ." aria-label="Terminal Command" value={this.state.inputVal} onChange={evt => this.updateInputValue(evt)} onKeyPress={evt => this.runCommand(evt)} aria-describedby="basic-addon1"/>
                </div>
        </div>
    );
  }
}

export default Terminal;
