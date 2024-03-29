import {ModelRouter} from '../common/model-router'
import * as restify from 'restify'
import { OrderItem } from './orders.items.model';


class OrderItemRouter extends ModelRouter<OrderItem> {
  constructor(){
    super(OrderItem)        
  }

  envelope(document){
    let resource = super.envelope(document)
    const restIdProduct = document.product._id ? document.product._id : document.product
    resource._links.product = `/products/${restIdProduct}`

    const restIdOrder = document.order._id ? document.order._id : document.order
    resource._links.order = `/orders/${restIdOrder}`
    
    return resource
  }
  
  applyRoutes(application: restify.Server){
    application.get(`${this.basePath}`, this.findAll)    
    application.get(`${this.basePath}/:id`, [this.validateId, this.findById])
    application.post(`${this.basePath}`, [this.save])
    application.put(`${this.basePath}/:id`, [this.validateId,this.replace])
    application.patch(`${this.basePath}/:id`, [this.validateId,this.update])
    application.del(`${this.basePath}/:id`, [this.validateId,this.delete])   
  }
  
}

export const orderItemRouter = new OrderItemRouter()
