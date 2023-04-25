import React, { Fragment } from "react";
import InsLogo from "../assets/images/ins-logo.png";
import LogoText from "../assets/images/logo-text.jpg";
import ListIcon1 from "../assets/images/keylink1.png";
import ListIcon2 from "../assets/images/keylink2.png";
import ListIcon3 from "../assets/images/keylink3.png";
import ListIcon4 from "../assets/images/keylink4.png";
import ListIcon5 from "../assets/images/keylink5.png";
import ListIcon6 from "../assets/images/keylink6.png";
import AlumniIcon from "../assets/images/alumni.png";
import RightToInfo from "../assets/pdf/Admissions-under-Right-to-Education-RTE.pdf";

import { NavLink } from "react-router-dom";

import { useState } from "react";
import AdmissionProcessXI from "../pages/admission-procedureXI/AdmissionProcessXI";
const Header = () => {
    const [mobileSubMenu, setMobileSubMenu] = useState(false);
    const [menuItem, setMenuItem] = useState(false);
    const [homeItem, setHomeItem] = useState(true);
    const [aboutMenu, setAboutMenu] = useState(false);
    const [academicsMenu, setAcademicsMenu] = useState(false);
    const [committeesMenu, setCommitteesMenu] = useState(false);
    const [admissionsMenu, setAdmissionsMenu] = useState(false);
    const [eventsMenu, setEventsMenu] = useState(false);
    const [infrastructureMenu, setInfrastructureMenu] = useState(false);
    const menuItemClickHandler = () => {
        setMenuItem(!menuItem);
        setHomeItem(true);
        setAboutMenu(false);
        setAcademicsMenu(false);
        setCommitteesMenu(false);
        setAdmissionsMenu(false);
        setEventsMenu(false);
        setInfrastructureMenu(false);
    }

    const aboutClickHandler = () => {
        setMobileSubMenu(true);
        setHomeItem(false);
        setAboutMenu(true);
        setAcademicsMenu(false);
        setCommitteesMenu(false);
        setAdmissionsMenu(false);
        setEventsMenu(false);
        setInfrastructureMenu(false);
    }
    const academicsClickHandler = () => {
        setMobileSubMenu(true);
        setHomeItem(false);
        setAboutMenu(false);
        setAcademicsMenu(true);
        setCommitteesMenu(false);
        setAdmissionsMenu(false);
        setEventsMenu(false);
        setInfrastructureMenu(false);
    }

    const committeesClickHandler = () => {
        setMobileSubMenu(true);
        setHomeItem(false);
        setAboutMenu(false);
        setAcademicsMenu(false);
        setCommitteesMenu(true);
        setAdmissionsMenu(false);
        setEventsMenu(false);
        setInfrastructureMenu(false);
    }

    const admissionsClickHandler = () => {
        setMobileSubMenu(true);
        setHomeItem(false);
        setAboutMenu(false);
        setAcademicsMenu(false);
        setCommitteesMenu(false);
        setAdmissionsMenu(true);
        setEventsMenu(false);
        setInfrastructureMenu(false);
    }

    const CloseMenuHandler = () => {
        setMenuItem(!menuItem)
    }
    const [enquiry1, setEnquiry1] = useState('-110%');
    const toggleEnquiry1 = () => {
        setEnquiry1('0')
    }
    const handleSubmit1 = (e) => {
        e.preventDefault();
    }

    const [show, setShow] = useState(false)

    return (
        <Fragment>
            <div className="navigation">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div class="enquireBtn mobileHide" ><a href="https://erp.ins.ac.in/Signin/EnquiryForm_Custom?OrgGUID=C6B82810-B43D-41EB-90FA-0B9B966957BF&fhl=1" target="_blank"> Admission Enquiry </a></div>

                            {/* <div class="enquireBtn mobileHide" onClick={toggleEnquiry1} >Enquiry Now</div> */}
                            {/* <div class="enquireBtn2 " ><a href="#admission-procedureXI">Admission For XI</a></div> */}
                            {/* <div>

                                <div class="enquireNowFormCont mobileHide" onSubmit={handleSubmit1} style={{ right: enquiry1 }}>

                                    <div class="closeBtn2" onClick={() => { setEnquiry1('-110%') }}>X</div>

                                    <div class="npf_wgts" data-height="530px" data-w="3887885267eeb8a3e8dd885e2b718c3d"></div>
                                    <iframe frameborder="0" width="100%" height="530px" sandbox="allow-top-navigation allow-scripts allow-same-origin allow-downloads"
                                        src="https://erp.ins.ac.in/Signin/EnquiryForm_Custom?OrgGUID=C6B82810-B43D-41EB-90FA-0B9B966957BF&fhl=1"></iframe>
                                </div>
                            </div> */}

                            {/* <div class="enquireBtn desktopHide" onClick={() => setShow(true)} >Enquiry Now</div> */}
                            <div class="enquireBtn desktopHide"><a href="http://surl.li/ddvrg" target="_blank">Admission Enquiry</a></div>


                            {/* {
                                show ?
                                    <div>
                                        <div class="enquireNowFormCont desktopHide">

                                            <div class="closeBtn2" onClick={() => setShow(false)}>X</div>

                                            <div class="npf_wgts" data-height="530px" data-w="3887885267eeb8a3e8dd885e2b718c3d"></div>
                                            <iframe frameborder="0" width="100%" height="600px" sandbox="allow-top-navigation allow-scripts allow-same-origin allow-downloads"
                                                src="https://erp.ins.ac.in/Signin/EnquiryForm_Custom?OrgGUID=C6B82810-B43D-41EB-90FA-0B9B966957BF&fhl=1"></iframe>
                                        </div>
                                    </div>
                                    : null
                            } */}
                            <NavLink to="/home">
                                <img src={InsLogo} className="logoIc" />
                                <img src={LogoText} className="logoText" />
                            </NavLink>
                            {/* <a href="#admission-procedureXI"><marquee direction="left" className="scrolltext">Admission Procedure for Grade XI(A/Y 2022-23)</marquee> */}
                            {/* </a> */}

                            <div className="buttonContainerGrid desktopHide">
                                <div className="menuIcon" onClick={menuItemClickHandler}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <a href="https://erp.ins.ac.in/" target="_blank"><button className="button_outline_pink mobileHide">ERP Login</button></a>
                                {/* <a href="http://erp.indiraedu.com" target="_blank"><button className="button_outline_pink mobileHide">ERP Login</button></a> */}


                            </div>
                        </div>
                        <div className="col buttonContainerGrid mobileHide">
                            <div className="menuIcon" onClick={menuItemClickHandler}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <a href="https://erp.ins.ac.in/" target="_blank"> <button className="button_outline_pink mobileHide">ERP Login</button></a>
                            {/* <a href="http://erp.indiraedu.com" target="_blank"> <button className="button_outline_pink mobileHide">ERP Login</button></a> */}
                            <a href="https://www.insalumni.ac.in/" target="_blank"> <button className="button_outline_pink mobileHide">Alumni</button></a>

                        </div>
                    </div>
                </div>
            </div>
            {menuItem &&
                <div className="menuContainer">
                    <div className="menuMobScroll">
                        <div className="row">
                            <div className="col-md-6 menuPanelPadding">
                                <div className="desktopHide">
                                    <h2 className="closeButton textPinkColor" onClick={() => setMenuItem(!menuItem)}>MENU <span>X</span></h2>
                                </div>
                                <ul className="menuHeading">
                                    <li><NavLink to="/" onClick={CloseMenuHandler}>Home</NavLink></li>
                                    <li onClick={aboutClickHandler} className={aboutMenu ? 'activeMenu' : ""}>About Us<i class="fa fa-plus float_right MenuPlusicon"></i></li>
                                    <li onClick={academicsClickHandler} className={academicsMenu ? 'activeMenu' : ""}>Academics<i class="fa fa-plus float_right MenuPlusicon"></i></li>
                                    <li onClick={committeesClickHandler} className={committeesMenu ? 'activeMenu' : ""}>Committees<i class="fa fa-plus float_right MenuPlusicon"></i></li>
                                    <li onClick={admissionsClickHandler} className={admissionsMenu ? 'activeMenu' : ""}>Admissions<i class="fa fa-plus float_right MenuPlusicon"></i></li>
                                    <li><NavLink to="/career" onClick={CloseMenuHandler}>Careers</NavLink></li>
                                    <li><NavLink to="/events" onClick={CloseMenuHandler}>Events</NavLink></li>
                                    {/* <li onClick={galleryClickHandler}>Gallery<i class="fa fa-angle-right float_right"></i></li> */}
                                    <li><NavLink to="/infrastructure" onClick={CloseMenuHandler}>Infrastructure</NavLink></li>
                                    <li><NavLink to="/contact-us" onClick={CloseMenuHandler}>Contact Us</NavLink></li>

                                </ul>
                            </div>
                            <div className="col-md-6 backgroundColorLightPink height_100vh menuPanelPadding heightFitContent mobileHide">
                                <div className="mobileHide">
                                    <h2 className="closeButton textPinkColor" onClick={() => setMenuItem(!menuItem)}>MENU <span>X</span></h2>
                                </div>
                                <div className="clearfix"></div>
                                {homeItem &&
                                    <div>
                                        <h2 className="text-center headingTitle textColorPink mgbt30">INS Key Links</h2>
                                        <div className="row text-center">
                                            <div className="col">
                                                <NavLink to="/exam-calendar" onClick={CloseMenuHandler}>
                                                    <img src={ListIcon1} className='menuIconHome' />
                                                    <h4 className="menu_right_side_sub_heading">Exam Calender</h4>
                                                </NavLink>
                                            </div>
                                            <div className="col">
                                                <NavLink to="/year-plans" onClick={CloseMenuHandler}>
                                                    <img src={ListIcon2} className='menuIconHome' />
                                                    <h4 className="menu_right_side_sub_heading">Years Plan 2022</h4>
                                                </NavLink>
                                            </div>
                                        </div>

                                        <div className="row text-center">
                                            <div className="col">
                                                <NavLink to="/circulars" onClick={CloseMenuHandler}>
                                                    <img src={ListIcon3} className='menuIconHome' />
                                                    <h4 className="menu_right_side_sub_heading">Circulars</h4>
                                                </NavLink>
                                            </div>
                                            <div className="col">
                                                <NavLink to="/infographics" onClick={CloseMenuHandler}>
                                                    <img src={ListIcon4} className='menuIconHome' />
                                                    <h4 className="menu_right_side_sub_heading">Infographic</h4>
                                                </NavLink>
                                            </div>
                                        </div>

                                        <div className="row text-center">
                                            <div className="col">
                                                <NavLink to="/school-almanac" onClick={CloseMenuHandler}>
                                                    <img src={AlumniIcon} className='menuIconHome' />
                                                    <h4 className="menu_right_side_sub_heading">School Almanac</h4>
                                                </NavLink>
                                            </div>
                                            <div className="col">
                                                <NavLink to="/newsletter" onClick={CloseMenuHandler}>
                                                    <img src={ListIcon6} className='menuIconHome' />
                                                    <h4 className="menu_right_side_sub_heading">News Letter</h4>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {aboutMenu &&
                                    <div>
                                        <ul className="menu_sub_item">
                                            <li><NavLink to="/about-indira-national-school" onClick={CloseMenuHandler}>Indira National School</NavLink></li>
                                            <li><NavLink to="/chairperson-message" onClick={CloseMenuHandler}>Chairperson's Message</NavLink></li>
                                            <li><NavLink to="/principals-message" onClick={CloseMenuHandler}>Principals Messages</NavLink></li>
                                            <li><NavLink to="/vision-mission" onClick={CloseMenuHandler}>Vision Mission</NavLink></li>
                                        </ul>
                                    </div>
                                }
                                {academicsMenu &&
                                    <div>
                                        <ul className="menu_sub_item">
                                            <li><NavLink to="/pre-primary" onClick={CloseMenuHandler}>Pre Primary</NavLink></li>
                                            <li><NavLink to="/primary" onClick={CloseMenuHandler}>Primary School</NavLink></li>
                                            <li><NavLink to="/middle-school" onClick={CloseMenuHandler}>Middle School</NavLink></li>
                                            <li><NavLink to="/secondary-school" onClick={CloseMenuHandler}>Secondary School</NavLink></li>
                                            <li><NavLink to="/senior-secondary-school" onClick={CloseMenuHandler}>Sr. Secondary School</NavLink></li>
                                            <li><NavLink to="/school-almanac" onClick={CloseMenuHandler}>School Almanac</NavLink></li>
                                            <li><NavLink to="/year-plans" onClick={CloseMenuHandler}>Year Plans</NavLink></li>
                                            <li><NavLink to="/academic-program" onClick={CloseMenuHandler}>Academic Programs</NavLink></li>
                                            <li><NavLink to="/holiday-calendar" onClick={CloseMenuHandler}>Holiday Calendar(2022-23)</NavLink></li>
                                            <li><NavLink to="/exam-calendar" onClick={CloseMenuHandler}>Exam Calendar</NavLink></li>
                                            <li><NavLink to="/newsletter" onClick={CloseMenuHandler}>News Letter</NavLink></li>
                                        </ul>
                                    </div>
                                }
                                {committeesMenu &&
                                    <div>
                                        <ul className="menu_sub_item">
                                            <li><NavLink to="/school-management-development-committee" onClick={CloseMenuHandler}>School Management Development Committee -2022-23</NavLink></li>
                                            <li><NavLink to="/school-management-committee-members" onClick={CloseMenuHandler}>School Management Committee-2022-23</NavLink></li>
                                            <li><NavLink to="/academic-committee" onClick={CloseMenuHandler}>Academic Committee -2022-23</NavLink></li>
                                            <li><NavLink to="/executive-committee-of-pta" onClick={CloseMenuHandler}>Executive Committee of PTA -2022-23</NavLink></li>
                                            {/* <li><NavLink to="/transport-committee" onClick={CloseMenuHandler}>Transport Committee</NavLink></li> */}
                                            <li><NavLink to="/student-council" onClick={CloseMenuHandler}>Student-Council-2022-23.</NavLink></li>
                                            <li><NavLink to="/transportation-committee" onClick={CloseMenuHandler}>Transport Committee -2022-23</NavLink></li>
                                            <li><NavLink to="/child-safety-committee" onClick={CloseMenuHandler}>Child Safety Committee -2022-23</NavLink></li>
                                            <li><NavLink to="/anti-bullying-committee" onClick={CloseMenuHandler}>Anti Bullying Committee-2022-23</NavLink></li>
                                            <li><NavLink to="/grievance-redressal-committee" onClick={CloseMenuHandler}>Grievance Redressal Committee-2022-23</NavLink></li>
                                            <li><NavLink to="/prevention-of-sexual-harassment-committee" onClick={CloseMenuHandler}>Prevention of Sexual Harassment Committee-2022-23</NavLink></li>
                                            <li><NavLink to="/cultural-committee" onClick={CloseMenuHandler}>Cultural Committee-2022-23</NavLink></li>

                                        </ul>
                                    </div>
                                }
                                {admissionsMenu &&
                                    <div>
                                        <ul className="menu_sub_item">
                                            {/* <li><NavLink to="/admission-process" onClick={CloseMenuHandler}>Admission Process</NavLink></li>
                                            <li><NavLink to="/admission-form" onClick={CloseMenuHandler}>Admission Form</NavLink></li>
                                            <li><NavLink to="/fees" onClick={CloseMenuHandler}>Fees & Payment</NavLink></li> */}
                                            {/* <li><NavLink to="/admission-procedureXI" onClick={CloseMenuHandler}>Admission Procedure for Grade XI(A/Y 2022-23)</NavLink></li> */}

                                            {/* <li><NavLink to="/admission-procedure-I" onClick={CloseMenuHandler}>Admission Procedure Grade I (A/Y-2023-24)</NavLink></li> */}

                                            <li><a href={RightToInfo} target='_blank' rel="noopener noreferrer">Right To Education</a></li>
                                            <li><NavLink to="/fees" onClick={CloseMenuHandler}>Fees Structure Grade  I to X</NavLink></li>
                                        </ul>
                                    </div>
                                }

                                {eventsMenu &&
                                    <div>eventsMenu</div>
                                }
                                {/* {galleryMenu &&
                                    <div>galleryMenu</div>
                                } */}
                                {infrastructureMenu &&
                                    <div>infrastructureMenu</div>
                                }
                            </div>
                            <div className={mobileSubMenu ? 'col-md-6 backgroundColorLightPink height_100vh menuPanelPadding heightFitContent mobileMnuSlide desktopHide activeSubMnu' : 'col-md-6 backgroundColorLightPink height_100vh menuPanelPadding heightFitContent mobileMnuSlide desktopHide'} >
                                <div className="">
                                    <h2 className="closeButton textPinkColor" onClick={() => setMobileSubMenu(!mobileSubMenu)}><span>&#8592;</span>BACK</h2>
                                </div>
                                <div className="clearfix"></div>
                                {homeItem &&
                                    <div>
                                        <h2 className="text-center headingTitle textColorPink mgbt30">INS Key Links</h2>
                                        <div className="row text-center">
                                            <div className="col">
                                                <img src={ListIcon1} className='menuIconHome' />
                                                <h4 className="menu_right_side_sub_heading">Exam Calender</h4>
                                            </div>
                                            <div className="col">
                                                <NavLink to="/year-plans" onClick={CloseMenuHandler}>
                                                    <img src={ListIcon2} className='menuIconHome' />
                                                    <h4 className="menu_right_side_sub_heading">Years Plan 2022</h4>
                                                </NavLink>
                                            </div>
                                        </div>

                                        <div className="row text-center">
                                            <div className="col">
                                                <NavLink to="/" onClick={CloseMenuHandler}>
                                                    <img src={ListIcon3} className='menuIconHome' />
                                                    <h4 className="menu_right_side_sub_heading">Circulars</h4>
                                                </NavLink>
                                            </div>
                                            <div className="col">
                                                <NavLink to="/infographics" onClick={CloseMenuHandler}>
                                                    <img src={ListIcon4} className='menuIconHome' />
                                                    <h4 className="menu_right_side_sub_heading">Infographic</h4>
                                                </NavLink>
                                            </div>
                                        </div>

                                        <div className="row text-center">
                                            <div className="col">
                                                <NavLink to="/school-almanac" onClick={CloseMenuHandler}>
                                                    <img src={AlumniIcon} className='menuIconHome' />
                                                    <h4 className="menu_right_side_sub_heading">School Almanac</h4>
                                                </NavLink>
                                            </div>
                                            <div className="col">
                                                <NavLink to="/school-almanac" onClick={CloseMenuHandler}>
                                                    <img src={ListIcon6} className='menuIconHome' />
                                                    <h4 className="menu_right_side_sub_heading">News Letter</h4>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {aboutMenu &&
                                    <div>
                                        <ul className="menu_sub_item">
                                            <li><NavLink to="/about-indira-national-school" onClick={CloseMenuHandler}>Indira National School</NavLink></li>
                                            <li><NavLink to="/chairperson-message" onClick={CloseMenuHandler}>Chairperson's Message</NavLink></li>
                                            <li><NavLink to="/principals-message" onClick={CloseMenuHandler}>Principals Messages</NavLink></li>
                                            <li><NavLink to="/vision-mission" onClick={CloseMenuHandler}>Vision Mission</NavLink></li>
                                        </ul>
                                    </div>
                                }
                                {academicsMenu &&
                                    <div>
                                        <ul className="menu_sub_item">
                                            <li><NavLink to="/pre-primary" onClick={CloseMenuHandler}>Pre Primary</NavLink></li>
                                            <li><NavLink to="/primary" onClick={CloseMenuHandler}>Primary School</NavLink></li>
                                            <li><NavLink to="/middle-school" onClick={CloseMenuHandler}>Middle School</NavLink></li>
                                            <li><NavLink to="/secondary-school" onClick={CloseMenuHandler}>Secondary School</NavLink></li>
                                            <li><NavLink to="/senior-secondary-school" onClick={CloseMenuHandler}>Sr. Secondary School</NavLink></li>
                                            <li><NavLink to="/school-almanac" onClick={CloseMenuHandler}>School Almanac</NavLink></li>
                                            <li><NavLink to="/year-plans" onClick={CloseMenuHandler}>Year Plans</NavLink></li>
                                            <li><NavLink to="/holiday-calendar" onClick={CloseMenuHandler}>Holiday Calendar(2022-23)</NavLink></li>
                                            <li><NavLink to="/exam-calendar" onClick={CloseMenuHandler}>Exam Calendar</NavLink></li>
                                            <li><NavLink to="/newsletter" onClick={CloseMenuHandler}>News Letter</NavLink></li>
                                        </ul>
                                    </div>
                                }
                                {committeesMenu &&
                                    <div>
                                        <ul className="menu_sub_item">
                                            <li><NavLink to="/school-management-development-committee" onClick={CloseMenuHandler}>School Management Development Committee -2022-23</NavLink></li>
                                            <li><NavLink to="/school-management-committee-members" onClick={CloseMenuHandler}>School Management Committee -2022-23</NavLink></li>
                                            <li><NavLink to="/academic-committee" onClick={CloseMenuHandler}>Academic Committee -2022-23</NavLink></li>
                                            <li><NavLink to="/executive-committee-of-pta" onClick={CloseMenuHandler}>Executive Committee of PTA -2022-23</NavLink></li>
                                            <li><NavLink to="/student-council" onClick={CloseMenuHandler}>Student-Council-2022-23.</NavLink></li>
                                            {/* <li><NavLink to="/transport-committee" onClick={CloseMenuHandler}>Transport Committee</NavLink></li> */}
                                            <li><NavLink to="/transportation-committee" onClick={CloseMenuHandler}>Transport Committee -2022-23</NavLink></li>
                                            <li><NavLink to="/child-safety-committee" onClick={CloseMenuHandler}>Child Safety Committee-2022-23</NavLink></li>
                                            <li><NavLink to="/anti-bullying-committee" onClick={CloseMenuHandler}>Anti Bullying Committee-2022-23</NavLink></li>
                                            <li><NavLink to="/grievance-redressal-committee" onClick={CloseMenuHandler}>Grievance Redressal Committee-2022-23</NavLink></li>
                                            <li><NavLink to="/prevention-of-sexual-harassment-committee" onClick={CloseMenuHandler}>Prevention of Sexual Harassment Committee-2022-23</NavLink></li>
                                            <li><NavLink to="/cultural-committee" onClick={CloseMenuHandler}>cultural Committee-2022-23</NavLink></li>

                                        </ul>
                                    </div>
                                }
                                {admissionsMenu &&
                                    <div>
                                        <ul className="menu_sub_item">
                                            {/*}  <li><NavLink to="/admission-process" onClick={CloseMenuHandler}>Admission Process</NavLink></li>
                                            <li><NavLink to="/admission-form" onClick={CloseMenuHandler}>Admission Form</NavLink></li>
                                            <li><NavLink to="/fees" onClick={CloseMenuHandler}>Fees & Payment</NavLink></li>*/}
                                            {/* <li><NavLink to="/admission-procedure-I" onClick={CloseMenuHandler}>Admission Procedure Grade I (A/Y-2023-24)</NavLink></li> */}

                                            <li><a to="/RightToInfo" target='_blank' rel="noopener noreferrer">Right To Education</a></li>
                                            <li><NavLink to="/fees" target='_blank'>Fees Structure Grade  I to X</NavLink></li>
                                        </ul>
                                    </div>
                                }

                                {eventsMenu &&
                                    <div>eventsMenu</div>
                                }
                                {/* {galleryMenu &&
                                    <div>galleryMenu</div>
                                } */}
                                {infrastructureMenu &&
                                    <div>infrastructureMenu</div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }

        </Fragment>
    )
}
export default Header;