import React from "react"
import { Fragment } from "react"
import BannerImage from '../../assets/images/yearplan.jpg'
import VissionImage from '../../assets/images/vission.png'
import MissionImage from '../../assets/images/mission.png'


const VisionMission = () => {
    

    
    return (
        <Fragment>
            
           

            <div className="col position_relative somi">
                <img src={BannerImage} className='img_res' />
            </div>
            <div className="container custom_spacing">
                <div className="row">

                <div className="col-md-12  paddingclass">
   <div className="container">
      <div className="row">
          <div className="col-md-4">
          <h2 className="visiontext desktopHide">Vision
            </h2>
               <img src={VissionImage} className=" vission" />
          </div>
           <div className="col-md-8">
                <h2 className="visiontext mobHide">Vision
            </h2>
            <p className="visionpara">‘When you have a vision that is strong &amp; powerful, nothing can stand in your way.’</p>
           <p className="visionpara">Our vision at Indira National School is to create a family of lifelong learners where
                     each student develops a curiosity for learning and discovers his/her interests.</p>
                     <p className="visionpara">INS aims to empower students to acquire, demonstrate, articulate, value knowledge
                        &amp; skills that will support and motivate them for the rapidly changing world by
                        instilling critical thinking skills, a global perspective and a respect for core values of
                        honesty, loyalty, perseverance and compassion.</p>
                        <p>We believe in <b>‘Educating Minds Leading to Inspiring Futures’.</b></p>



                            
           
              
          </div>
           

          <div className="col-md-4 desktopHide ">
               <h2 className="missiontext">Mission
            </h2>
               <img src={MissionImage} class="mission" />
          </div>
          <div className="col-md-8">
            
          <ul className="margintopul">
                 <li className="liclass">Our Mission is to make the children aware of the beauty of the world around
                        them and to render secure, friendly, creative and nurturing environment while
                        honing their academic, artistic and social skills.</li>
                <li className="liclass">We foster our students love for learning, encourage them to try new and
                    exciting things, give them a solid foundation to build on and mould them into
                    well-rounded and thoughtful students prepared to cope with a changing post-
                    modern and globalized world.</li>
               <li className="liclass">We are committed to prepare all students to become responsible citizens ready
                        to meet the challenges of the future. In partnership with the parents and the
                        community, our goal is to create relevant learning opportunities for students
                        both inside and outside the classroom that help them develop the knowledge,
                        critical thinking skills and character necessary to succeed in a technologically
                        advanced world while sustaining humanity on the other hand.</li>
            <li className="liclass">Edifying our learners with respect for core values of honesty, loyalty,
                    perseverance, resilience, discipline and compassion. To prepare them to
                    become productive, responsible, ethical, creative and compassionate members
                    of society.</li>
            <li className="liclass">Our constant effort is to achieve high standards in education by empowering
                    our students, embracing diversity, promoting independent thinking and
                    committing to excellence in preparing our students to become leaders of tomorrow.</li>
                                </ul>
           
              
          </div>
           <div className="col-md-4 mobHide">
               <h2 className="missiontext">Mission
            </h2>
               <img src={MissionImage} class="mission" />
          </div>
        
      </div>
   </div>
</div>
               {/* <h3 className="text-left subheadingM">VISION</h3>
                    <p>‘When you have a vision that is strong &amp; powerful, nothing can stand in your way.’</p>
                    <p>Our vision at Indira National School is to create a family of lifelong learners where
                     each student develops a curiosity for learning and discovers his/her interests.</p>
                     <p>INS aims to empower students to acquire, demonstrate, articulate, value knowledge
                        &amp; skills that will support and motivate them for the rapidly changing world by
                        instilling critical thinking skills, a global perspective and a respect for core values of
                        honesty, loyalty, perseverance and compassion.</p>
                        <p>We believe in <b>‘Educating Minds Leading to Inspiring Futures’.</b></p>

                        <h3 className="text-left subheadingM">MISSION</h3>
                    <p>Our Mission is to make the children aware of the beauty of the world around
                        them and to render secure, friendly, creative and nurturing environment while
                        honing their academic, artistic and social skills.</p>
                    <p>We foster our students love for learning, encourage them to try new and
                    exciting things, give them a solid foundation to build on and mould them into
                    well-rounded and thoughtful students prepared to cope with a changing post-
                    modern and globalized world.</p>
                     <p>We are committed to prepare all students to become responsible citizens ready
                        to meet the challenges of the future. In partnership with the parents and the
                        community, our goal is to create relevant learning opportunities for students
                        both inside and outside the classroom that help them develop the knowledge,
                        critical thinking skills and character necessary to succeed in a technologically
                        advanced world while sustaining humanity on the other hand.</p>
                    <p>
                    Edifying our learners with respect for core values of honesty, loyalty,
                    perseverance, resilience, discipline and compassion. To prepare them to
                    become productive, responsible, ethical, creative and compassionate members
                    of society.
                    </p>
                    <p>Our constant effort is to achieve high standards in education by empowering
                    our students, embracing diversity, promoting independent thinking and
                    committing to excellence in preparing our students to become leaders of
    tomorrow.</p>*/}
                </div>
            </div>
        </Fragment>
    )
}
export default VisionMission;