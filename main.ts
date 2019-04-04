import {Server} from './server/server'
import {usersRouter} from './users/users.router'
import {restaurantsRouter} from './restaurants/restaurants.router'
import {reviewsRouter} from './reviews/reviews.router'
import {mainRouter} from './main.router'
import { clientRouter } from './clients/clients.router';
import { productRouter } from './products/products.router';
import { orderRouter } from './orders/orders.router';
import { orderItemRouter } from './orders-items/orders.items.router';

const server = new Server()
server.bootstrap([
  usersRouter,
  restaurantsRouter,
  reviewsRouter,
  clientRouter,
  productRouter,
  orderRouter,
  orderItemRouter,
  mainRouter
]).then(server=>{
  console.log('Server is listening on:', server.application.address())
}).catch(error=>{
  console.log('Server failed to start')
  console.error(error)
  process.exit(1)
})
