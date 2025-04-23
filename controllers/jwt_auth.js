import jwt from 'jsonwebtoken';

const authToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // "Bearer <token>"

    if (!token) return res.status(404).render('error/404.ejs', { error: 'User is not authorised' });

    jwt.verify(token, process.env.JWT_Private_Key, (err, user) => {
        if (err) return res.status(404).render('error/404.ejs', { error: 'Invalid token' });
        req.user = user; 
        next();
    });
}

export { authToken };