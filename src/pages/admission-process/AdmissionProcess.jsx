import React, { Fragment } from "react";
import BannerImage from '../../assets/images/admission-banner.png'
import Icon1Image from '../../assets/images/icon1.png'
import Icon6Image from '../../assets/images/icon6.png'
import { useEffect } from "react";
const AdmissionProcess = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <Fragment>
            <div className="col position_relative somi">
                <img src={BannerImage} className='img_res' alt="Indira National School" />
            </div>
            <div className="container custom_spacing text-center">
                <h3 className="subheadingM">Admissions</h3>
                <h5>Admission Details</h5>
                <p>Indira National School is pleased to inform that the registrations for Grade I Afternoon Shift are open. Submitting the Online
                    Registration ONLY indicates your intention to seek admission. It is NOT a confirmation of admission. Admissions will be on the basis
                    of availability of seats ONLY.
                </p>
            </div>
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-12 box_shadow backgroundColorLightGray">
                        <h5><img src={Icon1Image} className="small_icon_size" alt="Indira National School" />School Timings</h5>
                        <p><b>Afternoon:</b> 12:00 noon to 5:10 pm</p>
                        <p>2nd Saturday's will be working for students and 4th Saturday will be for PTM.</p>
                        <p>School begins for the academic year <b>2022-23</b> tentatively on Monday, <b>4th April, 2022</b> for Class. I</p>
                    </div>
                </div>
            </div>

            <div className="container text-center">
                <div className="row">
                    <div className="col-md-12 box_shadow backgroundColorLightGray">
                        <h5><img src={Icon6Image} className="small_icon_size" alt="Indira National School" />Eligibility</h5>
                        <p>Child should be born between <b>1st October, 2015 to 30th September, 2016.</b></p>
                    </div>
                </div>
            </div>
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-12 box_shadow backgroundColorLightGray">
                        <h4>Other Details</h4>
                        <p>You will receive a detailed mail regarding the Class, Section & House of the child in the month of March.
                            We would like to inform you that for the afternoon shift, we will be having Indira Care Centre for grade I-V from 9:00 am to 12:00
                            noon. The charges for the same will be over & above the school fees. The parents may opt for the same</p>
                        <p><b>Divisions:</b> Afternoon Batch-5 Divisions</p>
                        <p>The students are shuffled every year into different divisions of the respective shifts to encourage their social skills.</p>
                    </div>
                </div>
            </div>

            <div className="container text-center">
                <div className="row">
                    <div className="col-md-12 box_shadow backgroundColorLightGray">
                        <h4>House - For Sports activity</h4>
                        <p>The students are distributed into 4 houses for sports activities. The Sports T-shirts are bought as per the House name allocated.
                            Once allocated the student remains in the same House till he/she graduates out of the school. The house names and colours are
                            as follows: -</p>
                        <h6 className="text-center"><span style={{ color: "red" }}>Taj: Red</span> | <span style={{ color: "blue" }}>Charminar: Blue</span> | <span style={{ color: "green" }}>Ajanta: Green</span> | <span style={{ color: "yellow" }}>Konark: Yellow</span></h6>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default AdmissionProcess;