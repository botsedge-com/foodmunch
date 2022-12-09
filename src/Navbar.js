

const Navbar = () => {

    return <>

<nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#"
          ><img
            class="navbar-image-logo"
            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-img.png"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto">
            <a class="nav-link active" href="#wcusection"
              >Why Choose Us <span class="sr-only">(current)</span></a
            >
            <a class="nav-link" href="#menusecton">Explore Menu </a>
            <a class="nav-link" href="#deliverypaymentsection">Delivery & Payment </a>
            <a class="nav-link" href="#followsection">Follow Us </a>
          </div>
        </div>
      </div>
    </nav>
    </>
}

export default Navbar;