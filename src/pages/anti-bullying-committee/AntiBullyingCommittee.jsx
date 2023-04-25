import React, { Fragment } from "react";
import BannerImage from '../../assets/images/committee/anti-bullyingcommittee.jpg'
const AntiBullyingCommittee = () => {
    return (
        <Fragment>
            <div className="col position_relative somi">
                <img src={BannerImage} className='img_res' />
            </div>
            <div className="">
                <div className="container custom_spacing">
                    <h3 className="text-center subheadingM mgBtmZero textPinkColor titleWithOutBanner">ANTIBULLYING   COMMITTEE  A/Y: 2022-23</h3>
                </div>
                <div className="container custom_spacing custom_spacing_top_zero">
                    <div className="row">
                        <div className="col-md-12  backgroundColorWhite">
                            <h6 className="text-center tableTitle">LIST OF COMMTTEE  MEMBERS  (2022-23)</h6>
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
                                                Mr. Santosh Kumar
                                            </td>
                                            <td>
                                                IT, Director (Management Representative)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                5.
                                            </td>
                                            <td>
                                                Mrs. Aakanksha Bhangaonkar
                                            </td>
                                            <td>
                                                Teacher Representative
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                6.
                                            </td>
                                            <td>
                                                Mrs. Indrani Das
                                            </td>
                                            <td>
                                                Teacher&nbsp;Representative
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                7.
                                            </td>
                                            <td>
                                                Mrs. Jayashree Thorat
                                            </td>
                                            <td>
                                                Teacher&nbsp;Representative
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                8.
                                            </td>
                                            <td>
                                                Mrs. Savita Sonawane
                                            </td>
                                            <td>
                                                Teacher&nbsp;Representative
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                9.
                                            </td>
                                            <td>
                                                Ms. Vijaya Borhade
                                            </td>
                                            <td>
                                                Teacher&nbsp;Representative
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                10.
                                            </td>
                                            <td>
                                                Mrs. Sheetal Pakhare
                                            </td>
                                            <td>
                                                Counsellor
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                11.
                                            </td>
                                            <td>
                                                Mrs. Supriya Kulkarni
                                            </td>
                                            <td>
                                                Parent Representative (Morning Shift)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                12.
                                            </td>
                                            <td>
                                                Mrs. Priya Petkar
                                            </td>
                                            <td>
                                                Parent Representative (Afternoon Shift)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                13.
                                            </td>
                                            <td>
                                                Dhruv Sharma (Head Boy)
                                            </td>
                                            <td>
                                                Student Representative (Morning Shift) XII Com – Alpha
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                14.
                                            </td>
                                            <td>
                                                Gargi Mainkar (Head Girl)
                                            </td>
                                            <td>
                                                Student Representative (Afternoon Shift) VIII - Alpha
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                15.
                                            </td>
                                            <td>
                                                Mr. Vikram Deshmukh
                                            </td>
                                            <td>
                                                Legal Consultant
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                { /*<table className="table table-bordered">
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
                                                Principal, Indira National School 
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                3.
                                            </td>
                                            <td>
                                                Mr. Santosh Kumar 
                                            </td>
                                            <td>
                                                IT, Director (Management Representative)
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
                                                Teacher Representative 
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
                                                Teacher Representative
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
                                                Teacher&nbsp;Representative
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
                                                Teacher&nbsp;Representative
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
                                                Teacher&nbsp;Representative
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                9.
                                            </td>
                                            <td>
                                                Mrs. Sheetal Pakhare
                                            </td>
                                            <td>
                                                Counsellor
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                10.
                                            </td>
                                            <td>
                                                Mrs. Shilpa Apte
                                            </td>
                                            <td>
                                                Parent Representative (Morning Shift) 
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                11.
                                            </td>
                                            <td>
                                                Mr. Mir Hasnain Ali Abedi
                                            </td>
                                            <td>
                                                Parent Representative (Afternoon Shift)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                12.
                                            </td>
                                            <td>
                                                Mst. Praket Dixit
                                            </td>
                                            <td>
                                                Student Representative (Morning Shift)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                13.
                                            </td>
                                            <td>
                                                Ms. Vidhi Shukla
                                            </td>
                                            <td>
                                                Student Representative (Afternoon Shift)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                14.
                                            </td>
                                            <td>
                                                Mr. Vikram Deshmukh
                                            </td>
                                            <td>
                                                Legal Consultant
                                            </td>
                                        </tr>
                                    </tbody>
    </table> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default AntiBullyingCommittee;