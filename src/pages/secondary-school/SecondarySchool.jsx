import React, { Fragment } from "react";
import BannerImage from '../../assets/images/secondary.jpg'
import { NavLink } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";
import { useEffect } from "react";
const SecondarySchool = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <Fragment>
            <div className="col position_relative somi">
                <img src={BannerImage} className='img_res' alt="Indira National School" />
            </div>
            <div className="container custom_spacing">
                <div className="row">
                    <div className="col-md-3">
                        <ul className="leftMnu">
                            <li><NavLink to="/pre-primary">Pre Primary</NavLink></li>
                            <li><NavLink to="/primary">Primary School</NavLink></li>
                            <li><NavLink to="/middle-school">Middle School</NavLink></li>
                            <li className="activeM"><NavLink to="/secondary-school">Secondary School</NavLink></li>
                            <li><NavLink to="/senior-secondary-school">Sr. Secondary School</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-md-9">
                        <h3 className="text-center subheadingM">Secondary School</h3>
                        <p className="text-justify">Secondary School is where kids get educated after their primary education is completed. Secondary Education acts as a link between Primary and Higher Education. The primary education is meant to educate the kids with the basics of education. Secondary Education takes place when young kids are in their adolescence therefore it is responsible for the growth and development of young children. The age of 14 to 18 years is the time when the emotional, physical and mental developments of children are at a good pace. This phase of their life is very crucial for their development. </p>
                        <p className="text-justify">Keeping this in mind, we at Indira National School empower all our students to become responsible, vigilant and conscientious global citizens who as innovators and inventors. Our aim is to promote a cosmopolitan atmosphere, by providing them a liberal education, founding its edifice on Indian culture. We provide holistic education in a stress free, supportive and safe environment.</p>
                        <p className="text-justify">INS has an excellent infrastructure with the school spread over six acres. The classrooms are huge, well ventilated and equipped with smart boards. INS has been provided with tight CCTV surveillance that cover corridors and meeting points at every floor.</p>
                     </div>
                </div>
            </div>
            <div className="col somi lightGrayBackground">
                <div className="container custom_spacing">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="text-center academicsSubheading">Pursuit For Excellence - </h4>
                            <ul>
                                <li className="text-justify">We are a Co-ed school affiliated to CBSE striving for excellence in field of education as well as sports. We focus on holistic development of the students’ personality. Academics is undoubtedly, taken care by the dedicated staff. We believe that ‘Practice makes a man perfect.’ Hence, every week worksheets of all subjects are posted.  Activities related to the topics are also conducted in the class to reinforce the concepts taught. </li>
                                <li className="text-justify">We provide education that is learner centered, based on Indian value systems incorporating the best of modern knowledge systems.</li>
                                <li className="text-justify">Teaching and learning process is not just restricted to verbal knowledge taught by the teachers. Interactive sessions are encouraged where learning by the students takes place without fear beyond academics. </li>
                                <li className="text-justify">Different active learning strategies like Case Based Study, Group Discussions, Research, Peer teaching, learning by doing etc. </li>
                                <li className="text-justify">We ensure that the students are benefitted by the technology. The smart boards help the students to visualize the concepts taught by the teachers.  We believe in experiential learning – ‘Learn through fun’, which makes the atmosphere conducive for learning.  </li>
                                <li className="text-justify">Listening, Speaking, Reading, and Writing – the 4 important language skills are integrated with all the subjects.</li>
                                <li className="text-justify">Project based learning is encouraged.  Subject Enrichment activities not only provide the students an opportunity to explore into the sea of knowledge but also give them a platform to showcase their individual talents and interests.</li>
                                <li className="text-justify">Art and Work education are integrated are integrated into the main stream curriculum to offer different dimensions to the curriculum</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container custom_spacing">
                <div className="row">
                    <div className="col-md-12 colorTabs">
                        <h4 className="text-center academicsSubheading">Introduction of Skill Subjects</h4>
                        <Tabs defaultActiveKey="Information" id="uncontrolled-tab-example" className="tabCustom reverseColor">
                            <Tab eventKey="Information" title="Information Technology">
                                <ul>
                                    <li className="text-justify">India is churning out thousands of graduates every year but there is a staggering skill gap with around 93% of engineers and MBAs not employable. The right skill development from school can help students get jobs when they are graduate college.</li>
                                    <li className="text-justify">Technology enables students with new techniques and help students to be updated with latest technologies such as use of tablets, mobile phones, computers, etc. Information technology not only helps students to learn new things but also helps students of college dropouts.</li>
                                </ul>
                            </Tab>
                            <Tab eventKey="Artificial" title="Artificial Intelligence">
                                <ul>
                                    <li className="text-justify">With the use of AI, students now have a personalized approach to learning programs based on their own unique experiences and preferences. AI can adapt to each student's level of knowledge, speed of learning and desired goals so they're getting the most out of their education.</li>
                                    <li className="text-justify">With artificial intelligence rapidly developing, students can receive more reliable feedback directly related to their own performance. The system won't move on until students demonstrate mastery of the concept, and it allows them to work through the material at their own pace if necessary.</li>
                                </ul>
                            </Tab>
                            <Tab eventKey="Parent" title="Parent Partnership Programme">
                               <p className="text-justify">At INS, we have always believed that sports play a vital role in a students’ life. Along with academics, sports activities such as Skating, Basketball, Cricket, Football, Badminton, athletes, Table tennis etc. are therefore encouraged.Our school has won many medals at the zone as well as at National level.</p>
                               <p className="text-justify">We are proud to announce that INS has produced National, International players from Badminton, Hockey, Chess, Skating, Cycling ,  Swimming,  etc. Our students participate in various Inter School Competitions.</p>
                               <p className="text-justify">For preparing the students in the art of living & working together, co –curricular activities are given supreme importance by the school. We emphasize on the overall development of physical, emotional, soft skills, morals & ethics.</p>
                               <p className="text-justify">There are various Co – curricular activities such Inter House competitions , Field trips, Special Assembly  organized within the school to give students an opportunity to show case their potentials . Annual Concert, Sports day , Farewell Function not only provide the students  an opportunity to nurture their talents but also bring out their communication skills, linguistic skills, leadership skills , artistic skills and creative skills etc. </p>
                               </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default SecondarySchool