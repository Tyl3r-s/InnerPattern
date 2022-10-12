import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

function Disclaimer() {
    return (
        <div>
            <Navigation />
            <div className="disclaimer-body">
                <div className="disclaimerText">
                    <p>
                        Please note that The contents of InnerPattern, such as text, graphics, images, and other material or links contained on the site are for informational purposes only. The Content is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on the InnerPattern site.
                        <br />
                        <br />
                        If you think you may have a medical emergency, call your doctor or 911 or local emergency number immediately. InnerPattern does not recommend or endorse any specific tests, physicians, products, procedures, opinions, or other information that may be mentioned on the Site. Reliance on any information provided by InnerPattern, InnerPattern employees, others appearing on the Site at the invitation of InnerPattern, or other visitors to the Site is solely at your own risk.
                        <br />
                        <br />
                        The Site and the Content are provided on an “as is” basis.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Disclaimer;