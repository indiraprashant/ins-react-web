import React, { Fragment } from "react";
import BannerImage from '../../assets/images/admission-banner.png'
import Icon1Image from '../../assets/images/icon1.png'
import Icon6Image from '../../assets/images/icon6.png'
import Icon2Image from '../../assets/images/icon2.png'
import Icon3Image from '../../assets/images/icon3.png'
import Icon4Image from '../../assets/images/icon4.png'
import Icon5Image from '../../assets/images/icon5.png'
import { useEffect } from "react";
const AdmissionProcess = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <Fragment>
            <div className="col position_relative somi">
                <img src={BannerImage} className='img_res' />
            </div>
            <div className="container custom_spacing text-center">
                <h3 className="subheadingM">Admission Procedure Grade I (A/Y-2023-24)</h3>
                <h5>Admission Details</h5>
                <p>Indira National School is pleased to inform that the registrations for Grade I Afternoon Shift will
                    commence soon. Submitting the Online Registration ONLY indicates your intention to seek admission. It
                    is NOT a confirmation of admission. Admissions will be done on the basis of availability of seats ONLY
                    and <span className="underline">on first cum first serve basis based on online forms registration.</span>
                </p>
            </div>
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-12 box_shadow backgroundColorLightGray">
                        <h5><img src={Icon1Image} className="small_icon_size" />School Timings</h5>
                        <p><b>Afternoon:</b> 11:20 am to 4:45 pm</p>
                        <p>2nd Saturday's will be working for students and 4th Saturday will be for PTM.</p>
                        <p> School begins for the academic year <b>2023-24 </b>tentatively on Thursday,<b> 6 th April, 2023</b> for Grade I</p>
                    </div>
                </div>
            </div>

            <div className="container text-center">
                <div className="row">
                    <div className="col-md-12 box_shadow backgroundColorLightGray">
                        <h5><img src={Icon6Image} className="small_icon_size" />Eligibility</h5>
                        <p>For Std. I admission, the child should have born between <b>1 st October, 2016 to
                            30 th September, 2017.</b></p>
                    </div>
                </div>
            </div>
            <div className="container text-center">
                <div className="row">
                    <p><b>Admission Form Open Details</b></p>
                    <p>The details regarding the admission procedure will be updated soon.</p>

                    {/*add new table*/}
                    {/* <div className="table-responsive">
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td rowspan="3">Step 1</td>
                                    <td rowspan="3">
                                        <p>
                                            <b>Admission form Open</b></p>

                                    </td>
                                    <td class="text-left"><p>The form will be disabled or on completion of seat availability whichever is earlier.</p></td>



                                </tr>
                                <tr>

                                    <td class="text-left"><p>The form will be disabled or on completion of seat availability whichever is earlier.</p></td>



                                </tr>
                                <tr>

                                    <td class="text-left"><p>The registration fees of Rs. 500/- to be paid online ONLY</p></td>



                                </tr>
                                <tr>
                                    <td>Step 2</td>
                                    <td><b>Uploading of Documents</b></td>
                                    <td>Parents will receive an Email/ SMS to upload the documents online along with the details of School Visit for Submission of documents, Payment of fees and confirmation of Admission</td>
                                </tr>

                                <tr>
                                    <td rowspan="4">Step 3</td>
                                    <td rowspan="4">
                                        <p>
                                            <b>School Visit for Document Verification, Payment of fees and Admission Confirmation</b></p>

                                    </td>
                                    <td class="text-left"><p>Either of the parent is required to visit the school along with your ward strictly adhering to the timings given on the mail (Step 2) for the following –</p></td>



                                </tr>
                                <tr>

                                    <td class="text-left"><p>a.  Document Verification (Original & Photocopies needed)</p></td>



                                </tr>
                                <tr>

                                    <td class="text-left"><p>b.  Payment of Fees (details given below)</p></td>



                                </tr>
                                <tr>

                                    <td class="text-left"><p>c.  Confirmation of Admission</p></td>



                                </tr>


                            </tbody>
                        </table>
                    </div> */}

                </div>

            </div>

            <div className="container text-center">
                <div className="row">
                    <h3 className="subheadingM">Fees & Payment</h3>
                    <p><b>Fee Structure for Grade I-X for A.Y (2023-24)</b></p>
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td>Admission Fees</td>
                                    <td>Rs. 5350</td>
                                    <td>Non Refundable</td>
                                </tr>
                                <tr>
                                    <td>Caution Deposit</td>
                                    <td>Rs. 40,000</td>
                                    <td>Refundable</td>
                                </tr>
                                <tr>
                                    <td>Annual School Fees	</td>
                                    <td>    Rs.75,000	</td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td>PTA Subscription	</td>
                                    <td>     Rs.50	</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Total Fees	</td>
                                    <td>     Rs.1,20,400	</td>
                                    <td></td>
                                </tr>


                            </tbody>
                        </table>
                        <p><b>a.Online Payment can be done through the School Portal</b></p>
                        <p><b>OR</b></p>
                        <p><b>b. Demand Draft to be submitted at the time of admission confirmation. Demand Draft of Rs. 1,20,400/- (Rupees One Lakh Twenty Thousand four Hundred Only)  in favour of “Indira National School”</b></p><br />
                        {/* <p><b>Kindly note that the parents who are willing to pay Annual School Fees of Rs. 75,000/- at the time
                            of confirmation of the admission, will be eligible for 5% discount on the Annual School Fees</b></p>
                        <p><b>(Discount amount : Rs.3,750/-)</b></p> */}
                    </div>
                </div>
            </div>
            <div className="container text-center">
                <div className="row">
                    <h3 className="subheadingM">Installment Plan</h3>

                    {/* <div className="table-responsive">
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td>Admission Fees</td>
                                    <td>Rs. 5350</td>
                                    <td>Non Refundable</td>
                                </tr>
                                <tr>
                                    <td>Caution Deposit</td>
                                    <td>Rs. 40,000</td>
                                    <td>Refundable</td>
                                </tr>
                                <tr>
                                    <td>School Fees</td>
                                    <td>Rs. 18750</td>
                                    <td>First Installment</td>
                                </tr>
                                <tr className="backgroundColorLightPink">
                                    <td colspan="3">Total fees to be paid at the time of confirmation of admission is Rs.64100/-</td>
                                </tr>
                                <tr>
                                    <td rowspan="3">School Fees (2022-23)</td>
                                    <td>Rs. 18750 + Rs. 50 (PTA)</td>
                                    <td>Second Installment (April 2022)</td>
                                </tr>
                                <tr>
                                    <td>Rs. 18750</td>
                                    <td>Third Installment (July 2022)</td>
                                </tr>
                                <tr>
                                    <td>Rs. 18750</td>
                                    <td>Fourth Installment (November 2022)</td>
                                </tr>
                                <tr>
                                    <td>Total Fees</td>
                                    <td>Rs. 1,20,400</td>
                                    <td>&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>

                    </div> */}

                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td>Total Fees</td>
                                    <td>Rs.1,20,400/-</td>
                                </tr>
                                <tr>
                                    <td>First Installment</td>
                                    <td>Rs. 75,400/-</td>
                                </tr>
                                <tr>
                                    <td>Second Installment</td>
                                    <td>Rs. 30,000/-</td>
                                </tr>

                                <tr>
                                    <td>Third Installment</td>
                                    <td>Rs. 7,500/-</td>
                                </tr>

                                <tr>
                                    <td>Fourth Installment</td>
                                    <td>Rs. 7,500/-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                </div>
            </div>

            {/* */}
            {/* <div className="">
                <div className="container custom_spacing text-center">
                    <h3 className="subheadingM">Online Admission form filling procedure</h3>
                    <p>1. Please use the latest version of MOZILLA FIREFOX as a browser to fill the form</p>
                    <p>2. The scanned softcopies of the following documents will be required at the time of admission of your ward</p>
                    <p>3. Scanned Documents to be kept ready before filling the Admission Form</p>
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <tbody>
                                <tr className="backgroundColorLightPink">
                                    <td><b>Sr No</b></td>
                                    <td><b>Document Name</b></td>
                                    <td><b>Status</b></td>
                                    <td><b>Format</b></td>
                                    <td><b>Size</b></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Student Passport size photo</td>
                                    <td>Mandatory</td>
                                    <td>jpg, png</td>
                                    <td>340 KB</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Father Passport size photo</td>
                                    <td>Mandatory</td>
                                    <td>jpg, png</td>
                                    <td>340 KB</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Mother Passport size photo</td>
                                    <td>Mandatory</td>
                                    <td>jpg, png</td>
                                    <td>340 KB</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Applicant's Birth Certificate</td>
                                    <td>Mandatory</td>
                                    <td>pdf</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Applicant's Aadhar Card</td>
                                    <td>Mandatory</td>
                                    <td>pdf</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>&nbsp;No Due Certificate (from the previous school)</td>
                                    <td>Mandatory</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Applicant Visa</td>
                                    <td>if born out of India</td>
                                    <td>pdf</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Applicant Caste Certificate</td>
                                    <td>if applicable</td>
                                    <td>pdf</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>Applicant Learning Disability Certificate</td>
                                    <td>if applicable</td>
                                    <td>pdf</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>Applicant Physical Disability Certificate</td>
                                    <td>if applicable</td>
                                    <td>pdf</td>
                                    <td>&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="container">
                    <div className="">
                        <div className="col-md-12 box_shadow backgroundColorLightGray">
                            <h5><img src={Icon2Image} className="small_icon_size" />Step 1: Admission form Open</h5>
                            <ul>
                                <li>Admission form will be enabled, the link for the admission form will be available on the website</li>
                                <li>The form will be disabled or on completion of seat availability whichever is earlier</li>
                                <li>The registration fees of Rs. 500/- to be paid online ONLY</li>
                                <li>Parents need to click on the link (Admissions Tab -&gt; Apply Online -&gt;Select Std I) and Register with the Applicant /
                                    Child's name, parent email id and mobile number.</li>
                                <li>Once registered, you will get an email and SMS with the login id and password.</li>
                                <li>Use the login credentials and carefully go through the instructions.</li>
                                <li>Submit all information correctly and upload a recent passport size photo of the applicant (in casual dress).</li>
                                <li>Once the form is filled and submitted, you will get a Payment Button for Registration Fees. You will be required to pay
                                    the form fees of Rs. 500/- online ONLY. The Registration fee payment will be through Net Banking only</li>
                                <li>Please note that the Registration will be COMPLETE ONLY AFTER THE FORM FEE PAYMENT</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="">
                        <div className="col-md-12 box_shadow backgroundColorLightGray">
                            <h5><img src={Icon3Image} className="small_icon_size" />Step 2: Uploading of Documents</h5>
                            <ul>
                                <li>Parents will receive an Email/ SMS to upload the documents online along with the details of School Visit for
                                    Submission of documents, Payment of fees and confirmation of Admission</li>
                                <li>As per the schedule above you will receive an SMS/ EMAIL for “Document Verification”.
                                    You are required to login using the same credentials and upload the documents.
                                </li>
                                <li>After uploading the documents, Print form button will be activated. The admission form gets downloaded onto
                                    your computer. Please take a colour print of the admission form</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="">
                        <div className="col-md-12 box_shadow backgroundColorLightGray">
                            <h5><img src={Icon4Image} className="small_icon_size" />Step 3: School Visit for Document Verification, Payment of fees and Admission Confirmation</h5>
                            <ul>
                                <li>Either of the parent is required to visit the school along with your ward strictly adhering to
                                    the timings given on the mail (Step 2) for the following</li>
                                <ul>
                                    <li>Document Verification (Original & Photocopies needed)</li>
                                    <li>Payment of Fees (details given below)</li>
                                    <li>Confirmation of Admission</li>
                                </ul>
                                <li>Either of the parent will visit the school as per the schedule above.</li>
                                <ul>
                                    <li>Admission Form – Mandatory</li>
                                    <li>Original & Photocopy of Birth Certificate – Mandatory</li>
                                    <li>Original & Photocopy of Aadhar card- Mandatory</li>
                                    <li>No Due Certificate (from the previous school) – Mandatory</li>
                                    <li>Bonafide Certificate– Mandatory</li>
                                    <li>Original & Photocopy of Student Passport & Visa, if child is born out of India</li>
                                    <li>Original & Photocopy of Caste Certificate of the applicant, if applicable</li>
                                    <li>Learning disability/Physical disability certificate, if applicable</li>
                                </ul>
                                <li>The Admission Form details will be verified with the documents submitted.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="">
                        <div className="col-md-12 box_shadow backgroundColorLightGray">
                            <h5><img src={Icon5Image} className="small_icon_size" />Step 4: Payment of Fees and Admission Confirmation</h5>
                            <ul>
                                <li>After the scrutiny of the form, parents will be required to pay the fee amount of Rs. 1,20,400. The school fee does
                                    not include uniform, books and transportation.</li>
                                <li>Transport are optional services
                                </li>
                                <li>Admission Fees and Caution Deposit is onetime fee. While continuing the admission for A.Y. 2023- 24 annual fees
                                    will not include admission fee and caution deposit</li>
                                <li>The payment transaction needs to be done online, after the scrutiny of form as mentioned above in the Fees and
                                    Mode of Payment.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h5 className="textPinkColor">Once the payment is done, the system generates the online receipt. Please treat it as a confirmation
                                of the admission.</h5><br />
                        </div>
                    </div>
                </div>
            </div> */}


            <div className="container custom_spacing text-center">
                <div className="row">
                    <h3 className="subheadingM underline">Documents to be submitted at the time of admission</h3>

                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <th>Document Name</th>
                                    <th>Status</th>
                                </tr>
                                <tr>
                                    <td>Student Passport size photo</td>
                                    <td>Mandatory</td>
                                </tr>
                                <tr>
                                    <td>Father’s photoghraph (passport size)</td>
                                    <td>Mandatory</td>
                                </tr>

                                <tr>
                                    <td>Mother’s photograph (passport size)</td>
                                    <td>Mandatory</td>
                                </tr>

                                <tr>
                                    <td>Applicant’s Birth Certificate</td>
                                    <td>Mandatory</td>
                                </tr>

                                <tr>
                                    <td>Applicant’s Aadhar Card</td>
                                    <td>Mandatory</td>
                                </tr>

                                <tr>
                                    <td>No Dues Certificate from previous school</td>
                                    <td>Mandatory</td>
                                </tr>

                                <tr>
                                    <td>Applicant Visa and Passport (copy)</td>
                                    <td>if born out of India</td>
                                </tr>

                                <tr>
                                    <td>Applicant Caste Certificate</td>
                                    <td>if applicable</td>
                                </tr>

                                <tr>
                                    <td>Applicant Learning Disability Certificate</td>
                                    <td>if applicable</td>
                                </tr>
                                <tr>
                                    <td>Applicant Physical Disability Certificate</td>
                                    <td>if applicable</td>
                                </tr>
                                <tr>
                                    <td>Bonafied Certificate</td>
                                    <td>Mandotry</td>
                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* */}
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-12 box_shadow backgroundColorLightGray">
                        <h4>Other Details</h4>
                        {/* <p>You will receive a detailed mail regarding the Class, Section & House of the child in the month of March.
                            We would like to inform you that for the afternoon shift, we will be having Indira Care Centre for grade I-V from 9:00 am to 12:00
                            noon. The charges for the same will be over & above the school fees. The parents may opt for the same</p> */}
                        {/* <p><b>Divisions:</b> Afternoon Batch-5 Divisions</p> */}
                        <p>Divisions:</p>
                        <p>The students are shuffled every year into different divisions of the respective shifts to encourage their social skills.</p>
                    </div>
                </div>
            </div>

            <div className="container text-center">
                <div className="row">
                    <div className="col-md-12 box_shadow backgroundColorLightGray">
                        <h4>House - For Sports & CCA activity</h4>
                        <p>The students are distributed into 4 houses for sports activities. The Sports T-shirts are to be
                            bought as per the House allocated. Once the house is allocated the student remains in the
                            same House till he/she graduates out of the school. The house names and colours are as
                            follows:</p>
                        <h6 className="text-center"><span style={{ color: "red" }}>Taj: Red</span> | <span style={{ color: "blue" }}>Charminar: Blue</span> | <span style={{ color: "green" }}>Ajanta: Green</span> | <span style={{ color: "yellow" }}>Konark: Yellow</span></h6>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default AdmissionProcess;