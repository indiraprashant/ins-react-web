import React, { Fragment } from "react";
import BannerImage from '../../assets/images/about_banner_2.png'

const AcademicPrograms = () => {
    return (
        <Fragment>
            <div className="">
                <div className="col position_relative somi">
                    <img src={BannerImage} className='img_res' />
                </div>
                <div className="container custom_spacing">
                    <h3 className="text-center subheadingM textPinkColor">Academic programs</h3>

                    <div className="row">
                        <div className="col-md-12">
                            <h6 className="mb-4">Being affiliated to CBSE, we follow the NCERT curriculum but go way beyond it, in terms of methods and inputs.
                            </h6>
                            <strong>
                                <p className="text-underline">Following are scholastic and co-scholastic subjects.</p>
                            </strong>

                            <h3 className="textPinkColor text-font">Primary School – (Grades I to IV)</h3>
                            <h3 className="textPinkColor text-font">Scholastic Subjects –</h3>

                            <ul className="sub-list">
                                <li>English</li>
                                <li>Hindi</li>
                                <li>Mathematics</li>
                                <li>Envirnmental Science (EVS)</li>
                            </ul>
                            <h3 className="textPinkColor text-font">Co-scholastic subjects-</h3>

                            <ul className="sub-list">
                                <li>Computer</li>
                                <li>General Knowledge (GK)</li>
                                <li>Art</li>
                                <li>Co- Curricular Activities ( CCA) – Various activities and Inter class competitions are conducted for students to showcase their skills in various forms like drawing, craft, elocution, poetry recitation, Quiz and many more.</li>
                                <li>Value Education – Value based stories are taught and students solve some questions and activities related to the moral of the story in the prescribed book.</li>
                                <li>Library – To inculcate the habit of reading we have library period once a week for all the grades. For Grade 1 we follow class library where the teacher helps or reads out the story for the class. For Grade II to IV, a book is issued to students to carry home which they can keep for a week to improve their reading skills.</li>
                                <li>Games – Activities such as various types of races, passing the ball with variations; age appropriate group games etc. are conducted.</li>
                                <li>Yoga – Different asanas and shlokas are introduced to cater to the students’ physical as well as mental health in their growing age.</li>
                                <li>Taekwondo – Different types of punches, kicks and blocks are introduced as basic self defense techniques.</li>
                                <li>Graded Examination For Spoken English – GESE particularly takes care of the spoken English. We follow the curriculum prescribed by Trinity College of London. The classes are conducted once a week for all the students. There will be an examination conducted at the end of the year, which is optional. Students can opt for either the Indian exam or Foreign exam with a separate examination fee for it.</li>
                                <li>Marathi – Being the regional language of the state, only oral introduction is emphasized for better communication in day to day life. No assessments are conducted for the same.</li>
                                <li>Western Music – Vocal music. Age appropriate songs are been taught for understanding of rhythm and language.</li>
                                <li>Dance – Different dance styles and various forms of dance are introduced according to the age.</li>
                                <li>Activity (Grade IV only) – Apart from the common co-scholastic subjects mentioned above, Grade 4 students need to select any one activity from the below options.  The Activity period is conducted once a week.</li>
                                <li>Western music</li>
                                <li>Dance</li>
                                <li>Tabla</li>
                                <li>Skating</li>
                                <li>Band (Recorder or Drums)</li>
                            </ul>
                            <p className="text-underline"><b>Subject wise detailed curriculum is shared on the website under “Year Plans”.</b></p>

                            <h3 className="textPinkColor text-font">Middle School - (Grades V to VIII)</h3>
                            <p><strong>Subjects:- </strong>Maths, Science  &  SST</p>
                            <p><strong>Languages:- </strong>English, Hindi ,Marathi/ Sanskrit / French</p>

                            <h3 className="textPinkColor text-font">Secondary School - (Grades IX, X) </h3>
                            <p><strong>Subjects:- </strong>Maths, Science  &  SST</p>
                            <p><strong>2nd Language: -</strong> English, Hindi / Marathi/ Sanskrit / French</p>

                            <h3 className="textPinkColor text-font">High School - (Grades  XI & XII  - Science)</h3>
                            <p><strong>Subjects:- </strong> Compulsory ; English, Physics , Chemistry  - Optional :  Biology  with Mathematics , Biology with Economics , Mathematics with Economics.</p>


                            <h3 className="textPinkColor text-font">High School - (Grades  XI & XII - Commerce)</h3>
                            <p><strong>Subjects:-</strong>English , Accounts, Business Studies , Economics , Information  Practices / Mathematics</p>

                            <div className="row mandatorybg">
                                <h3 className="">MANDATORY GUIDELINES FOR ALL CAMPUS VISITORS</h3>
                                <p>Owing to the COVID19 pandemic situation and contagious nature of the disease, Indira Group of Institute (IGI), Pune has made it mandatory for everyone to wear face masks and face shields while entering any of the Indira campuses. <span> Face shields are made available for Rs. 30/- at all security cabins.</span></p>
                                <p>  Anyone with symptoms like fever, cold cough, etc. are requested to avoid visiting Indira campuses. They can opt for online services provided by us. IGI takes all safety measures to curb the spread of disease and appreciate your cooperation by abiding by the norms.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default AcademicPrograms;