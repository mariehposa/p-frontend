import React from 'react';
import about from './about.jfif';

const Box1 = () =>{
 	return(
		<div>
		   <section className="mw">	
			  <article className="bg-white br1 pv ph3 pa5-l mb4 ">
			   <p className="f3 black-100 helvetica lh-title pt3 pt0-l">About me</p>
			    <div className="flex flex-column flex-row-ns">
	      		<div className="w-100 w-50-ns mt2 order-1 order-1-ns">
			    		<img src={about} className="db" alt="" />
			    	</div>	
			      <div className="w-100 order-2 order-2-ns ml3-l ml4-m">
					   <p className="f5-l f5-m f6-ns fw2 black-70 lh-copy">Hi, my name is Maryam. I am an aspiring full-stack Web developer 
					   		with excellent communication skills and a vast experience communication skills. 
					   		I have been programming for about 6 years and for the last 2 years, I have being working as a full-stack engineer.
					   	 	I like to create beautiful and engaging user interfaces with HTML5, CSS3, javascript and Front end frameworks like react. 
					   	 	I am currently taking the full-stack web development course by Andrei Neagoei and already learning loads! Shoot me a mail, 
					   	 	or a message on Twitter if you think I might be of help on a project you're working on... Cheers!! 
					   </p>
					</div> 		
			    </div>
			  </article>
			</section>  
	   </div>
   );
}

export default Box1
