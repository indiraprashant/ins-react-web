import React, { Fragment } from "react";
import BannerImage from '../../assets/images/admission-banner.png'
import Icon1Image from '../../assets/images/icon1.png'

import { useEffect } from "react";
const AdmissionProcessXI = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <Fragment>
            <div className="col position_relative somi">
                <img src={BannerImage} className='img_res' alt="Indira National School" />
            </div>
            <div className="container custom_spacing text-center">
                <h3 className="subheadingM">Admission Procedure for Grade XI (A/Y 2022-23)</h3>
                <h5>Admission Details</h5>
                <p>Indira National School has opened the admissions to Grade XI. We are inviting online application forms
                    from students aspiring for admission at our school.
                    Please register through the google form link shared on the school website. This link is only for the
                    registration, the admission will be confirmed only who will qualify the cut off criteria.All rights for the admission will be at the sole discretion of the
                    management. The management reserves the right to deny admission to any student without assigning
                    any reason.
                </p>
            </div>
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-12 box_shadow backgroundColorLightGray">
                        <h5><img src={Icon1Image} className="small_icon_size" alt="Indira National School" />School Timings</h5>
                        <p><b>Morning:</b> 7.15 A.M to 12.40 P.M</p>
                        <p></p>
                        <p><b></b><b></b></p>
                    </div>
                </div>
            </div>

            <div className="container text-center">
                <div className="row">
                    <p><b>Admission Form Open Details</b></p>
                    {/* <p>Admission form registration fees of <b>Rs. 500/- (mandatory)</b> to be paid online only</p> */}
                    <p>Interested parents are requested to click on the given link, fill and submit the form on or before
                        25 th July before 8.00 AM</p>

                    {/*add new table*/}
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td rowspan="5">Step 1</td>
                                    <td rowspan="5">
                                        <p>
                                            <b>Criteria</b></p>

                                    </td>
                                    <td className="text-left "><p>Admission will be solely on the basis of cut off criteria as decided by the management.</p></td>
                                </tr>
                                <tr>

                                    <td className="text-left "><p>The list of eligible applicants who will qualify the cut off criteria will be displayed on
                                        the school website on Tuesday,26 th July by 4:00 PM.</p></td>
                                </tr>
                                <tr>
                                    <td className="text-left"><p>Parents to note that only the selected students will get an admission form link for the
                                        registration of the form, selection of the subjects and fee payment.</p></td>
                                </tr>
                                <tr>
                                    <td className="text-left "><p>Parents will have to pay the fees of Rs. 5,350/- (Non Refundable), School fees of Rs. 50,050/- and
                                        Caution Deposit of Rs. 40,000/- (Refundable) to confirm your ward’s admission at INS. The
                                        Admission fees and caution deposit is not applicable for INS parents.</p></td>
                                </tr>

                                <tr className="tdcolor ">
                                    <td><b>Google Form Link : </b><a href="https://forms.gle/2ZDu66Kvp81GCHcy5" target="_blank"><b> https://forms.gle/2ZDu66Kvp81GCHcy5</b></a></td>
                                </tr>


                            </tbody>
                        </table>
                    </div>

                </div>

            </div>

            <div className="container text-center">
                <div className="row">
                    <h3 className="subheadingM">Fees & Payment</h3>
                    <p><b>Fee Structure for INS Students for A.Y. 2022-23</b></p>
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td>Annual School Fees</td>
                                    <td>Rs. 75,000/-</td>
                                    <td>Non Refundable</td>
                                </tr>
                                <tr>
                                    <td>PTA Subscription</td>
                                    <td>Rs.50/-</td>
                                    <td>Refundable</td>
                                </tr>

                                <tr>
                                    <td>Total Fees	</td>
                                    <td>Rs. 75,050/-</td>
                                    <td></td>
                                </tr>


                            </tbody>
                        </table>
                        <p><b>Kindly note that the parents who are willing to pay Annual School Fees of Rs. 75,050/- at the time
                            of confirmation of the admission, will be eligible for 5% discount on the Annual School Fees.
                            (Discount amount: Rs. 3,750/-)</b></p>





                        <p><b>Fee Structure for Non INS Students for A.Y. 2022-23</b></p>
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <td>Admission Fees</td>
                                        <td>Rs. 5,350/-</td>
                                        <td>Non Refundable</td>
                                    </tr>
                                    <tr>
                                        <td>Caution deposit</td>
                                        <td>Rs. 40,000/-</td>
                                        <td>Refundable</td>
                                    </tr>

                                    <tr>
                                        <td>Annual School Fees</td>
                                        <td>Rs. 75,000/-</td>
                                        <td>Non Refundable</td>
                                    </tr>


                                    <tr>
                                        <td>PTA Subscription</td>
                                        <td>Rs.50/-</td>
                                        <td>Non Refundable</td>
                                    </tr>

                                    <tr>
                                        <td>Total Fees	</td>
                                        <td>Rs. 1,20,400/-</td>
                                        <td></td>
                                    </tr>


                                </tbody>
                            </table>
                            <p><b>Kindly note that the parents who are willing to pay Annual School Fees of Rs. 1,20,400/- at the time
                                of confirmation of the admission, will be eligible for 5% discount on the Annual School Fees.
                                (Discount amount: Rs. 3,750/-)</b></p>
                        </div>

                    </div>
                </div>
            </div>



            <div className="container text-center">
                <div className="row">
                    <h3 className="subheadingM">Subjects Offered for Grade XI for A.Y 2022-23</h3>
                    {/* <p><b>Fee Structure for INS Students for A.Y. 2022-23</b></p> */}
                    <div className="table-responsive">
                        <table className="table table-bordered table-responsive">
                            <tbody>

                                <tr>
                                    <th>No</th>
                                    <th>Science Stream</th>
                                    <th>Commerce Stream</th>
                                    <th>Humanities Stream</th>
                                </tr>

                                <tr>
                                    <td>1</td>
                                    <td>English (Compulsory)</td>
                                    <td>English (Compulsory)</td>
                                    <td>English (Compulsory)</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Physics(Compulsory)</td>
                                    <td>Accountancy (Compulsory)</td>
                                    <td>Political Science(Compulsory)</td>
                                </tr>

                                <tr>
                                    <td>3</td>
                                    <td>Chemistry(Compulsory)</td>
                                    <td>Economics (Compulsory)</td>
                                    <td>Sociology(Compulsory)</td>
                                </tr>

                                <tr>
                                    <td>4</td>
                                    <td>Math / Biology</td>
                                    <td>Business Studies(Compulsory)</td>
                                    <td>Psychology/Economics</td>
                                </tr>


                                <tr>
                                    <td>5</td>
                                    <td>Biology / Informatics Practices / Physical Education / Hindustani Vocal Music (Optional)
                                        <table className="table text-center ">
                                            <tr>
                                                <th>Subject 4</th>
                                                <th>Subject 5</th>
                                            </tr>
                                            <tr>
                                                <td>Math</td>
                                                <td>Bio</td>
                                            </tr>
                                            <tr>
                                                <td>Math</td>
                                                <td>Pe</td>
                                            </tr>
                                            <tr>
                                                <td>Math</td>
                                                <td>Ip</td>
                                            </tr>
                                            <tr>
                                                <td>Math</td>
                                                <td>Hvm</td>
                                            </tr>

                                            <tr>
                                                <td>Bio</td>
                                                <td>Pe</td>
                                            </tr>
                                            <tr>
                                                <td>Bio</td>
                                                <td>Ip</td>
                                            </tr>
                                            <tr>
                                                <td>Bio</td>
                                                <td>Hvm</td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td>Math/ Informatics Practices / Physical Education / Hindustani Vocal Music (Optional)</td>
                                    <td>Informatics Practices/ Physical Education / Hindustani Vocal Music (Optional)</td>
                                </tr>
                            </tbody>
                        </table>
                        <p><b>During the process of final admission, the students can choose any 5 subjects from the stream that they
                            intend to take in Grade XI.</b></p>

                        <p><b>6<sup>th</sup>  Subject - Skill Subjects introduced by CBSE</b></p>
                        <p>(Choose any one subject from the following. Also follow the rules of the combinations mentioned below.)
                        </p>
                        <ul className="listNone">
                            <li>Artificial Intelligence</li>
                            <li>Information Technology</li>
                            <li>Yoga</li>
                            <li>Business Administration</li>
                        </ul>
                        <p className="note">NOTE : Subject + Skill subject that cannot be taken together as per the CBSE Board new policy .</p>

                        <ul className="listNone">
                            <li>Information Practice and Information Technology</li>
                            <li>Business Studies and Business Administration</li>
                        </ul>

                        <h6>Registration of Admission: Grade XI (2022-23)</h6>
                        <p>The detailed admission circular for the admission process will be sent to the selected students on the
                            registered mail id.</p>
                        <p><b>For any queries please send us a mail at :</b> ‘admissions@indiranationalschool.ac.in’</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default AdmissionProcessXI;