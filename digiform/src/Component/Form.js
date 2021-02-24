import React, { Component } from "react";
import Header from "./Header";

export default class Form extends Component {
  render() {
    return (
      <>
        {/* <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        </Form> */}

        <form className="form-center">
          <h1 className="">Employee Joining Form</h1>

          <div className="input-container">
            <input type="text" id="username" className="input" required />
            <label htmlfor="username" className="label">
              {" "}
              Employee Name{" "}
            </label>
          </div>

          <div className="input-container">
            <input type="text" id="username" className="input" required />
            <label htmlfor="username" className="label">
              {" "}
              Father's/Husband Name{" "}
            </label>
          </div>

          <div className="input-container">
            <input type="email" id="email" className="input" required />
            <label htmlfor="email" className="label">
              {" "}
              Email{" "}
            </label>
          </div>

          <div className="input-container">
            <input type="date" id="username" className="input" required />
            <label htmlfor="username" className="label">
              {" "}
              Date of Joining<span></span>{" "}
            </label>
          </div>

          <div className="input-container">
            <input type="text" id="username" className="input" required />
            <label htmlforr="username" className="label">
              {" "}
              Present Address{" "}
            </label>
          </div>

          <div className="input-container">
            <input type="text" id="username" className="input" required />
            <label htmlfor="username" className="label">
              {" "}
              Permanent Address{" "}
            </label>
          </div>

          <div className="input-container">
            <input type="date" id="username" className="input" required />
            <label htmlfor="username" className="label">
              {" "}
              Date of Birth<span></span>{" "}
            </label>
          </div>

          <div className="input-container">
            <input type="number" id="username" className="input" required />
            <label htmlfor="username" className="label">
              {" "}
              Mobile No.{" "}
            </label>
          </div>

          <div className="input-container">
            <input type="number" id="username" className="input" required />
            <label htmlFor="username" className="label">
              {" "}
              Bank Account No.{" "}
            </label>
          </div>

          <div className="input-container">
            <input type="text" id="username" className="input" required />
            <label htmlFor="username" className="label">
              {" "}
              IFSC Code{" "}
            </label>
          </div>

          <h1 className="">Employee Joining Form</h1>

          <div className="input-container">
            <input type="text" id="username" className="input" required />
            <label htmlFor="username" className="label">
              {" "}
              Name{" "}
            </label>
          </div>

          <div className="input-container">
            <input type="text" id="username" className="input" required />
            <label htmlFor="username" className="label">
              {" "}
              Relation{" "}
            </label>
          </div>

          <div className="input-container">
            <input
              type="number"
              id="username"
              maxLength="10"
              className="input"
              required
            />
            <label htmlFor="username" className="label" maxLength="10">
              {" "}
              Phone No.{" "}
            </label>
          </div>

          <div className="input-container">
            <input type="text" id="username" className="input" required />
            <label htmlFor="username" className="label">
              {" "}
              Address{" "}
            </label>
          </div>

          <div className="button-container">
            <button>Submit</button>
            <div className="button-background"></div>
          </div>
        </form>
      </>
    );
  }
}
