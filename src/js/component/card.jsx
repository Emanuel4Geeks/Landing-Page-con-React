import React from "react";

const Card = () => {
    return (
        <div className="col">
            <div className="card">
                <img src="https://via.placeholder.com/500x325" className="card-img-top rounded-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="card-footer text-muted text-center">
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>)
}

export default Card;