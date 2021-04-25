import admin from '../firebase';
import User from '../models/user';
import Product from '../models/product';

export const findOrCreateUser = async (req, res, next) => {
    try {
        const firebaseUser = await admin.auth().verifyIdToken(req.headers.token);
        //console.log('Firebase User in Current User Middleware', firebaseUser);
        const user = await User.findOne({ email: firebaseUser.email })
        if (user) {
            console.log('FOUND USER =====>', user);
            req.currentUser = user;
            next();
        } else {
            let newUser = await new User ({
                email: firebaseUser.email,
                name: firebaseUser.name
                    ? firebaseUser.name
                    : firebaseUser.email.split('@')[0],
            }).save();
            console.log('NEW USER =====>', newUser);
            req.currentUser = newUser;
            next();
        }
    } catch (err) {
        console.log(err)
        res.status(401).json({
            err: 'Invalid or expired token'
        });
    }
};

export const findOrCreateProduct = async (req, res, next) => {
    try {
        const firebaseProduct = await admin.auth().verifyIdToken(req.headers.token);
        //console.log('Firebase Product in Current Product Middleware', firebaseProduct);
        const product = await Product.findOne({ productName: firebaseProduct.productName })
        if (product) {
            console.log('FOUND PRODUCT =====>', product);
            req.currentProduct = product;
            next();
        } else {
            let newProduct = await new Product ({
                productName: firebaseProduct.productName,
                category: firebaseProduct.category,
                productPrice: firebaseProduct.productPrice,
                countInStock: firebaseProduct.countInStock,
                description: firebaseProduct.description,
                notes: firebaseProduct.notes,
            }).save();
            console.log('NEW PRODUCT =====>', newProduct);
            req.currentProduct = newProduct;
            next();
        }
    } catch (err) {
        console.log(err)
        res.status(401).json({
            err: 'Invalid or expired token'
        });
    }
};