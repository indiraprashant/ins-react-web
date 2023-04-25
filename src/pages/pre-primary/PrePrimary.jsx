import React, { Fragment } from "react";
import BannerImage from '../../assets/images/primary.jpg'
import { NavLink } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";
import { useEffect } from "react";
const PrePrimary = () => {
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
                            <li className="activeM"><NavLink to="/pre-primary">Pre Primary</NavLink></li>
                            <li><NavLink to="/primary">Primary School</NavLink></li>
                            <li><NavLink to="/middle-school">Middle School</NavLink></li>
                            <li><NavLink to="/secondary-school">Secondary School</NavLink></li>
                            <li><NavLink to="/senior-secondary-school">Sr. Secondary School</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-md-9">
                        <h3 className="text-center subheadingM">Pre Primary</h3>
                        <p>Early childhood and preschool education is a phase of introducing children to fundamental learning through the use of a medium
                            that is engaging , less straining and more recreational in nature. We at Indira National School Pre Primary recognize this need and
                            realize that the child`s time spent with us is important to initiate his holistic growth.</p>
                        <p>The Pre Primary Curriculum is designed for three years of preschool, Nursery, Jr.KG and Sr.KG</p>
                        <h3 className="text-center subheadingM">Curriculum</h3>
                        <p>In the light of emerging needs and new development in preschool education, the INS PP curriculum is holistic, developmentally
                            appropriate, indigenous and most important play and activity based. The following are the subjects taught</p>
                    </div>
                </div>
            </div>
            <div className="col somi lightGrayBackground">
                <div className="container custom_spacing">
                    <div className="row">
                        <div className="col-md-12">
                            <Tabs defaultActiveKey="ENGLISH" id="uncontrolled-tab-example" className="tabCustom">
                                <Tab eventKey="ENGLISH" title="ENGLISH ( Language Skills)">
                                    Alphabets (Aa-Zz) are introduced for recognition of letters and their correct pronunciation -Phonetically.
                                    <br />
                                    In class KG, the children are introduced to patterns, writing letters , two and three letter words , paragraphs and written representation.
                                </Tab>
                                <Tab eventKey="MATH" title="MATH (Number Skills)">
                                    Develop a child`s ability to recognize basic numbers from 0-10 and various mathematical concepts. In KG numbers are added (1-100) the concepts of big/small, tall/short etc. With a clear perceptive of shapes is taken up. Additional comparative concepts are taken up on higher level.
                                </Tab>
                                <Tab eventKey="PROJECTS" title="PROJECTS & ACTIVITY BASED LEARNING (G.K.)">
                                    Awareness about environmental and child`s perspective towards Self, School, Family, Air, Water, Manners, Birds, Animals, Nature and Surroundings, People Around Us, Seasons, Transport etc.
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container custom_spacing">
                <div className="row">
                    <div className="col-md-12 colorTabs ">
                    <Tabs defaultActiveKey="HINDI" id="uncontrolled-tab-example" className="tabCustom reverseColor">
                                <Tab eventKey="HINDI" title="HINDI">
                                In Sr.KG Hindi language is introduced with the help picture recognition Swar and Vyanjans. 
                                </Tab>
                                <Tab eventKey="ART" title="ART & CAFT ">
                                Covers a creative and wonderful world of colours.
                                </Tab>
                                <Tab eventKey="NURSERY" title="NURSERY SUBJECTS">
                                *English *Math *GK *Art & Craft *Music and Dance
                                </Tab>
                            </Tabs>
                    </div>
                </div>
            </div>
            <div className="col somi lightGrayBackground">
                <div className="container custom_spacing">
                    <div className="row">
                        <div className="col-md-12">
                            <Tabs defaultActiveKey="SUBJECTS" id="uncontrolled-tab-example" className="tabCustom">
                                <Tab eventKey="SUBJECTS" title="Jr.KG SUBJECTS">
                                *English * Math *GK * Art & Craft * Music & Dance *Library *Computer  * Physical Exercises & Yoga
                                </Tab>
                                <Tab eventKey="sr" title="Sr.KG SUBJECTS">
                                *English * Math *Hindi *GK * Art & Craft * Music & Dance *Library *Computer * Physical Exercises & Yoga
                                </Tab>
                                <Tab eventKey="PROJECTS" title="TEACHING & LEARNING STRATERGIES">
                                Activities and Project Based Learning - Child friendly activities
                                <br/>
                                Creative Art & Craft Activities 
                                <br/>
                                Puppets- Use of puppets to conduct classes.
                                <br/>
Songs and Rhymes
                                <br/>
                                Excursions
                                <br/>
                                Outdoor Activities- Sand play, ball pool, slides, games, dolls house etc.
                                <br/>
                                Structured and Unstructured Free Play
                                <br/>
                                Stage Activities- Dancing, poem recitation, role play, enacting, skits etc.
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container custom_spacing">
                <div className="row">
                    <div className="col-md-12 colorTabs ">
                    <Tabs defaultActiveKey="SKILLS" id="uncontrolled-tab-example" className="tabCustom reverseColor">
                                <Tab eventKey="SKILLS" title="SKILLS">
                                We equip students with the following skills and design our activities to promote them.<br/>
                                *Classification Skills
*Conversational Skills
*Drawing conclusion
*Experimenting
*Identifying Patterns
*Motor Skills
*Social Skills
*Observation and Recognition Skills
*Ordering and Sequencing skills
*Sorting and Classification 
*Thinking Skills
*Cognitive Development
*Kinesthetic Skills

                                </Tab>
                                <Tab eventKey="VALUE" title="VALUE BASED EDUCATION ">
                                The focus on value education remains strong at INSPP. The students imbibe the essential qualities of honesty, fair play, empathy, courage, integrity, compassion, loyalty and courtesy through morning assemblies, celebrating festivals and day to day interaction with teachers. The effort is to guide the students towards appropriate behavior and the development of the strong character. 
                                </Tab>
                                <Tab eventKey="OBSERVATION" title="OBSERVATION AND EVALUATION">
                                Observations are carried on the basis of individual growth and development of the child
                                <br/>
                                Child`s work is appreciated and motivated with positive remarks
                                <br/>
                                This covers the psychological, physical, emotional and social growth and development of each child at Indira National School Pre Primary.  
                                </Tab>
                            </Tabs>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default PrePrimary