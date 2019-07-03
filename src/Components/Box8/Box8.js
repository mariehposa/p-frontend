import React from 'react';

class Box8 extends React.Component{
	constructor(props){
	    super(props);
	    this.state = {
	      signInEmail: '',
	      subject: '',
	      message: ''
	    }
	}

   onEmailChange = (event) =>{
    this.setState({signInEmail: event.target.value});
   }

   onSubjectChange = (event) =>{
    this.setState({subject: event.target.value});
   }

   onMessageChange = (event) =>{
    this.setState({message: event.target.value});
   }

   onSubmit = () => {
    	fetch('http://localhost:3000/contact', {
	   		method: 'post',
	   		headers: {'Content-Type': 'application/json'},
	   		body: JSON.stringify({ 
	   			email: this.state.signInEmail,
	   			subject: this.state.subject,
	   			message: this.state.message
	   		})
	   	})
    }

	render(){
	 	return(
			<div>
			    <div className="cf bg-white pa5-l br1 pl3-m mb4 pl3 pl-l">
			       <p className="f3 black-100 helvetica lh-title">Contact</p>
				   <form className="cf mw8 helvetica">
				        <input className="pa3 br2 input-reset ba bg-black-20 w-100-l w-90-m w-90 mb3" 
				         type="email" name="email-address" id="email-address" placeholder="Email" onChange={this.onEmailChange}/>
				        <input className="pa3 br2 input-reset ba bg-black-20 w-100-l w-90-m w-90 mb3" 
				         type="text" name="name" id="name" placeholder="Subject" onChange={this.onSubjectChange}/>
				        <textarea className="pa3 br2 input-reset ba bg-black-20 w-100-l w-90-m w-90 mb3" 
				         name="comment" placeholder="Enter your message" aria-describedby="comment-desc" onChange={this.onMessageChange}></textarea>
				        <button className="ph2 pv2 ba bg-blue white grow pointer f5 dib mb3-m mb3 br-pill" 
				          type="submit" onClick={this.onSubmit}>Send message
				        </button>
				   </form>
			    </div>
		    </div>
	    );
	}    
}

export default Box8