import React, { Fragment } from "react";
import BannerImage from '../../assets/images/circularsbanner.jpg'
import Icon6Image from '../../assets/images/icon6.png'
import Pdf1 from '../../assets/pdf/newsletter/1.pdf'
import Pdf2 from '../../assets/pdf/newsletter/2.pdf'
import Pdf3 from '../../assets/pdf/newsletter/3.pdf'
import Pdf4 from '../../assets/pdf/newsletter/4.pdf'
import Pdf5 from '../../assets/pdf/newsletter/5.pdf'
import Pdf6 from '../../assets/pdf/newsletter/6.pdf'
import Pdf7 from '../../assets/pdf/newsletter/7.pdf'
import Pdf8 from '../../assets/pdf/newsletter/News-Letter-Young-Minds.pdf'

const NewsLetter = () => {
    return (
        <Fragment>
            <div className="col position_relative somi">
                <img src={BannerImage} className='img_res' alt="Indira National School" />
            </div>
            <div className="">
                <div className="container custom_spacing">
                    <h3 className="text-center subheadingM mgBtmZero textPinkColor">News Letters</h3>
                </div>
                <div className="container custom_spacing custom_spacing_top_zero">
                    <div className="row">
                        <div className="col-md-3">
                            <a href={Pdf8} target="_blank" rel="noopener noreferrer">
                                <div className="boxContNews">
                                    <img src={Icon6Image} className="small_icon_size"  alt="Indira National School" />
                                    November 2022 - March 2023
                                </div>
                            </a>
                        </div>


                        <div className="col-md-3">
                            <a href={Pdf1} target="_blank" rel="noopener noreferrer">
                                <div className="boxContNews">
                                    <img src={Icon6Image} className="small_icon_size"  alt="Indira National School" />
                                    April 2021 - March 2022
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3">
                        <a href={Pdf2} target="_blank" rel="noopener noreferrer">
                            <div className="boxContNews">
                                <img src={Icon6Image} className="small_icon_size" alt="Indira National School" />
                                April 2020 - March 2021
                            </div>
                            </a>
                        </div>
                        <div className="col-md-3">
                        <a href={Pdf3} target="_blank" rel="noopener noreferrer">
                            <div className="boxContNews">
                                <img src={Icon6Image} className="small_icon_size" alt="Indira National School" />
                                November 2018 - March 2019
                            </div>
                            </a>
                        </div>
                        <div className="col-md-3">
                        <a href={Pdf4} target="_blank" rel="noopener noreferrer">
                            <div className="boxContNews">
                                <img src={Icon6Image} className="small_icon_size" alt="Indira National School" />
                                April 2018 - October 2018
                            </div>
                            </a>
                        </div>
                        <div className="col-md-3">
                        <a href={Pdf5} target="_blank" rel="noopener noreferrer">
                            <div className="boxContNews">
                                <img src={Icon6Image} className="small_icon_size" alt="Indira National School" />
                                November 2017 - March 2018
                            </div>
                            </a>
                        </div>
                        <div className="col-md-3">
                        <a href={Pdf6} target="_blank" rel="noopener noreferrer">
                            <div className="boxContNews">
                                <img src={Icon6Image} className="small_icon_size" alt="Indira National School" />
                                April-2017 - October-2017
                            </div>
                            </a>
                        </div>
                        <div className="col-md-3">
                        <a href={Pdf7} target="_blank" rel="noopener noreferrer">
                            <div className="boxContNews">
                                <img src={Icon6Image} className="small_icon_size" alt="Indira National School" />
                                November 2016 - March 2017
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default NewsLetter;