const checkAuth = (req, res, next) => {
  const secret = req.headers["authorization"];

  if (!secret) {
    return res.status(401).json({
      message: "UNAUTHORIZED",
    });
  }

  const token = secret.split(" ")[1];

  if (!token === process.env.SECRET) {
    return res.status(401).json({
      message: "UNAUTHORIZED",
    });
  }

  next();
};

module.exports = checkAuth;
