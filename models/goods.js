const { Schema, model, SchemaTypes } = require('mongoose');

const shopAndGoodsSchema = Schema(
  {
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
  { versionKey: false, timestamps: true },
);

const ShopAndGoods = model('shopAndGoods', shopAndGoodsSchema);

module.exports = ShopAndGoods;
