import React from 'react';
import shortid from 'shortid';

import '../style/FeedbackForm.css';

export default class FeedbackForm extends React.Component {
  state = {
    text: '',
  };
  
  handleKeyDown = (event) => {
    event.persist();
    if(event.keyCode===13 && event.ctrlKey) {
      if(this.state.text === '') {
        alert("Please enter text");
        return;
      };  
      this.props.onSubmit({
        id: shortid.generate(),
        text: this.state.text,
      });
      this.setState({
        text: "",
      });
  }
  }

  handleChange = (event) => {
    event.persist();
    this.setState({[event.target.name]: event.target.value});
    console.log("event", event)
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.text === '') {
      alert("Please enter text");
      return;
    };
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
    });
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <form action="#" className="form" onKeyDown={this.handleKeyDown} >
        <textarea name="text"
                  id="feedbackDescription" 
                  cols="30"
                  rows="10"
                  value={this.state.text}
                  onChange={this.handleChange}
        />
        <button className="button" type="submit" onClick={this.handleSubmit}>Написать консультанту</button>
      </form>
    );
  };
}