import {ModelRouter} from '../common/model-router'
import * as restify from 'restify'
import { Product } from './products.model';


class ProductRouter extends ModelRouter<Product> {
  constructor(){
    super(Product)    
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

export const productRouter = new ProductRouter()
