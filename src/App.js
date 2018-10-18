import React, { Component } from "react";
import { Launcher } from "react-chat-window";
import "./theme/vendor/bootstrap/css/bootstrap.min.css";
import "./theme/vendor/fontawesome-free/css/all.min.css";
import "./theme/vendor/simple-line-icons/css/simple-line-icons.css";
import "./theme/css/landing-page.min.css";

class App extends Component {
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
  };

  _sendMessage(text) {
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
  }

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

        <header className="masthead text-white text-center">
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <h1 className="mb-5">Where will you go next?</h1>
              </div>
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <form onSubmit={e => e.preventDefault()}>
                  <div className="form-row">
                    <div className="col-12 col-md-9 mb-2 mb-md-0">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Enter your destination..."
                      />
                    </div>
                    <div className="col-12 col-md-3">
                      <button
                        type="submit"
                        className="btn btn-block btn-lg btn-primary"
                      >
                        Ask Ionut
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </header>

        <section className="features-icons bg-light text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-screen-desktop m-auto text-primary" />
                  </div>
                  <h3>Book online</h3>
                  <p className="lead mb-0">
                    <strong>Your next vacation</strong> is your fully integrated
                    solution for travel - from the desktop or mobile, we are
                    eager to help you plan and book
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-layers m-auto text-primary" />
                  </div>
                  <h3>Next-gen assistance</h3>
                  <p className="lead mb-0">
                    Let us introduce you to your Machine Learning-enabled online
                    assistant, Ionut! Just chat with him and he will recommend
                    you the best location for
                    <strong> Your next vacation</strong>!
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-check m-auto text-primary" />
                  </div>
                  <h3>Easy to Use</h3>
                  <p className="lead mb-0">
                    You need not worry about weather, traffic or availability -
                    let Ionut figure it all out and assure you have the best
                    trip possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

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
