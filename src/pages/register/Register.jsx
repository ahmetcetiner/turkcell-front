import React, { useState } from 'react';
import "./Register.css";
const Register = () => {
  const [kullaniciAdi, setKullaniciAdi] = useState('');
  const [email, setEmail] = useState('');
  const [sifre, setSifre] = useState('');

  const handleKayit = () => {
    console.log('Kullanıcı Adı:', kullaniciAdi);
    console.log('E-posta:', email);
    console.log('Şifre:', sifre);
  };

  return (
    <div className='bodyRegister'>
      <div class="container background">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-12 col-md-8 login-boxx">
            <div class="col-lg-12 login-title">
              <h1>Sing Up</h1>
            </div>
            <div class="col-lg-12 login-form"></div>
            <form class="form-register">
              <div class="form-group">
                <label class="form-control-label">FIRSTNAME</label>
                <input
                  type="text"
                  id="FirstName"
                  name="FirstName"
                  formControlName="FirstName"
                  class="form-control"
                  placeholder="First Name"
                  autofocus
                />
                <span
                  class="help-block"
                >
                  Firstname is required
                </span>
              </div>
              <div class="form-group">
                <label class="form-control-label">LASTNAME</label>
                <input
                  type="text"
                  id="LastName"
                  name="LastName"
                  formControlName="LastName"
                  class="form-control"
                  placeholder="Last Name"
                  autofocus
                />
                <span
                  class="help-block"
                >
                  Lastname is required
                </span>
              </div>
              <div class="form-group">
                <label class="form-control-label">USERNAME</label>
                <input
                  type="text"
                  id="UserName"
                  name="UserName"
                  formControlName="UserName"
                  class="form-control"
                  placeholder="User Name"
                  autofocus
                />
                <span
                  class="help-block"
                >
                  Username is required
                </span>
                <span
                  class="help-block"
                >
                  Username is exist
                </span >
              </div >
              <div class="form-group">
                <label class="form-control-label">E-MAIL</label>
                <input
                  type="text"
                  id="Email"
                  name="Email"
                  formControlName="Email"
                  class="form-control"
                  placeholder="E-mail"
                  autofocus
                />
                <span
                  class="help-block"
                >
                  E-mail is required
                </span>
                <span
                  class="help-block"
                >
                  Email is exist
                </span >
              </div >
              <div class="form-group">
                <label class="form-control-label">PASSWORD</label>
                <input
                  type="password"
                  id="Password"
                  name="Password"
                  formControlName="Password"
                  class="form-control"
                  placeholder="Password"
                />
                <span
                  class="help-block"
                >
                  Password is required
                </span>
                <span
                  class="help-block"
                >
                  Password must be at least 4 characters
                </span >
                <span
                  class="help-block"
                >
                  Password cannot exceed 8 characters
                </span >
              </div >
              <div class="form-group">
                <label class="form-control-label">CONFIRM PASSWORD</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  formControlName="confirmPassword"
                  class="form-control"
                  placeholder="Password"
                />
                <span
                  class="help-block"
                >
                  Confirm password is required
                </span>
                <span
                  class="help-block"
                >
                  Confirm password must match password
                </span >
              </div >
              <div class="login-btn">
                <div class="col-lg-6 login-btm login-text">
                </div>
                <div>
                  <button type="submit" class="btn btn-outline-primary">
                    SIGN UP
                  </button>
                </div>
              </div >
            </form >
          </div>
          <div class="col-lg-3 col-md-2"></div>
        </div>
      </div>
    </div>
  );
};


export default Register