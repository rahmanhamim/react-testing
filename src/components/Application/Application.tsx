import React from "react";

const Application = () => {
  return (
    <>
      <h1>Job application form</h1>
      <h2>Section 1</h2>
      <p>All fields are mandatory</p>
      <span title="close">X</span>
      <img
        src="https://images.pexels.com/photos/6446685/pexels-photo-6446685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="a laptop on the table"
      />
      <div data-testid="custom-element">Custom HTML element</div>
      <form action="">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="fullName"
            value="Hamim"
            onChange={() => {}}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" name="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Name</label>
          <select name="" id="job-location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="AU">Australia</option>
            <option value="BD">Bangladesh</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" />I Agree to the terms and
            conditions
          </label>
        </div>
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default Application;
