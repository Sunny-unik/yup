const yup = require("yup");

function productValidation() {
  return async (req, res, next) => {
    try {
      const isUpdate = req.method === "PUT";
      const schema = yup.object().shape({
        id: yup.string().concat(isUpdate ? yup.string().required() : null),
        foodname: yup.string().min(4).max(37).required(),
        category: yup.string().min(3).max(37).required(),
        info: yup.string().min(4).max(50).required(),
        price: yup.number().required(),
      });
      await schema.validate(req.body, { abortEarly: false });
      next();
    } catch (err) {
      res.status(400).json(err);
    }
  };
}

module.exports = productValidation;
