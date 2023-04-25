import React, { Fragment } from "react";
import BannerImage from '../../assets/images/admissionbanner3.jpg'
import { useEffect } from "react";
const Fees = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <Fragment>
            <div className="col position_relative somi">
                <img src={BannerImage} className='img_res'  alt="Indira National School" />
            </div>
            <div className="">
                <div className="container custom_spacing text-center">
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
                                    <td>Annual School Fees</td>
                                    <td>Rs. 75,000.00</td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td>PTA Subscription</td>
                                    <td>Rs. 50.00</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><b>Total </b></td>
                                    <td><b>Rs. 1,20,400.00</b></td>
                                    <td></td>
                                </tr>

                            </tbody>
                        </table>
                        <p><b>Online Payment can be done through the School Portal</b></p>
                        <p><b>OR</b></p>
                        <p><b>Demand Draft in favour of : “ INDIRA NATIONAL SCHOOL”</b></p><br />
                        {/* <p><b>Kindly note that the parents who are willing to pay Annual School Fees of Rs. 75,000/- at the time
of confirmation of the admission, will be eligible for 5% discount on the Annual School Fees</b></p>
                        <p><b>(Discount amount : Rs.3,750/-)</b></p> */}
                    </div>
                </div>
            </div>
        </Fragment >
    )
}
export default Fees