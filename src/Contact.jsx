

import { useEffect } from "react";
import { Icons } from "./Icons";

export const Contact = () => {

    useEffect(() => {
        // AOS init if you're using AOS
        if (window.AOS) {
            window.AOS.init();
        }
    }, []);

    const handleSubmit = () => {
        // optional: add any custom logic before submission
        console.log("Form submitted");
    };

    return (
        <section className="contact py-5">
            <div className="container py-3" id="contact">
                <h1 className="text.center pb-5 text-center" data-aos="fade-in" data-aos-duration="2000">Contact Me.</h1>
                <div className="row py-3">
                    <div className="col-lg-8 mx-auto">
                        <div className="row text-center">
                            <div className="col-lg-4" data-aos="fade-right" data-aos-duration="2000">
                                <div className="circle py-8">
                                    <span><Icons icon="navigate-circle-outline" />
                                    </span>
                                </div>
                                <h5>Address</h5>
                                <p>New Delhi</p>
                            </div>
                            <div className="col-lg-4" data-aos="fade-up" data-aos-duration="2000">
                                <div className="circle">
                                    <span><Icons icon="mail-outline" />
                                    </span>
                                </div>
                                <h5>Email</h5>
                                <a href="mailto:kumarprakash0196@gmail.com">kumarprakash0196@gmail.com</a>
                            </div>
                            <div className="col-lg-4" data-aos="fade-left" data-aos-duration="2000">
                                <div className="circle">
                                    <span><Icons icon="call-outline" />
                                    </span>
                                </div>
                                <h5>Phone</h5>
                                <p>9711708264</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-9 mx-auto">
                        <form 
                            action="https://api.web3forms.com/submit" 
                            method="POST" 
                            onSubmit={handleSubmit}
                        >
                            <div className="form-row">
                                <div className="col-lg-12 gap-3">
                                    <input type="hidden" name="access_key" value="080654ea-2fde-4b40-ab1e-8772b6520218" />
                                    <input type="text" name="name" className="form-control mb-3" placeholder="Name...." required />
                                    <input type="email" name="email" className="form-control mb-3" placeholder="Email..." required />
                                    <input type="hidden" name="redirect" value="https://prakash0196.github.io/Thank-you/" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-12">
                                    <textarea name="message" className="form-control" style={{ height: "200px" }} placeholder="Message....." required></textarea>
                                </div>
                            </div>
                            <button type="submit" className="btn3 my-4"> Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
