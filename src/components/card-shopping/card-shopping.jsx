const CardShopping = ({ image, title, price }) => {
  return (
    <div className="card mb-3" style={{ maxWidth: '100%' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image} alt="..."  style={{width: '100%'}} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              {title}
            </h5>

            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">
                {`$${price} USD`}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardShopping
