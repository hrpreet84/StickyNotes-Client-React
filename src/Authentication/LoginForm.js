import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';

class LoginForm extends Component {

    state = {
        email: '',
        password: '',
        emailError:'Email Invalid',
        passwordError:'Password Too Short!',
        passwordValid:false,
        emailValid:false
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.email);
        axios.post('http://localhost:5000/api/users/authenticate', {
            email: this.state.email,
            password: this.state.password
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    handleEmailChange = e => {
        this.setState({
            email: e.target.value
        });
        if(! this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
            this.setState({
                emailError: "Invalid Email!"
            });
        }else{
            this.setState({
                emailError:"",
                emailValid:true
        })
        } 
    }

    handlePasswordChange = e => {
        this.setState({
            password: e.target.value
        });
        if(this.state.password.length < 6){
            this.setState({
                passwordError: "Password Too Short"
            });
        }else{
            this.setState({
                passwordError:"",
                passwordValid:true
        })
        }
    }

    
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control type="email" placeholder="Email" onChange={this.handleEmailChange} required/>
                        
                    </Col>
                    <Col sm={4}>
                    <span className='text-danger'>{this.state.emailError}</span>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Password
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control type="password" placeholder="Password" onChange={this.handlePasswordChange} required/>
                    </Col>
                    <Col sm={4}>
                        <span className='text-danger'>{this.state.passwordError}</span>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalCheck">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Form.Check label="Remember me" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit" disabled={this.state.emailValid && this.state.passwordValid}>Sign in</Button>
                    </Col>
                </Form.Group>
            </Form>
        )
    }
}

// render() {
    //     return (
    //         <div className='text-center'>
    //             <h3 className='mb-3 font-weight-normal'>Login To Access your Notes</h3>
    //             <div className='panel-body'>
    //                 <form onSubmit={this.handleSubmit}>
    //                     <label for="email" class="sr-only">Email address</label>
    //                     <input type='text' className='form-control' id='email' placeholder='Enter Email' value={this.state.email}
    //                         onChange={this.handleEmailChange}
    //                         required />
    //                     <label for="password" class="sr-only">Password</label>
    //                     <input type='text' className='form-control' id='password' placeholder='Enter Password' value={this.state.password}
    //                         onChange={this.handlePasswordChange} required />
    //                     <button type='submit' className='btn btn-primary btn-lg btn-block'>Login</button>
    //                 </form>
    //             </div>
    //         </div>
    //     )
    // }

export default LoginForm;