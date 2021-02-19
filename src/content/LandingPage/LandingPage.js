import React from 'react';
import {
    Form,
    Button,
    ModalWrapper,
    TextInput,
    Modal
  } from 'carbon-components-react';
import './_landing-page.scss'
import axios from 'axios';

class LandingPage  extends React.Component{
    constructor(){
        super()
        this.state = {
            name:"",
            phone:"",
            policy:"",
            address:"",
        }

    }

    handleChange = (e) =>{
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = ()=>{
        // if(this.state.name === "" || this.state.phone === "" || this.state.address === ""){
        //     alert("Enter Valid Details")
        //     return
        // }
        const random = Math.floor(Math.random() * 10)
        const start = random < this.state.phone.length - 3 ? random : random - 3
        const policy = this.state.name.substring(0,3).toUpperCase() + this.state.phone.substring(start,start + 3) + (new Date()).getTime() % 100000
        const date = new Date()
        const curDate = new Date(date.setMonth(date.getMonth()+3));
        const premiumDate = curDate.getDate()+'/'+(curDate.getMonth()+1)+'/'+date.getFullYear()
        this.setState({policy, premiumDate})
        console.log(policy, premiumDate)

        const data = {
            "name" : this.state.name,
            "phone_no": this.state.phone,
            "policy_no": policy,
            "premium_date": premiumDate,
            "premium_amount":500,
            "address": this.state.address
        }

        axios.post('http://159.122.187.93:32000/api/v1.0/registeruser', data)
        .then((res)=>{
            console.log(res)
        }).catch(err=>{
            console.log('error', err)
        })
    }

    render(){
        
        return (
            <div className="bx--grid bx--grid--full-width landing-page" style={{padding:"0", justifyContent:"center", alignItems:"center"}}>
                <div className="bx--row landing-page__banner" style={{padding:"2rem", justifyContent:"center", alignItems:"center", height:"20rem"}}>
                    <div className="bx--col-lg-14 bx--offset-lg-2">
                        <h1 className="landing-page__heading" >
                            Welcome to Sample Insurance Company
                        </h1><br />
                        <p>
                            Welcome to our website, press the button below to register
                        </p><br />
                        <ModalWrapper
                            open={true}
                            shouldCloseAfterSubmit={true}
                            buttonTriggerText="Register"
                            modalHeading="New User"
                            modalLabel="Register"
                            handleSubmit={this.handleSubmit}
                            size='sm'>
                                <Form>
                                    <TextInput
                                        id="name"
                                        invalidText="A valid value is required"
                                        labelText="Name"
                                        placeholder="John Doe"
                                        name="name"
                                        onChange={this.handleChange}
                                        value={this.state.name}
                                    /><br />
    
                                    <TextInput
                                        id="phone"
                                        invalidText="A valid value is required"
                                        labelText="Phone"
                                        placeholder="919876543210"
                                        name="phone"
                                        onChange={this.handleChange}
                                        value={this.state.phone}
                                    /><br />
    
                                    <TextInput
                                        id="address"
                                        invalidText="A valid value is required"
                                        labelText="Address"
                                        placeholder="Random Address"
                                        name="address"
                                        onChange={this.handleChange}
                                        value={this.state.address}
                                    />
                                </Form>
                        </ModalWrapper>

                    </div>
                </div>

                <div className="bx--row " style={{padding:"0", marginTop:"2rem"}}>
                    <div className="bx--col-lg-4 bx--offset-lg-2" >
                        <h1 className="landing-page__heading" style={{paddingBottom:"1rem"}}>
                            Health Insurance
                        </h1>
                        <Button kind="secondary">
                            Learn More
                        </Button>
                    </div>
                    <div className="bx--col-lg-4" >
                        <h1 className="landing-page__heading" style={{paddingBottom:"1rem"}}>
                            Car Insurance
                        </h1>
                        <Button kind="secondary">
                            Learn More
                        </Button>
                    </div>
                    <div className="bx--col-lg-4" >
                        <h1 className="landing-page__heading" style={{paddingBottom:"1rem"}}>
                            Property Insurance
                        </h1>
                        <Button kind="secondary">
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
};

export default LandingPage;