import React from 'react'

export default function CartColmuns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row">
                
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">product</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Name of product</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">price</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">quantity</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Remove</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Total</p>
                </div>

            </div>
        </div>
    )
}
