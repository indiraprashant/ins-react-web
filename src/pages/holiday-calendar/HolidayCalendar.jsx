import React, { Fragment } from "react";
import BannerImage from '../../assets/images/holidacalender.jpg'
const HolidayCalendar = () => {
    return (
        <Fragment>
            <div className="col position_relative somi">
                <img src={BannerImage} className='img_res' />
            </div>
            <div className="">
                <div className="container custom_spacing text-center">
                    <h3 className="text-center subheadingM mgBtmZero textPinkColor">Holiday Calendar</h3>
                    {/* <h5 className="margin_top30">Tentative Exam Calendar</h5> */}
                    <h5 className="margin_top30">(A. Y. April 2022 to March 2023)</h5>
                </div>
                <div className="container custom_spacing custom_spacing_top_zero">
                    <div className="row">
                        <div className="col-md-12  backgroundColorWhite">
                            {/* <h6 className="text-center tableTitle">LIST OF MEMBERS  (2021-22)</h6> */}
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr className="backgroundColorLightPink">
                                            <td><strong>Month</strong></td>
                                            <td><strong>Date</strong></td>
                                            <td><strong>Day</strong></td>
                                            <td colspan="3"><strong>Holiday</strong></td>
                                        </tr>
                                        <tr>
                                            <td rowSpan="3" className="backgroundColorLightcolumn">April, 2022</td>
                                            <td>02.04.2022</td>
                                            <td className="backgroundColorLightcolumn">Saturday</td>
                                            <td colspan="3">Gudi Padwa</td>
                                        </tr>
                                        <tr>
                                            <td>14.04.2022</td>
                                            <td className="backgroundColorLightcolumn">Thursday</td>
                                            <td colspan="3">Dr. Babasaheb Ambedkar Jayanti</td>
                                        </tr>
                                        <tr>
                                            <td>15.04.2022</td>
                                            <td className="backgroundColorLightcolumn">Friday</td>
                                            <td colspan="3">Good Friday</td>
                                        </tr>
                                        <tr>
                                            <td className="backgroundColorLightcolumn">May, 2022</td>
                                            <td>01.05.2022</td>
                                            <td className="backgroundColorLightcolumn">Sunday</td>
                                            <td colspan="3">Maharashtra Day</td>
                                        </tr>
                                        <tr>
                                            <td className="backgroundColorLightcolumn">July, 2022</td>
                                            <td>10.07.2022</td>
                                            <td className="backgroundColorLightcolumn">Sunday</td>
                                            <td colspan="3">Bakri Id</td>
                                        </tr>
                                        <tr>
                                            <td rowspan="4" className="backgroundColorLightcolumn">August, 2022</td>
                                            <td>09.08.2022</td>
                                            <td className="backgroundColorLightcolumn">Tuesday</td>
                                            <td colspan="3">Muharram</td>
                                        </tr>
                                        <tr>
                                            <td>11.08.2022</td>
                                            <td className="backgroundColorLightcolumn">Thursday</td>
                                            <td colspan="3">Rakshabandhan</td>
                                        </tr>
                                        <tr>
                                            <td>15.08.2022</td>
                                            <td className="backgroundColorLightcolumn">Monday</td>
                                            <td colspan="3">Independence Day</td>
                                        </tr>
                                        <tr>
                                            <td>31.08.2022</td>
                                            <td className="backgroundColorLightcolumn">Wednesday</td>
                                            <td colspan="3">Ganesh Chaturthi</td>
                                        </tr>
                                        <tr>
                                            <td rowspan="2" className="backgroundColorLightcolumn">Sep-22</td>
                                            <td>05.09.2022</td>
                                            <td className="backgroundColorLightcolumn">Monday</td>
                                            <td colspan="3">Foundation Day</td>
                                        </tr>
                                        <tr>
                                            <td>09.09.2022</td>
                                            <td className="backgroundColorLightcolumn">Friday</td>
                                            <td colspan="3">Anant Chathurthi</td>
                                        </tr>
                                        <tr>
                                            <td rowspan="2" className="backgroundColorLightcolumn">October, 2022</td>
                                            <td>02.10.2022</td>
                                            <td className="backgroundColorLightcolumn">Sunday</td>
                                            <td colspan="3">Mahatma Gandhi Jayanti</td>
                                        </tr>
                                        <tr>
                                            <td>05.10.2022</td>
                                            <td className="backgroundColorLightcolumn">Wednesday</td>
                                            <td colspan="3">Dassera</td>
                                        </tr>
                                        <tr>
                                            <td className="backgroundColorLightcolumn">November, 2022</td>
                                            <td>08.11.2022</td>
                                            <td className="backgroundColorLightcolumn">Tuesday</td>
                                            <td colspan="3">Guru Nanak Jayanti</td>
                                        </tr>
                                        <tr>
                                            <td rowspan="2" className="backgroundColorLightcolumn">January, 2023</td>
                                            <td>15.01.2023</td>
                                            <td className="backgroundColorLightcolumn">Sunday</td>
                                            <td colspan="3">Makar Sankranti</td>
                                        </tr>
                                        <tr>
                                            <td>26.01.2023</td>
                                            <td className="backgroundColorLightcolumn">Thursday</td>
                                            <td colspan="3">Republic Day</td>
                                        </tr>
                                        <tr>
                                            <td rowspan="2" className="backgroundColorLightcolumn">February, 2023</td>
                                            <td>18.02.2023</td>
                                            <td className="backgroundColorLightcolumn">Saturday</td>
                                            <td colspan="3">Mahashivratri</td>
                                        </tr>
                                        <tr>
                                            <td>19.02.2023</td>
                                            <td className="backgroundColorLightcolumn">Sunday</td>
                                            <td colspan="3">Shivaji Jayanti</td>
                                        </tr>
                                        <tr>
                                            <td rowSpan="3" className="backgroundColorLightcolumn">March, 2023</td>
                                            <td>08.03.2023</td>
                                            <td className="backgroundColorLightcolumn">Wednesday</td>
                                            <td colspan="3">Holi</td>
                                        </tr>
                                        <tr>
                                            <td>22.03.2023</td>
                                            <td className="backgroundColorLightcolumn">Wednesday</td>
                                            <td colspan="3">Gudi Padwa</td>
                                        </tr>
                                        <tr>
                                            <td>30.03.2023</td>
                                            <td className="backgroundColorLightcolumn">Thursday</td>
                                            <td colspan="3">Ram Navami</td>
                                        </tr>
                                        <tr>
                                            <td className="backgroundColorLightcolumn">Breaks</td>
                                            <td>Class</td>
                                            <td className="backgroundColorLightcolumn">Sections</td>
                                            <td>Start&nbsp; Date</td>
                                            <td>End Date</td>
                                            <td width="100">Reopens on</td>
                                        </tr>
                                        <tr>
                                            <td rowspan="2" className="backgroundColorLightcolumn">Summer Break</td>
                                            <td rowspan="2">&nbsp;I to VIII</td>
                                            <td rowspan="2" className="backgroundColorLightcolumn">All Sections</td>
                                            <td>Sunday</td>
                                            <td>Tuesday</td>
                                            <td width="100">Wednesday</td>
                                        </tr>
                                        <tr>
                                            <td>1/5/2022</td>
                                            <td>31-05-2022</td>
                                            <td width="100">1/6/2022</td>
                                        </tr>
                                        <tr>
                                            <td rowspan="2" className="backgroundColorLightcolumn">Summer Break</td>
                                            <td rowspan="2">&nbsp;IX to XII</td>
                                            <td rowspan="2" className="backgroundColorLightcolumn">All Sections</td>
                                            <td>Sunday</td>
                                            <td>Tuesday</td>
                                            <td width="100">Wednesday</td>
                                        </tr>
                                        <tr>
                                            <td>15-05-2022</td>
                                            <td>31-05-2022</td>
                                            <td width="100">1/6/2022</td>
                                        </tr>
                                        <tr>
                                            <td rowspan="2" className="backgroundColorLightcolumn">Diwali Break</td>
                                            <td rowspan="2">I to XII</td>
                                            <td rowspan="2" className="backgroundColorLightcolumn">All Sections</td>
                                            <td>Friday&nbsp;</td>
                                            <td>Sunday</td>
                                            <td width="100">Monday</td>
                                        </tr>
                                        <tr>
                                            <td>21-10-2022</td>
                                            <td>30-10-2022</td>
                                            <td width="100">31-10-2022</td>
                                        </tr>
                                        <tr>
                                            <td rowspan="2" className="backgroundColorLightcolumn">Christmas Break</td>
                                            <td rowspan="2">I to XII</td>
                                            <td rowspan="2" className="backgroundColorLightcolumn">All Sections</td>
                                            <td>Sunday</td>
                                            <td>Sunday</td>
                                            <td width="100">Monday</td>
                                        </tr>
                                        <tr>
                                            <td>25-12-2022</td>
                                            <td>1/1/2023</td>
                                            <td width="100">2/1/2023</td>
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
export default HolidayCalendar;