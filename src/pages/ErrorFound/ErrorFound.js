import React from 'react';
import { Link } from 'react-router-dom';

import error from '../../images/error/error.jpg'
const ErrorFound = () => {
    return (
        <div>
            <div>
                <img src={error} alt="" />
            </div>
            <Link to="/home">
                <button className="btn btn-warning px-3 py-2 mb-5">Back Home</button>
            </Link>
        </div>
    );
};

export default ErrorFound;