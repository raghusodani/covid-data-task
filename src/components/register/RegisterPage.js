import React, { useEffect, useState } from 'react';
import { FaHome } from 'react-icons/fa';
import Axios from 'axios';
import Switch from 'react-switch';
import './regStyle.css';
import { useHistory } from 'react-router';

function RegisterPage() {
  let history = useHistory();
  document.title = 'register';
  const [userReg, setUserReg] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    bloodGroup: '',
    password: '',
    isDonor: 'no',
  });
  let flag = 1;

  function validate(values) {
    let error = {};
    //name
    if (!values.name.trim()) {
      error.name = 'Name required';
      flag = 0;
    }

    //email
    if (!values.email) {
      error.email = 'Email required';
      flag = 0;
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      error.email = 'Email address is invalid';
      flag = 0;
    }
    //address
    if (!values.address) {
      error.address = 'Address is required';
      flag = 0;
    }

    //bloodGroup
    const validBloodGroupRegex = /^(A|B|AB|O)[+-]$/i;
    if (!values.bloodGroup) {
      error.bloodGroup = 'Blood Group is required';
      //console.log('aayabg');
      // console.log(isValid)
      flag = 0;
    }
    if (!validBloodGroupRegex.test(values.bloodGroup)) {
      error.bloodGroup = 'Enter Valid Blood group';
      flag = 0;
    }
    //phone
    var pattern = new RegExp(/^[0-9\b]+$/);
    if (!values.phone) {
      error.phone = 'Phone Number is required';
      flag = 0;
    }
    if (!pattern.test(values.phone)) {
      error.phone = 'Please enter only number without country code';
      flag = 0;
    } else if (values.phone.length !== 10) {
      error.phone = 'Please enter valid phone number.';
      flag = 0;
    }

    //password
    if (!values.password) {
      error.password = 'Password is required';
      flag = 0;
    } else if (values.password.length < 6) {
      error.password = 'Password needs to be 6 characters or more';
      flag = 0;
    }
    return error;
  }
  const [errors, setErrors] = useState({});
  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const nameOfInput = e.target.name;
    const value = e.target.value;

    setUserReg({ ...userReg, [nameOfInput]: value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    const newUser = {
      ...userReg,
      id: new Date().getTime().toString(),
    };

    setRecords([...records, newUser]);
    setErrors(validate(userReg));

    if (flag === 1) {
      console.log('post gayi');
      Axios.post('http://localhost:3001/api/insert', {
        name: userReg.name,
        email: userReg.email,
        address: userReg.address,
        phone: userReg.phone,
        bloodGroup: userReg.bloodGroup,
        password: userReg.password,
        isDonor: userReg.isDonor,
      }).then((response) => {
        console.log(response);

        history.push('/login');
      });
    }
    e.target.reset();
  };
  const [checkState, setCheckState] = useState(false);
  // console.log(userReg.isDonor);
  const handleChange = (e) => {
    // console.log(e);
    if (e) {
      setUserReg({ ...userReg, isDonor: 'yes' });
    } else setUserReg({ ...userReg, isDonor: 'no' });
    setCheckState(e);
  };

  return (
    <div className='register-form'>
      <a className='btnHome' href='/'>
        <FaHome />
      </a>
      <form className='form' onSubmit={submitForm}>
        <h1> Register </h1>
        <input
          type='text'
          name='name'
          placeholder='Name*'
          autoComplete='off'
          onChange={handleInput}
        ></input>
        {errors.name && <p className='valid'>{errors.name}</p>}
        <input
          type='text'
          name='email'
          placeholder='Email*'
          autoComplete='off'
          onChange={handleInput}
        ></input>
        {errors.email && <p className='valid'>{errors.email}</p>}
        <input
          type='text'
          name='address'
          placeholder='Address*'
          autoComplete='off'
          onChange={handleInput}
        ></input>
        {errors.address && <p className='valid'>{errors.address}</p>}
        <input
          type='text'
          name='phone'
          placeholder='Phone Number*'
          autoComplete='off'
          onChange={handleInput}
        ></input>
        {errors.phone && <p className='valid'>{errors.phone}</p>}
        <input
          type='text'
          name='bloodGroup'
          placeholder='Blood group*'
          autoComplete='off'
          onChange={handleInput}
        ></input>
        {errors.bloodGroup && <p className='valid'>{errors.bloodGroup}</p>}
        <input
          type='password'
          name='password'
          placeholder='Password*'
          autoComplete='off'
          onChange={handleInput}
        />
        {errors.password && <p className='valid'>{errors.password}</p>}
        <label className='isDonor'>
          <span>Are you a donor? </span>
          <Switch onChange={handleChange} checked={checkState} />
        </label>
        <p id='required-text'>* Required Fields</p>
        <button type='submit'>Submit</button>

        <p className='message'>
          Already registered? <a href='/login'>Log In</a>
        </p>
      </form>
    </div>
  );
}

export default RegisterPage;
