import React from 'react'

function Stats() {
    return (
        <div className="container p-3">
            <div className="row align-items-center ">
                <div className="col-6  p-5">
                    <h1 className='fs-2' >Trust with confidence</h1>
                    <h3 className='fs-4'>Customer-first always</h3>
                    <p className='text-muted'>That's why 1.3+ crore customers trust Zerodha
                        with ₹3.5+ lakh crore worth of equity investments</p>

                    <h3 className='fs-4'>No spam or gimmicks</h3>
                    <p className='text-muted'>No gimmicks,spam,"gamification",or annoying push notifications,high quality apps that you use at your pace,the way you like</p>

                    <h3 className='fs-4'>The Zerodha universe</h3>
                    <p className='text-muted'>That's why 1.3+ crore customers trust Zerodha
                        with ₹3.5+ lakh crore worth of equity investments</p>
                    <h3 className='fs-4'>Do better with money</h3>
                    <p className='text-muted'>That's why 1.3+ crore customers trust Zerodha
                        with ₹3.5+ lakh crore worth of equity investments</p>
                </div>
                <div className="col-6 text-end">
                    <img src="ecosystem.png" alt="Ecosystem" style={{ width: "90%" }} />
                    <div className='text-center'>
                        <a href='' className='mx-5' style={{ textDecoration: "none" }}>Explore our product</a>
                        <a href='' style={{ textDecoration: "none" }}>Try Kite demo</a>
                    </div>
                </div>

            </div>

        </div>


    )
}

export default Stats;