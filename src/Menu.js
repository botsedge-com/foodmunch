
const Items = [
    {
        name: "Non-Veg Starters",
        url: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-ginger-fried-img.png"

    },
    {
        name: "Veg Starters",
        url: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-veg-starters-img.png"

    },
    {
        name: "Soups",
        url: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-soup-img.png"

    },
    {
        name: "Fish & Sea food",
        url: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-grilled-seafood-img.png"

    },
    {
        name: "Main Course",
        url: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-hyderabadi-biryani-img.png"

    },
    {
        name: "Noodles",
        url: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-mushroom-noodles-img.png"

    },
    {
        name: "Salads",
        url: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-gluten-img.png"

    },
    {
        name: "Desserts",
        url: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-coffee-bourbon-img.png"

    },
    
]


const Item = ({name, url}) =>{
    return <>
    <div class="col-12 col-md-6 col-lg-3">
            <div class="shadow menu-item-card p-3 mb-3">
              <img
                class="menu-item-image w-100"
                src={url}
              />
              <h1 class="menu-item-heading mt-3">{name}</h1>
              <a href="">
                View All
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  /></svg>
                </a>
            </div>
          </div></>
}



const Menu = () =>{
    return <>
    <div class="menu-section mt-4" id="menusecton">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1>Explore Menu</h1>
          </div>
            {Items.map(item => <Item name={item.name} url={item.url}/>)}
        </div>
      </div>
    </div></>
}

export default Menu;