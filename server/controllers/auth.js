export const currentUser = async (req, res) => {
    //console.log('Current User Returning from req.currentUser');
    res.json(req.currentUser);
};

export const privateRoute = async (req, res) => {
    //console.log('REQ HEADERS TOKEN IN  PRIVATE ROUTE', req.headers.token);
    if (req.currentUser) {
        res.json({
            ok: true,
        });
    } else {
        res.json({
            ok: false,
        });
    }
};

export const privateProductRoute = async (req, res) => {
    //console.log('REQ HEADERS TOKEN IN  PRIVATE ROUTE', req.headers.token);
    if (req.currentProduct) {
        res.json({
            ok: true,
        });
    } else {
        res.json({
            ok: false,
        });
    }
};