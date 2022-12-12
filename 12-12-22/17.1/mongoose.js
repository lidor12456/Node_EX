const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/test", {
  //   useNewUrlParser: true,
  //   useCreateIndex: true,
});

const Product = mongoose.model("Product", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  isActive: {
    type: Boolean,
  },
  details: {
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      validate(value) {
        if (value < 0) {
          throw new Error("price must be a positive number");
        }
      },
    },
    discount: {
      type: Number,
      default: 0,
    },
    images: {
      type: Array,
      required: false,

      validate(value) {
        if (value.length < 1) {
          throw new Error("2 imgs at least");
        }
      },
    },
  },
});

const product = new Product({
  name: "guitar",
  category: "guitars",
  isActive: false,
  details: {
    description: "some",
    price: 100,
    images: [1, 2],
  },
});

product
  .save()
  .then(() => {
    console.log(product);
  })
  .catch((error) => {
    console.log(error);
  });

console.log(mongoose.connection.readyState);
