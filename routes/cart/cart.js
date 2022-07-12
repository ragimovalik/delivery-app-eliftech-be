const { addGoods } = require('../../controllers/cart');

// Item schema
const item = {
  type: 'object',
  properties: {
    img: { type: 'string' },
    description: { type: 'string' },
    title: { type: 'string' },
    price: { type: 'string' },
    shopname: { type: 'string' },
    quantity: { type: 'number' },
  },
};

// Buyer schema
const buyer = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    email: { type: 'string' },
    phone: { type: 'string' },
    address: { type: 'string' },
  },
  required: ['name', 'email', 'phone', 'address'],
};

// Options for cart adding
const addGoodsOpt = {
  schema: {
    body: {
      type: 'object',
      properties: {
        buyer: {},
        goods: { type: 'array', items: item },
      },
    },
  },
  response: {
    201: {
      type: 'object',
      properties: {
        status: { type: 'string' },
        code: { type: 'number' },
        data: item,
        message: { type: 'string' },
      },
    },
  },
  handler: addGoods,
};

// Routes
async function routes(fastify, opts, done) {
  fastify.post('/cart-set', addGoodsOpt);

  done();
}

module.exports = routes;
