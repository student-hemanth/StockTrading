import React from 'react';

function Footer() {
    return (
        <footer style={{ backgroundColor: "rgb(250,250,250)" }}>
            <div className='container border-top mt-5'>
                <div className='row mt-5'>
                    <div className='col-6 col-md-3 mb-4 mb-md-0'>
                        <img src='/logo.svg' alt='Logo' style={{ width: "50%" }} />
                        <p>&copy; 2010-2024, Not Zerodha Broking Ltd, All rights reserved</p>
                    </div>

                    <div className='col-6 col-md-3 mb-4 mb-md-0'>
                        <p>Company</p>
                        <a href="" style={{ "textDecoration": "none", "color": "rgb(102, 102, 102)" }}>About</a><br />
                        <a href="" style={{ "textDecoration": "none", "color": "rgb(102, 102, 102)" }}>Press</a><br />
                        <a href="" style={{ "textDecoration": "none", "color": "rgb(102, 102, 102)" }}>Careers</a><br />
                        <a href="" style={{ "textDecoration": "none", "color": "rgb(102, 102, 102)" }}>Fees</a><br />
                        <a href="" style={{ "textDecoration": "none", "color": "rgb(102, 102, 102)" }}>Social</a><br />
                        <a href="" style={{ "textDecoration": "none", "color": "rgb(102, 102, 102)" }}>Contact</a><br />
                    </div>

                    <div className='col-6 col-md-3 mb-4 mb-md-0'>
                        <p>Support</p>
                        <a href="" style={{ "textDecoration": "none", "color": "rgb(102, 102, 102)" }}>Contact</a><br />
                        <a href="" style={{ "textDecoration": "none", "color": "rgb(102, 102, 102)" }}>Support</a><br />
                        <a href="" style={{ "textDecoration": "none", "color": "rgb(102, 102, 102)" }}>Fees</a><br />
                        <a href="" style={{ "textDecoration": "none", "color": "rgb(102, 102, 102)" }}>Social</a><br />
                        <a href="" style={{ "textDecoration": "none", "color": "rgb(102, 102, 102)" }}>Contact</a><br />
                    </div>

                    <div className='col-6 col-md-3'>
                        <p>Account</p>
                        <a href="" style={{ "textDecoration": "none", "color": "rgb(102, 102, 102)" }}>Contact</a><br />
                        <a href="" style={{ "textDecoration": "none", "color": "rgb(102, 102, 102)" }}>Support</a><br />
                        <a href="" style={{ "textDecoration": "none", "color": "rgb(102, 102, 102)" }}>Fees</a><br />
                        <a href="" style={{ "textDecoration": "none", "color": "rgb(102, 102, 102)" }}>Social</a><br />
                        <a href="" style={{ "textDecoration": "none", "color": "rgb(102, 102, 102)" }}>Contact</a><br />
                    </div>
                </div>

                <div className='text-muted mt-5' style={{ fontSize: '14px' }}>
                    <p>
                        We are dedicated to simplifying investing and financial services through
                        technology-driven solutions. Our mission is to empower individuals with
                        the tools, knowledge, and confidence needed to achieve their financial goals.
                    </p>

                    <p>
                        Our mission is to remove barriers that prevent individuals from
                        participating in the financial markets. By combining innovative technology,
                        low-cost brokerage services, and comprehensive educational resources,
                        we empower investors to make informed decisions.
                    </p>

                    <p>
                        Over the years, we have transformed the way people invest by introducing
                        transparent pricing models and user-friendly platforms. Our commitment to
                        innovation has enabled investors to access powerful trading tools,
                        real-time market data, advanced charting capabilities, and detailed
                        portfolio analytics.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;