import React, { Fragment, useState } from "react";
import FooterLogoImage from '../assets/images/footer-logo.png';
import FbImage from '../assets/images/fb.png';
import InstaImage from '../assets/images/insta.png';
import TwitterImage from '../assets/images/twitter.png';
import BlogImage from '../assets/images/blog.png';
import { NavLink } from "react-router-dom";
import { Form } from "react-bootstrap";
import PreventionOfSexualHarassmentCommittee from "../pages/prevention-of-sexual-harassment-committee/PreventionOfSexualHarassmentCommittee";

const Footer = () => {
    const [enquiry, setEnquiry] = useState('-110%');
    const toggleEnquiry = () => {
        setEnquiry('0')
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const [enquiry1, setEnquiry1] = useState('-110%');
    const toggleEnquiry1 = () => {
        setEnquiry1('0')
    }
    const handleSubmit1 = (e) => {
        e.preventDefault();
    }

    const [enquiry2, setEnquiry2] = useState('-110%');
    const toggleEnquiry2 = () => {
        setEnquiry2('0')
    }
    const handleSubmit2 = (e) => {
        e.preventDefault();
    }


    /*const[show,setShow]=useState(false)*/
    return (
        <Fragment>
            <div className="col lightGrayFooter">
                <div className="container custom_spacing footer">
                    <div className="row">
                        <div className="col-md-3">
                            <h3 className="footerTitle">ABOUT INS</h3>
                            <p>Welcome to the Indira National School We are a part of Shree Chanakya Education Society, which has a strong presence on the education map of Pune.</p>
                            <div className="banner_button_container mobileHide">
                                <a href="http://indiranationalschool.ac.in/360-degree-virtual-tour/" target="_blank" rel="noopener noreferrer"><button className="button_outline_black">INS 360 Virtual Tour</button></a>
                                {/*--<button className="button_filled" style={{ margin: 0 }} onClick={toggleEnquiry1}>Admission Enquiry</button>*/}
                                <a href="https://erp.ins.ac.in/Signin/EnquiryForm_Custom?OrgGUID=C6B82810-B43D-41EB-90FA-0B9B966957BF&fhl=1" target="_blank"><button className="button_filled" style={{ margin: 0 }}>Admission Enquiry</button></a>

                                <div class="enquireNowPopUpFooter" onSubmit={handleSubmit1} style={{ left: enquiry1 }}>

                                    <div class="closeBtn" onClick={() => { setEnquiry1('-110%') }}>X</div>


                                    <iframe frameborder="0" width="100%" height="430px" sandbox="allow-top-navigation allow-scripts allow-same-origin allow-downloads" src="https://erp.ins.ac.in/Signin/EnquiryForm_Custom?OrgGUID=C6B82810-B43D-41EB-90FA-0B9B966957BF&fhl=1"></iframe>
                                </div>




                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col col-md-4">
                                    <h3 className="footerTitle">SCHOOL LEVEL</h3>
                                    <ul className="FooterLinks">
                                        <li><NavLink to="/pre-primary">Pre Primary</NavLink></li>
                                        <li><NavLink to="/primary">Primary School</NavLink></li>
                                        <li><NavLink to="/middle-school">Middle School</NavLink></li>
                                        <li><NavLink to="/secondary-school">Secondary School</NavLink></li>
                                        <li><NavLink to="/senior-secondary-school">Sr. Secondary School</NavLink></li>
                                    </ul>
                                </div>
                                <div className="col col-md-4 mobileHide">
                                    <h3 className="footerTitle">RESOURCES</h3>
                                    <ul className="FooterLinks">
                                        <li><NavLink to="/">Blog</NavLink></li>
                                        <li><NavLink to="/events">Events</NavLink></li>
                                        <li><NavLink to="/infrastructure">Infrastructure</NavLink></li>
                                    </ul>
                                </div>
                                <div className="col col-md-4">
                                    <h3 className="footerTitle">ADMISSIONS</h3>
                                    <ul className="FooterLinks">
                                        <li><NavLink to="/admission-process">Admission Process</NavLink></li>
                                        <li><NavLink to="/fees">Fees</NavLink></li>
                                        <li><NavLink to="/admission-form">Admission Form</NavLink></li>
                                        {/* <li><NavLink to="/admission-procedureXI">Admission Procedure for Grade XI(A/Y 2022-23)</NavLink></li> */}

                                        <li onClick={toggleEnquiry} style={{ cursor: 'pointer' }}>Book a Meeting</li>
                                       {/*}  <li style={{ margin: 0, cursor: 'pointer' }} onClick={toggleEnquiry1} className="mobileHide">Enquiry Form</li>
                                        <li style={{ margin: 0, cursor: 'pointer' }} onClick={toggleEnquiry2} className=" desktopHide">Enquiry Form</li>*/}
                                        <a href="https://erp.ins.ac.in/Signin/EnquiryForm_Custom?OrgGUID=C6B82810-B43D-41EB-90FA-0B9B966957BF&fhl=1" target="_blank"> <li style={{ margin: 0, cursor: 'pointer' }}  className="mobileHide">Enquiry Form</li></a>
                                        <a href="https://erp.ins.ac.in/Signin/EnquiryForm_Custom?OrgGUID=C6B82810-B43D-41EB-90FA-0B9B966957BF&fhl=1" target="_blank"><li style={{ margin: 0, cursor: 'pointer' }}  className=" desktopHide">Enquiry Form</li></a>

                                        <div class="enquireNowPopUpFooter" onSubmit={handleSubmit2} style={{ left: enquiry2, }}>

                                            <div class="closeBtn" onClick={() => { setEnquiry2('-110%') }}>X</div>


                                            <iframe frameborder="0" width="100%" height="100%" sandbox="allow-top-navigation allow-scripts allow-same-origin allow-downloads" src="https://erp.ins.ac.in/Signin/EnquiryForm_Custom?OrgGUID=C6B82810-B43D-41EB-90FA-0B9B966957BF&fhl=1"></iframe>
                                        </div>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h3 className="footerTitle">STAY CONNECT</h3>
                            <p><b>Add: </b>
                               
                                  S.No. 111/1/2, Opp. Indira Institute, Off New Pune-Mumbai Highway, Wakad, Pune, Maharashtra 411057
                            </p>
                         {/*}   <p><b>Add:</b> S.No. 111/ 1 / 2, Opp. Indira Institute, Off New
                                Pune - Mumbai Highway, Wakad, Pune - 411057
                                    </p> */}
                            <p><b>Phone:</b> 020-66731707 / 626</p>
                            <p><b>Emergency :</b> 9075897049 (7 am to 6 pm)<br />
                                <b>Email:</b> info@indiranationalschool.ac.in
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col backgroundColorDarkPink">
                <div className="container custom_spacing">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 text-center">
                            <img src={FooterLogoImage} className="img_res" />
                            <p className="footerLogoTitle">© 2022 . Indira National School, Pune.</p>
                            <ul className="social_list">
                                <li><a href='https://www.facebook.com/IndiraNationalSchool' target="_blank" rel="noopener noreferrer"><img src={FbImage} className="socialIcons" /></a></li>
                                {/* <li><img src={InstaImage} className="socialIcons" /></li> */}
                                <li><a href='https://twitter.com/indiraschool' target="_blank" rel="noopener noreferrer"><img src={TwitterImage} className="socialIcons" /></a></li>
                                <li><a href='http://blog.indiraedu.com/' target="_blank" rel="noopener noreferrer"><img src={BlogImage} className="socialIcons" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="enquiryPopup" style={{ left: enquiry }}>
                <div className="popupContainer">
                    <h5 className="text-center">Book a Meeting</h5>
                    <span className="clBtn" onClick={() => { setEnquiry('-110%') }}>CLOSE X</span>
                    <Form onSubmit={handleSubmit}>


                        <div className="row">
                            <div className="col-md-6">
                                <Form.Label>Parents Full Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="parentsName"
                                />
                            </div>
                            <div className="col-md-6">
                                <Form.Label>Student Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="studentsName"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-6">
                                        <Form.Label>Class</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="parentsName"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Label>Section/Division</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="studentsName"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <Form.Label>Meeting With</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Select..</option>
                                    <option value="1">Principal</option>
                                    <option value="2">Principal (Morning Shift)</option>
                                    <option value="3">Principal (Afternoon Shift)</option>
                                    <option value="3">Vice Principal</option>
                                    <option value="3">Teacher </option>
                                    <option value="3">Admin </option>
                                    <option value="3">IT </option>
                                    <option value="3">Acoount</option>
                                </Form.Select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Label>Parents Full Name</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="parentsName"
                                />
                            </div>
                            <div className="col-md-6">
                                <Form.Label>Student Name</Form.Label>
                                <Form.Control
                                    type="time"
                                    name="studentsName"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Regarding</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </div>
                        <p className="text-center">
                            <button class="button_filled" style={{ margin: '0px' }} onClick={() => { setEnquiry('-110%') }}>Submit</button>
                        </p>
                    </Form>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer;