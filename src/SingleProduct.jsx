

const SingleProduct = ({product, handleBtnCart}) => {
    // console.log(handleBtnCart);
   const {title, price, description, image, id}  = product
    return (
        <div>
            
          <div className="card">
            <img className='card-img' src={image} alt="" />
            <h1>{title.slice(0, 10)}</h1>
            <p>
             {description}
            </p>
            <div className="card-footer">
              <h1>{price}</h1>
              <button onClick={(e)=> handleBtnCart(product)} className='add-btn'>Add To Cart</button>
            </div>
          </div>
        </div>
    );
};

export default SingleProduct;