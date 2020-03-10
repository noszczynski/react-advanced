import React, { Component } from "react";

class Collapse extends Component {
  // static propTypes = {
  //   WrappedComponent: PropTypes.node
  // };

  state = {
    isCollapsed: false
  };

  toggle = () => {
    this.setState(prevState => ({
      isCollapsed: !prevState.isCollapsed
    }));
  };

  render() {
    const renderProps = {
      isCollapsed: this.state.isCollapsed,
      setCollapsed: this.toggle
    };

    return this.props.render(renderProps);
  }

  // render() {
  //   const { isCollapsed } = this.state;
  //
  //   return (
  //     <WrappedComponent
  //       isCollapsed={isCollapsed}
  //       setCollapsed={this.toggle}
  //       {...this.props}
  //     />
  //   );
  // }
}

export default Collapse;
