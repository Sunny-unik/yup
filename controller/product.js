const Product = require("../models/productSchema");

exports.getProducts = async (req, res) => {
  await Product.find()
    .select(
      req.body.query
        ? req.body.query
        : "_id foodname category info price created"
    )
    .then((food) => res.json({ total: food.length, food: food }))
    .catch((err) => console.log(err));
};

exports.createProduct = async (req, res) => {
  const product = await new Product(req.body);
  product
    .save()
    .then((result) => {
      res.status(200).json({ product: result });
    })
    .catch((err) => console.log(err));
};

exports.deleteProduct = async (req, res) => {
  if (!req.body.id) {
    res.status(422).send("Bad data provided");
    return false;
  }
  Product.deleteOne({ _id: req.body.id }, (err, result) => {
    if (err) throw err;
    res.status(200).send("Product is deleted.");
  });
};

exports.updateProduct = async (req, res) => {
  try {
    await Product.updateOne(
      { _id: req.body.id },
      {
        $set: {
          foodname: req.body.foodname,
          category: req.body.category,
          info: req.body.info,
          price: req.body.price,
        },
      }
    );
    res.status(200).send("Product Updated Successfully!");
  } catch (error) {
    res.send(error);
  }
};
