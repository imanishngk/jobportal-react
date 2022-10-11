import React from "react";
import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default function Signup() {
  // const [data, setData] = useState({});

  const [data, setData] = useState({
    name:"test",
    email:"test@g.com",
    password:"test",
    role:"user",
    is_checked:true
  });

  const [error, setErrors] = useState({});

  function handleSubmit(event) {
    event.preventDefault();

    let {name, email, password, role, is_checked} = data

    axios.post(`${process.env.REACT_APP_SERVER_URL}/signup`,{
        name,
        role, 
        password,
        email
    }).then(function(response){
        console.log("signup success");
        Navigate("/login")
    })
    .catch(function(error){
        console.log(error.response.data.errors);
        setErrors({})

        error.response.data.errors.forEach(el => {
          setErrors((prev_error)=>{
            return{
              ...prev_error,
              [el.param]: el.msg
            }
          })
        })
    })
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setData({
      ...data,
      [name]: value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          id="#"
          name="name"
          onChange={handleChange}
          value={data.name}
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="#"
          name="email"
          onChange={handleChange}
          value={data.email}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Password
        </label>
        <input
          type="password"
          class="form-control"
          id="#"
          name="password"
          onChange={handleChange}
          value={data.password}
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label required">
          Role
        </label>
        <select
          class="form-select"
          aria-label="Default select example"
          name="role"
          onChange={handleChange}
          value={data.role}
        >
          <option value="">Select</option>
          <option value="job-seeker">User</option>
          <option value="company">Company</option>
        </select>
      </div>

      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" 
        name="is_checked"
        onChange={handleChange}
        value = {data.is_checked}
        />
        <label class="form-check-label" for="exampleCheck1">
          Agree the terms and conditions
        </label>
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
