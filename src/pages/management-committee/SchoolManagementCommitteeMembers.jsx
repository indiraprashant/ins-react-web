import React, { Fragment } from "react";
import BannerImage from '../../assets/images/about_banner_3.png'
const SchoolManagementCommitteeMembers = () => {
    return (
        <Fragment>
            <div className="">
                <div className="col position_relative somi">
                    <img src={BannerImage} className='img_res' />
                </div>
                <div className="container custom_spacing">
                    <h3 className="text-center subheadingM mgBtmZero textPinkColor">School Management Committee Members</h3>
                </div>
                <div className="container custom_spacing custom_spacing_top_zero">
                    <div className="row">
                        <div className="col-md-12 backgroundColorWhite">
                            <h6 className="text-center tableTitle">LIST OF SMC MEMBERS  (2022-23)</h6>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <tbody>

                                        <tr>
                                            <td><strong>Dr. Tarita Shankar&nbsp;</strong>(Chairperson, IGI )</td>
                                            <td><strong><strong>&nbsp;Mr. Aadesh Gaekwad&nbsp;</strong></strong>(Trust&nbsp; Nominee)</td>
                                        </tr>
                                        <tr>
                                            <td><b>Dr. Sanjeev Parmar </b>&nbsp;(Trust Nominee)</td>
                                            <td><b>Mrs. Vijaya Joshi</b>&nbsp;( Member Secretary)</td>
                                        </tr>
                                        <tr>
                                            <td><strong><b>Mrs. Aarti Garampalli </b>&nbsp;</strong>(Teacher Representative )</td>
                                            <td><strong><b>Mrs. Uma Pradeep</b>&nbsp; </strong>(Teacher Representative ) </td>
                                        </tr>
                                        <tr>
                                            <td><strong><b>Mrs. Savita Sonawane</b>&nbsp;</strong>(&nbsp;Teacher Representative )</td>
                                            <td><strong>Ms. Vijaya Borhade </strong>(Teacher Representative)</td>
                                        </tr>
                                        <tr>
                                            <td><strong><b>Mrs. Jayashree Thorat</b>&nbsp;</strong>(Teacher Representative)</td>
                                            <td><strong><b>Mrs. Indrani Das </b>&nbsp;</strong>(Teacher Representative)</td>
                                        </tr>
                                        <tr>
                                            <td><b><strong>Mrs. Aakanksha Bhangaonkar</strong> </b>(Teacher Representative)</td>
                                            <td><strong><b>Mrs. Vrushali Deshmukh</b>&nbsp;</strong>(Admin Representative)</td>
                                        </tr>
                                        <tr>
                                            <td><b>Mrs. Preeti Munje&nbsp;</b>(Admin IT Representative)</td>
                                            <td><b>Mr. Nitin Sangmne &nbsp;</b>(Cultural Representtive )</td>

                                            {/* <td><b>Mr. Girish Pardeshi&nbsp;</b>(Management Representative)</td> */}
                                        </tr>
                                        <tr>
                                            <td><b>Dr. Anagha Joshi&nbsp; </b>(Management Representative )</td>
                                            <td><b>Dr. Ashutosh K. Mishra </b>(Principal – Kendriya Vidyalaya No. 1)</td>
                                        </tr>
                                        <tr>
                                            <td><b>Mr. C.P. Prashant&nbsp;</b>(Principal, Kendriya Vidyalaya No. 2)</td>
                                            <td><b>Mr. Anup Khandagale&nbsp;</b>(Parent Representative – Morning Shift)</td>

                                            {/* <td><b>Mrs. Manasi Chatterjee&nbsp;</b>(Parent Representative)</td> */}
                                            {/* <td><b>Mrs. Kritika Sitani&nbsp;</b>(Parent&nbsp; Representative)</td> */}
                                        </tr>

                                        <tr>
                                            <td><b>Mrs.  Arti Pandharpure&nbsp;</b>(Parent Representative) (Afternoon shift)</td>

                                            <td></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default SchoolManagementCommitteeMembers