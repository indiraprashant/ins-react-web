import React, { Fragment } from "react";
import BannerImage from '../../assets/images/middle-school.jpg'
import { NavLink } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import { useEffect } from "react";
const MiddleSchool = () => {
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
                            <li className="activeM"><NavLink to="/middle-school">Middle School</NavLink></li>
                            <li><NavLink to="/secondary-school">Secondary School</NavLink></li>
                            <li><NavLink to="/senior-secondary-school">Sr. Secondary School</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-md-9">
                        <h3 className="text-center subheadingM">Middle School</h3>
                        <p><b>Grade VI-VIII</b></p>
                        <p className="text-justify">Middle School is an educational state which exists  to provide education between Primary level and Secondary level. The academic year commences from April and ends in March.  It consists of a curriculum  of Scholastic and Co-Scholastic Activities. Keeping in mind that the students need to grow more independent during this period, we make a conscious effort to expose students to a plethora of activities.</p>
                    </div>
                </div>
            </div>
            <div className="col somi lightGrayBackground">
                <div className="container custom_spacing">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="text-center academicsSubheading">Grade VI-VIII</h4>
                          
                            <h4 className="text-center academicsSubheading">Scholastics</h4>
                            <div className="row">
                                <div className="col-md-6">
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>English</Accordion.Header>
                                            <Accordion.Body>
                                            Communicate with Cambridge is a comprehensive course for the teaching and 
                                            learning of English for Grades VI - VIII. The course aims to develop communication 
                                            skills in students by integrating the essential language skills of listening,
                                             speaking, reading and writing.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>Hindi</Accordion.Header>
                                            <Accordion.Body>
                                            Vasant course books are an excellent source to develop comprehension and reading skills in Hindi language.
                                            The workbook is a follow-up of the book to reinforce the learning of the students.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>Third Language</Accordion.Header>
                                            <Accordion.Body>
                                            In addition to English and Hindi ,Grade VI students are introduced to a  third language.  Students are given a choice to select any one language from French, Sanskrit and Marathi. 
                                            The students who choose French or Sanskrit have Marathi as the fourth language.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>Fourth Language</Accordion.Header>
                                            <Accordion.Body>
                                            Marathi is a mandatory subject in all schools of Maharashtra,
                                            as per the Maharashtra State Government directive. The students who have chosen Sanskrit or French as a third language 
                                            ,will have Marathi as a fourth language.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                                <div className="col-md-6">
                                    <Accordion defaultActiveKey="">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Mathematics</Accordion.Header>
                                            <Accordion.Body>
                                            Mathematics education in Grades VI - VIII is an endeavor to develop the child’s clarity of thought and pursuing assumptions to logical conclusions. There are many ways of thinking and the kind of thinking one learns in Mathematics is an ability to handle abstractions and an approach to problem-solving. 
                                            This is achieved through the textbook and workbook
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>Science</Accordion.Header>
                                            <Accordion.Body>
                                            The Science textbooks of  Grades VI -VIII encourage active investigation of phenomena through questioning, models, data collection and analysis.The textbook and workbook is a package of teaching learning material that is
                                              used to engage the child in active learning.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>Social Science</Accordion.Header>
                                            <Accordion.Body>
                                            The Social Sciences in Grade VI-VIII attempts to advance an on-going process of assisting 
                                            children and young people to understand that a healthy engagement with the world must come 
                                            as much from the way society takes shape and functions. 

                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>Computer</Accordion.Header>
                                            <Accordion.Body>
                                            Computer Science for Grade VI -VIII students develop habits of creative and collaborative problem-solving. They are introduced to Computer Science as a way of thinking, 
                                            relevant and applicable to a wide range of context through theory and practical. 
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container custom_spacing">
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="text-center academicsSubheading">Co-Scholastics</h4>
                        <div className="row">
                            <div className="col-md-6 colorAccordion">
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Skill Courses</Accordion.Header>
                                        <Accordion.Body>
                                        Grade VII and VIII students are introduced to Skill Courses , through which they will get an insight to decide if they would like to pursue that subject in future. Students can select any one skill 
                                        from Artificial Intelligence/ Information Technology/ Financial Literacy/ Handicrafts.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>CCA</Accordion.Header>
                                        <Accordion.Body>
                                        Co-curricular activities (CCAs) are the components of the non-academic curriculum that helps to develop various facets of the personality development of the students.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Club Activities</Accordion.Header>
                                        <Accordion.Body>
                                        The Middle School students have Club Activities twice a month on second and fourth Saturdays where they choose one activity each from Academic and Non- Academic groups. The Academic Clubs include-Math Pirates, Science Musketeers, Globe Gazers, Wise words, Quizzards of Oz while the Non-Academic Clubs include- The Creative Hive, 
                                        Fabulous Foodies, The Malgudi Times, The Rhythmic Lounge, The Motion Makers.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Portfolio</Accordion.Header>
                                        <Accordion.Body>
                                        Portfolio is the authentic showcase of the learners' learning. Student's portfolio is one of the best tools to ensure quality learning and the student's growth over a period of time. It is a mandatory assessment which is carried forward from Grade VI onwards and is continued till Grade X. The teacher as well as the parent evaluates the student’s  
                                        qualitative learning growth with the help of the student's portfolio.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>Competitive Exam</Accordion.Header>
                                        <Accordion.Body>
                                        External Competitive Exams are held throughout the year.  Our students participate in exams like- Homi Bhabha BalVaidnyanik Exam, 
                                        Olympiads and Inter School competitions and bring laurels to the school.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header>Evaluation</Accordion.Header>
                                        <Accordion.Body>
                                        For Middle School the academic year is divided into two terms. Students are evaluated through Periodic Assessments, Half Yearly  Exam and Annual Exam. This includes written tests, multiple assessments, portfolio, notebooks and Subject Enrichment Activities.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                            <div className="col-md-6 colorAccordion">
                                <Accordion defaultActiveKey="">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Art</Accordion.Header>
                                        <Accordion.Body>
                                        Art has a wide range of uses and influences on its students. It improves motor skills, simple things like mastering a paint brush or using crayons and pencils help develop fine motor skills, especially in students. 
                                        Studying art also helps improve the concentration of the students.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Work Education</Accordion.Header>
                                        <Accordion.Body>
                                        Work Education is viewed as purposeful and meaningful manual work through the medium of cooking and such other activities, organized as an integral part of the learning process to equip the students to be 
                                        self-reliant as well as understand and respect all professions.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Games</Accordion.Header>
                                        <Accordion.Body>
                                        Games in teaching can help increase student participation, foster social and emotional learning, and motivate students to take risks. Physical fitness programs and various sports activities are conducted to improve the  students' 
                                        attitudes toward learning and it also boosts their academic scores.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Yoga</Accordion.Header>
                                        <Accordion.Body>
                                        Yoga education helps in self discipline and self-control, leading to  an immense amount of awareness, concentration and higher level of consciousness.Our aim and objective of Yoga education are- 1) To enable the students to have good health. 
                                        2) To practice mental hygiene. 3) To possess emotional stability.
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    

                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>Annual Concert/Sports Day</Accordion.Header>
                                        <Accordion.Body>
                                        The Annual Concert held at the end of the academic year is one of the vital instruments of experiential learning, which empowers students and enables them to develop self-confidence,
                                      a creative imagination, empathy and maturity in interpersonal skills.
                                      The students perform skits and dances on inspirational and powerful themes which encourage self-reflection and stimulate their thought processes.
                                      Annual Sports Day is an important and memorable day in the life of every school as it instills sportsmanship, excitement , competitive spirit , fellowship and physical performance.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header>Closing Paragraph</Accordion.Header>
                                        <Accordion.Body>
                                           The highly qualified and trained staff at Indira National School ensure through their dynamic teaching and learning environment that the students bridge the academic growth from the Primary level to the Secondary level.
                                          The role of the school and teachers has always been vital in the all round personality development of the students. Our teachers are  a role model influencing every facet of the student’s growth and developing their innate potentials, in addition to being a motivator, guide and friend.

                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </Fragment>
    )
}
export default MiddleSchool