const { Schema, model } = require('mongoose');

const itemSchema = Schema({
  item: {
    shopname: {
      type: String,
      required: [true, 'Shopname is required'],
      lowercase: true,
      trim: true,
      minLength: 2,
      maxLength: 20,
    },
    img: {
      type: String,
      required: [true, 'Image link is required'],
    },
    title: {
      type: String,
      required: [true, 'Set the items title'],
      lowercase: true,
      trim: true,
      minLength: 2,
      maxLength: 25,
    },
    description: {
      type: String,
      required: [true, 'Description of the item is required'],
      lowercase: true,
      trim: true,
      minLength: 5,
      maxLength: 25,
    },
    price: {
      type: Number,
      min: 0.01,
    },
  },
  quantity: {
    type: Number,
    min: 1,
  },
});

const cartSchema = Schema(
  {
    buyer: {
      name: {
        type: String,
        required: [true, "Set Buyer's Name"],
        lowercase: true,
        trim: true,
      },
      email: {
        type: String,
        required: [true, "Set Buyer's Email"],
        lowercase: true,
        trim: true,
      },
      phone: {
        type: String,
        required: [true, "set Buyer's Phone number"],
        lowercase: true,
        trim: true,
        maxLength: 16,
      },
      address: {
        type: String,
        required: [true, "Set Buyer's Address"],
        lowercase: true,
        trim: true,
        maxLength: 30,
      },
    },
    goods: { type: [itemSchema], default: undefined },
  },
  { versionKey: false, timestamps: true },
);

const Cart = model('cart', cartSchema);

module.exports = Cart;
