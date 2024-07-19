const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const authHeader = req.header('Authorization');
  if (!authHeader) {
    return res.status(401).send({ message: 'Authorization header missing' });
  }

  const token = authHeader.replace('Bearer ', '');
  if (!token) {
    return res.status(401).send({ message: 'Access token missing' });
  }

  try {
    const decoded = jwt.verify(token, 'secret'); // Use the same secret as in your auth routes
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).send({ message: 'Invalid access token' });
  }
};

module.exports = auth;
