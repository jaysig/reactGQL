import React, { Component } from 'react';
import AuthForm from './AuthForm';
import { graphql } from 'react-apollo';
import mutation from '../mutations/SignUp';

class SignUpForm extends Component {
  onSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password }
    }).catch(res => {
      const errors = res.graphQLErrors.map(error => error.message);
      this.setState({ errors });
    });
  }

  render() {
    return (
      <div>
        <h3>Sign Up</h3>
        <AuthForm errors={[]} onSubmit={this.onSubmit.bind(this)} />
      </div>
    );
  }
}

export default graphql(mutation)(SignUpForm);
