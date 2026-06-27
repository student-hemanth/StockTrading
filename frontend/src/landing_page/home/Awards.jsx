import React from 'react'

function Awards() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src="largestBroker.svg"></img>
                </div>
                <div className='col-6 p-5 mt-3'>
                    <h1 className='fs-2'>Largest stock broker in India</h1>
                    <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all volumes in india
                        daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Futures and Options</p>
                                </li>
                                <li>
                                    <p>Commodity derivatves</p>
                                </li>
                                <li>
                                    <p>Curreny derivates</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Stocks & IPOs</p>
                                </li>
                                <li>
                                    <p>Mutual Funds</p>
                                </li>
                                <li>
                                    <p>Government securities</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src='pressLogos.png' style={{ width: "80%", marginTop: "20px" }}></img>
                </div>
            </div>
        </div>

    )
}

export default Awards;