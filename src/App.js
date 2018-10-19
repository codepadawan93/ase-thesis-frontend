import React, { Component } from "react";
import { Launcher } from "react-chat-window";
import Masthead from "./components/Masthead";
import Features from "./components/Features";
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

        <footer className="footer bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
                <ul className="list-inline mb-2">
                  <li className="list-inline-item">
                    <a onClick={e => e.preventDefault()} href="/">
                      About
                    </a>
                  </li>
                  <li className="list-inline-item">&sdot;</li>
                  <li className="list-inline-item">
                    <a onClick={e => e.preventDefault()} href="/">
                      Contact
                    </a>
                  </li>
                  <li className="list-inline-item">&sdot;</li>
                  <li className="list-inline-item">
                    <a onClick={e => e.preventDefault()} href="/">
                      Terms of Use
                    </a>
                  </li>
                  <li className="list-inline-item">&sdot;</li>
                  <li className="list-inline-item">
                    <a onClick={e => e.preventDefault()} href="/">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
                <p className="text-muted small mb-4 mb-lg-0">
                  &copy; Your Website 2018. All Rights Reserved.
                </p>
              </div>
              <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item mr-3">
                    <a href="#">
                      <i className="fab fa-facebook fa-2x fa-fw" />
                    </a>
                  </li>
                  <li className="list-inline-item mr-3">
                    <a href="#">
                      <i className="fab fa-twitter-square fa-2x fa-fw" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-instagram fa-2x fa-fw" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
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
