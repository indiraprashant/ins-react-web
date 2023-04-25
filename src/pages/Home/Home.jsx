import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Carousel from 'react-bootstrap/Carousel'
import NewsBanner from '../../assets/images/ins-news-banner.gif';
import HomePageBannerImage from '../../assets/images/homepage_banner_image.png';
import HomePageBanner2Image from '../../assets/images/homepage_banner_image2.jpg';
import HomePageBanner3Image from '../../assets/images/homepage_banner_image3.jpg';
import HomePageWelcomeImage from '../../assets/images/homepage_welcome_section.png';
import PrePrimarySchoolImage from '../../assets/images/pre-primary.png';
import PrimarySchoolImage from '../../assets/images/primary.png';
import MiddleSchoolImage from '../../assets/images/middle-school-home.jpg';
import SecondarySchoolImage from '../../assets/images/sec-school.jpg';
import HeigherSecondarySchoolImage from '../../assets/images/high-sec.jpg';
import newAdmissionBanner from '../../assets/images/new_admission.jpg';
import PinImage from '../../assets/images/pin.png';
import Artboard8 from '../../assets/images/Artboard8.png';
import Artboard9 from '../../assets/images/Artboard9.png';
import Artboard10 from '../../assets/images/Artboard10.png';
import Artboard11 from '../../assets/images/Artboard11.png';
import Parent1 from '../../assets/images/parent1.jpeg';
import Parent2 from '../../assets/images/parent2.jpg';
import Parent3 from '../../assets/images/parent3.jpg';
import Testimonial1 from '../../assets/images/photo1.png';
import Testimonial2 from '../../assets/images/photo2.png';
import Testimonial3 from '../../assets/images/photo3.png';
import Testimonial4 from '../../assets/images/photo5.png';
import Testimonial6 from '../../assets/images/photo6.png';
import Testimonial7 from '../../assets/images/photo7.png';
import Testimonial8 from '../../assets/images/photo8.png';
import Testimonial9 from '../../assets/images/photo9.png';
import DanceImage from '../../assets/images/holistic-education-1.png';
import MusicImage from '../../assets/images/holistic-education-2.png';
import SportsImage from '../../assets/images/holistic-education-3.png';
import SingingImage from '../../assets/images/holistic-education-4.png';
import OthersImage from '../../assets/images/holistic-education-5.png';
import CuricularImage from '../../assets/images/curicular1.png';
import notic1 from '../../assets/pdf/Notice/Book-List-Primary-School-2022-23.pdf';
import notic2 from '../../assets/pdf/Notice/Book-List-Middle-School-2022-23.pdf';
import notic3 from '../../assets/pdf/Notice/Book-List-Secondary-School-2022-23.pdf';
import notic4 from '../../assets/pdf/Notice/Book-List-Secondary-School-2022-23 XI-XII.pdf';
import notic5 from '../../assets/pdf/Notice/Orientation-std.1-Shift-I.pptx.pdf';
import notic6 from '../../assets/pdf/Notice/Orientation-Std-2-5-Shift-I.pptx.pdf';
import notic7 from '../../assets/pdf/Notice/Orientation-Std-2-5-Shift-II.pdf';
import notic8 from '../../assets/pdf/Notice/Orientation-for-Class-9-1-2.pdf';
import notic9 from '../../assets/pdf/Notice/Orientation-Std-V-going-to-Std-VI-2022-23.pdf';
import notic10 from '../../assets/pdf/Notice/Minutes-of-Executive-Committee-meeting-of-P.T.A-held-on-18th-December-2021.pdf';
import notic11 from '../../assets/pdf/Notice/Minutes-of-meeting-of-25th-September-2021.pdf';
import notic12 from '../../assets/pdf/Notice/Minutes-of-meeting-of-24th-July-2021.pdf';
import notic13 from '../../assets/pdf/Notice/Minutes-of-Meeting-of-Parent-Teacher-Association-AY-2021-22.pdf';
import notic14 from '../../assets/pdf/Notice/Circular-No.-8-Notice-of-the-meeting-of-Parent-Teachers-Association-for-AY-2021-22.pdf';
import notic15 from '../../assets/pdf/Notice/Grade-X-Orientation-on-New-Assessment-Scheme.pdf';
import notic16 from '../../assets/pdf/Notice/Grade-XII-Orientation-on-New-Assessment-Scheme.pdf';
import notic17 from '../../assets/pdf/Notice/Book-List-Primary-School-2021-221.pdf';
import notic18 from '../../assets/pdf/Notice/Book-List-Middle-School-2021-22.pdf';
import notic19 from '../../assets/pdf/Notice/Book-List-Secondary-School-2021-22-1.pdf';
import notic20 from '../../assets/pdf/Notice/Book-List-Senior-Secondary-School-2021-222.pdf';
import notic21 from '../../assets/pdf/Notice/Back-to-School-Post-Covid-29.05.2020.pdf';
import notic22 from '../../assets/pdf/Notice/Std.-I-to-IV-Uniforms-.pdf';
import notic23 from '../../assets/pdf/Notice/Std.-V-to-X-uniforms-.pdf';
import notic24 from '../../assets/pdf/Notice/Std-XI-XII-Uniforms-.pdf';
import notic25 from '../../assets/pdf/Notice/Booklist-Senior-Secondary-(2022-23).pdf';
import meritlistXI from '../../assets/pdf/grade_XI_merit_list.pdf';
import newIcon from '../../assets/images/new-blinking.gif';
import Circular6 from '../../assets/pdf/Circular No. 6  Notice of meeting of PTA.pdf'
import Agm from '../../assets/pdf/AGM_2022-23.pdf'
import meritofScience from '../../assets/pdf/eligible_list_for_science_stream.pdf'
import Agmaugust2022 from '../../assets/pdf/AGM_10 August 2022.pdf';
import gradeDateX from '../../assets/pdf/Grade X Date Sheet (2022-23).pdf';
import gradeDateXII from '../../assets/pdf/Grade XII Date Sheet (2022-23).pdf';
import minutesOfExecutive from '../../assets/pdf/MINUTES OF THE EXECUTIVE COMMITTEE MEETING OF EPTA_11 FEBRUARY,2023 (2) (1).pdf'

import booklistPrimary from '../../assets/pdf/2023-24/Book-List-Primary-School-(2023-24).pdf';
import booklistMiddle from '../../assets/pdf/2023-24/Book-List-Middle-School(2023-24).pdf';
import booklistSecondary from  '../../assets/pdf/2023-24/Book-List-Secondary-School-(2023-24).pdf';
import booklistSeniorSec from '../../assets/pdf/2023-24/Book-List-Senior-Secondary-School-(2023-24).pdf';
import Grade_1_Ori_Afternoon from '../../assets/pdf/2023-24/Grade_1_Orientation_Afternoon_Shift.pdf';
import Grade_1_Ori_Morning from '../../assets/pdf/2023-24/Grade_1_Orientation_Morning Shift.pdf';
import Grade_2_to_5_Ori from '../../assets/pdf/2023-24/Grade_2_to_5_Orientation_PPT_Final.pdf';

import ExCuricularImage from '../../assets/images/extra-curicular.png';
import ParentsEngagementImage from '../../assets/images/parents-engagement.png';
import { useEffect } from "react";
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import { useState } from "react";



const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [show, setShow] = useState(false)

    const [enquiry1, setEnquiry1] = useState('-155%');
    const toggleEnquiry1 = () => {
        setEnquiry1('0')
    }
    const handleSubmit1 = (e) => {
        e.preventDefault();
    }

    {/*new modal start*/ }

    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };
    const [isOpen1, setIsOpen1] = React.useState(false);
    const showModal1 = () => {
        setIsOpen1(true);
    };

    const hideModal1 = () => {
        setIsOpen1(false);
    };

    const [isOpen2, setIsOpen2] = React.useState(false);
    const showModal2 = () => {
        setIsOpen2(true);
    };

    const hideModal2 = () => {
        setIsOpen2(false);
    };

    const [isOpen3, setIsOpen3] = React.useState(false);
    const showModal3 = () => {
        setIsOpen3(true);
    };

    const hideModal3 = () => {
        setIsOpen3(false);
    };

    const [isOpen4, setIsOpen4] = React.useState(false);
    const showModal4 = () => {
        setIsOpen4(true);
    };

    const hideModal4 = () => {
        setIsOpen4(false);
    };
    {/*new modal start*/ }
    const [isHovering, setIsHovering] = useState(false);
    function handleMouseEnter(e) {
        setIsHovering(true)
    }


    return (
        <Fragment>

            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Body>
                    <div className="row">
                        <div className="col-md-3">
                            <button className="closeButton desktopHide" onClick={hideModal}>X</button>
                            <img src={Testimonial1} className='img_res' />

                        </div>

                        <div className="col-md-9">
                            <button className="closeButton mobileHide" onClick={hideModal}>X</button>
                            <div className="reduceLineHeightModal">
                                <p><b>Shrinivas Kulkarni</b></p>
                                <p>As proud Indira National School parents, we are really happy about endurance, quality care, enthusiasm, diligent efforts and passion you provide each and every day. My daughter feels very comfortable in the school. The way you groom your students and build culture by making them aware of burning issues like child abuse, girl safety is just outstanding.</p>
                            </div>

                        </div>
                    </div>



                </Modal.Body>
            </Modal>

            <Modal show={isOpen1} onHide={hideModal1}>
                <Modal.Body>
                    <div className="row">
                        <div className="col-md-3">
                            <button className="closeButton desktopHide" onClick={hideModal1}>X</button>
                            <img src={Testimonial2} className='img_res' />

                        </div>

                        <div className="col-md-9">
                            <button className="closeButton mobileHide" onClick={hideModal1}>X</button>
                            <div className="reduceLineHeightModal">
                                <p><b>Smita Deshmukh</b></p>
                                <p>Indira National school is a wonderful school to send my child to. They have been amazing in everything I have needed assistance in. My daughter has excelled at this school. The teachers care about the children. The school community is rich with diversity and the school works hard for their students. Even in pandemic situation the teachers did their jobs with full efforts. This school has helped my child to cope in many different ways.</p>
                            </div>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>

            <Modal show={isOpen2} onHide={hideModal2}>
                <Modal.Body>
                    <div className="row">
                        <div className="col-md-3">
                            <button className="closeButton desktopHide" onClick={hideModal2}>X</button>
                            <img src={Testimonial3} className='img_res' />

                        </div>

                        <div className="col-md-9">
                            <button className="closeButton mobileHideModal" onClick={hideModal2}>X</button>
                            <div className="reduceLineHeightModal">
                                <p><b>Geetanali Saxena</b></p>
                                <p>I have been a part of INS family for more than twelve years now. My elder one completed his 12th grade last year and younger one is currently in the 10th grade. The school provides an encouraging environment for the overall growth of the students. The infrastructure is good but there is a need for improvement in the Sports facilities. I sincerely appreciate the efforts made by the teachers especially during the pandemic to ensure that learning continued. My gratitude to Mrs Neelima Shrivastav ma'am who makes sure that no kid feels ignored. I would like to thank Sony Singh and Neetu Tyagi ma'am who try to inculcate good values among their students.</p>
                            </div>
                        </div>
                    </div>



                </Modal.Body>
            </Modal>


            <Modal show={isOpen3} onHide={hideModal3}>
                <Modal.Body>
                    <div className="row">
                        <div className="col-md-3">
                            <button className="closeButton desktopHide" onClick={hideModal3}>X</button>
                            <img src={Testimonial6} className='img_res' />

                        </div>

                        <div className="col-md-9">
                            <button className="closeButton mobileHide" onClick={hideModal3}>X</button>
                            <div className="reduceLineHeightModal">
                                <p><b>Bhavana Tayde</b></p>
                                I would like to thank INS for providing many different opportunities for my daughter to learn and grow at every step. I would like to show my appreciation to the teachers for their hard work and support. The way her teachers have helped to develop her personality, while at the same time inculcating self-discipline and respect towards others, is truly incredible. The way of teaching and interaction in the school is also commendable. Thank you INS for providing such an environment for the children to grow in their own way.
                            </div>
                        </div>
                    </div>



                </Modal.Body>
            </Modal>

            <Modal show={isOpen4} onHide={hideModal4}>
                <Modal.Body>
                    <div className="row">
                        <div className="col-md-3">
                            <button className="closeButton desktopHide" onClick={hideModal4}>X</button>
                            <img src={Testimonial8} className='img_res' />

                        </div>

                        <div className="col-md-9">
                            <button className="closeButton mobileHide" onClick={hideModal4}>X</button>
                            <div className="reduceLineHeightModal">
                                <p><b>Uma Senthilkumar</b></p>
                                I would like to thank INS for providing many different opportunities for my daughter to learn and grow at every step. I would like to show my appreciation to the teachers for their hard work and support. The way her teachers have helped to develop her personality, while at the same time inculcating self-discipline and respect towards others, is truly incredible. The way of teaching and interaction in the school is also commendable. Thank you INS for providing such an environment for the children to grow in their own way.
                            </div>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>

            <div className="col position_relative somi homePageCarousel">
                <Carousel interval={3000} fade>
                    <Carousel.Item>
                        <a href="https://indiranationalschool.ac.in/pre-primary/index.php?/"><img src={newAdmissionBanner} className='img_res' /></a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={NewsBanner} className='img_res' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={HomePageBannerImage} className='img_res' />
                        <div className="banner_content">
                            <h3 class="text-center color_white">Discovering Talents and Building Confidence.</h3>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={HomePageBanner2Image} className='img_res' />
                        <div className="banner_content">
                            <h3 class="text-center color_white">Discovering Talents and Building Confidence.</h3>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={HomePageBanner3Image} className='img_res' />
                        <div className="banner_content">
                            <h3 class="text-center color_white">Discovering Talents and Building Confidence.</h3>
                        </div>
                    </Carousel.Item>
                    {/* <Carousel.Item>
                        <img src={HomePageBanner4Image} className='img_res' />
                    </Carousel.Item>*/}

                </Carousel>

                {/*  <div className='banner_content'>
                    <h3 className="text-center color_white">Discovering Talents and Building Confidence.</h3>
                    <div className="banner_button_container text-center mobileHide">
                        <a href="http://indiranationalschool.ac.in/360-degree-virtual-tour/" target="_blank" rel="noopener noreferrer"><button className="button_outline">360&deg; Virtual Tour</button></a>
                        <button className="button_filled" onClick={toggleEnquiry1}>Admission Enquiry</button>
                       
                        <div class="enquireNowPopUp" onSubmit={handleSubmit1} style={{top:enquiry1}}>
                            
                                <div class="closeBtn" onClick={()=>{setEnquiry1('-155%')}}>X</div>
                                
                        
                        <iframe frameborder="0" width="100%" height="430px" sandbox="allow-top-navigation allow-scripts allow-same-origin allow-downloads" src="https://erp.ins.ac.in/Signin/EnquiryForm_Custom?OrgGUID=C6B82810-B43D-41EB-90FA-0B9B966957BF&fhl=1"></iframe>
                        </div>
                        
                        
                        
                    </div>
                </div>*/}
            </div>
            <div className="container custom_spacing">
                <div className="row">
                    <div className="col-md-6 desktopHide">
                        <div className="text-center">
                            <a href="http://indiranationalschool.ac.in/360-degree-virtual-tour/" target="_blank" rel="noopener noreferrer"><button className="button_outline_pink marginBottom10px">360&deg; Virtual Tour</button></a>
                            {/*<button className="button_filled marginBottom10px" onClick={toggleEnquiry1}>Admission Enquiry</button>*/}
                            <a href="https://erp.ins.ac.in/Signin/EnquiryForm_Custom?OrgGUID=C6B82810-B43D-41EB-90FA-0B9B966957BF&fhl=1" target="_blank"><button className="button_filled marginBottom10px">Admission Enquiry</button></a>

                            <div class="enquireNowPopUp" onSubmit={handleSubmit1} style={{ top: enquiry1 }}>

                                <div class="closeBtn" onClick={() => { setEnquiry1('-155%') }}>X</div>


                                <iframe frameborder="0" width="100%" height="100%" sandbox="allow-top-navigation allow-scripts allow-same-origin allow-downloads" src="https://erp.ins.ac.in/Signin/EnquiryForm_Custom?OrgGUID=C6B82810-B43D-41EB-90FA-0B9B966957BF&fhl=1"></iframe>
                            </div>



                            <h3 className="marginTop10px">Welcome to Indira National School</h3>
                            <p className="text-justify">Welcome to the Indira National School. We are a part of Shree Chanakya Education Society, which has a strong presence on the education map of Pune. The Trust has been associated with Management education since 1994. The school segment has been operational since 2004.</p>
                            <p className="text-justify">Today we are a full fledged CBSE affiliated school with student strength 3309 and a total staff of 226. We are committed to excellence in education from KG to PG.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={HomePageWelcomeImage} className='img_res img_round_corner_with_box_shadow' />
                    </div>

                    <div className="col-md-6">
                        <h3 className="marginTop10px">Welcome to Indira National School</h3>
                        <p className="text-justify">Welcome to the Indira National School. We are a part of Shree Chanakya Education Society, which has a strong presence on the education map of Pune. The Trust has been associated with Management education since 1994. The school segment has been operational since 2004.</p>
                        <p className="text-justify">Today we are a full fledged CBSE affiliated school with student strength 3309 and a total staff of 226. We are committed to excellence in education from KG to PG.</p>
                        <p className="text-justify"><b>School Timings:Afternoon Shift–12:00 noon to 5:10 pm</b></p>
                    </div>
                </div>
            </div>
            <div className="col backgroundColorLightGray">
                <div className="container custom_spacing">
                    <div className="row">
                        <h3 className="text-center padding_bottom_alignment_1">School Levels</h3>
                        <div className="col col-xs-6-custom">
                            <NavLink to="/pre-primary"><img src={PrePrimarySchoolImage} className='img_res' /></NavLink>
                            <NavLink to="/pre-primary"><div className="section_content_title color_one text-center">Pre Primary</div></NavLink>
                        </div>
                        <div className="col col-xs-6-custom">
                            <NavLink to="/primary"><img src={PrimarySchoolImage} className='img_res' /></NavLink>
                            <NavLink to="/primary"><div className="section_content_title color_two text-center">Primary School</div></NavLink>
                        </div>
                        <div className="col col-xs-6-custom">
                            <NavLink to="/middle-school"><img src={MiddleSchoolImage} className='img_res' /></NavLink>
                            <NavLink to="/middle-school"><div className="section_content_title color_three text-center">Middle School</div></NavLink>
                        </div>
                        <div className="col col-xs-6-custom">
                            <NavLink to="/secondary-school"><img src={SecondarySchoolImage} className='img_res' /></NavLink>
                            <NavLink to="/secondary-school"><div className="section_content_title color_four text-center">Secondary School</div></NavLink>
                        </div>
                        <div className="col col-xs-6 padding2px">
                            <NavLink to="/senior-secondary-school"><img src={HeigherSecondarySchoolImage} className='img_res' /></NavLink>
                            <NavLink to="/senior-secondary-school"><div className="section_content_title color_five text-center">Sr. Secondary School</div></NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col backgroundColorLightPink">
                <div className="container custom_spacing">
                    <div className="row">
                        <h3 className="text-center padding_bottom_alignment_1">Why Indira National School?</h3>
                        <div className="col col-xs-6-custom text-center">
                            <img src={Artboard8} className='img_res maxImgWidth' />
                            <div className="text-center titleItalicCustom">Strong Academic<br />System</div>
                        </div>
                        <div className="col col-xs-6-custom text-center">
                            <img src={Artboard9} className='img_res maxImgWidth' />
                            <div className="text-center titleItalicCustom">Empowering Student<br />Life</div>
                        </div>
                        <div className="col col-xs-6-custom text-center">
                            <img src={Artboard10} className='img_res maxImgWidth' />
                            <div className="text-center titleItalicCustom">Modern Teaching<br />Methods</div>
                        </div>
                        <div className="col col-xs-6-custom text-center">
                            <img src={Artboard11} className='img_res maxImgWidth' />
                            <div className="text-center titleItalicCustom">Wide Range of<br />Activities</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container custom_spacing">
                <div className="row">
                    <h3 className="text-center padding_bottom_alignment_1">Indira National School Highlights</h3>
                    <div className="col  col-xs-6-custom text-center marginZero">
                        <div className="circleHighlights">
                            <h1 className="highlightsHeading">
                                <CountUp end={3850} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                                +</h1>
                            <h4>Students</h4>
                        </div>
                    </div>
                    <div className="col  col-xs-6-custom text-center marginZero">
                        <div className="circleHighlights">
                            <h1 className="highlightsHeading">
                                <CountUp end={15} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                                +</h1>
                            <h4>Years of<br />Experience</h4>
                        </div>
                    </div>
                    <div className="col col-xs-6-custom text-center">
                        <div className="circleHighlights">
                            <h1 className="highlightsHeading">
                                <CountUp end={2300} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                                +</h1>
                            <h4>Alumni</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="clearfix"></div>
            <div className="col backgroundColorLightPink">
                <div className="container custom_spacing">
                    <h3 className="text-center padding_bottom_alignment_1">Notice Board</h3>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <div className="row">
                                <div className="col mobileHide">
                                    <div className="noticeboardBackground mnNoticeHeight1">
                                        <img src={PinImage} className="pinPoint" />
                                        <div className="col colpaddingnone">

                                            <div className="marquee">
                                                <div className="marquee--inner2">
                                                    <ul className="ulmargin">
                                                        {/* <a href={meritlistXI} target="_blank" rel="noopener noreferrer"><li>Grade XI Admission Merit list (2022-23) <img src={newIcon} className="newLable" /></li></a> */}
                                                        {/* <a href={Circular6} target="_blank" rel="noopener noreferrer"><li>Circular No.6 PTA Meeting-Grade I to XII<img src={newIcon} className="newLable" /></li></a> */}

                                                        <a href={gradeDateX} target="_blank" rel="noopener noreferrer"><li>Grade X Main Exam Date Sheet (2022-23)<img src={newIcon} className="newLable3" /></li></a>
                                                        <a href={gradeDateXII} target="_blank" rel="noopener noreferrer"><li>Grade XII Main Exam Date Sheet (2022-23)<img src={newIcon} className="newLable3" /></li></a>


                                                        <a href={Agmaugust2022} target="_blank" rel="noopener noreferrer"><li>Minutes of the AGM (2022-23).<img src={newIcon} className="newLable2" /></li></a>
                                                        <a href={minutesOfExecutive} target="_blank" rel="noopener noreferrer"><li>Minutes of the Executive Committee EPTA (2022-23)<img src={newIcon} className="newLable4" /></li></a>



                                                        {/* <a href={meritofScience} target="_blank" rel="noopener noreferrer"><li>Eligible canditates for A.Y. (2022-23)<img src={newIcon} className="newLable3" /></li></a> */}
                                                        {/* <a href={Agmaugust2022} target="_blank" rel="noopener noreferrer"><li>Minutes of the AGM 2022-23<img src={newIcon} className="newLable4" /></li></a> */}


                                                        {/* <a href={notic10} target="_blank" rel="noopener noreferrer"><li>Minutes of Executive Committee Meeting of PTA Held<br /> on 18th December,2021</li></a> */}
                                                        {/* <a href={notic11} target="_blank" rel="noopener noreferrer"><li>Minutes of Virtual Executive Committee Meeting of PTA<br /> Held on 25th September,2021</li></a> */}
                                                        {/* <a href={notic14} target="_blank" rel="noopener noreferrer"><li>Notice of the Virtual PTA meeting (2021-22)</li></a> */}
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col mobileHide">
                                    <div className="noticeboardBackground mnNoticeHeight1">
                                        <img src={PinImage} className="pinPoint" />
                                        <div className="col">

                                            <div className="marquee">
                                                <div className="marquee--inner">
                                                    <ul>
                                                        {/* <a href={notic12} target="_blank" rel="noopener noreferrer"><li >Minutes of Virtual Executive Committee Meeting of PTA Held<br /> on 24th July,2021</li></a> */}

                                                        {/* <a href={notic13} target="_blank" rel="noopener noreferrer"><li>Minutes of Annual General Meeting of PTA Held<br /> on 13th August,2021</li></a> */}
                                                        {/* <a href={notic15} target="_blank" rel="noopener noreferrer"><li>Grade X Orientation on New Assessment Scheme</li></a> */}

                                                        {/* <a href={notic16} target="_blank" rel="noopener noreferrer"><li>Grade XII Orientation on New Assessment Scheme</li></a> */}
                                                        {/* <a href={notic17} target="_blank" rel="noopener noreferrer"><li>Book List for Primary School (Std. I to IV)</li></a> */}
                                                        {/* <a href={notic18} target="_blank" rel="noopener noreferrer"><li>Book List for Middle School (Std. V to VIII)</li></a> */}
                                                        {/* <a href={notic19} target="_blank" rel="noopener noreferrer"><li>Book-List-Secondary-School-2021-22</li></a> */}

                                                        {/* <a href={notic21} target="_blank" rel="noopener noreferrer"><li>Back to School Post Covid</li></a> */}

                                                       {/*} <a href={notic25} target="_blank" rel="noopener noreferrer"><li>Book List Senior Secondary School (2022-23)</li></a>
                                                        <a href={notic5} target="_blank" rel="noopener noreferrer"><li>Orientation for Grade I Morning (2022-23)</li></a>

                                                        <a href={notic6} target="_blank" rel="noopener noreferrer"><li> Orientation for Grade II to V Morning (2022-23)</li></a>
                                                        <a href={notic7} target="_blank" rel="noopener noreferrer"><li>Orientation for Grade II to V Afternoon (2022-23)</li></a>*/}
                                                        <a href={booklistPrimary} target="_blank" rel="noopener noreferrer"><li>Book List for Primary School (2023-24)</li></a>
                                                        <a href={booklistMiddle} target="_blank" rel="noopener noreferrer"><li>Book List for Middle School (2023-24)</li></a>

                                                        <a href={booklistSecondary} target="_blank" rel="noopener noreferrer"><li>Book List for Secondary School (2023-24)</li></a>
                                                        <a href={booklistSeniorSec} target="_blank" rel="noopener noreferrer"><li>Book List for Senior Secondary School (2023-24)</li></a>
                                                        <a href={Grade_2_to_5_Ori} target="_blank" rel="noopener noreferrer"><li>Orientation for Grade II to V   (2023-24)</li></a>
                                                        <a href={Grade_1_Ori_Morning} target="_blank" rel="noopener noreferrer"><li>Orientation for Grade I Morning (2023-24)</li></a>
                                                        <a href={Grade_1_Ori_Afternoon} target="_blank" rel="noopener noreferrer"><li>Orientation for Grade I Afternoon (2023-24)</li></a>

                                                       {/*} <a href={notic8} target="_blank" rel="noopener noreferrer"><li>Orientation for Grade IX (2022-23)</li></a>
                                                        <a href={notic9} target="_blank" rel="noopener noreferrer"><li>Orientation for Grade II to V Afternoon (2022-23)</li></a>
                                                        <a href={notic1} target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}><li>Book List for Std I to IV (2022-23)</li></a>
                                                        <a href={notic2} target="_blank" rel="noopener noreferrer"><li>Book List for Std V to VIII (2022-23)</li></a>
                                                        <a href={notic3} target="_blank" rel="noopener noreferrer"><li>Book List for Std IX & X (2022-23)</li></a>
                                                        <a href={notic25} target="_blank" rel="noopener noreferrer"><li>Book List for Std XI & XII (2022-23)</li></a>
                                                        <a href={notic22} target="_blank" rel="noopener noreferrer"><li>Uniforms for Std.-I-to-IV</li></a>
                                                        <a href={notic23} target="_blank" rel="noopener noreferrer"><li>Uniforms for Std.-V-to-X</li></a>
                                                    <a href={notic24} target="_blank" rel="noopener noreferrer"><li>Uniforms for Std-XI-XII</li></a>*/}

                                                        
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*  notice for mobile*/}
                                <div className="col col-xs-6 desktopHide">
                                    <div className="noticeboardBackground mnNoticeHeight1">
                                        <img src={PinImage} className="pinPoint" />
                                        <div className="col">

                                            <div className="marquee marqueeMobHeight">
                                                <div className="marquee--inner">
                                                    <ul>
                                                        <a href={minutesOfExecutive} target="_blank" rel="noopener noreferrer"><li>Minutes of the Executive Committee EPTA (2022-23)</li></a>
                                                        <a href={gradeDateX} target="_blank" rel="noopener noreferrer"><li>Grade X Main Exam Date Sheet (2022-23)</li></a>
                                                        <a href={gradeDateXII} target="_blank" rel="noopener noreferrer"><li>Grade XII Main Exam Date Sheet (2022-23)</li></a>
                                                        <a href={minutesOfExecutive} target="_blank" rel="noopener noreferrer"><li>Minutes of the Executive Committee EPTA (2022-23)</li></a>
                                                        {/* <a href={meritlistXI} target="_blank" rel="noopener noreferrer"><li>Grade XI Admission Merit list (2022-23)</li></a> */}
                                                        {/* <a href={Circular6} target="_blank" rel="noopener noreferrer"><li>Circular No.6 PTA Meeting-Grade I to XII</li></a> */}
                                                        <a href={Agmaugust2022} target="_blank" rel="noopener noreferrer"><li>Minutes of the AGM (2022-23 ).</li></a>
                                                        {/* <a href={meritofScience} target="_blank" rel="noopener noreferrer"><li>Eligible canditates for science stream (2022-23)</li></a> */}


                                                        {/*<a href={notic5} target="_blank" rel="noopener noreferrer"><li>Orientation for Grade I Morning (2022-23)</li></a>
                                                        <a href={notic6} target="_blank" rel="noopener noreferrer"><li> Orientation for Grade II to V Morning (2022-23)</li></a>
                                                        <a href={notic7} target="_blank" rel="noopener noreferrer"><li>Orientation for Grade II to V Afternoon (2022-23)</li></a>
                                                        <a href={notic8} target="_blank" rel="noopener noreferrer"><li>Orientation for Grade IX (2022-23)</li></a>
                                                        <a href={notic9} target="_blank" rel="noopener noreferrer"><li>Orientation for Grade II to V Afternoon (2022-23)</li></a>
                                                        <a href={notic25} target="_blank" rel="noopener noreferrer"><li>Book List Senior Secondary School (2022-23)</li></a>
                                                        <a href={notic1} target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}><li>Book List for Std I to IV (2022-23)</li></a>
                                                        <a href={notic2} target="_blank" rel="noopener noreferrer"><li>Book List for Std V to VIII (2022-23)</li></a>
                                                        <a href={notic3} target="_blank" rel="noopener noreferrer"><li>Book List for Std IX & X (2022-23)</li></a>
                                                        <a href={notic25} target="_blank" rel="noopener noreferrer"><li>Book List for Std XI & XII (2022-23)</li></a>


                                                        <a href={notic22} target="_blank" rel="noopener noreferrer"><li>Uniforms for Std.-I-to-IV</li></a>
                                                        <a href={notic23} target="_blank" rel="noopener noreferrer"><li>Uniforms for Std.-V-to-X</li></a>
                                                        <a href={notic24} target="_blank" rel="noopener noreferrer"><li>Uniforms Std-XI-XII</li></a>*/}

                                                       <a href={booklistPrimary} target="_blank" rel="noopener noreferrer"><li>Book List for Primary School (2023-24)</li></a>
                                                        <a href={booklistMiddle} target="_blank" rel="noopener noreferrer"><li>Book List for Middle School (2023-24)</li></a>

                                                        <a href={booklistSecondary} target="_blank" rel="noopener noreferrer"><li>Book List for Secondary School (2023-24)</li></a>
                                                        <a href={booklistSeniorSec} target="_blank" rel="noopener noreferrer"><li>Book List for Senior Secondary School (2023-24)</li></a>
                                                        <a href={Grade_2_to_5_Ori} target="_blank" rel="noopener noreferrer"><li>Orientation for Grade II to V   (2023-24)</li></a>
                                                        <a href={Grade_1_Ori_Morning} target="_blank" rel="noopener noreferrer"><li>Orientation for Grade I Morning (2023-24)</li></a>
                                                        <a href={Grade_1_Ori_Afternoon} target="_blank" rel="noopener noreferrer"><li>Orientation for Grade I Afternoon (2023-24)</li></a>
                                             
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container custom_spacing">
                <div className="row">
                    <h3 className="text-center padding_bottom_alignment_1">Holistic Educational Approach</h3>
                    <div className="col-md-5 marginBottomZero">
                        <img src={DanceImage} className="img_res" />
                        <h3 className="text-center titleStyleMd">Dance</h3>
                    </div>
                    <div className="col-md-7">
                        <div className="row">
                            <div className="col col-xs-6 text-center">
                                <img src={MusicImage} className="img_res" />
                                <h3 className="text-center titleStyleMd">Music</h3>
                                <h4></h4>
                            </div>
                            <div className="col col-xs-6 text-center">
                                <img src={SportsImage} className="img_res" />
                                <h3 className="text-center titleStyleMd">Sports</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-xs-6 text-center">
                                <img src={SingingImage} className="img_res" />
                                <h3 className="text-center titleStyleMd">Clubs</h3>
                            </div>
                            <div className="col col-xs-6 text-center">
                                <img src={OthersImage} className="img_res" />
                                <h3 className="text-center titleStyleMd">Yoga</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="col backgroundColorDarkPink">
                <div className="container custom_spacing">
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <h3 className="subscribeTitle">Subscribe to our newsletter</h3>
                        </div>
                        <div className="col-md-6 text-center somiMobile">
                            <div className="subscribeInput">
                                <input type="text" placeholder="Enter your email" className="col-md-8 subscribeInputText" />
                                <button className="subscribeButton col-md-4 subscribeButton">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="col backgroundColorLightGray">
                <div className="container custom_spacing">
                    <div className="row parentsSay">
                        <h3 className="text-center padding_bottom_alignment_1">What Parents have to say about us</h3>
                        <Carousel interval={3000} class="mobileHide">
                            <Carousel.Item>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="ParentTestemonials">
                                            <p class="text-center"><b>Shrinivas Kulkarni</b></p>
                                            As proud Indira National School parents, we are really happy about endurance, quality care, enthusiasm, diligent efforts and passion you provide each and every day. My daughter feels very comfortable in the school. The way you groom your students and build culture by making them aware of burning issues like child abuse,
                                            girl safety is just outstanding
                                            <p class="text-center" onClick={showModal} style={{ cursor: 'pointer' }}><b>Read More</b></p>
                                        </div>
                                        <div className="ParentImgContainer">
                                            <img src={Testimonial1} className="img_res ParentImg" />
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="ParentTestemonials">
                                            <p class="text-center"><b>Smita Deshmukh</b></p>
                                            Indira National school is a wonderful school to send my child to. They have been amazing in everything I have needed assistance in.
                                            My daughter has excelled at this school.
                                            The teachers care about the children. The school community is rich with diversity and the school works hard for their students.
                                            Even in pandemic situation the teachers did their jobs with full efforts.



                                            <p class="text-center" onClick={showModal1} style={{ cursor: 'pointer' }}><b>Read More</b></p>
                                        </div>
                                        <div className="ParentImgContainer">
                                            <img src={Testimonial2} className="img_res ParentImg" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="ParentTestemonials">
                                            <p class="text-center"><b>Geetanali Saxena</b></p>
                                            I have been a part of INS family for more than twelve years now. My elder one completed his 12th grade last year and younger one is currently in the 10th grade. The school provides an encouraging environment for the overall growth of the students. The infrastructure is good but there is a need for improvement in the Sports facilities. I sincerely appreciate the efforts made
                                            <p class="text-center" onClick={showModal2} style={{ cursor: 'pointer' }}><b>Read More</b></p>
                                        </div>

                                        <div className="ParentImgContainer">
                                            <img src={Testimonial3} className="img_res ParentImg" />
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>

                            <Carousel.Item>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="ParentTestemonials">
                                            <p class="text-center"><b>Amit Saini</b></p>
                                            The school website is pretty good. It has all the information available required. The best part is it has the proper guidelines for the erp.the problem is with the erp which lags very much.</div>
                                        <div className="ParentImgContainer">
                                            <img src={Testimonial4} className="img_res ParentImg" />
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="ParentTestemonials">
                                            <p class="text-center"><b>Bhavana Tayde</b></p>
                                            I would like to thank INS for providing many different opportunities for my daughter to learn and grow at every step.
                                            <p class="text-center" onClick={showModal3} style={{ cursor: 'pointer' }}><b>Read More</b></p>
                                        </div>
                                        <div className="ParentImgContainer">
                                            <img src={Testimonial6} className="img_res ParentImg" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="ParentTestemonials">
                                            <p class="text-center"><b>Kumendra Raheja</b></p>
                                            We are glad to get admission in Indira School for science. All the teachers are taking care of studies of my ward personally. Continuous follow up of studies and project work are the key highlights of the school.</div>
                                        <div className="ParentImgContainer">
                                            <img src={Testimonial7} className="img_res ParentImg" />
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>

                            <Carousel.Item>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="ParentTestemonials">
                                            <p class="text-center"><b>Uma Senthilkumar</b></p>
                                            Indira has been an inseparable and a substantial part of ward's growing up journey. With Indira I have seen her develop

                                            <p class="text-center" onClick={showModal4} style={{ cursor: 'pointer' }}><b>Read More</b></p>

                                        </div>
                                        <div className="ParentImgContainer">
                                            <img src={Testimonial8} className="img_res ParentImg" />
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="ParentTestemonials">
                                            <p class="text-center"><b>Swati Bavaskar</b></p>
                                            We feel so fortunate to have our son's teachers as his mentors. He loves them and talks about them often. He is learning so much and great full beyond words.<p></p></div>
                                        <div className="ParentImgContainer">
                                            <img src={Testimonial9} className="img_res ParentImg" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="ParentTestemonials">
                                            <p class="text-center"><b>Bhavana Tayde</b></p>
                                            I would like to thank INS for providing many different opportunities for my daughter to learn and grow at every step.
                                            <p class="text-center" onClick={showModal3} style={{ cursor: 'pointer' }}><b>Read More</b></p>
                                        </div>
                                        <div className="ParentImgContainer">
                                            <img src={Testimonial6} className="img_res ParentImg" />
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel>


                        {/* <Carousel interval={3000} className="desktopHide">
                            <Carousel.Item>
                                <div className="ParentTestemonials">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                                <div className="ParentImgContainer">
                                    <img src={Parent1} className="img_res ParentImg" />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="ParentTestemonials">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                                <div className="ParentImgContainer">
                                    <img src={Parent2} className="img_res ParentImg" />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="ParentTestemonials">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                                <div className="ParentImgContainer">
                                    <img src={Parent3} className="img_res ParentImg" />
                                </div>
                            </Carousel.Item>
        </Carousel> */}
                    </div>
                </div>
            </div>

            <div className="container custom_spacing">
                <div className="row studentsLife">
                    <h3 className="text-center padding_bottom_alignment_1">Students Life</h3>
                    <div className="col mobileHide">
                        <img src={CuricularImage} className="img_res" />
                        <h4 className="text-center titleStyleMd">Parents Engagement</h4>
                    </div>
                    <div className="col mobileHide">
                        <img src={ExCuricularImage} className="img_res" />
                        <h4 className="text-center titleStyleMd">Leadership Series</h4>
                    </div>
                    <div className="col mobileHide">
                        <img src={ParentsEngagementImage} className="img_res" />
                        <h4 className="text-center titleStyleMd">Student Achievement</h4>
                    </div>
                    <Carousel interval={3000} className="desktopHide">
                        <Carousel.Item>
                            <img src={CuricularImage} className="img_res" />
                            <h4 className="text-center titleStyleMd">Parents Engagement</h4>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={ExCuricularImage} className="img_res" />
                            <h4 className="text-center titleStyleMd">Leadership Series</h4>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={ParentsEngagementImage} className="img_res" />
                            <h4 className="text-center titleStyleMd">Student Achievement</h4>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>


        </Fragment >
    )
}
export default Home;