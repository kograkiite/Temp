import React from 'react'

const Contact = () => {
  return (
    <div>
        <div className="contact">
		<div className="container">   
			<h3 className="agileits-title w3title2">Contact Us</h3>
			<div className="map-pos">
				<div className="col-md-4 address-row">
					<div className="col-xs-2 address-left">
						<span className="glyphicon glyphicon-home" aria-hidden="true"></span>
					</div>
					<div className="col-xs-10 address-right">
						<h5>Visit Us</h5>
						<p>Pet Service Quận 7</p>
					</div>
					<div className="clearfix"> </div>
				</div>
				<div className="col-md-4 address-row w3-agileits">
					<div className="col-xs-2 address-left">
						<span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>
					</div>
					<div className="col-xs-10 address-right">
						<h5>Mail Us</h5>
						<p><a href="mailto:info@example.com"> petservicemanagement@gmail.com</a></p>
					</div>
					<div className="clearfix"> </div>
				</div>
				<div className="col-md-4 address-row">
					<div className="col-xs-2 address-left">
						<span className="glyphicon glyphicon-phone" aria-hidden="true"></span>
					</div>
					<div className="col-xs-10 address-right">
						<h5>Call Us</h5>
						<p>(+00) 123 234</p>
					</div>
					<div className="clearfix"> </div>
				</div>   
			</div>  
			<form action="#" method="post">
				<div className="col-sm-6 contact-left">
					<input type="text" name="Name" placeholder="Your Name" required=""/>
					<input type="email" name="Email" placeholder="Email" required=""/>
					<input type="text" name="Mobile Number" placeholder="Mobile Number" required=""/>
				</div>
				<div className="col-sm-6 contact-right"> 
					<textarea name="Message" placeholder="Message" required=""></textarea>
					<input type="submit" value="Submit" />
				</div>
				<div className="clearfix"></div>
			</form>
		</div>
	</div>  
    </div>
  )
}

export default Contact