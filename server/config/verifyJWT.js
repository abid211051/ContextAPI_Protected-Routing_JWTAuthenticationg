const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization || req.query.token;
    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'Access denied. No token provided.',
        });
    }

    try {
        const newtoken = token.split(' ')[1];
        const decoded = jwt.verify(newtoken, process.env.JWTKEY);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: 'Invalid token.',
        });
    }
};

module.exports = verifyToken;