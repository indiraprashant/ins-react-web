import React, { Fragment } from "react";
import BannerImage from '../../assets/images/senior.jpg'
import { NavLink } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import { Tabs, Tab } from "react-bootstrap";
import { useEffect } from "react";
const SeniorSecondarySchool = () => {
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
                            <li><NavLink to="/secondary-school">Secondary School</NavLink></li>
                            <li className="activeM"><NavLink to="/senior-secondary-school">Sr. Secondary School</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-md-9">
                        <h3 className="text-center subheadingM">Sr. Secondary School</h3>
                        <p className="text-justify">Senior Secondary Education is the higher level of Secondary Education. Kids in Senior Secondary are about 15 to 18 years of age and are in the phase of being young adults. The senior secondary years of a student involves the 11th & 12th grade of a student.
                         In the Senior Secondary years, the respective fields of study get divided into various streams like Science, Commerce and Humanities.</p>
                        <p className="text-justify">Indira National School is a proud institution that offers all the three streams. 
                            We aim at creating an intermittent bridge so powerful that the students get eligible to face and conquer the challenges of this contemporary world swiftly. We assure a headlong transition from Senior Secondary to Degree College. We try to upskill our children in an elite and most desirable manner with certain trainings and workshops every month.
                            </p>
                            <p className="text-justify">An outstanding infrastructure where the classrooms are spacious, adequately ventilated and completely equipped with smart boards is all a student would require while remaining engrossed in learning the course. We also nurture the enlightened cultural values that will keep our future global citizens grounded while developing the cosmopolitan attitude. We thrive on the ideology of holistic education so that our students should remain stress free, in a supportive and safe environment. 
                                We assure the safety of students as our campus is under CCTV surveillance.</p>
                    </div>
                </div>
            </div>
            <div className="col somi lightGrayBackground">
                <div className="container custom_spacing">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="text-center academicsSubheading">Streams</h4>
                            <Tabs defaultActiveKey="Science" id="uncontrolled-tab-example" className="tabCustom">
                                <Tab eventKey="Science" title="Science">
                                    <p><b>Compulsory subjects</b></p>
                                    <p><b>Subject 1:</b> English | <b>Subject 2:</b> Physics | <b>Subject 3:</b> Chemistry</p>
                                    <hr />
                                    <p><b>Subject 4 + 5:</b> Combinations</p>
                                    <p><b>Combination 1:</b> Math + Biology / Informatics practices / Physical Education / Hindustani Vocal Music</p>
                                    <p><b>Combination 2:</b> Biology + Applied Math / Physical Education / Hindustani Vocal Music</p>
                                    <hr />
                                    <p><b>Subject 6:</b> Skill subject [Artificial Intelligence / Information Technology / Business Administration / Yoga</p>
                                    <br />
                                    <div className="colorTabs">
                                        <Tabs defaultActiveKey="Physics" id="uncontrolled-tab-example" className="tabCustom reverseColor">
                                            <Tab eventKey="Physics" title="Physics">
                                                <p>In INS, we teach children “how to learn Physics”</p>
                                                <p>As a student of INS children become more confident and versatile problem solvers who use physical intuition together with analytic and quantitative skills to study, model and understand the world around us. They develop laboratory skills throughout our curriculum via hands-on experiences with diverse experimental techniques and tools. </p>
                                            </Tab>
                                            <Tab eventKey="Chemistry" title="Chemistry">
                                                <p>Chemistry is often referred to as the central science because it joins together physics and mathematics, biology and medicine, the earth, and the environmental sciences. Knowledge of the nature of chemicals and chemical processes therefore provides insights into a variety of physical and biological phenomena. For better or for worse, everything is chemical!</p>
                                                <p>At Indira we make learning chemistry fun by exploring the colorful world in our laboratories</p>
                                            </Tab>
                                            <Tab eventKey="Biology" title="Biology">
                                                <p>Studying biology promises students an exciting and rich study career with a wide array of opportunities to study what you love. Biology is a visual subject and many of the concepts are best explained as a picture. We, at Indira, aim to inculcate these scientific values and understanding in our students by giving them all the exposure and hand on experience. We offer brainstorming sessions not only for academics but also discuss information about all the new advancements taking place in the field of Biology.</p>
                                            </Tab>
                                        </Tabs>
                                    </div>
                                </Tab>
                                <Tab eventKey="Commerce" title="Commerce">
                                    <p>Compulsory subjects</p>
                                    <p><b>Subject 1:</b> English | <b>Subject 2:</b> Accountancy | <b>Subject 3:</b> Economics | <b>Subject 4:</b> Business Studies</p>
                                    <hr />
                                    <p><b>Subject 5:</b> Math / Applied Math / Informatics Practices / Physical Education / Hindustani Vocal Music</p>
                                    <p><b>Subject 6:</b> Skill subject [Artificial Intelligence / Information Technology / Business Administration / Yoga</p>
                                    <br />
                                    <div className="colorTabs">
                                    <Tabs defaultActiveKey="Business" id="uncontrolled-tab-example" className="tabCustom reverseColor">
                                        <Tab eventKey="Business" title="Business Studies">
                                            <p>Business Studies is a subject that deals with the operation and organization of modern business enterprises. The subject covers each feature of a business firm, such as how a firm will be affected in different business situations. It also influences creation of employment, incomes, opportunities for personal enterprise, and standards of living of all individuals. At Indira National School, we try to achieve the above objectives by giving ample opportunities for the students to explore their entrepreneurial side through subject projects and student-centered activities, field trips, tete-a tete with a resource person, discussions, quiz etc.</p>
                                        </Tab>
                                        <Tab eventKey="Accountancy" title="Accountancy">
                                            <p>Accounting provides you with skills and knowledge that can be applied to several industries. Students learn to deal with reality Even if you did want to branch out into finance and economics; a background in accountancy lays the valuable groundwork for developing broader monetary theories. Accountants can hone their craft through the application of known methodologies. We believe that a strong theory-based knowledge is important to before using any accounting applications like Sole proprietorship Concerns, Not for Profit Organizations, Partnership firms, Company accounts etc.</p>
                                        </Tab>
                                        <Tab eventKey="Economics" title="Economics">
                                            <p>Studying economics enables us to understand past, future and current models.  A social science concerned with the production, distribution, and consumption of goods and services, economics studies how individuals, businesses, governments, and nations make choices about allocation of resources. Economics is the study of how humans make decisions in the face of scarcity. At Indira we try to equip the students with analytical and problem-solving skills, which will allow them to succeed in a wide variety of careers</p>
                                        </Tab>
                                    </Tabs>
                                    </div>
                                </Tab>
                                <Tab eventKey="Humanities" title="Humanities">
                                    <p>Compulsory subjects</p>
                                    <p><b>Subject 1:</b> English | <b>Subject 2:</b> Political Science | <b>Subject 3:</b> Sociology</p>
                                    <hr />
                                    <p><b>Subject 4:</b> Psychology / Economics</p>
                                    <p><b>Subject 5:</b> Mathematics / Applied Math / Informatics Practices / Physical Education / Hindustani Vocal Music</p>
                                    <p><b>Subject 6:</b> Skill subject [Artificial Intelligence / Information Technology / Business Administration / Yoga</p>
                                    <br />
                                    <div className="colorTabs">
                                    <Tabs defaultActiveKey="Psychology" id="uncontrolled-tab-example" className="tabCustom reverseColor">
                                        <Tab eventKey="Psychology" title="Psychology">
                                            <p>Psychology is introduced as an elective subject at the higher secondary stage of school education. As a discipline, psychology specializes in the study of experiences, behaviorsand mental processes of human beings within a socio-cultural historical context.</p>
                                            <p>This course purports to introduce the learners to the basic ideas, principles, and methods in Psychology. The emphasis is to create interest and exposure needed by learners to develop their own knowledge base and understanding.</p>
                                        </Tab>
                                        <Tab eventKey="Sociology" title="Sociology">
                                            <p>Objectives of Sociology as a subject, is to enable learners to:  probe deeper into personal enquiry, initiate action and reflect on knowledge and skills, views etc. acquired during the course of class XI-XII. Analyzing and evaluating real world scenarios using theoretical constructs and arguments.  Demonstrate the application of critical and creative thinking skills and abilities to produce an independent and extended piece of work follow up aspects in which learners have interest in developing the communication skills to argue logically.</p>
                                        </Tab>
                                        <Tab eventKey="Political" title="Political Science">
                                            <p>Political science is the study of politics, government, and public policy. Aristotle, the father of political science, called it “master science” because it influences all aspects of human life: what we can do, what we can say, where we can live, even what we can eat. There is no escaping politics, but we can discover more effective ways to use it by studying Political Science.</p>
                                            <p>In Indira, we try to inculcate these leadership qualities in the students from an early age. It helps them to build self-confidence and guides them to live their lives with dignity and self-respect.</p>
                                        </Tab>
                                    </Tabs>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container custom_spacing">
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="text-center academicsSubheading">Subjects common to all the streams</h4>
                        <div className="row">
                            <div className="col-md-6 colorAccordion">
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>English</Accordion.Header>
                                        <Accordion.Body>
                                            <p>English language plays an essential role in our lives as it helps in communication. It is the main language for studying any subject all over the world. English is important for students as it broadens their minds, develops emotional skills, and improves the quality of life by providing job opportunities. The use of English as an International language is growing with time because it is the only medium for communication in many countries. English is also used widely in the literature and media section to publish books, most of the writers write in the English language due to the vast majority of readers know only the English language and they can describe their ideas best in the English language. </p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Mathematics / Applied Mathematics</Accordion.Header>
                                        <Accordion.Body>
                                            <p>The Syllabus in the subject of Mathematics has undergone changes from time to time in accordance with growth of the subject and emerging needs of the society. </p>
                                            <p>The broad objective of teaching Mathematics at senior school stage intend to help the students acquire knowledge of basic concepts, terms, principles, symbols and mastery of underlying mathematical processes and skills. It helps develop a positive attitude to critically think, analyze and articulate logically.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                            <div className="col-md-6 colorAccordion">
                                <Accordion defaultActiveKey="">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Informatics Practices</Accordion.Header>
                                        <Accordion.Body>
                                            <p>We are living in the age of the computer and surrounded by the computer technology, everyone who is working in any industry is connected directly or indirectly with computer as a user, performer, and programmer.</p>
                                            <p>Programming is important for learning to innovate and create eco-friendly solutions to global problems. Informatics Practices is a course to get acquainted with computer terminologies, Python programming, Relational Database Management Systems, Emerging trends in the fields of Information Technology, Python library Pandas, and much more.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Physical Education</Accordion.Header>
                                        <Accordion.Body>
                                            <p>Physical Education has become a compulsory subject across numerous schools across the country and even globally. This is a very important subject for all living things. It includes topics like Biomechanics, Physiology, psychology, Nutrition, and many more </p>
                                            <p>Physical Education is important for the growth of the student’s confidence level, along with capability and competence to participate in several physical activities. P.E tends to become a crucial part of the student’s entire life. A good quality curriculum of P.E ensures that the students can perform many types of physical activities smoothly while enjoying at the same time.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Hindustani Vocal Music</Accordion.Header>
                                        <Accordion.Body>
                                            <p>Music makes us relax. Music gives a soothing effect. If just listening to music has such a deep impact, just imagine how much impact would playing a musical instrument or singing have?  </p>
                                            <p>There are several schools in Pune where music is offered at primary and secondary level. But we at Indira are proud to say that we are the only school in Pune who has offered Hindustani Vocal Music subject at the Senior Secondary level! </p>
                                            <p>Anybody can sing! No previous knowledge of music is required for this subject.
                                                Opting for this stress relieving subject with less theory and more practical, students can concentrate more on their other core subjects. This might be the reason that every year we have minimum 5 students scoring 100/100 in Hindustani Vocal Music!</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col somi lightGrayBackground">
                <div className="container custom_spacing">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="text-center academicsSubheading">Skill Education</h4>
                            <div className="row">
                                <div className="col-md-6">
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Business Administration</Accordion.Header>
                                            <Accordion.Body>
                                                <p>Business administration is the supervising and overseeing of business operations. A career in this field is likely to involve working in many different aspects of a company, from business research to economics and finance. Students carry out a range of tasks such as managing finances, analyzing data and market trends, and developing policies to increase business operations’ efficiency.  A qualification in this field can open up many opportunities within the business arena. </p>
                                                <p>As a business administrator, they can get a job as a marketing executive, human resources, finance, manager, and so on. They would be able to develop their management skills: studying business administration will help them to sharpen and develop their management skills which are required by business employers.</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>Artificial Intelligence</Accordion.Header>
                                            <Accordion.Body>
                                                <p>Artificial intelligence and Machine Learning, Neural Networks are big buzzwords of the decade. These fields are expanding pretty quickly and are used to solve a vast amount of problems.</p>
                                                <p>We are living in this primitive age of machines, while the future of machine is enormous and is beyond our scope of imagination. We are witnesses of the new golden period of these technologies.</p>
                                                <p>Artificial Intelligence is a discipline in computer science that focuses on developing intelligent machines, machines that can learn and then teach themselves.</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                                <div className="col-md-6">
                                    <Accordion defaultActiveKey="">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Information Technology</Accordion.Header>
                                            <Accordion.Body>
                                                <p>In today’s world we can see that almost all our work is being done with the help of computers. Applications of computers can be seen in every electrical device that we use.</p>
                                                <p>With the advancement in use and technology, use of electronic devices has increased manifold. Computers are now affecting the energy sphere of human activity. It is instrumental in bringing revolutionary changes in industry, scientific research and education. This is not only the demand of time but also the demand of almost each and every subject to have an associated computer learning to equip a student with start-of-art technology to prove himself/herself a better candidate than those without computer knowledge. </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>Yoga</Accordion.Header>
                                            <Accordion.Body>
                                                <p>Physical Education has become a compulsory subject across numerous schools across the country and even globally. This is a very important subject for all living things. It includes topics like Biomechanics, Physiology, psychology, Nutrition, and many more </p>
                                                <p>Physical Education is important for the growth of the student’s confidence level, along with capability and competence to participate in several physical activities. P.E tends to become a crucial part of the student’s entire life. A good quality curriculum of P.E ensures that the students can perform many types of physical activities smoothly while enjoying at the same time.</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>Hindustani Vocal Music</Accordion.Header>
                                            <Accordion.Body>
                                                <p>Yoga is gaining immense popularity, day by day. Yoga has become a new topic for the international community. Recently, even WHO has emphasized on the role of yoga in prevention therapy. For this reason, yoga has very good opportunities internationally</p>
                                                <p>In addition to benefits like good mental and physical health, Yoga also provides good job opportunities world-wide.</p>
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
                        <h4 className="text-center academicsSubheading">Co-Scholastic</h4>
                        <div className="row">
                            <div className="col-md-12 colorTabs">
                                <Tabs defaultActiveKey="Clubs" id="uncontrolled-tab-example" className="tabCustom reverseColor">
                                    <Tab eventKey="Clubs" title="Clubs">
                                        <p>The world has changed so fundamentally in the last few decades that the roles of learning and education in day-to-day living have also changed forever.</p>
                                        <p>Indira National School strives to enhance the sensibilities of students by awakening curiosity and creativity in them which help them in becoming proactive members of the society. We believe that there is a leader in every individual. The club activities conducted at Indira National School help students to develop problem-solving, reasoning, critical thinking, creative thinking, communication, and collaborative abilities. Most importantly, the students learn to work in groups and learn to become a leader!</p>
                                        <p>The different club activities that are undertaken along with academic studies are as follows - Cooking, Art, Expressions, Drama, Dance, Gaming, Symphony, Photography and Sports.</p>
                                        <p>These activities supplement the academic curriculum and help in learning by doing.  Participation of students in these activities helps them in emotional development, social skill development, and overall personality development. The core aim of education and learning should be to foster holistic development. Holistic development essentially means intellectual, physical, emotional, and social development which can be achieved only through the students’ participation in a variety of activities.</p>
                                    </Tab>
                                    <Tab eventKey="General" title="General Studies">
                                        <p>General studies help students develop stronger communication skills, increase literacy and maths skills, bolster critical thinking and gain a broader base of knowledge in a number of interesting subjects, some examples include biology cultural studies, philosophy, social science public speaking and general studies curriculum provide a common educational experience for students as well. Students who study general studies have numerous career options. Common areas include - Non-profit and human services, Management, Media, Marketing, Sports/ recreation and many more.</p>
                                    </Tab>
                                    <Tab eventKey="Work" title="Work Education">
                                        <p>Work education results in services valuable to the community, besides the gratification of self-fulfilment. It focuses on building manual characters. The main objective of work education is to ensure a greater sense of worldly knowledge and develop respect for workers among the studentsWE in schools can bring students nearer to society and make them honest citizens. It also provides an equivalent meaning to community services which create social awareness.</p>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default SeniorSecondarySchool