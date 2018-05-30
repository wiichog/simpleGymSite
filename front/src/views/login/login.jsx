import React, { Component } from "react";
import "./Login.css";
import "./vendor/bootstrap/css/bootstrap.min.css";
import "./fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "./vendor/animate/animate.css";
import "./vendor/css-hamburgers/hamburgers.min.css";
import "./vendor/select2/select2.min.css";
import "./css/util.css";
import "./css/main.css";
import image from "./images/img-01.png";
import Popup from 'react-popup'
import {Redirect } from "react-router-dom";
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      userId: "0",
      message: "",
    };
  }
  validate(email,password){
      console.log(email)
      console.log(password)
    axios.get('http://localhost:8080/login?email='+ email + "&password=" + password)
    .then(response => {
        if(response.data=='0'){
            this.setState({
                message : 'Usuario o contraseña incorrecta'
        })
        }
    })
    
  }
    componentWillMount(){
        axios.get('http://localhost:8080/userId')
            .then(response => {
                console.log(response)
                this.setState({
                    userId : response.data
                  })
            })
    }
  render() {
    return (
        <div>
        {this.state.userId == "0" ? (
        <div className="Login">
		<div class="container-login100">
			<div class="wrap-login100">
				<div class="login100-pic js-tilt" data-tilt>
					<img src={image} alt="IMG"  />
				</div>

				<form class="login100-form validate-form">
					<span class="login100-form-title">
                        Miembros Dinamic Fitness
					</span>
                    <span class="login100-form-title">
                       {this.state.message}
					</span>
					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" id="email" name="email" placeholder="Email" />
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div class="wrap-input100 validate-input" data-validate = "Password is required">
						<input class="input100" type="password" id="password" name="pass" placeholder="Password" />
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					
					<div class="container-login100-form-btn">
						<button class="login100-form-btn" onClick={(e) => 
                            this.validate(document.getElementById("email").value,document.getElementById("password").value)
                        }>
							Login
						</button>
					</div>

					<div class="text-center p-t-12">
						<span class="txt1">
							
						</span>
						<a class="txt2" href="#">
							
						</a>
					</div>

                        <div class="text-center p-t-136">
                            <a class="txt2" href="#">
                                
                                
                            </a>
                        </div>
				</form>
			</div>
		</div>
        <script src="vendor/jquery/jquery-3.2.1.min.js"></script>
        <script src="vendor/bootstrap/js/popper.js"></script>
        <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
        <script src="vendor/select2/select2.min.js"></script>
        <script src="vendor/tilt/tilt.jquery.min.js"></script>
        <script src="js/main.js"></script>
      </div>

      ) : 
      <div>Sesion Iniciada</div>
      }

            </div>
    );
  }
}