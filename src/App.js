import React, { Component } from "react";
import Masthead from "./components/Masthead";
import Features from "./components/Features";
import Footer from "./components/Footer";
import { Launcher } from "react-chat-window";
import "./theme/vendor/bootstrap/css/bootstrap.min.css";
import "./theme/vendor/fontawesome-free/css/all.min.css";
import "./theme/vendor/simple-line-icons/css/simple-line-icons.css";
import "./theme/css/landing-page.min.css";

class App extends Component {
  _server = "https://mighty-peak-97805.herokuapp.com/api/";

  constructor() {
    super();
    this.state = {
      messageList: []
    };
  }

  _onMessageWasSent = message => {
    this.setState({
      messageList: [...this.state.messageList, message]
    });
    fetch(this._server + message.data.text)
      .then(response => {
        response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(err => console.error(err));
  };

  _sendMessage = text => {
    if (text.length > 0) {
      this.setState({
        messageList: [
          ...this.state.messageList,
          {
            author: "them",
            type: "text",
            data: { text }
          }
        ]
      });
    }
  };

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-light bg-light static-top">
          <div className="container">
            <a className="navbar-brand" href="#">
              Your next vacation
            </a>
            <a className="btn btn-primary" href="#">
              Sign in
            </a>
          </div>
        </nav>

        <Masthead />

        <Features />

        <Footer />

        <div>
          <Launcher
            agentProfile={{
              teamName: "Ionut",
              imageUrl:
                "https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png"
            }}
            onMessageWasSent={this._onMessageWasSent}
            messageList={this.state.messageList}
            showEmoji={false}
          />
        </div>
      </div>
    );
  }
}

export default App;
