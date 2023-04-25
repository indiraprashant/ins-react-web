import React, { Fragment } from "react";
import AlmImage from '../../assets/images/schoolalmanac2.jpg'
import Icon6Image from '../../assets/images/icon6.png'
import AlmanacPdf from '../../assets/pdf/school-almanac22-23.pdf'
import BannerImage from '../../assets/images/schoolalmanac.jpg'
const SchoolAlmanac = () => {
    return (
        <Fragment>
            <div className="col position_relative somi">
                <img src={BannerImage} className='img_res' alt="Indira National School" />
            </div>
            <div className="">
                <div className="container custom_spacing">
                    <h3 className="text-center subheadingM mgBtmZero textPinkColor">School Almanac</h3>
                </div>
                <div className="container custom_spacing custom_spacing_top_zero">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-3">
                            <img src={AlmImage} className="img_res_Alumanac" alt="Indira National School" />
                        </div>
                        <div className="col-md-3 paddingTopAlm">
                            <a href={AlmanacPdf} target="_blank"><button className="almanac_button"><img src={Icon6Image} className="small_icon_size"  alt="Indira National School" />ALMANAC 2022-23</button></a>
                            <br />
                            <a href={AlmanacPdf} target="_blank"><button className="button_filled" style={{ marginTop: "40px" }}>Download</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default SchoolAlmanac