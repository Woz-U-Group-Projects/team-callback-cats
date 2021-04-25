import React from 'react';

const Products = () => {

    return (
        <div className="container">
            <h2 className="text-center mt-3">Products</h2>
            <p className="text-center pt-8 lead">This is a protected page for a logged in user only!</p>
            <hr></hr>
            <div className="row">
                <h2 className="text-center pt-8 offset-3">Add, Update, and Delete Products Here!</h2>
            </div>
        </div>
    );
};

export default Products;