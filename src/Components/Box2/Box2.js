import React from 'react';
import classroom from './img/classroom.JPG';
import fidson from './img/fidson.jpg';
import todo from './img/todo.jpg';
import magicbrain from './img/magicbrain.jpg';
import landingpage from './img/landingpage.jpg';
import robot from './img/robot.png';
import robofriend from './img/robofriend.png';

const Box2 = () =>{
 	return(
		<div>
		  <div className="bg-white">	
		    <section className="cf w-100 br1 pa5-l mb4 ml3-m pa3 pa0-m">
		      <p className="f3 black-100 helvetica lh-title">Projects</p>
			  <article className="fl w-20-l w-40-m ma3-m mr5-l w-100">
			    <div className="aspect-ratio aspect-ratio--1x1">
			      <img src={classroom} alt=""
			      className="grow db bg-center cover aspect-ratio--object" />
			    </div>
			    <a href="rose" className="ph2 ph0-ns pb3 link db">
			      <h3 className="f5 f4-ns mb0 black-90">Learners porch</h3>
			      <h3 className="f6 f5 fw4 mt2 black-60">January 2016</h3>
			    </a>
			  </article>
			  <article className="fl w-20-l w-40-m ma3-m mr5-l w-100">
			    <div className="aspect-ratio aspect-ratio--1x1">
			      <img src={fidson} alt=""
			      className="grow db bg-center cover aspect-ratio--object" />
			    </div>
			    <a href="lotus" className="ph2 ph0-ns pb3 link db">
			      <h3 className="f5 f4-ns mb0 black-90">Fidson Healthcare</h3>
			      <h3 className="f6 f5 fw4 mt2 black-60">January 2016</h3>
			    </a>
			  </article>
			  <article className="fl w-20-l w-40-m ma3-m mr5-l w-100">
			    <div className="aspect-ratio aspect-ratio--1x1">
			      <img src={robot} alt=""
			      className="grow db bg-center cover aspect-ratio--object" />
			    </div>
			    <a href="lily" className="ph2 ph0-ns pb3 link db">
			      <h3 className="f5 f4-ns mb0 black-90">Android Robot</h3>
			      <h3 className="f6 f5 fw4 mt2 black-60">June 2018</h3>
			    </a>
			  </article>
			  <article className="fl w-20-l w-40-m ma3-m w-100">
			    <div className="aspect-ratio aspect-ratio--1x1">
			      <img src={robofriend} alt=""
			      className="grow db bg-center cover aspect-ratio--object" />
			    </div>
			    <a href="lily" className="ph2 ph0-ns pb3 link db">
			      <h3 className="f5 f4-ns mb0 black-90">Robo friend</h3>
			      <h3 className="f6 f5 fw4 mt2 black-60">July 2018</h3>
			    </a>
			  </article>
			  <article className="fl w-20-l w-40-m ma3-m mr5-l w-100">
			    <div className="aspect-ratio aspect-ratio--1x1">
			      <img src={todo} alt=""
			      className="grow db bg-center cover aspect-ratio--object" />
			    </div>
			    <a href="lily" className="ph2 ph0-ns pb3 link db">
			      <h3 className="f5 f4-ns mb0 black-90">To do list</h3>
			      <h3 className="f6 f5 fw4 mt2 black-60">August 2018</h3>
			    </a>
			  </article>
			  <article className="fl w-20-l w-40-m ma3-m w-25-ns mr5-l w-100">
			    <div className="aspect-ratio aspect-ratio--1x1">
			      <img src={landingpage} alt=""
			      className="grow db bg-center cover aspect-ratio--object" />
			    </div>
			    <a href="lily" className="ph2 ph0-ns pb3 link db">
			      <h3 className="f5 f4-ns mb0 black-90">Floura landing page</h3>
			      <h3 className="f6 f5 fw4 mt2 black-60">August 2018</h3>
			    </a>
			  </article>
			  <article className="fl w-20-l w-40-m ma3-m w-25-ns mr5-l w-100">
			    <div className="aspect-ratio aspect-ratio--1x1">
			      <img src={magicbrain} alt=""
			      className="grow db bg-center cover aspect-ratio--object" />
			    </div>
			    <a href="lily" className="ph2 ph0-ns pb3 link db">
			      <h3 className="f5 f4-ns mb0 black-90">Magic brain</h3>
			      <h3 className="f6 f5 fw4 mt2 black-60">September 2018</h3>
			    </a>
			  </article>
			</section>
		  </div>	
	   </div>
    );
}

export default Box2