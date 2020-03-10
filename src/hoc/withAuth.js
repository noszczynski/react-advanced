import React, { Component } from "react";
import PropTypes from "prop-types";

const withAuth = WrappedComponent =>
  class WithCollapse extends Component {
    static propTypes = {
      WrappedComponent: PropTypes.node
    };

    state = {
      isAuthorised: false
    };

    toggleAuth = () => {
      this.setState(prevState => ({
        isAuthorised: !prevState.isAuthorised
      }));
    };

    render() {
      const { isAuthorised } = this.state;

      return (
        <WrappedComponent
          isAuthorised={isAuthorised}
          setAuthorised={this.toggleAuth}
          {...this.props}
        />
      );
    }
  };

export default withAuth;
