import { Link } from "react-router-dom"

const CardShopping = ({ image, title, price, teacher }) => {
  return (
    <div className="card mb-3" style={{ width: '100%' }}>
      <div className="row g-0">
        <div className="col-md-6">
          <img src={image} alt="..."  style={{width: '100%', height: '100%'}} />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">
              {title}
            </h5>

            <p>
              Profesor: <Link to="/teacher-profile">{teacher}</Link>
            </p>
            
            <p className="card-text d-flex justify-content-between">

              <div style={{color: 'red', cursor: 'pointer'}}>
                <span className="icon-trash-regular"></span>
                <span className="mx-2">Eliminar</span>
              </div>

              <h6 className="text-muted">
                {`$${price} USD`}
              </h6>

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardShopping
