const { getAll, addOne } = require('../../controllers/shopsAndGoods');

const item = {
  type: 'object',
  properties: {
    img: { type: 'string' },
    description: { type: 'string' },
    title: { type: 'string' },
    price: { type: 'string' },
    shopname: { type: 'string' },
  },
};

// Options for add one item
const addOneOpts = {
  schema: {
    body: {
      type: 'object',
      properties: {
        img: { type: 'string' },
        description: { type: 'string', minLength: 2, maxLength: 25 },
        title: { type: 'string', minLength: 2, maxLength: 20 },
        price: { type: 'string', minimum: 0.01 },
        shopname: { type: 'string' },
      },
    },
    required: ['img', 'description', 'title', 'price', 'shopname'],
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
  handler: addOne,
};

// Options for get all goods
const getAllOpts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          status: { type: 'string' },
          code: { type: 'number' },
          dataLenth: { type: 'number' },
          data: {
            type: 'array',
            items: item,
          },
          message: { type: 'string' },
        },
      },
    },
  },
  handler: getAll,
};

// Routes
async function routes(fastify, opts, done) {
  fastify.post('/add-item', addOneOpts);
  fastify.get('/', getAllOpts);

  done();
}

module.exports = routes;
