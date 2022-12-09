const Thankingsection = () => {
    return <>
    <div className="thanking-customers-section mt-5 pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7 d-flex flex-column justify-content-center">
            <h1 className="thanking-customers-section-heading">
              Thank you for being a valuable customer to us.
            </h1>
            <p className="thanking-customers-section-description">
              We have a surprise gift for you
            </p>
            <div className="d-md-none">
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/thanking-customers-section-img.png"
                className="thanking-customers-section-img"
              />
            </div>
            <div>
              <button type="button" className="custom-button" data-toggle="modal" data-target="#exampleModal">
                Redeem Gift
              </button>
              <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Gift Vocher </h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <img className="w-100" src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/gift-voucher-img.png"/>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
          <div className="col-12 col-md-5 d-none d-md-block">
            <img
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/thanking-customers-section-img.png"
              className="thanking-customers-section-img"
            />
          </div>
        </div>
      </div>
    </div>
    </>
}

export default Thankingsection