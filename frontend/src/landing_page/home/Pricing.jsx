import React from 'react'

function Pricing() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <h2 className='mb-3 ms-4 text-nowrap'>Unbeatable pricing</h2>
                    <p className='ms-4'>We pioneered the concept of discount broking and price
                        transparency in india.flat fees and no hidden charges,</p>
                    <a className="ms-4" href=' ' style={{ textDecoration: "none" }}>see Pricing</a>
                </div>
                <div className='col-2'></div>
                <div className='col-6 p-5'>
                    <div className='row text-center '>
                        <div className='col border'>
                            <h1><i className="fa-solid fa-indian-rupee-sign"></i>0</h1>
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className='col border'>
                            <h1><i className="fa-solid fa-indian-rupee-sign"></i>20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Pricing;