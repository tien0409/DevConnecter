import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addEducation } from "../../actions/profile";
import { withRouter } from "react-router-dom";

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className="large text-primary">Add An Experience</h1>
      <p className="lead">
        <i className="fas fa-code-branch"></i> Add any school{" "}
      </p>
      <small>* = required field</small>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addEducation(formData, history);
        }}
        className="form"
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="* School or Bootcamp"
            onChange={(e) => onChange(e)}
            value={school}
            name="school"
            required
          />
        </div>
        <div className="form-group">
          <input
            onChange={(e) => onChange(e)}
            value={degree}
            type="text"
            placeholder="* Degree of Certificate"
            name="degree"
            required
          />
        </div>
        <div className="form-group">
          <input
            onChange={(e) => onChange(e)}
            value={fieldofstudy}
            type="text"
            placeholder="Field of Study"
            name="fieldofstudy"
          />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input value={from} onChange={onChange} type="date" name="from" />
        </div>
        <div className="form-group">
          <p>
            <input
              value={current}
              checked={current}
              onChange={() => {
                setFormData({ ...formData, current: !current });
                toggleDisabled(!toDateDisabled);
              }}
              type="checkbox"
              name="current"
            />{" "}
            Current School
          </p>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input
            disabled={toDateDisabled ? "disabled" : ""}
            type="date"
            name="to"
            value={to}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Program Description"
            value={description}
            onChange={(e) => onChange(e)}
          ></textarea>
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <a className="btn btn-light my-1" href="dashboard.html">
          Go Back
        </a>
      </form>
    </Fragment>
  );
};

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default connect(null, { addEducation })(withRouter(AddEducation));
