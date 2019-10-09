import React, { Component } from "react";

class EditFunctions extends Component {
  constructor() {
    super();
    this.state = {
      userInput: ""
    };
  }

  toggle() {
    const edit = document.getElementById("editToggle");
    if (edit.style.display === "none") {
      edit.style.display = "block";
    } else {
      edit.style.display = "none";
    }
  }
  render() {
    console.log(this.props);
    return (
      <nav>
        <button onClick={() => this.toggle()}>Toggle Edit</button>
        <div id="editToggle">
          <button
            onClick={() => {
              this.props.update(
                this.props.products[this.props.index].product_id,
                this.state.userInput
              );
            }}
          >
            Change Description
          </button>
          <input
            value={this.state.userInput}
            onChange={e => {
              this.setState({ userInput: e.target.value });
            }}
          />
        </div>
        <button
          onClick={() => {
            this.props.delete(this.props.products[this.props.index].product_id);
          }}
        >
          Delete
        </button>
      </nav>
    );
  }
}

export default EditFunctions;
