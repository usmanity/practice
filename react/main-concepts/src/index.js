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

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date() };
//   }

//   componentDidMount() {
//     this.timerID = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello.</h1>
//         <FormattedDate date={this.state.date} onClick={this.handleClick} />
//       </div>
//     );
//   }
// }

// class FormattedDate extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       clicked: false
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     this.setState(state => ({
//       clicked: true
//     }));
//     console.log("Click happened");
//   }
//   render() {
//     return (
//       <div>
//         <h2 onClick={this.handleClick}>
//           It is {this.props.date.toLocaleTimeString()}.
//         </h2>
//       </div>
//     );
//   }
// }

// // function tick() {
// //   ReactDOM.render(<Clock />, document.getElementById("root"));
// // }

// ReactDOM.render(<Clock />, document.getElementById("root"));

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

// ReactDOM.render(
//   <Greeting isLoggedIn={true} />,
//   document.getElementById("root")
// );

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }
  handleLoginClick() {
    this.setState({
      isLoggedIn: true
    });
  }
  handleLogoutClick() {
    this.setState({
      isLoggedIn: false
    });
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
    const nums = [2, 4, 6, 8];
    return (
      <div>
        <WarningBanner warn={false} />
        <NumberList list={nums} />
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
        <NameForm />
      </div>
    );
  }
}

class NumberList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.list
    };
  }
  render() {
    const listItems = this.state.list.map(number => (
      <li key={number.toString()}>{number * 2}</li>
    ));
    return <ul>{listItems}</ul>;
  }
}

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      value: event.target.value.toUpperCase()
    });
  }
  handleSubmit(event) {
    console.log("A name was submitted: " + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }
  return <div className="warning">Warning!</div>;
}

ReactDOM.render(<LoginControl />, document.getElementById("root"));
