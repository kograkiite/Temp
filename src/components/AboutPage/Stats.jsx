import React from 'react'

export const Stats = () => {
  return (
    <div>
        <div className="stats services jarallax"> 
		<div className="container">    
			<div className="stats-info agileits-w3layouts">
				<div className="col-sm-3 col-xs-6 stats-grid">
					<div className="stats-img">
						<i className="fa fa-users" aria-hidden="true"></i>
					</div>
					<h5>Happy Clients</h5>
					<div className='numscroller numscroller-big-bottom' data-slno='1' data-min='0' data-max='157000' data-delay='.5' data-increment="100">157000</div>
				</div>
				<div className="col-sm-3 col-xs-6 stats-grid">
					<div className="stats-img w3-agileits">
						<i className="fa fa-calendar-check-o" aria-hidden="true"></i>
					</div>
					<h5>Our Events</h5>
					<div className='numscroller numscroller-big-bottom' data-slno='1' data-min='0' data-max='850' data-delay='8' data-increment="1">850</div>
				</div>
				<div className="col-sm-3 col-xs-6 stats-grid">
					<div className="stats-img w3-agileits">
						<i className="fa fa-briefcase" aria-hidden="true"></i>
					</div>	
					<h5>Projects</h5> 
					<div className='numscroller numscroller-big-bottom' data-slno='1' data-min='0' data-max='80000' data-delay='.5' data-increment="100">80000</div>
				</div>
				<div className="col-sm-3 col-xs-6 stats-grid">
					<div className="stats-img w3-agileits">
						<i className="fa fa-trophy" aria-hidden="true"></i>
					</div>
					<h5>Awards</h5>
					<div className='numscroller numscroller-big-bottom' data-slno='1' data-min='0' data-max='269' data-delay='8' data-increment="1">269</div>
				</div>
				<div className="clearfix"></div>
			</div> 
		</div>
	</div>
    </div>
  )
}
