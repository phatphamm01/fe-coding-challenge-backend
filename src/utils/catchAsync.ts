const catchAsync = (fn) => {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => {
      res.status(500).json({
        success: false,
        message: 'Server error. Please try again.',
        error: err.message
      });
    });
  };
};

export default catchAsync;
