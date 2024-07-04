import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import "./styles/contact.css";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import WhatsApp from 'react-whatsapp';
import ReactWhatsapp from 'react-whatsapp';


export default function ContactPage() {

    const [number, setNumber] = useState('7385748366');
    const [message, setMessage] = useState('');

    const onSubmit = (e) => {
        console.log("jfjkdfjkljslkd ", number);
        e.preventDefault();
        alert("submit ho rha h bhai...!!!");

        const whatsapp = new WhatsApp();
        whatsapp.send(number="7385748366", message);
    };

    function initialize() {
        // var latlng = new google.maps.LatLng(-34.397, 150.644);
        // var myOptions = {
        //     zoom: 8,
        //     center: latlng,
        //     mapTypeId: google.maps.MapTypeId.ROADMAP
        // };
        // var map = new google.maps.Map(document.getElementById("map_canvas"),
        //         myOptions);
    }
    // google.maps.event.addDomListener(window, "load", initialize);


    return (
    <React.Fragment >
      <CssBaseline />

<Container style={{marginTop: 80}}>

<Typography variant="h3">Contact Us</Typography>
<br></br>
<hr />
<br></br>
<Typography gutterBottom variant="h5" component="div">
            <strong>We're here to help! All 7 days - 9am to 8pm </strong>
        </Typography>

   

    
        <Typography variant="body2" color="text.secondary">
        feel free to email us, phone us, get free consultation for your wedding with our expert wedding planners.
        </Typography>
        <br/>
        <br/>
    
        <Typography gutterBottom variant="h5" component="div">
        Phone 
        </Typography>
    
        <Typography variant="body2" color="text.secondary">
        Phone +91: 8340501684
        </Typography>
        <br/>
        <br/>
        <Typography gutterBottom variant="h5" component="div">
        Address 
        </Typography>
     
        <Typography variant="body2" color="text.secondary">
        JUBLEE Decorators, Mahendru, Patna, Bihar, Pin Code 800006
        </Typography>
        <br/>
        <br/>
        <Typography gutterBottom variant="h5" component="div">
        E-Mail 
        </Typography>
    
        <Typography variant="body2" color="text.secondary">
        info@event.com
        </Typography>
      
        <br/>
        <br/>
        <ReactWhatsapp number="7385748366" message="Hello World!!!" />
        <br/>
        <br/>

    <div class="page" >

        <div class="site-main">
            <section class="ttm-row contact-form-section2 bg-layer break-991-colum clearfix">
                <div class="container">
                   <div class="row res-1199-mlr-15">
                        <div class="col-md-4 col-lg-4">
                            
                            <div class="col-bg-img-three ttm-col-bgimage-yes ttm-bg">
                                <div class="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
                                <div class="layer-content"></div>
                            </div>
                            {/* <img src="images/bg-image/col-bgimage-3.jpg" class="ttm-equal-height-image" alt="bg-image" /> */}
                        </div>
                        <div class="col-md-8 col-lg-8">
                            <div class="padding-12 box-shadow">
                                <div class="section-title clearfix mb-30">
                                    <h3 class="title">Get The Party Started</h3>
                                    <p>As the premier event planning company in the area. Each event and client is unique and we believe our services should be as well.</p>
                                </div>
                                <form id="contactform" class="row contactform wrap-form clearfix" onSubmit={onSubmit} novalidate="novalidate">
                                    {/* <label class="col-md-6">
                                        <i class="ti ti-user"></i>
                                        <span class="ttm-form-control"><input class="text-input" name="name" type="text" value="" placeholder="Your Name:*" required="required" /></span>
                                    </label>
                                    <label class="col-md-6">
                                        <i class="ti ti-email"></i>
                                        <span class="ttm-form-control"><input class="text-input" name="email" type="text" value="" placeholder="Your email-id:*" required="required" /></span>
                                    </label>
                                     <label class="col-md-6">
                                        <i class="ti ti-location-pin"></i>
                                        <span class="ttm-form-control"><input class="text-input" name="venue" type="text" value="" placeholder="Venue" required="required" /></span>
                                    </label>
                                    <label class="col-md-6">
                                        <i class="ti ti-mobile"></i>
                                        <span class="ttm-form-control"><input class="text-input" name="phone" type="text" value="" placeholder="Your Number:*" required="required" /></span>
                                    </label>
                                    <label class="col-md-12">
                                        <i class="ti ti-comment"></i>
                                        <span class="ttm-form-control"><textarea class="text-area" name="message" placeholder="Your Message:*" required="required" ></textarea></span>
                                    </label> */}
                                    <input type="text" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
                                    <input name="submit" type="submit" value="Make a Reservation" class="ttm-btn ttm-btn-size-md ttm-btn-shape-round ttm-btn-style-fill ttm-btn-color-skincolor mt-20" id="submit" title="Make a Reservation" />
                               </form> 
                               {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd9x2d3xgwSSlmpddUmGieKfd1JF0s9j9BlZ4zB_jR5wiR5sA/viewform?embedded=true" width="640" height="300" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
                            </div>
                        </div>
                    </div> 
                </div>
            </section>
            <br/>
            <br/>
            <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe class="gmap_iframe" frameborder="1" scrolling="no" marginheight="5" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=1800&amp;hl=en&amp;q=JUBLEE Decorators patna&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
            </div>
            {/* <div class="map-wrapper">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.7150119008725!2d85.15799531501794!3d25.614384583703792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59ca257b1841%3A0x351724ee7debb3a!2sNarayana%20Digital%20Technologies!5e0!3m2!1sen!2sin!4v1669629584746!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div> */}
            <section class="ttm-row cta-section style2 ttm-bgcolor-skincolor clearfix">
                <div class="container">
                    <div class="row">
                        <div class="col-md-9">
                            <div class="featured-box iconalign-before-heading">
                                <div class="featured-content">
                                    <div class="featured-icon">
                                        <div class="ttm-icon ttm-icon_element-color-white ttm-icon_element-size-sm"> 
                                            <i class="ti ti-headphone"></i>
                                        </div>
                                    </div>
                                    <div class="featured-title">
                                        <h6 class="ttm-textcolor-white">If you Have Any Questions Schedule an Booking</h6>
                                        <h5 class="ttm-textcolor-white">With our Team or call Us On (+91) 8340501684</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <a class="ttm-btn ttm-btn-size-md ttm-btn-shape-round ttm-btn-style-border ttm-btn-color-white pull-right res-mt20-767" href="#">Booking Now!</a>
                        </div>
                    </div>
                </div>
            </section>
           
        </div>


        {/* <footer class="footer widget-footer bg-img11 ttm-bgcolor-black ttm-bg ttm-bgimage-yes clearfix">
            <div class="ttm-row-wrapper-bg-layer ttm-bg-layer"></div>
            <div class="first-footer ttm-textcolor-white">
                <div class="container">
                       <div class="row">
                        <div class="widget-area col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <aside class="widget widget-text">
                                <div class="ttm-newstter-box">
                                    <h4>Subscribe to <span class="ttm-textcolor-skincolor">Our Newsletter</span></h4>
                                    <p>No spam message from us, only give you latest offer which is best for you and your business</p>
                                    <form class="mc4wp-form mc4wp-form-24" method="post" data-id="24" data-name="Newsletter Form">
                                        <div class="mc4wp-form-fields">
                                            <div class="mailchimp-inputbox">
                                                <input type="email" name="EMAIL" placeholder="Your email address.." required="" />
                                                <input type="submit" value="Subscribe Now" />
                                            </div>
                                        </div>
                                        <div class="mc4wp-response"></div>
                                    </form>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
            <div class="second-footer">
                <div class="container">
                    <div class="second-footer-inner">
                        <div class="row">
                            <div class="widget-area col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                <div class="widget widget-out-link clearfix">
                                    <h4 class="widget-title">Contact Us</h4>
                                    <ul class="widget-contact">
                                        <li><i class="fa fa-map-marker"></i>JUBLEE Decorators, Mahendru, Patna,  Bihar, Pin Code 800006</li>
                                        <li><i class="fa fa-envelope-o"></i><a href="#">info@eventaffair.com</a></li>
                                        <li><i class="fa fa-phone"></i>Phone: (+91) 8340501684</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="widget-area col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                <div class="widget widget_nav_menu clearfix">
                                    <h4 class="widget-title">Our Services </h4>
                                    <ul class="menu-footer-services">
                                        <li><a href="wedding-ceremony.html">Wedding Ceremony
                                                    </a></li>
                                                    <li><a href="wedding-photography.html">Wedding Photography 
                                                    </a></li>
                                                    <li><a href="political-election-campaign.html">Political / Election Campaign</a></li>
                                                    <li class="active"><a href="business-corporate-events.html">Business / Corporate Events</a></li>
                                                    <li><a href="private-party.html">Private Party</a></li>
                                                    <li><a href="entertainment-events.html">Entertainment Events</a></li>
                                                    <li><a href="birthday-event.html">Birthday Event</a></li>
                                                    <li><a href="anniversary-event.html">Anniversary Event</a></li>  
                                    </ul>
                                </div>
                            </div>
                           
                            <div class="widget-area col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                <div class="widget widget-out-link clearfix ">
                                    <h4 class="widget-title">Home</h4>
                                    <ul class="widget-text">
                                        <li><a href="about-us.html">About Us</a></li>
                                        <li><a href="gallery.html">Gallery</a></li>
                                        <li><a href="contact-us.html">Contact Us</a></li>
                                        <li><a href="site-map.html">Site Map</a></li>
                                        <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                        <li><a href="terms-and-conditions.html">Terms & Conditions</a></li>
                                        <li><a href="faq.html">Faq</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom-footer-text">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-sm-12 col-xs-12 ttm-footer2-left">
                            <div class="company-info">
                               
                                <p>Copyright © 2023 Event Management/. All rights reserved.</p>
                                
                            </div>
                        </div>
                        <div class="col-sm-12 col-xs-12 col-md-6 ttm-footer2-right">
                            <div class="ttm-social-link-wrapper">
                                <ul class="social-icons">
                                    <li><a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="https://twitter.com/" target="_blank"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="https://www.instagram.com//" target="_blank"><i class="fa fa-instagram"></i></a></li>
                                    <li><a href="https://www.youtube.com/" target="_blank"><i class="fa fa-youtube-play"></i></a></li>
                                </ul>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </footer> */}

    <a id="totop" href="#top">
        <i class="fa fa-angle-up"></i>
    </a>

    {/* <script src="js/jquery.min.js"></script>
    <script src="js/tether.min.js"></script>
    <script src="js/bootstrap.min.js"></script> 
    <script src="js/jquery.easing.js"></script>
    <script src="js/jquery-validate.js"></script>     
    <script src="js/jquery-waypoints.js"></script>    
    <script src="js/owl.carousel.js"></script>
    <script src="js/jquery.prettyPhoto.js"></script>
    <script src="http://maps.googleapis.com/maps/api/js?key="></script>
    <script src="js/main.js"></script> */}

</div>

</Container>

</React.Fragment>
);
    }