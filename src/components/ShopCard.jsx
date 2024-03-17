const ShopCard = (props) => {
  return (
    <div className="col mb-5">
      <div className="card h-100 shop-card">
        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>
        <img className="card-img-top" src={props.data.img} alt="..." />
        <div className="card-body p-4">
          <div className="text-center">
          <h5 className="fw-bolder">{props.data.title}</h5>
            <p className="fw-bolder">{props.data.type}</p>
          
            <div className="d-flex justify-content-center small mb-2">
              <div className="Rating">{props.data.rating}</div>
            </div>
            <span className="text-muted text-decoration-line-through">$20.00</span>
            {props.data.price}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {props.isInCart ? (
              <button className="btn btn-outline-dark mt-auto" onClick={() => props.removeFromCart(props.data)}>Remove from cart</button>
            ) : (
              <button className="btn btn-outline-dark mt-auto" onClick={() => props.addToCart(props.data)}>Add to cart</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
