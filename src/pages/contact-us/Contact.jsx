import React, { Fragment } from "react";
const Contact = () => {
    return (
        <Fragment>
            <div className="">
                <div className="container custom_spacing">
                    <h3 className="text-center subheadingM textPinkColor">Contact Us</h3>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="map-responsive">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17090.877717090894!2d73.74677980059982!3d18.60769872432542!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x362bf250d12307a7!2sIndira%20National%20School!5e0!3m2!1sen!2sin!4v1649916874233!5m2!1sen!2sin" width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container custom_spacing custom_spacing_top_zero">
                    <div className="row">
                        <div className="col-md-4">
                            <p><b>Address</b></p>

                            <p>
                                {/* S.No. 111/ 1 / 2, Old Mumbai Rd, Tathawade, Pune, Maharashtra 411033 */}
                                S.No. 111/1/2, Opp. Indira Institute, Off New Pune-Mumbai Highway, Wakad, Pune, Maharashtra 411057
                            </p>

                            {/*} <p>
                                S.No. 111/ 1 / 2, Opp. Indira Institute, Off<br />
                                New Pune- Mumbai Highway,<br />
                                Wakad, Pune- 411057.
    </p>  */}
                            <p><b>Phone Number</b></p>
                            <p>
                                020-66731707<br />
                                020-66731626<br />
                                +91 90758 97049<br />
                                (7 am to 5 pm)
                            </p>

                            <p><b>Email</b></p>
                            <p>
                                info@indiranationalschool.ac.in
                            </p>
                            <p><b>Website</b></p>
                            <p>
                                http://indiranationalschool.ac.in/
                            </p>
                        </div>
                        <div className="col-md-8">
                            <p><b>Request Form</b></p>
                            <form>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="email" className="form-control" />
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Address</label>
                                            <input type="email" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="email" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea className="form-control"></textarea>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" />
                                    <label className="form-check-label" for="exampleCheck1">I have read and agree to the Terms and Conditions.</label>
                                </div>
                                <button type="submit" className="btn btn-primary button_filled">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Contact;