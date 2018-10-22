import React, { Component } from "react";

class Masthead extends Component {
  constructor() {
    super();
    this.destinationInput = React.createRef();
  }

  _handleSubmit = event => {
    event.preventDefault();
    if (this.destinationInput.current.value !== "") {
      this.props._handleSubmit(event);
    }
  };

  render() {
    return (
      <header className="masthead text-white text-center">
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <h1 className="mb-5">Where will you go next?</h1>
            </div>
            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
              <form
                onSubmit={e => {
                  this._handleSubmit(e);
                }}
              >
                <div className="form-row">
                  <div className="col-12 col-md-9 mb-2 mb-md-0">
                    <input
                      ref={this.destinationInput}
                      type="text"
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
    );
  }
}

export default Masthead;
