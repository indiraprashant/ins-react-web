import React, { Fragment } from "react";
import BannerImage from '../../assets/images/committee/transport-committee.jpg'
const TransportCommittee = () => {
    return (
        <Fragment>
            <div className="col position_relative somi">
                <img src={BannerImage} className='img_res' />
            </div>
            <div className="">
                <div className="container custom_spacing">
                    <h3 className="text-center subheadingM mgBtmZero textPinkColor titleWithOutBanner">Transport Committee</h3>
                </div>
                <div className="container custom_spacing custom_spacing_top_zero">
                    <div className="row">
                        <div className="col-md-12  backgroundColorWhite">
                        <h6 className="text-center tableTitle">TRANSPORT COMMITTEE MEMBERS &nbsp;(2019-20)</h6>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr className="backgroundColorLightPink">
                                            <td><span>Sr. No</span></td>
                                            <td><span>Name</span></td>
                                        </tr>
                                        <tr>
                                            <td>1.</td>
                                            <td><strong>Mrs.&nbsp; Vijaya Joshi&nbsp; </strong> Chairman (Executive Principal)&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td>2.</td>
                                            <td><strong>Mr. Sandeep Gaekwad  </strong>Management Representative</td>
                                        </tr>
                                        <tr>
                                            <td>3.</td>
                                            <td><strong>Mrs. Vrushali Deshmukh &nbsp;</strong>Member (Vice Principal Admin  INS)</td>
                                        </tr>
                                        <tr>
                                            <td>4.</td>
                                            <td><strong>Mr. Amol Zarkar </strong> Member (Admin Officer  INS)</td>
                                        </tr>
                                        <tr>
                                            <td>5.</td>
                                            <td><strong>Mr. Amit Yerunkar &nbsp;</strong>Member (Admin Executive  INS)</td>
                                        </tr>
                                        <tr>
                                            <td>6.</td>
                                            <td><strong>Mrs. Vinita Shrivastava </strong>&nbsp;Parent Representative&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td>7.</td>
                                            <td><strong>Mrs. Vijaya Waidande  </strong>Parent Representative&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td>8.</td>
                                            <td>Supervisor&nbsp; Education&nbsp; Department,PCMC</td>
                                        </tr>
                                        <tr>
                                            <td>9.</td>
                                            <td>Sr. Police Inspector Hinjewadi</td>
                                        </tr>
                                        <tr>
                                            <td>10.</td>
                                            <td>P.I. Traffic Department Hinjewadi</td>
                                        </tr>
                                        <tr>
                                            <td>11.&nbsp;</td>
                                            <td>RTO Inspector Hinjewadi</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;12.</td>
                                            <td><strong>Mr. Dhiraj Katarki  </strong>Transporter</td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;13.</td>
                                            <td><strong>Mr.&nbsp;Ganesh Bendre&nbsp;</strong> Transporter</td>
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
export default TransportCommittee;