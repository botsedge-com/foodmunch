const Paymentsection = () => {
    return <>
    <div className="delivery-payment-section mt-4 p-3 mt-3" id="deliverypaymentsection">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 order-1 order-md-2">
            <div className="text-center">
            <img className="delivery-image " src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/delivery-payment-section-img.png"/>
            </div>
          </div>
          <div className="col-12 col-md-7 order-2 order-md-1">
            <h1> Delivery and Payment </h1>
            <p> Enjoy hassle-free payment with the plenitude of payment options available for yor. Get live tracking and locate your food on a live map. It's quite a sight to see your food arrive to your door. Plus, you get a 5% discount on every order every tiem you pay online. 
            </p>
            <button className="btn btn-warning"> Order Now </button>
            <div className="mt-3">
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/visa-card-img.png"
                className="payment-card-img"
              />
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/master-card-img.png"
                className="payment-card-img"
              />
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/paypal-card-img.png"
                className="payment-card-img"
              />
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/american-express-img.png"
                className="payment-card-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
}

export default Paymentsection 