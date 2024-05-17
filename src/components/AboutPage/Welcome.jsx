import React from 'react'

const Welcome = () => {
  return (
    <div>
        <div className="welcome">
		<div className="container"> 
			<div className="col-md-6 w3ls_welcome_right"> 
				<div className="flexslider">
					<ul className="slides">
						<li>	
							<div className="agileits_w3layouts_welcome_grid">
								<img src="images/g1.jpg" alt=" " className="img-responsive" />
							</div>
						</li>
						<li>	
							<div className="agileits_w3layouts_welcome_grid">
								<img src="images/g2.jpg" alt=" " className="img-responsive" />
							</div>
						</li>
						<li>	
							<div className="agileits_w3layouts_welcome_grid">
								<img src="images/g3.jpg" alt=" " className="img-responsive" />
							</div>
						</li>
					</ul>
				</div> 
			</div>
			<div className="col-md-6 w3ls_welcome_left"> 
				<div className="w3ls_welcome_right1">
					<h3 className="agileits-title">About Us</h3>
					<p>PET SERVICE ra đời với mong muốn mang lại cho khách hàng sự chuyên nghiệp, uy tín mang nét đẹp hoa mỹ mà chúng tôi đem lại sự trải nghiệm tốt nhất cho thú cưng của chúng ta. Với hơn 5 năm kinh nghiệm trong ngành dịch vụ thú cưng bao gồm: Thú y, Spa thú cưng, Khách sạn thú cưng, Cung cấp các dòng thú cưng chuyên nghiệp...</p>
					
				</div>
				<div className="clearfix"> </div>
			</div>
			<div className="clearfix"> </div>
		</div>
	</div>
    </div>
  )
}

export default Welcome