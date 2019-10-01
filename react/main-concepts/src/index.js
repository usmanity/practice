import React from "react";
import ReactDOM from "react-dom";

// function formatName(user) {
//   return `${user.firstName} ${user.lastName}`;
// }

// const user = {
//   firstName: "Muhammad",
//   lastName: "Usman"
// };

// const element = <p>Hello, {formatName(user)}</p>;

// ReactDOM.render(element, document.getElementById("root"));

// const element = <h3>Hello, world</h3>;
// ReactDOM.render(element, document.getElementById("root"));

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById("root"));
// }

// setInterval(tick, 1000);

// function Welcome(props) {
//   return <p>Hello, {props.name}</p>;
// }

// function Greeting() {
//   return (
//     <div>
//       <Welcome name="Samson" />
//       <Welcome name="Heisenberg" />
//     </div>
//   );
// }

// const element = <Greeting />;

// ReactDOM.render(element, document.getElementById("root"));

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello.</h1>
        <FormattedDate date={this.state.date} onClick={this.handleClick} />
      </div>
    );
  }
}

class FormattedDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      clicked: true
    }));
    console.log("Click happened");
  }
  render() {
    return (
      <div>
        <h2 onClick={this.handleClick}>
          It is {this.props.date.toLocaleTimeString()}.
        </h2>
      </div>
    );
  }
}

// function tick() {
//   ReactDOM.render(<Clock />, document.getElementById("root"));
// }

ReactDOM.render(<Clock />, document.getElementById("root"));
