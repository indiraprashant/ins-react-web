import React, { Fragment } from "react";
import BannerImage from '../../assets/images/circularsbanner.jpg'
import Icon6Image from '../../assets/images/apply-now-logo.png'


const NewsLetter = () => {
    return (
        <Fragment>
            <div className="col position_relative somi">
                <img src={BannerImage} className='img_res' alt="Indira National School" />
            </div>
            <div className="">
                <div className="container custom_spacing">
                    <h3 className="text-center subheadingM mgBtmZero textPinkColor">Apply Online</h3>
                </div>
                <div className="container custom_spacing custom_spacing_top_zero">
                    <div className="row">
                        <div className="col-md-3">
                        <a href="https://erp.indiraedu.com/applicantLoginOTP.htm?a=3d4b02921bef355e733552a30241be1c&b=ebf7e13e830e81cfb8f98aedb56e5d53&c=5e0322bbcfb23edb3cfdebee7df0c266" target="_blank"> 
                                <div className="boxContNews">
                                <img src={Icon6Image} className="small_icon_size" alt="Indira National School" />
                                Std I Afternoon Shift
                                    
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3">
                        <a href="https://erp.indiraedu.com/applicantLoginOTP.htm?a=3d4b02921bef355e733552a30241be1c&b=ebf7e13e830e81cfb8f98aedb56e5d53&c=87a1dbbc655bea9018cb3a9a8d4653f5" target="_blank">
                             
                            <div className="boxContNews">
                            <img src={Icon6Image} className="small_icon_size" alt="Indira National School" />
                                    Std IV Afternoon Shift
                            </div>
                            </a>
                            </div>
                        
                        <div className="col-md-3">
                      
                            <div className="boxContNews">
                                <img src={Icon6Image} className="small_icon_size" alt="Indira National School" />
                                Std II
                            </div>
                           
                        </div>
                        <div className="col-md-3">
                        
                            <div className="boxContNews">
                                <img src={Icon6Image} className="small_icon_size"alt="Indira National School"  />
                                Std IV
                            </div>
                            
                        </div>
                        <div className="col-md-3">
                       
                            <div className="boxContNews">
                                <img src={Icon6Image} className="small_icon_size" alt="Indira National School" />
                                Std V
                            </div>
                           
                        </div>
                        <div className="col-md-3">
                       
                            <div className="boxContNews">
                                <img src={Icon6Image} className="small_icon_size"  alt="Indira National School" />
                                Std VI
                            </div>
                           
                        </div>
                        <div className="col-md-3">
                        
                            <div className="boxContNews">
                                <img src={Icon6Image} className="small_icon_size" alt="Indira National School" />
                                Std XI Science
                            </div>
                         
                        </div>

                        <div className="col-md-3">
                       
                            <div className="boxContNews">
                                <img src={Icon6Image} className="small_icon_size" alt="Indira National School" />
                                Std XI Commerce
                            </div>
                            
                        </div>

                        <div className="col-md-3">
                        
                            <div className="boxContNews">
                                <img src={Icon6Image} className="small_icon_size" alt="Indira National School" />
                                Std XI Humanities
                            </div>
                           
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default NewsLetter;