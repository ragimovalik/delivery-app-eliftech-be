const Cart = require('../../models/cart');

async function addGoods(req, reply) {
  try {
    console.log(req.body);

    const newCart = { ...req.body };

    const result = await Cart.create(newCart);

    reply.code(201).send({
      status: 'success',
      code: 201,
      data: result,
      message: 'Cart added',
    });
  } catch (err) {
    throw new Error(err.message);
  }
}

module.exports = addGoods;
