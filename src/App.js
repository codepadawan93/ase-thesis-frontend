import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Masthead from "./components/Masthead";
import Features from "./components/Features";
import Footer from "./components/Footer";
import { Launcher } from "react-chat-window";
import toastr from "toastr";

import logo from "./theme/img/your_next_vacation.jpg";

import "toastr/build/toastr.min.css";
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
        return response.json();
      })
      .then(data => {
        if (data && data.success === true) {
          const receivedMessage = {
            author: "Ionut",
            data: {},
            type: null
          };

          // Text message
          if (data.type === 1) {
            receivedMessage.data = {
              text: data.message
            };
            receivedMessage.type = "text";
          } else {
            // TODO:: implement other types of messgaes as well
            receivedMessage.data = {};
            receivedMessage.type = "something else...";
          }

          setTimeout(() => {
            this.setState({
              messageList: [...this.state.messageList, receivedMessage]
            });
          }, 1400);
        } else {
          console.error(data.error);
          toastr.error("An error has occurred: " + data.error);
        }
      })
      .catch(err => {
        console.error(err);
        toastr.error("An error has occurred: " + err);
      });
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

  _handleNavigate = event => {
    event.preventDefault();
    toastr.warning("Coming soon...");
  };

  render() {
    return (
      <div className="App">
        <Navbar _handleNavigate={this._handleNavigate} />

        <Masthead />

        <Features />

        <Footer _handleNavigate={this._handleNavigate} />

        <Launcher
          agentProfile={{
            teamName: "Ionut",
            imageUrl: logo //"https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png"
          }}
          onMessageWasSent={this._onMessageWasSent}
          messageList={this.state.messageList}
          showEmoji={true}
        />
      </div>
    );
  }
}

export default App;
