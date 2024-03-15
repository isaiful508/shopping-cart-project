

const SingleProduct = ({product}) => {
    console.log(product);
    return (
        <div>
            
          <div className="card">
            <img className='card-img' src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" alt="" />
            <h1>Tesr Test</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, quisquam vero. Eaque quae magnam illum.
            </p>
            <div className="card-footer">
              <h1>520 $</h1>
              <button className='add-btn'>Add To Cart</button>
            </div>
          </div>
        </div>
    );
};

export default SingleProduct;