import React from "react"
import { Fragment } from "react";
import BannerImage from '../../assets/images/about_banner_3.png'
import ChairpersonImage from '../../assets/images/chairperson.png'
import CareClubImage from '../../assets/images/care-club.png'
import CareClub1Image from '../../assets/images/care-club-1.png'
import CareClub2Image from '../../assets/images/care-club-2.png'
import CareClub3Image from '../../assets/images/care-club-3.png'
import CareClub4Image from '../../assets/images/care-club-4.png'
import CareClub5Image from '../../assets/images/care-club-5.png'
import CareClub6Image from '../../assets/images/care-club-6.png'
import AwardImage from '../../assets/images/award.jpg'
import { Tabs } from 'react-bootstrap'
import { Tab } from 'react-bootstrap'
import { useState } from "react";

const ChairpersonMessage = () => {
    const [enquiry2, setEnquiry2] = useState('-110%');
    const toggleEnquiry2 = () => {
        setEnquiry2('0')
    }
    const handleSubmit2 = (e) => {
        e.preventDefault();
    }
    return (
        <Fragment>
            <div className="col position_relative somi">
                <img src={BannerImage} className='img_res' />
            </div>
            <div className="container custom_spacing" style={{ paddingBottom: "1em" }}>
                <div className="row">
                    <div className="col-md-3">
                        <img src={ChairpersonImage} className='img_res' />
                    </div>
                    <div className="col-md-9">
                        <h3 className="cpheadings marginTop10px">Chairperson's Message</h3>
                        <h4 className="fontchairperson">Dr. Tarita Shankar</h4>
                        <h4 className="fontchairpersonintro">Founder Secretary  & Chief Managing Trustee
                            Shree Chankya Education Society</h4>
                        <h4 className="fontchairpersonintro"> Chairperson, Indira Group of Institutes, Pune</h4>
                        <br />
                        {/* <p>Email: taritashankar@indiraedu.com</p> */}
                        {/* <p><b>Our Passion - To Unleash the Potential In Your Child…</b></p>
                        <p>The object of education is to prepare the young to educate themselves throughout their lives.</p>
                        <p className="text-justify">Many a time we are beset by the question: How much of learning is education, and how much is information? There have been many opinions on the best way to educate children, and to sift information from education, but none conclusive enough to enable educationists to implement tools to really home in on what constitutes education; and provide it in ample measures to the insatiable curiosity of children. But at Indira, we have reasons to believe that irrespective of what makes for education, the prime aim of the teacher is to keep the child interested, with plenty of knowledge and lots of information, if it will help keep the flame of curiosity burning. And that is exactly what our teachers do, with modules designed to make the child think and question the whys, the wheres and the hows of everything they learn.</p> */}
                        <p className="text-justify">The Indira Group of Institutes (IGI) since its inception in the year 1994 has been earning
                            considerable appreciation for imparting value-based education in response to demands of
                            the corporate world and imbibing ideals of academic excellence among both, faculty and
                            students alike.</p>
                    </div>
                    <div className="col-md-12">
                        {/* <p className="text-justify">This makes for a wonderfully interactive time in the classroom; and the wonder keeps growing in off-classroom sessions as we take the child through the school of life into a fun filled, meaningful world that keeps them glued to the subject being taught. This is what makes Indira different, since teaching and learning by rote is not our cup of tea. Believing that schools have a more comprehensive role to play than mere “educating” children, by making them aware of the beauty of the world around them, and sensitising them to the environment – social and otherwise, helping them make responsible choices in life . Enabling children to see, feel, sense and touch life as it is, Indira builds the base of a future India right from the first step the child takes to school and carries on till he passes out of its corridors as a knowing, caring, responsible and extremely conscientious citizen of India.</p>
                        <p>Welcome to Indira National School.</p>
                        <p className="text-justify">The Indira Group Of Institutes (IGI) celebrates its Silver Jubilee Year in the year 2018-19. IGI, since its inception in 1994 has been earning considerable appreciation for imparting value based education in response to  demands of the corporate world and imbibing ideals of academic excellence among both, faculty and students alike.</p> */}
                        <h1 className="cpheadings">A VISIONARY EDUCATIONIST AND LEADER PAR EXCELLENCE</h1>
                        <p><i>“A leader is the one who knows the way, goes the way and shows the way”</i></p>
                        {/* <p className="text-justify">The name Indira Group Of Institutes (IGI) is synonymous with its driving force- Chairperson, Dr Tarita Shankar, the dynamic, passionate and caring leader who has shaped IGI from scratch. Dr.Tarita Shankar holds a Degree in Arts and Law and is an alumni of the prestigious Harvard Business School, USA having recently completed the 'Owner/President Management' program (OPM).</p>
                        <p className="text-justify">Realizing during the early 1990's that Liberalization and Privatization of the Indian economy and consequently the education sector would open the door to innumerable opportunities, inspired by the wisdom of Chanakya, the legendary statesman, our iron willed Prime Minister, late Mrs Indira Gandhi and backed by the encouragement and blessings of her parents and well wishers, Dr Tarita Shankar sowed the seeds of the parent trust, Shree Chanakya Education Society, Pune.  </p>
                        <p className="text-justify">Unwavering vision, meticulous planning, over two decades of countless hours at work, unflinching support from her younger brother and Group Director IGI, Prof. Chetan Wakalkar and a well groomed management team of seasoned academicians has seen the IGI group blossom to 12 Institutions delivering cutting edge learning, to over 12000 students from KG to PG level.</p> */}
                        <p className="text-justify">The name Indira Group of Institutes (IGI) is synonymous with its driving force- Chairperson,
                            Dr Tarita Shankar, the dynamic, passionate and caring leader who has shaped IGI from
                            scratch. Dr.Tarita Shankar holds a Degree in Arts and Law and is an alumnus of the
                            prestigious Harvard Business School, USA having completed the ‘Owner/President
                            Management’ program (OPM) in the year 2018.</p>

                        <p className="text-justify">Realizing during the early 1990’s that Liberalization and Privatization of the Indian economy
                            and consequently the education sector would open the door to innumerable opportunities,
                            inspired by the wisdom of Chanakya, the legendary statesman, our iron-willed Prime
                            Minister, late Mrs Indira Gandhi and backed by the encouragement and blessings of her
                            parents and well wishers, Dr Tarita Shankar sowed the seeds of the parent trust, Shree
                            Chanakya Education Society, Pune.</p>

                        <p className="text-justify">Unwavering vision, meticulous planning, over two decades of countless hours at work,
                            unflinching support from her younger brother and Group Director IGI, Prof. Chetan
                            Wakalkar and a well-groomed management team of seasoned academicians has seen the
                            IGI group blossom to 12 Institutions delivering cutting edge learning, to over 12000 students
                            from KG to PG level.</p>


                    </div>
                </div>
            </div>
            <div className="col somi lightGrayBackground">
                <div className="container custom_spacing">
                    <div className="row">
                        <div className="col">
                            <Tabs
                                defaultActiveKey="awards"
                                transition={false}
                                id="noanim-tab-example"
                                className="tabCustom"
                            >
                                <Tab eventKey="awards" title="Awards & Accolades">
                                    <p>Dr Tarita Shankar has always believed that her work speaks for itself. She has been a recipient of numerous awards and citations over the last two decades on the national and international level. A few prestigious ones being:</p>
                                    <div className="row">
                                        <div className="col-md-4 text-center">
                                            <img src={AwardImage} className='img_res maxWidthAwardImage' />
                                            {/* <p><b>Women Super Achiever Award at the World HRD Congress 2018.</b></p> */}
                                            <p><b>Education Leadership Award at the Business Leader Of The Year Awards-2023 on 17th February 2023.
                                            </b></p>

                                        </div>

                                        <div className="col-md-4 text-center">
                                            <img src={AwardImage} className='img_res maxWidthAwardImage' />
                                            {/* <p><b>Women Super Achiever Award at the World HRD Congress 2018.</b></p> */}
                                            <p><b>Women Leader of the Year, at the Business Leaders of the World Awards-20th Global Edition & 5th India Edition-21st March, 2022.
                                            </b></p>

                                        </div>
                                        <div className="col-md-4 text-center">
                                            <img src={AwardImage} className='img_res maxWidthAwardImage' />
                                            {/* <p><b>Amongst Top 50 women in Education, Social Education and Entrepreneur Award at the World Education Congress 2017.</b></p> */}
                                            <p><b>Featured amongst 'Inspirational Women Leaders in India' by Business Today, Dec 2021 edition entitled 'Pune's Optimus Prime of Education'.
                                            </b></p>
                                        </div>
                                        <div className="col-md-4 text-center">
                                            <img src={AwardImage} className='img_res maxWidthAwardImage' />
                                            {/* <p><b>Education Entrepreneurship Award at the World Leadership Congress 2017</b></p> */}
                                            <p><b>National Award for Outstanding Leadership at World Education Congress & Global Awards in August 2021.
                                            </b></p>
                                        </div>
                                        <div className="col-md-4 text-center">
                                            <img src={AwardImage} className='img_res maxWidthAwardImage' />
                                            {/* <p><b>Change Leader & Innovator Award by ET-Now.</b></p> */}
                                            <p><b>Entrepreneur with A Heart- Business Leader Of The Year Award at the World Leadership Awards in February 2021.
                                            </b></p>
                                        </div>
                                        <div className="col-md-4 text-center">
                                            <img src={AwardImage} className='img_res maxWidthAwardImage' />
                                            {/* <p><b>Achievers & Leaders Award (Academics)” in year 2012 at the India Leadership Summit.</b></p> */}
                                            <p><b>Education Leadership Award, Women in Education Leadership Award (Excellence in Education) by ET Now Stars of The Industry in December 2018
                                            </b></p>
                                        </div>
                                        <div className="col-md-4 text-center">
                                            <img src={AwardImage} className='img_res maxWidthAwardImage' />
                                            {/* <p><b>Thought Leaders Award (Education)-World HRD Congress 2012</b></p> */}
                                            <p><b>Women Super Achiever Award at the World HRD Congress 2018.
                                            </b></p>
                                        </div>
                                        <div className="col-md-4 text-center">
                                            <img src={AwardImage} className='img_res maxWidthAwardImage' />
                                            <p><b>Education Entrepreneurship Award at the World Leadership Congress 2017.
                                            </b></p>
                                        </div>

                                        <div className="col-md-4 text-center">
                                            <img src={AwardImage} className='img_res maxWidthAwardImage' />
                                            <p><b>Amongst Top 50 women in Education, Social Education and Entrepreneur Award at the World Education Congress 2017.
                                            </b></p>
                                        </div>
                                        <div className="col-md-4 text-center">
                                            <img src={AwardImage} className='img_res maxWidthAwardImage' />
                                            <p><b>Change Leader & Innovator Award by ET-Now.
                                            </b></p>
                                        </div>

                                        <div className="col-md-4 text-center">
                                            <img src={AwardImage} className='img_res maxWidthAwardImage' />
                                            <p><b>Thought Leaders Award (Education)-World HRD Congress 2012.
                                            </b></p>
                                        </div>
                                        <div className="col-md-4 text-center">
                                            <img src={AwardImage} className='img_res maxWidthAwardImage' />
                                            <p><b>Honorary Doctorate Degree in Management conferred by the Chitkara University, Chandigarh in the year 2011 and many more.......
                                            </b></p>
                                        </div>
                                    </div>
                                    <br />
                                    {/* <p>Honorary Doctorate Degree in Management conferred by the Chitkara University, Chandigarh in the year 2011 and many more…….</p> */}
                                    <p>As Dr Tarita Shankar says “Awards are a recognition of your achievements, however what matters more is your lasting, positive impact on the thoughts of the people that you work with, a sense of fulfilment that your work is improving the quality of others lives.</p>
                                </Tab>
                                <Tab eventKey="careClub" title="Indira Care Club">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <img src={CareClubImage} className='img_res' />
                                        </div>
                                        <div className="col-md-9">
                                            <p><b>“Compassion is an expression of strength…You are so confident that
                                                you can allow the sorrows of other people to touch you”</b></p>
                                            {/*<p className="text-justify">CARE-Counsel, Advise, Rise and Evolve, an initiative by Tarita
                                                Maam, whereby students staff in all Indira Institutes and also alumni
                                                seek her guidance on professional and personal issues and in return
                                                benefit from her rich experience in work and life. As Dr. Shankar puts
                                                it “My dream of starting this initiative was through daily interactions
                                                that I used to have with the students, staff at our campuses and our
                                                large alumni community that’s connected with me on my social media
                                                24 by 7. I counsel students at least 10 students weekly on a one to one

                                                basis….helping them to transform into better and caring human
                                                beings and spreading happiness in society.</p>*/}

                                    <p>
                                                CARE-Counsel, Advise, Rise and Evolve, an initiative by Tarita Maam, whereby students’ staff in all Indira Institutes and also alumni seek her guidance on professional and personal issues and in return benefit from her rich experience in work and life. As Dr. Shankar puts it “My dream of starting this initiative was through daily interactions that I used to have with the students
                                                , staff at our campuses and our large alumni community that’s connected with me on my social media 24 by 7
                                                . Tarita maam counsels students at least 10 students weekly on a one to one basis…. helping them to 
                                                transform into better and caring human beings and spreading happiness in society.
                                                 Care Club was recently registered as a Trust under Maharashtra Public Trusts Act 1950, 
                                                 on 17th October 2022 and all donations to it are fully exempted u/s 80 G & 12A of the Income Tax Act 1961.
                                                 <b>Care Club was awarded the NGO Leadership Award at World CSR Congress Awards-2023 on 18th February 2023 at Mumbai.</b>
                                                </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col customImageSpacing">
                                            <img src={CareClub1Image} className='img_res' />
                                        </div>
                                        <div className="col customImageSpacing">
                                            <img src={CareClub2Image} className='img_res' />
                                        </div>
                                        <div className="col customImageSpacing">
                                            <img src={CareClub3Image} className='img_res' />
                                        </div>
                                        <div className="col customImageSpacing">
                                            <img src={CareClub4Image} className='img_res' />
                                        </div>
                                        <div className="col customImageSpacing">
                                            <img src={CareClub5Image} className='img_res' />
                                        </div>
                                        <div className="col customImageSpacing">
                                            <img src={CareClub6Image} className='img_res' />
                                        </div>
                                    </div>
                                    <br />
                                    {/* <p><b>INDIRA KNOWLEDGE WORLD UNIVERSITY (IKWU)-THE
                                        NEXT PINNACLE</b></p> */}
                                    {/* <p><i>“Leadership is ones capacity to translate Vision into Reality”</i></p> */}
                                    {/* <p className="text-justify">The field of Education is shifting gears to suit the changing needs of
                                        the 21st century. Dr Tarita Shankar envisages creating a world class
                                        university, namely Indira Knowledge World University. IKWU will
                                        offer Undergraduate, Post graduate and Doctoral studies in
                                        Engineering, Technology &amp; Management, Sciences, Management,
                                        Legal Studies and Liberal Arts &amp; Media at one location. It aims to
                                        employ contemporary methods of learning with a thrust on personal
                                        growth of each learner, thus adding to the knowledge pool of the
                                        country. IKWU is poised to become a dream come true soon.at I used
                                        to have with the students, staff at our campuses and our large alumni
                                        community that’s connected with me on my social media 24 by 7. I
                                        counsel students at least 10 students weekly on a one to one
                                        basis….helping them to transform into better and caring human
                                        beings and spreading happiness in society.</p> */}
                                </Tab>
                                <Tab eventKey="personalFront" title="On a Personal Front">
                                    <p><i>'Successful leaders see the opportunities in every difficulty, rather than the difficulty in every opportunity'.</i></p>
                                    <p className="text-justify">Dr Tarita Shankar's meteoric rise from a young family oriented girl to an exemplary leader was paved with several hurdles, personal and professional challenges. She overcame these through pure grit and determination, ability to adapt to changes and an unending quest for excellence. An avid reader, an excellent orator renowned for her free, frank and fearless expression of her views, she loves to travel, having visited all major countries over the world. Philanthropy and concern for the less fortunate occupies her leisure time.  Above all, she's a doting mother, an affectionate family woman, and a fun loving, down to earth personality.</p>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
                <div className="banner_button_container text-center">
                    <a href="http://indiranationalschool.ac.in/360-degree-virtual-tour/" target="_blank" rel="noopener noreferrer"><button className="button_outline_pink">INS 360 Virtual Tour</button></a>
                    <button className="button_filled marginTop10px" onClick={toggleEnquiry2}>Admission Enquiry</button>
                    <div class="enquireNowPopUpFooter" onSubmit={handleSubmit2} style={{ left: enquiry2, }}>

                        <div class="closeBtn" onClick={() => { setEnquiry2('-110%') }}>X</div>


                        <iframe frameborder="0" width="100%" height="430px" sandbox="allow-top-navigation allow-scripts allow-same-origin allow-downloads" src="https://erp.ins.ac.in/Signin/EnquiryForm_Custom?OrgGUID=C6B82810-B43D-41EB-90FA-0B9B966957BF&fhl=1"></iframe>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}
export default ChairpersonMessage;