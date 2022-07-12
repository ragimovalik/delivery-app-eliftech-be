const ShopAndGoods = require('../../models/goods');

async function addOne(req, reply) {
  console.log(req.body);

  try {
    const newItem = { ...req.body };

    const result = await ShopAndGoods.create(newItem);

    reply.code(201).send({
      status: 'success',
      code: 201,
      data: result,
      message: 'Item added',
    });
  } catch (err) {
    throw new Error(err.message);
  }
}

module.exports = addOne;
