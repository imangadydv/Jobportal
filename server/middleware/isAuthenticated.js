import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    // Check if the token exists in cookies
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        message: "User not authorized!",
        success: false,
      });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (!decoded) {
      return res.status(401).json({
        message: "Invalid token!",
        success: false,
      });
    }

    // Attach user information to the request object
    req.id = decoded.userId;
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        message: "Token expired, please login again.",
        success: false,
      });
    } else if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        message: "Invalid token, please login again.",
        success: false,
      });
    } else {
      // Handle other errors
      console.error("Authentication Error:", error);
      return res.status(500).json({
        message: "Internal server error.",
        success: false,
      });
    }
  }
};

export default isAuthenticated;
