import React, { Component } from "react";

interface MyState {
  c?: string;
  a: number;
  b: number;
}

interface MyProps {
  c?: string;
  a?: number;
  b?: number;
  name: string;
}

class TestComponent extends Component<MyProps, MyState> {
  state = {
    a: 123,
    b: 321,
    c: "12312"
  };

  componentDidMount = async () => {
    await this.setState({ a: 22222 });
    console.log(this.props, this.state.a);
  };

  render() {
    return (
      <div>
        TestComponent!{this.state.a} : {this.state.b}: {this.state.c}
      </div>
    );
  }
}

export { TestComponent };
