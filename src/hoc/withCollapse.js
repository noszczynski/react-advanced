import React, { Component } from "react";
import PropTypes from "prop-types";

const withCollapse = WrappedComponent =>
  class WithCollapse extends Component {
    static propTypes = {
      WrappedComponent: PropTypes.node
    };

    state = {
      isCollapsed: false
    };

    toggle = () => {
      this.setState(prevState => ({
        isCollapsed: !prevState.isCollapsed
      }));
    };

    render() {
      const { isCollapsed } = this.state;

      return (
        <WrappedComponent
          isCollapsed={isCollapsed}
          setCollapsed={this.toggle}
          {...this.props}
        />
      );
    }
  };

export default withCollapse;
