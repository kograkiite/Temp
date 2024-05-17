
const Banner = () => {
    return (
      <div>
          <div className="w3ls-banner jarallax">
          <div className="w3lsbanner-info">
              <div className="header">
                  <div className="container">   
                      <div className="agile_header_grid"> 
                          <div className="header-mdl agileits-logo">
                              <h1><a href="index.html">Pet Service</a></h1> 
                          </div>
                          <div className="agileits_w3layouts_sign_in">
                              <ul>
                              <li><a href="../Login" className="play-icon">ĐĂNG NHẬP</a></li>
                                  
                              </ul>
                          </div>
                          <div className="clearfix"> </div>
                      </div> 
                      <div className="header-nav">	
                          <nav className="navbar navbar-default">
                              <div className="navbar-header">
                                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                      <span className="sr-only">Toggle navigation</span>
                                      <span className="icon-bar"></span>
                                      <span className="icon-bar"></span>
                                      <span className="icon-bar"></span>
                                  </button> 
                              </div>
                              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                  <ul className="nav navbar-nav cl-effect-16">
                                      <li><a href="index.html" className="active" data-hover="Home">TRANG CHỦ</a></li>
                                      <li><a href="about.html" data-hover="About">GIỚI THIỆU</a></li> 
                                      <li><a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">DỊCH VỤ <span className="caret"></span></a>
                                          <ul className="dropdown-menu">
                                              <li><a href="icons.html" data-hover="PetHotel">KHÁCH SẠN THÚ CƯNG</a></li>
                                              <li><a href="codes.html" data-hover="PetService">DỊCH VỤ THÚ CƯNG</a></li>
                                          </ul>
                                      </li> 
                                      <li><a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">CỬA HÀNG <span className="caret"></span></a>
                                          <ul className="dropdown-menu">
                                              <li><a href="icons.html" data-hover="PetHotel">DÀNH CHO CHÓ</a></li>
                                              <li><a href="codes.html" data-hover="PetService">DÀNH CHO MÈO</a></li>
                                          </ul>
                                      </li> 
                                      <li><a href="contact.html" data-hover="Contact">LIÊN HỆ</a></li>
                                  </ul>  
                                  <div className="clearfix"> </div>	
                              </div>
                          </nav>    
                      </div>	
                  </div>	
              </div>	
              <div className="banner-text agileinfo"> 
                  <div className="container">
                      <div className="agile_banner_info">
                          <div className="agile_banner_info1">
                              <h6>Welcome to<i> Pet Service</i></h6>
                              <div id="typed-strings" className="agileits_w3layouts_strings">
                                  <p><i>Happy for you is happy for you.</i></p>
                              </div>
                              <span id="typed" style={{whiteSpace:"pre"}}></span>
                          </div>
                      </div> 
                  </div>
              </div>
          </div>	
      </div>	
      </div>
    )
  }
  
  export default Banner