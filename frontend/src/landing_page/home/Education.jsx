import React from 'react'

function Education() {
    return (
        <div className="container my-5">
            <div className="row align-items-center">

                <div className="col-lg-6 col-md-12 mb-4">
                    <img
                        src="education.svg"
                        alt="Education"
                        className="img-fluid"
                    />
                </div>

                <div className="col-lg-6 col-md-12">
                    <h1 className="mb-3">
                        Free and Open Market Education
                    </h1>

                    <p>
                        Varsity, the largest online stock market education book
                        in the world, covering everything from the basics to
                        advanced trading.
                    </p>

                    <a
                        href="#"
                        style={{ textDecoration: "none" }}
                        className="d-block mb-3"
                    >
                        Varsity
                    </a>

                    <p>
                        TradingQ&A, the most active trading and investment
                        community in India for all your market-related queries.
                    </p>

                    <a
                        href="#"
                        style={{ textDecoration: "none" }}
                    >
                        TradingQ&A
                    </a>
                </div>

            </div>
        </div>
    );
}

export default Education;