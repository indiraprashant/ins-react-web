import React, { Fragment } from "react";
import BannerImage from '../../assets/images/about_banner_1.png'
import AboutInsImage from '../../assets/images/about_ins.png'
import { useState } from "react";
const IndiraNationalSchool = () => {
    
    const [enquiry2, setEnquiry2] = useState('-110%');
    const toggleEnquiry2=()=>{
        setEnquiry2('0')
    }
    const handleSubmit2 = (e) => {
        e.preventDefault();
    }
    return (
        <Fragment>
            <div className="col position_relative somi">
                <img src={BannerImage} className='img_res' alt="Indira National School" />
            </div>
            <div className="container custom_spacing">
                <h3 className="text-center subheadingM">About Us</h3>
                <div className="row">
                    <div className="col-md-6">
                        <img src={AboutInsImage} className='img_res' alt="Indira National School" />
                    </div>
                    <div className="col-md-6 marginTop10px">
                        <p className="text-justify">The Shree Chanakya Education Society (SCES) was established in February 1994, under the visionary leadership of Dr. Tarita Shankar, with the aim of providing top quality post-graduate education in the fields of Business Management, International Business and Information Technology. At a time when India was struggling to put its economy back on its feet, after the nation having pawned the “family jewels” just to keep afloat, Dr. Tarita Shankar sensed that education too would have to become more broad based and more vocational in nature if India was to stand up to the world competition in quality and price for its products, as indeed the then Finance Minister had prescribed for the economy and so, in 1994, began a saga of growth and quality in education; a story that is just reaching its zenith with 14 full fledged Institutes registering a strong presence on Pune’s educational horizon. Since inception, the Institutes managed by SCES, have maintained high academic standards and have successfully provided trained manpower to the industrial and services sector of the country. With a modest strength of 60 students pursuing a single course, SCES has grown steadily and today boasts of 14 Institutes, having more than 8000 students from all over India pursuing multi-disciplinary, graduate & post-graduate programmes. The objective of the institute is providing ‘Management education in a corporate environment’, has been possible due to the sincere and dedicated efforts of the members of SCES, who have invaluable experience in varied areas like academics, industry, service and social-work.</p>
                    </div>
                </div>
            </div>
            <div className="container custom_spacing">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text-center">Welcome to Indira National School</h3>
                    </div>

                    <div className="col-md-12">
                        <p>Welcome to the Indira National School. We are a part of Shree Chanakya Education Society, which has a strong presence on the education map of Pune. The Trust has been associated with Management education since 1994. The school segment has been operational since 2004.</p>
                        <p>Today we are a full fledged CBSE affiliated school with student strength 3309 and a total staff of 226. We are committed to excellence in education from KG to PG.</p>
                        <div className="banner_button_container text-center">
                        <a href="http://indiranationalschool.ac.in/360-degree-virtual-tour/" target="_blank" rel="noopener noreferrer"><button className="button_outline_pink">INS 360 Virtual Tour</button></a>
                            {/*<button className="button_filled marginTop10px" onClick={toggleEnquiry2}>Admission Enquiry</button>*/}
                            <a href="https://erp.ins.ac.in/Signin/EnquiryForm_Custom?OrgGUID=C6B82810-B43D-41EB-90FA-0B9B966957BF&fhl=1" target="_blank"><button className="button_filled marginBottom10px">Admission Enquiry</button></a>
                            

                            <div class="enquireNowPopUpFooter" onSubmit={handleSubmit2} style={{left:enquiry2,}}>
                            
                            <div class="closeBtn" onClick={()=>{setEnquiry2('-110%')}}>X</div>
                 
         
                             <iframe frameborder="0" width="100%" height="430px" sandbox="allow-top-navigation allow-scripts allow-same-origin allow-downloads" src="https://erp.ins.ac.in/Signin/EnquiryForm_Custom?OrgGUID=C6B82810-B43D-41EB-90FA-0B9B966957BF&fhl=1"></iframe>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default IndiraNationalSchool;