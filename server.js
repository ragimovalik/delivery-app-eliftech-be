const fastify = require('fastify')({ logger: true });
const mongoose = require('mongoose');
require('dotenv').config();

fastify.register(require('@fastify/cors'));

const { PORT = 3040, DB_HOST } = process.env;

fastify.register(require('./routes/shopsAndGoods'));
fastify.register(require('./routes/cart'));

const start = async () => {
  try {
    await mongoose.connect(DB_HOST, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    fastify.log.info('Mongoose connected');

    await fastify.listen({ port: PORT });
  } catch (err) {
    fastify.log.error(err.message);
    process.exit(1);
  }
};

start();
