import React, { Component } from 'react';
import firebase from 'firebase';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      idea: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
      email: this.state.email,
      name: this.state.name,
      idea: this.state.idea
    }
    itemsRef.push(item);
    this.setState({
      name: '',
      email: '',
      idea: ''
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const {
      name,
      email,
      idea,
    } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          value={name}
          onChange={this.handleChange}
          type="text"
          placeholder="Name (Optional)"
        />
        <input
          name="email"
          value={email}
          onChange={this.handleChange}
          type="text"
          placeholder="Email (Optional)"
        />
        <textarea
          name="idea"
          value={idea}
          onChange={this.handleChange}
          type="textarea"
          placeholder="Your bright idea..."
        />
        <button type="submit">Submit</button>

      </form>
    );
  }
}

export { Form };