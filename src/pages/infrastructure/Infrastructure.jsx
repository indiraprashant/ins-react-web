import React, { useEffect, useRef, useState } from "react";
import Infra1Image from '../../assets/images/infrastructure/basketballcourt.jpg'
import Infra2Image from '../../assets/images/infrastructure/biologylab.jpg'
import Infra3Image from '../../assets/images/infrastructure/chemistrylab.jpg'
import Infra4Image from '../../assets/images/infrastructure/classroom.jpg'
import Infra5Image from '../../assets/images/infrastructure/compositelab.jpg'
import Infra6Image from '../../assets/images/infrastructure/computerlab.jpg'
import Infra7Image from '../../assets/images/infrastructure/library.jpg'
import Infra8Image from '../../assets/images/infrastructure/mphhall.jpg'
import Infra9Image from '../../assets/images/infrastructure/physicslab.jpg'
import Infra10Image from '../../assets/images/infrastructure/primaryclass.jpg'
import Infra11Image from '../../assets/images/infrastructure/schoolbuilding-campus.jpg'
import Infra12Image from '../../assets/images/infrastructure/smartclassroom.jpg'
const Infrastructure = () => {
    const [cardHeight, setCardHeight] = useState("300px");
    const refd = useRef(null);

    useEffect(() =>{
        setTimeout(()=> setCardHeight(refd.current.clientHeight), 1000);
    })
    return (
        <div className="container custom_spacing">
            <h3 className="text-center subheadingM textPinkColor">Infrastructure</h3>
            <div className="row">
                <div className="col-md-4">
                    <div class="cardBox">
                        <div class="card" style={{height:cardHeight}}>
                            <div class="front">
                            <img src={Infra1Image} className='img_res' ref={refd}/>
                            </div>
                            <div class="back TopmarginInfra">
                                <h5>BASKETBALL COURT</h5>
                                <p>We have a huge playground which provides the opportunity for our children to practice various skills in sports for developing their competencies and enhancing their abilities to collaborate with others. We offer many sports such as Basketball, Volleyball, Athletes, Football and Cricket etc.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="cardBox">
                        <div class="card" style={{height:cardHeight}}>
                            <div class="front">
                            <img src={Infra2Image} className='img_res' />
                            </div>
                            <div class="back TopmarginInfra">
                                <h5>BIOLOGY LAB</h5>
                                <p>Our Lab is designed as per modern research infrastructure. It is well equipped with all the specimens. The students learn and relate the theoretical concepts taught in the classroom with their daily life experiences.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="cardBox">
                        <div class="card" style={{height:cardHeight}}>
                            <div class="front">
                            <img src={Infra3Image} className='img_res' />
                            </div>
                            <div class="back TopmarginInfra">
                                <h5>CHEMISTRY LAB</h5>
                                <p>It has all the necessary equipments for preparation of samples, and standards and various apparatusfor performing various experiments. It provides a platform for students to nurture the budding scientist within them.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div class="cardBox">
                        <div class="card" style={{height:cardHeight}}>
                            <div class="front">
                            <img src={Infra4Image} className='img_res' ref={refd}/>
                            </div>
                            <div class="back">
                                <h5>SMART CLASSROOM</h5>
                                <p>The classrooms are huge, well ventilated and equipped with smart boards.Interactive sessions are encouraged where learning by the students takes place beyond academics. We ensure that the students are benefitted by the technology. The smart boards help the students to visualize the concepts taught by the teachers.  
                                    
               </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="cardBox">
                        <div class="card" style={{height:cardHeight}}>
                            <div class="front">
                            <img src={Infra5Image} className='img_res' />
                            </div>
                            <div class="back">
                                <h5>COMPOSITE LAB</h5>
                                <p>Science lab allows students to get a first-hand learning experience by performing various experiments on their own. Students are made to use the models and understand different scientific theories and concepts.  Our composite lab has Biological specimens, workbenches with sink, water faucet and Reagent rack.The lab is spacious and has all the latest and necessary equipments.{/* The lab provides holistic education in a conducive school environment.*/}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="cardBox">
                        <div class="card" style={{height:cardHeight}}>
                            <div class="front">
                            <img src={Infra6Image} className='img_res' />
                            </div>
                            <div class="back TopmarginInfra">
                                <h5>COMPUTER LABS</h5>
                                <p>We have three well-equipped hardware and software Computer Labs providing computing facility comprising of 100+ PCs to meet the demands of modern learning and to cater to the computational and IT related needs of the academic.Dual Core PCs connected via the Local Area Network are available in all three Computer Labs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div class="cardBox">
                        <div class="card" style={{height:cardHeight}}>
                            <div class="front">
                            <img src={Infra7Image} className='img_res' ref={refd}/>
                            </div>
                            <div class="back">
                                <h5>LIBRARY</h5>
                                <p>Our school library develops curiosity, innovation and problem-solving. It is integral to the cultural and social life of the school. The school library is a central point for all kinds of reading, cultural activities, access to information, knowledge building, deep thinking and lively discussion. Our school library is a hub of knowledge with over 15000 books on varied topics.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="cardBox">
                        <div class="card" style={{height:cardHeight}}>
                            <div class="front">
                            <img src={Infra8Image} className='img_res' />
                            </div>
                            <div class="back">
                                <h5>MULTIPURPOSE HALL</h5>
                                <p>Multipurpose hall serves multiple functional purposes.We have 2 Multipurpose Halls- Ektaa Hall and Takshak Hall. It is well-equipped to accommodate a wide variety of events or activities.The hall is the hub of the school, a renowned area where experiences are shared, and memories made.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="cardBox">
                        <div class="card" style={{height:cardHeight}}>
                            <div class="front">
                            <img src={Infra9Image} className='img_res' />
                            </div>
                            <div class="back">
                                <h5>PHYSICS LAB</h5>
                                <p>It is well equipped and designed with the latest facilities to cater to the needs of the students. The students get hands on experience and understand the difference between theory and application. They get an opportunity of performing experiments, asking questions, collecting data, analysing data and thinking of new questions to explore.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col-md-4">
                    <div class="cardBox">
                        <div class="card" style={{height:cardHeight}}>
                            <div class="front">
                            <img src={Infra10Image} className='img_res' ref={refd}/>
                            </div>
                            <div class="back">
                                <h5>Primary Classroom</h5>
                                <p>The classrooms are huge, well ventilated and equipped with smart boards.Interactive sessions are encouraged where learning by the students takes place beyond academics. We ensure that the students are benefitted by the technology. 
                                    The smart boards help the students to visualize the concepts taught by the teachers. 
 </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="cardBox">
                        <div class="card" style={{height:cardHeight}}>
                            <div class="front">
                            <img src={Infra11Image} className='img_res' />
                            </div>
                            <div class="back TopmarginInfra">
                                <h5>SCHOOL BUILDING</h5>
                                <p>Indira National School, Wakad has state of art infrastructure equipped with all equipments required for conducive learning environment and has an excellent infrastructure.It is spread over five acres.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="cardBox">
                        <div class="card" style={{height:cardHeight}}>
                            <div class="front">
                            <img src={Infra12Image} className='img_res' />
                            </div>
                            <div class="back">
                                <h5>Classroom</h5>
                                <p>The classrooms are huge, well ventilated and equipped with smart boards.Interactive sessions are encouraged where learning by the students takes place beyond academics. We ensure that the students are benefitted by the technology. 
                                    The smart boards help the students to visualize the concepts taught by the teachers.  
</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Infrastructure