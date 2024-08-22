import React from 'react';
import Enquiry from './Enquiry';

const House = (props) => {
  if (!props.houseInfo) {
    return <h3>...Loading data</h3>
  }
  return (
    <div className="container mt-5">
      <div className="card mb-4">
        <div className="card-header bg-primary text-white">
          <h3>House Details</h3>
        </div>
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-sm-6">
              <h5>{props.houseInfo.address}</h5>
            </div>
            <div className="col-sm-6 text-right">
              <h5>USD {props.houseInfo.price}</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <img className="img-fluid img-thumbnail" src={`/imgs/${props.houseInfo.photo}`} alt="house pic here" />
            </div>
            <div className="col-sm-6">
              {props.houseInfo.description}
              {localStorage.getItem('name') && <Enquiry />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default House;
