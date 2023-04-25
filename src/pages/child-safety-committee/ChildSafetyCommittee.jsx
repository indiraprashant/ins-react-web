import React, { Fragment } from "react";
import BannerImage from '../../assets/images/committee/child-safety-committee.jpg'
const ChildSafetyCommittee = () => {
    return (
        <Fragment>
        <div className="col position_relative somi">
            <img src={BannerImage} className='img_res' />
        </div>
            <div className="">
                <div className="container custom_spacing">
                    <h3 className="text-center subheadingM mgBtmZero textPinkColor titleWithOutBanner">CHILD SAFETY COMMITTEE for A/Y: 2022-23</h3>
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
                                                Executive Principal, INS
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
                                            Principal, (Morning Shift)
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                3.
                                            </td>
                                            <td>
                                            Mrs.&nbsp; Uma Pradeep 
                                            </td>
                                            <td>
                                            Principal (Afternoon Shift)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                4.
                                            </td>
                                            <td>
                                                Mrs.&nbsp;Aakanksha Bhangaonkar
                                            </td>
                                            <td>
                                                Teacher&nbsp;Representative
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
                                                Teacher&nbsp;Representative
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
                                                Ms. Vijaya Borhade
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
                                            Mrs. Umaima Lokhandwala
                                            </td>
                                            <td>
                                            School Counsellor
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                10.
                                            </td>
                                            <td>
                                                Mrs. Rashmi Veni 
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
                                            Mr Niraj Kumar
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
                                            Mst. Dhruv Sharma  ( Head Boy )
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
                                            Ms. Gargi Mainkar (Head Girl)
                                            </td>
                                            <td>
                                                Student Representative (Afternoon Shift)
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                               {/* <table className="table table-bordered">
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
                                                Executive Principal, INS
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
                                                Principal, INS
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                3.
                                            </td>
                                            <td>
                                                Mrs.&nbsp;Aakanksha Bhangaonkar
                                            </td>
                                            <td>
                                                Teacher&nbsp;Representative
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                4.
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
                                                5.
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
                                                6.
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
                                                Mrs. Sheetal Pakhare
                                            </td>
                                            <td>
                                                School Counsellor
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                9.
                                            </td>
                                            <td>
                                                Mrs. Prajakta Shirolikar
                                            </td>
                                            <td>
                                                Parent Representative (Morning Shift)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                10.
                                            </td>
                                            <td>
                                                Mrs. Roopa Murali Krishnan
                                            </td>
                                            <td>
                                                Parent Representative (Afternoon Shift)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                11.
                                            </td>
                                            <td>
                                                Ms. Srilagna Dhar
                                            </td>
                                            <td>
                                                Student Representative (Morning Shift)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                12.
                                            </td>
                                            <td>
                                                Ms. Sharvari&nbsp; Chavan
                                            </td>
                                            <td>
                                                Student Representative (Afternoon Shift)
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default ChildSafetyCommittee