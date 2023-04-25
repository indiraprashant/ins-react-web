import React, { Fragment } from "react";
import BannerImage from '../../assets/images/committee/student-council.jpg'

const AcademicCommittee = () => {
    return (
        <Fragment>
            <div className="col position_relative somi">
                <img src={BannerImage} className='img_res' />
            </div>
            <div className="">
                <div className="container custom_spacing">
                    <h3 className="text-center subheadingM mgBtmZero textPinkColor titleWithOutBanner">ACADEMIC COMMITTEE MEMBERS A/Y: 2022-23</h3>
                </div>
                <div className="container custom_spacing custom_spacing_top_zero">
                    <div className="row">
                        <div className="col-md-12  backgroundColorWhite">
                            <h6 className="text-center tableTitle">LIST OF COMMITTEE MEMBERS (2022-23)</h6>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <tbody>

                                        <tr className="backgroundColorLightPink">
                                            <td>
                                                <strong>Sr. No</strong>
                                            </td>
                                            <td>
                                                <strong>Name</strong>
                                            </td>
                                            <td>
                                                <strong>Designation</strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                1.
                                            </td>
                                            <td>
                                                Mrs. Vijaya Joshi
                                            </td>
                                            <td>
                                                Executive Principal - Indira National School
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                2.
                                            </td>
                                            <td>
                                                Mrs. Aarti Garampalli
                                            </td>
                                            <td>
                                                Principal, (Morning Shift) INS
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                3.
                                            </td>
                                            <td>
                                                Mrs. Uma Pradeep
                                            </td>
                                            <td>
                                                Principal, ( Afternoon Shift) INS

                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                4.
                                            </td>
                                            <td>
                                                Mrs. Aakanksha Bhangaonkar
                                            </td>
                                            <td>
                                                Vice Principal (Morning Shift)/Sr. Secondary Section
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                5.
                                            </td>
                                            <td>
                                                Mrs. Indrani Das
                                            </td>
                                            <td>
                                                Vice Principal (Morning Shift) ( Secondary Section )
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                6.
                                            </td>
                                            <td>
                                                Mrs. Jayashree Thorat
                                            </td>
                                            <td>
                                                Vice Principal (Afternoon Shift) Middle School
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                7.
                                            </td>
                                            <td>
                                                Mrs. Savita Sonawane
                                            </td>
                                            <td>
                                                Vice Principal (Morning Shift) Primary Section
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                8.
                                            </td>
                                            <td>
                                                Ms. Vijaya Borhade
                                            </td>
                                            <td>
                                                Vice Principal (Afternoon Shift) Primary Section
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                9.
                                            </td>
                                            <td>
                                                Mrs. Anjali Dharmadhikari
                                            </td>
                                            <td>
                                                Co-ordinator
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                10.
                                            </td>
                                            <td>
                                                Mrs. Yogini Ranadive
                                            </td>
                                            <td>
                                                Co-ordinator
                                            </td>
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
export default AcademicCommittee;
