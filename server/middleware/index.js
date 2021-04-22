import admin from '../firebase';
import User from '../models/user';

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