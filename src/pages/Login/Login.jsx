import React from 'react'
import "./Login.css"
const Login = () => {
  return (
    <div className='bodyLogin'>
      <div class="container rounded">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-6 col-md-8 login-boxx">
            <div class="col-lg-12 login-title">
              <h1>Sign In</h1>
            </div>
            <div class="col-lg-12 login-form"></div>
            <form className='formLogin'>
              <div class="form-group">
                <label class="form-control-label">EMAIL</label>
                <input
                  type="text"
                  class="form-control"
                  id="Email"
                  placeholder="Email"
                  name="Email"
                  required
                  autofocus
                />
              </div>
              <div class="form-group">
                <label class="form-control-label">PASSWORD</label>
                <input
                  type="password"
                  class="form-control"
                  id="Pasword"
                  placeholder="Pasword"
                  name="Pasword"
                />
              </div>
              <div class="loginbttm">
                <div class="col-lg-6 login-btm login-text">
                </div>
                <div
                  class="col-lg-7 login-btm login-button justify-content-center"
                >
                  <button type="submit" class="btn btn-outline-primary" >
                    LOGIN
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class="loginbttm">
            <div class="col-lg-3 col-md-2 m-3">
              <a class="form-control-label">SIGN UP</a>
            </div>
          </div>
        </div>
      </div>
    </div >

  )
}

export default Login


