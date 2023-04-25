import React, { Fragment } from "react";
import BannerImage from '../../assets/images/primary.jpg'
import { Tabs, Tab } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
const Primary = () => {
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
                            <li ><NavLink to="/pre-primary">Pre Primary</NavLink></li>
                            <li className="activeM"><NavLink to="/primary">Primary School</NavLink></li>
                            <li><NavLink to="/middle-school">Middle School</NavLink></li>
                            <li><NavLink to="/secondary-school">Secondary School</NavLink></li>
                            <li><NavLink to="/senior-secondary-school">Sr. Secondary School</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-md-9">
                        <h3 className="text-center subheadingM">Primary School</h3>
                        <p>Indira National School is not just a school, but a plethora of education. We have classes right from Grade I to Grade V</p>
                        <h4 className="text-center academicsSubheading">Curriculum</h4>
                        <p className="text-justify">A well designeturriculum is our strength which allows us to challenge students individually, while providing opportunity to apply their learning in their daily life. This is paired with an accelerated pace and a well aligned curriculum, which ensures students are working above their grade level in preparation for the following year.</p>
                        <p className="text-justify">The curriculum is aligned with the National Education Policy 2020 which is supported by technology and infused with inquiry-based experiential instructions which in turn embraces enrichment programs that reinforce and support core subject areas. Life skills activities are planned to help kids deal positively with any condition Worksheets are designed in order to integrate scholastic and coscholastic subjects</p>
                    </div>
                </div>
            </div>
            <div className="col somi lightGrayBackground">
                <div className="container custom_spacing">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="text-center academicsSubheading">Scholastic Subjects</h4>
                            <p className="text-justify">The scholastic subjects include Languages-English, Hindi and Marathi, Math, Environmental Science, Computer and General Knowledge. The students are given opportunities to have hands on experience while learning the concepts. Projects and class tasks are assigned keeping the learning goals in mind. </p>
                            <Tabs defaultActiveKey="Languages" id="uncontrolled-tab-example" className="tabCustom">
                                <Tab eventKey="Languages" title="Languages">
                                    Language enhancement sessions for extempore, conversation, listening skills etc. are a regular part of curriculum for students where the grammar rules and vocabulary related to a particular topic is introduced.
                                </Tab>
                                <Tab eventKey="EVS" title="EVS">
                                    Knowledge or skill that someone acquires through experiential learning rather than just reading or observing will create a lasting impact, so the lessons are planned with a lot of activities and projects.
                                </Tab>
                                <Tab eventKey="Math" title="Math">
                                    Project based learning and math fun activities are incorporated in order to develop problem solving skills, understand abstract concepts, apply knowledge in their day to day activities.
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container custom_spacing">
                <div className="row">
                    <div className="col-md-12 colorTabs">
                        <h4 className="text-center academicsSubheading">Coscholastic Subjects</h4>
                        <p className="text-justify">Co scholastic subjects like- Music, Value Education, Dance, Taekwondo, Games Yoga etc. are included to have all round development of the students through various activities conducted throughout the academic year. For Grade IV and V we have club activities where students choose one activity out of Tabla/ Music/ Skating/Dance/Taekwondo which is conducted every week.</p>
                        <Tabs defaultActiveKey="Assembly" id="uncontrolled-tab-example" className="tabCustom reverseColor">
                            <Tab eventKey="Assembly" title="Assembly">
                                We have designed our school assembly in a manner where students are given exposure to the ethics and values required to be responsible citizens of our country. Teachers share motivational stories, videos and information based on life skills. Teachers role model the values of sensitivity towards mother earth by encouraging the sense of responsibility to celebrate eco-friendly festivals.
                            </Tab>
                            <Tab eventKey="competitiveExams" title="Competitive Exams">
                                Students are also exposed to various competitive exams like- MaRRs, Spell Bee, SOF Olympiad, Green Olympiad, Hindi Olympiad etc. Apart from these exams students also participate in inter school competitions and bring laurels to our school.
                            </Tab>
                            <Tab eventKey="Parent" title="Parent Partnership Programme">
                                We at INS encourage parent engagement in the best possible way. Involvement of the parents in the child’s learning process contributes positively to the socioemotional and cognitive development. It also enhances the bond between the parents and the teachers.
                                <br />
                                We aspire to create a rich community of lifelong learners armed with the tools and experience required for our students to meet their personal goals while positively contributing to society.
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Primary