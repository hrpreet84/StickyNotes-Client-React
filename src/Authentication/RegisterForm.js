import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';

class RegisterForm extends Component {

    state = {
        fname:'',
        lname:'',
        email: '',
        password:'',
        confirmPassword:'',
        phone:'',
        gender:'',
        passwordError:'',
        emailError:'',
        fnameError:'',
        lnameError:''
    }

    handleSubmit = e => {
        e.preventDefault();
        if(this.state.password === this.state.confirmPassword){
        axios.post('http://localhost:5000/api/users/', {
            email: this.state.email,
            password: this.state.password,
            first_name:this.state.fname,
            last_name:this.state.lname,
            phone:this.state.phone
          })
          .then(function (response) {
            if(response.status === 400){
                return response.json();
            }
          })
          .catch(function (error) {
            error.response.data.errors.forEach(element => {
                if(element.param === 'password'){
                    this.setState({passwordError: element.msg});
                }
                if(element.param === 'first_name'){
                    this.setState({fnameError: element.msg});
                }
                if(element.param === 'last_name'){
                    this.setState({lnameError: element.msg});
                }
                if(element.param === 'email'){
                    this.setState({emailError: element.msg});
                }
            });
          }.bind(this));
        }
        else{
            this.setState({passwordError: "Password does not match!"});
        }
    }

    handleFnameChange = e => {
        this.setState({
            fname: e.target.value
        });
    }

    handleLnameChange = e => {
        this.setState({
            lname: e.target.value
        });
    }

    handleEmailChange = e => {
        this.setState({
            email: e.target.value
        });
    }

    handlePasswordChange = e => {
        this.setState({
            password: e.target.value
        });
    }

    handleGenderChange = e => {
        this.setState({
            gender: e.target.value
        });
    }

    handlePhoneChange = e => {
        this.setState({
            phone: e.target.value
        });
    }

    handleConfirmPasswordChange =e =>{
        this.setState({
            confirmPassword:e.target.value
        })
    }

    render() {
        return (
            <div className="card">
                <div className="card-header font-weight-bold bg-secondary text-info display-4">Register</div>
                <div className="card-body bg-light text-primary">
            <Form onSubmit={this.handleSubmit}>
                <Form.Group as={Row} controlId="formHorizontalFname">
                    <Form.Label column sm={2}>
                        First Name
                    </Form.Label>
                    <Col sm={8}>
                        <Form.Control type="text" placeholder="First name" onChange={this.handleFnameChange} required/>
                    </Col>
                </Form.Group>

                <Row controlId="formHorizontalFname">                    
                    <Col sm={4}>
                        <span className="text-danger">{this.state.fnameError}</span>
                    </Col>
                </Row>

                <br/>

                <Form.Group as={Row} controlId="formHorizontalLname">
                    <Form.Label column sm={2}>
                        Last Name
                    </Form.Label>
                    <Col sm={8}>
                        <Form.Control type="text" placeholder="last name" onChange={this.handleLnameChange} required/>
                    </Col>
                    {/* <Col sm={4}>
                        <span className="text-danger">{this.state.lnameError}</span>
                    </Col> */}
                </Form.Group>
                <Row controlId="formHorizontalFname">                    
                    <Col sm={{ span: 10, offset: 2 }}>
                        <span className="text-danger">{this.state.lnameError}</span>
                    </Col>
                </Row>

                <br/>

                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={8}>
                        <Form.Control type="email" placeholder="Email" onChange={this.handleEmailChange} required/>
                    </Col>
                    {/* <Col sm={4}>
                        <span className="text-danger">{this.state.emailError}</span>
                    </Col> */}
                </Form.Group>
                <Row controlId="formHorizontalFname">                    
                    <Col sm={{ span: 10, offset: 2 }}>
                        <span className="text-danger">{this.state.emailError}</span>
                    </Col>
                </Row>

                <br/>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Password
                    </Form.Label>
                    <Col sm={8}>
                        <Form.Control type="password" placeholder="Password" onChange={this.handlePasswordChange} required/>
                    </Col>
                    {/* <Col sm={4}>
                        <span className="text-danger">{this.state.passwordError}</span>
                    </Col> */}
                </Form.Group>
                <Row controlId="formHorizontalFname">                    
                    <Col sm={{ span: 10, offset: 2 }}>
                        <span className="text-danger">{this.state.passwordError}</span>
                    </Col>
                </Row>

                <br/>

                <Form.Group as={Row} controlId="formHorizontalConfirmPassword">
                    <Form.Label column sm={2}>
                        Confirm Password
                    </Form.Label>
                    <Col sm={8}>
                        <Form.Control type="password" placeholder="Password" onChange={this.handleConfirmPasswordChange} required/>
                    </Col>
                    {/* <Col sm={4}>
                        <span className="text-danger">{this.state.passwordError}</span>
                    </Col> */}
                </Form.Group>
                <Row controlId="formHorizontalFname">                    
                    <Col sm={{ span: 10, offset: 2 }}>
                        <span className="text-danger">{this.state.passwordError}</span>
                    </Col>
                </Row>

                <br/>

                <fieldset>
                <Form.Group as={Row} controlId="formHorizontalRadio">
                    <Form.Label column sm={2}>
                        Gender
                    </Form.Label>
                    <Col sm={8}>
                    <Form.Check
                    inline
                    label="Male"
                    type="radio"
                    id="inline-radio-1"
                />
                <Form.Check
                    inline
                    label="Female"
                    type="radio"
                    id="inline-radio-2"
                />

                <Form.Check
                    inline
                    label="Other"
                    type="radio"
                    id="inline-radio-3"
                />
                </Col>
                </Form.Group>   
                </fieldset>   

                <br/>          

                <Form.Group as={Row} controlId="formHorizontalPhone">
                    <Form.Label column sm={2}>
                        Phone
                    </Form.Label>
                    <Col sm={8}>
                        <Form.Control type="Phone" placeholder="Phone" onChange={this.handlePhoneChange} required/>
                    </Col>
                </Form.Group>

                <br/>
                
                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit">Register</Button>
                    </Col>
                </Form.Group>
            </Form>
            </div>
            </div>
        )
    }

    // render() {
    //     return (
    //         <div className='text-center'>
    //             <h3 className='mb-3 font-weight-normal'>Register</h3>
    //             <div className='panel-body'>
    //                 <form onSubmit={this.handleSubmit}>
    //                     <label for="fname" classN="sr-only">First Name</label>
    //                     <input type='text' className='form-control' id='fname' placeholder='Enter First Name' value={this.state.fname}
    //                         onChange={this.handleFnameChange}
    //                         required />
    //                     <label for="lname" className="sr-only">Email address</label>
    //                     <input type='text' className='form-control' id='lname' placeholder='Enter Last Name' value={this.state.lname}
    //                         onChange={this.handleEmailChange}
    //                         required />
    //                     <label for="email" class="sr-only">Email address</label>
    //                     <input type='text' className='form-control' id='email' placeholder='Enter Email' value={this.state.email}
    //                         onChange={this.handleEmailChange}
    //                         required />
    //                     <label for="password" class="sr-only">Password</label>
    //                     <input type='text' className='form-control' id='password' placeholder='Enter Password' value={this.state.password}
    //                         onChange={this.handlePasswordChange}  required/>

    //                     <label for="gender" class="sr-only">Gender</label>
    //                     <input type='text' className='form-control' id='gender' placeholder='Enter Gender' value={this.state.gender}
    //                         onChange={this.handleGenderChange}
    //                         required />
    //                     <label for="phone" class="sr-only">Phone</label>
    //                     <input type='text' className='form-control' id='phone' placeholder='Enter Phone' value={this.state.phone}
    //                         onChange={this.handlePhoneChange}
    //                         required />

    //                     <button type='submit' className='btn btn-primary btn-lg btn-block'>Login</button>
    //                 </form>
    //             </div>
    //         </div>
    //     )
    // }

}

export default RegisterForm;