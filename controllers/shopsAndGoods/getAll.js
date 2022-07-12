const ShopAndGoods = require('../../models/goods');

async function getAll(req, reply) {
  const shopAndGoods = await ShopAndGoods.find({});

  reply.code(200).send({
    status: 'success',
    code: 200,
    dataLength: shopAndGoods.length,
    data: shopAndGoods,
    message: 'Shop and Goods from DB successfully collected',
  });
}

module.exports = getAll;
