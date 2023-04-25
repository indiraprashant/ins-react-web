import React from "react"
import { Fragment } from "react"

import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

import BannerImage from '../../assets/images/about_banner_2.png'
import Teacher1Image from '../../assets/images/teachers-1.png'
import Teacher2Image from '../../assets/images/teachers-2.png'
import Teacher3Image from '../../assets/images/teachers-3.png'

const PrincipalsMessage = () => {
    const [isOpen,setIsOpen] = React.useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };
    const [isOpen1,setIsOpen1] = React.useState(false);
    const showModal1 = () => {
        setIsOpen1(true);
    };

    const hideModal1 = () => {
        setIsOpen1(false);
    };

    const [isOpen2,setIsOpen2] = React.useState(false);
    const showModal2 = () => {
        setIsOpen2(true);
    };

    const hideModal2 = () => {
        setIsOpen2(false);
    };

    
    return (
        <Fragment>
            
           
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Body>
                    <div className="row">
                    <div className="col-md-4">
                    <button className="closeButton desktopHide" onClick={hideModal}>X</button>
                        <img src={Teacher1Image} className='img_res' />
                        <div className="teacherText">
                            <h4>Mrs. Vijaya Joshi</h4>
                            <p>Executive Principal,<br/>Indira National School</p>
                        </div>
                    </div>

                    <div className="col-md-8">
                        <button className="closeButton mobileHide" onClick={hideModal}>X</button>
                       <div className="reduceLineHeight">
                         {/*<p><b>Designation</b></p>
                        <p><b>Qualiﬁcation</b></p>
                        <p><b>Areas of Interest</b></p>
                        <p><b>Research Papers</b></p>
                        <p><b>Books Written</b></p>
                        <p><b>Awards</b></p>*/}
                        </div>
                        
                        <p>“Without involvement you can't succeed. With your involvement you can't fail.” School can become a temple of learning only when the student, the guardian, endeavor to make it a place of pursuit for education, a sadhana, where the spring of punctuality, sanctity and thirst for knowledge flows. Parents and teachers have to work as partners in the process of learning. We promise you a safe, supportive and enriching experience at Indira National School.</p>
                    </div>
                    </div>


                    
                </Modal.Body>
            </Modal>

            <Modal show={isOpen1} onHide={hideModal1}>
                <Modal.Body>
                    <div className="row">
                    <div className="col-md-4">
                    <button className="closeButton desktopHide" onClick={hideModal1}>X</button>
                        <img src={Teacher2Image} className='img_res' />
                        <div className="teacherText">
                            <h4>Mrs. Kamaljit Kaur Sidhu</h4>
                            <p>Principal, Indira National School,<br />
                                (Pre-Primary), Tathwade</p>
                        </div>
                    </div>

                    <div className="col-md-8">
                        <button className="closeButton mobileHide" onClick={hideModal1}>X</button>
                        <p><b>“It takes a big heart to shape little minds.”</b></p>
                        
                        <p>At Indira National School (Pre-Primary) Tathwade, the focus is on providing an all-round development of the child. Every child is given a platform that fosters academic, social, emotional and co-curricular learning</p>
                       <p>For a parent, the start of his child’s pre-school is a milestone that is often anticipated with great excitement and joy. The selection of a good pre-school is important to smoothen out the transition from a home environment to a new environment.</p>
                       <p>The staff here are committed to create a loving and caring atmosphere for the kids, away from home.</p>
                    </div>
                    </div>


                    
                </Modal.Body>
            </Modal>

            <Modal show={isOpen2} onHide={hideModal2}>
                <Modal.Body>
                    <div className="row">
                    <div className="col-md-4">
                    <button className="closeButton desktopHide" onClick={hideModal2}>X</button>
                        <img src={Teacher3Image} className='img_res' />
                        <div className="teacherText">
                            <h4>Ms. Chaitali Kapale</h4>
                            <p>Principal, Indira National School (Pre-Primary) , Baner.</p>
                        </div>
                    </div>

                    <div className="col-md-8">
                        <button className="closeButton mobileHide" onClick={hideModal2}>X</button>
                        
                        <p><b>“EDUCATION, LIKE WATER PURIFIES LIFE”</b></p>
                        <p>There is a great resemblance between water and education. Water is precious so is education. Life is purified through true education. Education fulfils this objective by washing away the ignorance of mind. The school undertakes the responsibility of enlightening the minds.</p>
                        <p>Indira National School Pre Primary aims to infuse strong cultural fundamentals of Indian society with advanced learning tools acquired from the world all over, giving education is exciting, enjoyable and enhancing experience and leading to dynamic directions. Old embraces new technology. Hence progressive.</p>
                        <p>Preschool plays an important role in building child’s success in their first years of school. Teachers use a variety of methods to help children grow cognitively, as well as conceptually. One of the most important duties of a preschool teacher is to plan and prepare an environment for learning. Since most of the children learn through play, it is essential to implement activities that are fun and yet teach the basic skills needed for development.</p>
                        <p>We at Indira National School Pre Primary care deeply about the academic growth of each student, but we also care about their all-round development as well. Our school is a vision driven school committed to meet the educational needs of all students.</p>
                        <p>Every child deserves the best start in life and support that enables them to fulfill their potentials. We inculcate in them never die attitude at the grass root level.</p>
                        <p>Indira National School`s Pre Primary curriculum is designed to uphold the values of joy of childhood for children, their parents and of course their teachers. It is planned to develop every child unique potential to become capable, confident and caring citizens of the world. Academic excellence along with co-curricular and extra co-curricular activities completes the process of education.</p>
                    </div>
                    </div>


                    
                </Modal.Body>
            </Modal>

            <div className="col position_relative somi">
                <img src={BannerImage} className='img_res' />
            </div>
            <div className="container custom_spacing">
                <h3 className="text-center subheadingM">Principals Message</h3>
                <div className="row">
                    <div className="col-md-4 text-center cursorPointer" onClick={showModal}>
                        <img src={Teacher1Image} className='img_res' />
                        <div className="teacherText">
                            <h4>Mrs. Vijaya Joshi</h4>
                            <p>Executive Principal,<br />
                                Indira National School</p>
                        </div>
                    </div>
                    <div className="col-md-4 text-center cursorPointer" onClick={showModal1}>
                        <img src={Teacher2Image} className='img_res' />
                        <div className="teacherText">
                            <h4>Mrs. Kamaljit Kaur Sidhu</h4>
                            <p>Principal, Indira National School,<br />
                                (Pre-Primary), Tathwade</p>
                        </div>
                    </div>
                    <div className="col-md-4 text-center cursorPointer" onClick={showModal2}>
                        <img src={Teacher3Image} className='img_res' />
                        <div className="teacherText">
                            <h4>Ms. Chaitali Kapale</h4>
                            <p>Principal, Indira National,<br />
                                School (Pre-Primary) , Baner.</p>
                        </div>
                    </div>
                   {/* <div className="col-md-4"></div>
                    <div className="col-md-4 text-center">
                        <img src={Teacher3Image} className='img_res' />
                        <div className="teacherText">
                            <h4>Ms. Chaitali Kapale</h4>
                            <p>Principal, Indira National,<br />
                                School (Pre-Primary) , Baner.</p>
                        </div>
                    </div>*/}
                </div>
            </div>
        </Fragment>
    )
}
export default PrincipalsMessage;