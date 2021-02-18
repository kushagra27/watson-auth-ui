import React from 'react';
import {
    Form,
    Button,
    ModalWrapper,
    TextInput,
    Modal
  } from 'carbon-components-react';
import './_landing-page.scss'
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
        },()=>{
            console.log(name, value)
        })
    }

    handleSubmit = (e)=>{
        console.log(e)
        console.log("pressed")
    }

    render(){
        
        return (
            <div className="bx--grid bx--grid--full-width landing-page" style={{padding:"0", justifyContent:"center", alignItems:"center"}}>
                <div className="bx--row landing-page__banner" style={{padding:"2rem", justifyContent:"center", alignItems:"center", height:"20rem"}}>
                    <div className="bx--col-lg-16">
                        <h1 className="landing-page__heading" >
                            Welcome to Sample Insurance Company
                        </h1><br />
                        <p>
                            Welcome to our website, press the button below to register
                        </p><br />
                        <ModalWrapper
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
                                        placeholder="+919876543210"
                                        name="phone"
                                        onChange={this.handleChange}
                                        value={this.state.phone}
                                    /><br />
    
                                    <TextInput
                                        id="policy"
                                        invalidText="A valid value is required"
                                        labelText="Policy No."
                                        placeholder="xxx123"
                                        name="policy"
                                        onChange={this.handleChange}
                                        value={this.state.policy}
                                    /><br />
    
                                    <TextInput
                                        id="address"
                                        invalidText="A valid value is required"
                                        labelText="Address"
                                        placeholder="Random Address"
                                        name="address"
                                        onChange={this.handleChange}
                                        value={this.state.address}
                                    /><br />
    
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