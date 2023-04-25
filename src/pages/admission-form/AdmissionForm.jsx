import React, { Fragment } from "react";
import Icon2Image from '../../assets/images/icon2.png'
import Icon3Image from '../../assets/images/icon3.png'
import Icon4Image from '../../assets/images/icon4.png'
import Icon5Image from '../../assets/images/icon5.png'
import BannerImage from '../../assets/images/admissionbanner.jpg'
import { useEffect } from "react";
const AdmissionForm = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <Fragment>
            <div className="col position_relative somi">
                <img src={BannerImage} className='img_res' alt="Indira National School" />
            </div>
            <div className="">
                <div className="container custom_spacing text-center" style={{ borderBottom: "1px solid #cacaca" }}>
                    <h3 className="subheadingM">Admissions Form</h3>
                    <p><b>Admission Form Open Details</b></p>
                    <p>Admission form registration fees of <b>Rs. 500/- (mandatory)</b> to be paid online only</p>

                    {/*add new table*/}
                    <div className="table-responsive">
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
                            </div>

                </div>
            

            <div className="">
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
                            <h5><img src={Icon2Image} className="small_icon_size" alt="Indira National School"/>Step 1: Admission form Open</h5>
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
                            <h5><img src={Icon3Image} className="small_icon_size" alt="Indira National School" />Step 2: Uploading of Documents</h5>
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
                            <h5><img src={Icon4Image} className="small_icon_size" alt="Indira National School" />Step 3: School Visit for Document Verification, Payment of fees and Admission Confirmation</h5>
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
                            <h5><img src={Icon5Image} className="small_icon_size" alt="Indira National School" />Step 4: Payment of Fees and Admission Confirmation</h5>
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
of the admission.</h5><br/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </Fragment>
    )
}
export default AdmissionForm